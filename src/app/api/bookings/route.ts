import { NextRequest, NextResponse } from "next/server";

// =============================================================================
// Booking API - In-Memory Store
// 
// PRODUCTION: Replace with a proper database (PostgreSQL, MongoDB, etc.)
// This in-memory store is for development/demo purposes only.
// =============================================================================

interface Booking {
    id: string;
    packageId: string;
    packageName: string;
    packagePrice: number;
    tokenAmount: number;
    serviceIds: string[];
    name: string;
    email: string;
    phone: string;
    travelers: string;
    travelDate: string;
    specialRequests: string;
    source: string;
    paymentStatus: "pending" | "token_paid" | "full_paid" | "failed";
    status: "new" | "confirmed" | "in_progress" | "completed" | "cancelled";
    createdAt: string;
    updatedAt: string;
}

const bookings: Booking[] = [];

// =============================================================================
// Input Validation & Sanitization
// =============================================================================

function sanitizeInput(input: string): string {
    if (typeof input !== "string") return "";
    return input
        .replace(/[<>]/g, "") // Strip basic HTML tags
        .replace(/javascript:/gi, "") // Prevent JS injection
        .replace(/on\w+=/gi, "") // Remove event handlers
        .trim()
        .slice(0, 500); // Limit length
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
    // Allow +91, spaces, dashes, digits (min 10 digits)
    const phoneRegex = /^[\+]?[0-9\s\-()]{10,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
}

// =============================================================================
// POST /api/bookings - Create a new booking
// =============================================================================

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Extract and sanitize inputs
        const name = sanitizeInput(body.name);
        const email = sanitizeInput(body.email);
        const phone = sanitizeInput(body.phone);
        const packageId = sanitizeInput(body.packageId);
        const packageName = sanitizeInput(body.packageName);
        const packagePrice = Number(body.packagePrice) || 0;
        const travelers = sanitizeInput(body.travelers || "1");
        const travelDate = sanitizeInput(body.travelDate || "");
        const specialRequests = sanitizeInput(body.specialRequests || "");
        const serviceIds = Array.isArray(body.serviceIds)
            ? body.serviceIds.map((s: string) => sanitizeInput(s))
            : [];
        const source = sanitizeInput(body.source || "website-booking");

        // Validate required fields
        if (!name || name.length < 2) {
            return NextResponse.json({ error: "Valid name is required (min 2 characters)" }, { status: 400 });
        }
        if (!email || !isValidEmail(email)) {
            return NextResponse.json({ error: "Valid email address is required" }, { status: 400 });
        }
        if (!phone || !isValidPhone(phone)) {
            return NextResponse.json({ error: "Valid phone number is required (10-15 digits)" }, { status: 400 });
        }
        if (!packageId) {
            return NextResponse.json({ error: "Package selection is required" }, { status: 400 });
        }

        // Calculate token amount (20% of total)
        const TOKEN_PERCENTAGE = 20;
        const totalPrice = packagePrice * parseInt(travelers || "1");
        const tokenAmount = Math.ceil((totalPrice * TOKEN_PERCENTAGE) / 100);

        // Generate booking ID
        const bookingId = `MJH-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

        const booking: Booking = {
            id: bookingId,
            packageId,
            packageName,
            packagePrice,
            tokenAmount,
            serviceIds,
            name,
            email,
            phone,
            travelers,
            travelDate,
            specialRequests,
            source,
            paymentStatus: "pending",
            status: "new",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        bookings.push(booking);

        // --- DATABASE INTEGRATION POINT ---
        // await db.bookings.create({ data: booking });
        // --- END DATABASE INTEGRATION ---

        return NextResponse.json(
            {
                success: true,
                bookingId: booking.id,
                tokenAmount: booking.tokenAmount,
                totalPrice,
                message: "Booking created successfully. Please pay the token amount to confirm.",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Booking creation error:", error);
        return NextResponse.json(
            { error: "Internal server error. Please try again." },
            { status: 500 }
        );
    }
}

// =============================================================================
// GET /api/bookings - List bookings (for admin/CRM)
// =============================================================================

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    let filtered = [...bookings];
    if (status) filtered = filtered.filter((b) => b.status === status);

    const paginated = filtered.slice(offset, offset + limit);

    return NextResponse.json({
        success: true,
        data: paginated,
        total: filtered.length,
        limit,
        offset,
    });
}
