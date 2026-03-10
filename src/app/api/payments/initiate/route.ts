import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// =============================================================================
// PhonePe Payment Initiation Endpoint
//
// This endpoint is structured and ready for PhonePe Business SDK integration.
// Configure the following environment variables when you have merchant credentials:
//   - PHONEPE_MERCHANT_ID
//   - PHONEPE_SALT_KEY
//   - PHONEPE_SALT_INDEX
//   - PHONEPE_ENV (PRODUCTION | UAT)
//   - NEXT_PUBLIC_BASE_URL (your site URL)
//
// SDK Docs: https://developer.phonepe.com/docs
// =============================================================================

interface PaymentInitiateRequest {
    bookingId: string;
    tokenAmount: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
}

// PhonePe Config (loaded from environment)
function getPhonePeConfig() {
    return {
        merchantId: process.env.PHONEPE_MERCHANT_ID || "",
        saltKey: process.env.PHONEPE_SALT_KEY || "",
        saltIndex: process.env.PHONEPE_SALT_INDEX || "1",
        env: process.env.PHONEPE_ENV || "UAT",
        baseUrl:
            process.env.PHONEPE_ENV === "PRODUCTION"
                ? "https://api.phonepe.com/apis/hermes"
                : "https://api-preprod.phonepe.com/apis/pg-sandbox",
        callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/payments/callback`,
        redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/book?status=`,
    };
}

// =============================================================================
// POST /api/payments/initiate - Initiate PhonePe payment
// =============================================================================

export async function POST(request: NextRequest) {
    try {
        const body: PaymentInitiateRequest = await request.json();
        const { bookingId, tokenAmount, customerName, customerEmail, customerPhone } = body;

        // Validate
        if (!bookingId || !tokenAmount || tokenAmount < 100) {
            return NextResponse.json(
                { error: "Valid booking ID and token amount (min ₹1) are required" },
                { status: 400 }
            );
        }

        const config = getPhonePeConfig();

        // Check if PhonePe credentials are configured
        if (!config.merchantId || !config.saltKey) {
            // Graceful fallback - credentials not yet configured
            return NextResponse.json(
                {
                    success: false,
                    configured: false,
                    message:
                        "Payment gateway is being set up. Please contact us on WhatsApp or call to complete your booking payment.",
                    bookingId,
                    tokenAmount,
                },
                { status: 200 }
            );
        }

        // =========================================================================
        // PhonePe Payment Payload Construction
        // =========================================================================

        const merchantTransactionId = `MJH_${bookingId}_${Date.now()}`;

        const payload = {
            merchantId: config.merchantId,
            merchantTransactionId,
            merchantUserId: `CUST_${customerPhone}`,
            amount: tokenAmount * 100, // PhonePe expects amount in paisa
            redirectUrl: `${config.redirectUrl}success&bookingId=${bookingId}`,
            redirectMode: "REDIRECT",
            callbackUrl: config.callbackUrl,
            paymentInstrument: {
                type: "PAY_PAGE",
            },
        };

        // Base64 encode the payload
        const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString("base64");

        // Generate SHA256 checksum: SHA256(base64Payload + "/pg/v1/pay" + saltKey) + "###" + saltIndex
        const checksum =
            crypto
                .createHash("sha256")
                .update(payloadBase64 + "/pg/v1/pay" + config.saltKey)
                .digest("hex") +
            "###" +
            config.saltIndex;

        // =========================================================================
        // PhonePe API Call
        // =========================================================================

        const phonePeResponse = await fetch(`${config.baseUrl}/pg/v1/pay`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                "X-VERIFY": checksum,
            },
            body: JSON.stringify({ request: payloadBase64 }),
        });

        const phonePeData = await phonePeResponse.json();

        if (phonePeData.success && phonePeData.data?.instrumentResponse?.redirectInfo?.url) {
            return NextResponse.json({
                success: true,
                paymentUrl: phonePeData.data.instrumentResponse.redirectInfo.url,
                merchantTransactionId,
                bookingId,
            });
        } else {
            console.error("PhonePe payment initiation failed:", phonePeData);
            return NextResponse.json(
                {
                    success: false,
                    message: "Payment initiation failed. Please try again or contact support.",
                    error: phonePeData.message || "Unknown error",
                },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Payment initiation error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Payment service temporarily unavailable. Please contact us to complete booking.",
            },
            { status: 500 }
        );
    }
}
