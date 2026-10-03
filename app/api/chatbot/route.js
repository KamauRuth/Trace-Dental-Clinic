import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const apiKey = process.env.MISTRAL_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { reply: 'The assistant is not configured yet. Please contact Trace Dental Clinic directly.' },
        { status: 200 }
      );
    }

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful dental clinic assistant for Trace Dental Clinic. Keep answers short, clear, and friendly.',
          },
          { role: 'user', content: message },
        ],
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Mistral request failed: ${detail}`);
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || 'Sorry, I could not generate a reply.';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chatbot request failed:', error);
    return NextResponse.json(
      { reply: 'Sorry, the assistant is unavailable right now.' },
      { status: 500 }
    );
  }
}
