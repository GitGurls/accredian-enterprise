import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type LeadPayload = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message?: string;
};

// Vercel's serverless runtime ships a read-only filesystem except for /tmp,
// and /tmp itself is wiped between cold starts. This is fine for a mock/demo
// API — a real deployment would swap this for a database (Postgres, etc.).
const DATA_DIR = process.env.VERCEL
  ? "/tmp/accredian-leads"
  : path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "leads.json");

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: Partial<LeadPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const { name, email, company, teamSize, message } = body;

  if (!name || !email || !company || !teamSize) {
    return NextResponse.json(
      { error: "name, email, company, and teamSize are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const lead = {
    id: crypto.randomUUID(),
    name,
    email,
    company,
    teamSize,
    message: message ?? "",
    submittedAt: new Date().toISOString(),
  };

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });

    let leads: unknown[] = [];
    try {
      const existing = await fs.readFile(DATA_FILE, "utf-8");
      leads = JSON.parse(existing);
    } catch {
      leads = [];
    }

    leads.push(lead);
    await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    // On serverless/read-only filesystems (e.g. Vercel's production runtime),
    // writing to disk can fail. We still acknowledge the lead instead of
    // failing the whole request, and log server-side for visibility.
    console.error("Failed to persist lead to disk:", err);
  }

  return NextResponse.json({ success: true, lead }, { status: 201 });
}

export async function GET() {
  try {
    const existing = await fs.readFile(DATA_FILE, "utf-8");
    const leads = JSON.parse(existing);
    return NextResponse.json({ leads });
  } catch {
    return NextResponse.json({ leads: [] });
  }
}
