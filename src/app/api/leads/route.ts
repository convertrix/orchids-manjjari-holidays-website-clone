import { NextRequest, NextResponse } from "next/server";

// In-memory store (replace with database/CRM integration)
const leads: Record<string, any>[] = [];

/**
 * POST /api/leads
 * Create a new lead - CRM ready endpoint
 * 
 * Body: { name, email, phone, subject?, message?, source, type }
 * 
 * CRM Integration: This endpoint is designed for direct integration with
 * CRM systems like Zoho, HubSpot, Salesforce, etc.
 * Add your CRM webhook/API call in the POST handler.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, source, type } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const lead = {
      id: `LEAD-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      name,
      email,
      phone,
      subject: subject || "",
      message: message || "",
      source: source || "website",
      type: type || "enquiry",
      status: "new",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    leads.push(lead);

    // --- CRM INTEGRATION POINT ---
    // Example: Send to Zoho CRM
    // await fetch('https://www.zohoapis.com/crm/v2/Leads', {
    //   method: 'POST',
    //   headers: { 'Authorization': `Zoho-oauthtoken ${process.env.ZOHO_TOKEN}` },
    //   body: JSON.stringify({ data: [{ Last_Name: name, Email: email, Phone: phone, Lead_Source: source }] })
    // });
    //
    // Example: Send to HubSpot
    // await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    //   method: 'POST',
    //   headers: { 'Authorization': `Bearer ${process.env.HUBSPOT_TOKEN}`, 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ properties: { firstname: name, email, phone, lead_source: source } })
    // });
    // --- END CRM INTEGRATION ---

    return NextResponse.json(
      { success: true, leadId: lead.id, message: "Lead created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/leads
 * List all leads - For CRM dashboard integration
 * 
 * Query params: ?status=new&type=enquiry&limit=50&offset=0
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const type = searchParams.get("type");
  const limit = parseInt(searchParams.get("limit") || "50");
  const offset = parseInt(searchParams.get("offset") || "0");

  let filtered = [...leads];
  if (status) filtered = filtered.filter((l) => l.status === status);
  if (type) filtered = filtered.filter((l) => l.type === type);

  const paginated = filtered.slice(offset, offset + limit);

  return NextResponse.json({
    success: true,
    data: paginated,
    total: filtered.length,
    limit,
    offset,
  });
}
