import { NextResponse } from 'next/server';

declare global {
  var __FUNFACT_CACHE__: Map<string, { fact: string; expires: number }> | undefined;
}

type Provider = 'openrouter' | 'openai';

function getProvider(): Provider {
  const p = process.env.FUN_FACT_PROVIDER?.toLowerCase();
  if (p === 'openai' || p === 'chatgpt' || p === 'gpt') return 'openai';
  return 'openrouter';
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.FUN_FACT_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing FUN_FACT_API_KEY env var' }, { status: 500 });
    }

    const body = await request.json();
    const {
      value,
      fromUnitName,
      fromUnitSymbol,
      categoryName,
    } = body || {};

    if (
      value === undefined ||
      !fromUnitName ||
      !categoryName
    ) {
      return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 });
    }

    const provider = getProvider();

    // Minimal, token-efficient prompts
    const systemPrompt = 'Return one super random, factual fun fact (<=22 words). Focus on the input unit itself; use vivid comparisons; no conversions or instructions.';
    const prompt = `Fun fact about ${value} ${fromUnitName} (${fromUnitSymbol ?? ''}) in ${categoryName}.`;

    // Tiny in-memory cache to reduce duplicate calls
    const cacheKey = `${categoryName}|${fromUnitName}|${fromUnitSymbol}|${value}`;
    const now = Date.now();
    if (!globalThis.__FUNFACT_CACHE__) {
      globalThis.__FUNFACT_CACHE__ = new Map<string, { fact: string; expires: number }>();
    }
    const cache = globalThis.__FUNFACT_CACHE__!;
    const cached = cache.get(cacheKey);
    if (cached && cached.expires > now) {
      return NextResponse.json({ fact: cached.fact });
    }

    let fact: string | null = null;
    if (provider === 'openrouter') {
      const base = process.env.FUN_FACT_API_BASE || 'https://openrouter.ai/api/v1';
      const res = await fetch(`${base}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: process.env.FUN_FACT_MODEL || 'openai/gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 44,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        fact = data?.choices?.[0]?.message?.content?.trim() ?? null;
      }
    } else {
      const base = process.env.FUN_FACT_API_BASE || 'https://api.openai.com/v1';
      const res = await fetch(`${base}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: process.env.FUN_FACT_MODEL || 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 44,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        fact = data?.choices?.[0]?.message?.content?.trim() ?? null;
      }
    }

    if (!fact) {
      return NextResponse.json({ error: 'Failed to generate fun fact' }, { status: 502 });
    }

    // Cache for 6 hours; cap size ~500 entries
    cache.set(cacheKey, { fact, expires: now + 6 * 60 * 60 * 1000 });
    if (cache.size > 500) {
      const firstKey = cache.keys().next().value;
      if (firstKey) cache.delete(firstKey);
    }

    return NextResponse.json({ fact });
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}


