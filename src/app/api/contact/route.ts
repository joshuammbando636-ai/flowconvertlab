import { MailtrapClient } from 'mailtrap';
import { NextResponse } from 'next/server';

const client = new MailtrapClient({ token: process.env.MAILTRAP_API_KEY! });

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const senderName = name || 'Website Visitor';
    
    const response = await client.send({
      from: { email: 'info@flowconvertlab.com', name: senderName },
      to: [{ email: 'info@flowconvertlab.com' }],
      subject: `New message from ${senderName}`,
      text: `From: ${email}\n\n${message}`,
      category: 'contact',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}