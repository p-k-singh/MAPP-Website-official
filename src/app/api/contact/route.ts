import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Lead from '@/models/Lead';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    
    // Create lead in database
    const lead = await Lead.create(data);
    
    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (error: any) {
    console.error("Lead creation error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" }, 
      { status: 400 }
    );
  }
}
