import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// =============================================================================
// PhonePe Payment Callback / Webhook Handler
//
// This endpoint handles the server-to-server callback from PhonePe
// after payment is completed (success/failure).
//
// PhonePe will POST to this URL with the payment status.
// Verify the checksum before trusting the response.
// =============================================================================

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { response: encodedResponse } = body;

        if (!encodedResponse) {
            return NextResponse.json({ error: "Missing response payload" }, { status: 400 });
        }

        // Decode the base64 response
        const decodedResponse = JSON.parse(
            Buffer.from(encodedResponse, "base64").toString("utf-8")
        );

        const {
            merchantId,
            merchantTransactionId,
            transactionId,
            amount,
            code,
            data,
        } = decodedResponse;

        // =========================================================================
        // Verify Checksum (CRITICAL for security)
        // =========================================================================

        const saltKey = process.env.PHONEPE_SALT_KEY || "";
        const saltIndex = process.env.PHONEPE_SALT_INDEX || "1";

        if (saltKey) {
            // Verify the X-VERIFY header from PhonePe
            const xVerifyHeader = request.headers.get("X-VERIFY") || "";

            const expectedChecksum =
                crypto
                    .createHash("sha256")
                    .update(encodedResponse + "/pg/v1/pay" + saltKey)
                    .digest("hex") +
                "###" +
                saltIndex;

            if (xVerifyHeader !== expectedChecksum) {
                console.error("PhonePe callback: Checksum verification FAILED", {
                    merchantTransactionId,
                    received: xVerifyHeader,
                });
                return NextResponse.json(
                    { error: "Checksum verification failed" },
                    { status: 403 }
                );
            }
        }

        // =========================================================================
        // Process Payment Result
        // =========================================================================

        const paymentSuccess = code === "PAYMENT_SUCCESS";

        // Extract bookingId from merchantTransactionId (format: MJH_BOOKINGID_TIMESTAMP)
        const bookingId = merchantTransactionId?.split("_").slice(1, -1).join("_") || "";

        console.log("PhonePe Payment Callback:", {
            merchantTransactionId,
            transactionId,
            bookingId,
            amount: amount ? amount / 100 : 0, // Convert paisa to rupees
            status: paymentSuccess ? "SUCCESS" : "FAILED",
            code,
        });

        // --- DATABASE UPDATE POINT ---
        // Update booking payment status in your database:
        //
        // if (paymentSuccess) {
        //   await db.bookings.update({
        //     where: { id: bookingId },
        //     data: {
        //       paymentStatus: "token_paid",
        //       status: "confirmed",
        //       paymentTransactionId: transactionId,
        //       tokenPaidAt: new Date().toISOString(),
        //       updatedAt: new Date().toISOString(),
        //     },
        //   });
        //
        //   // Optionally send confirmation via WhatsApp / Email
        //   // await sendBookingConfirmation(bookingId);
        // } else {
        //   await db.bookings.update({
        //     where: { id: bookingId },
        //     data: {
        //       paymentStatus: "failed",
        //       paymentErrorCode: code,
        //       updatedAt: new Date().toISOString(),
        //     },
        //   });
        // }
        // --- END DATABASE UPDATE ---

        return NextResponse.json({
            success: true,
            paymentSuccess,
            bookingId,
            transactionId,
            message: paymentSuccess
                ? "Payment received successfully. Booking confirmed!"
                : "Payment failed. Please try again or contact support.",
        });
    } catch (error) {
        console.error("PhonePe callback processing error:", error);
        return NextResponse.json(
            { error: "Callback processing failed" },
            { status: 500 }
        );
    }
}

// Also handle GET for status checks
export async function GET(request: NextRequest) {
    return NextResponse.json({
        status: "Payment callback endpoint active",
        timestamp: new Date().toISOString(),
    });
}
