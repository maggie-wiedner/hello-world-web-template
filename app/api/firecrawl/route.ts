import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  const apiKey = process.env.NEXT_PUBLIC_FIRECRAWL_API_KEY;
  const endpoint = 'https://api.firecrawl.dev/v1/extract';
  const body = {
    urls: [url],
    prompt: 'Extract the main article content as markdown. Only return the main article text, not navigation or unrelated content.'
  };

  // Initial extract request
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await res.json();
  } catch (err) {
    const text = await res.text();
    console.error('[Firecrawl] Non-JSON response:', text);
    return NextResponse.json({ error: 'Firecrawl returned non-JSON response', details: text }, { status: 500 });
  }

  // If async, poll for completion
  if (result.id && (!result.data || Object.keys(result.data).length === 0)) {
    const pollEndpoint = `https://api.firecrawl.dev/v1/extract/${result.id}`;
    let attempts = 0;
    let pollResult = result;
    while (attempts < 30) {
      await new Promise(r => setTimeout(r, 1000));
      const pollRes = await fetch(pollEndpoint, {
        headers: { 'Authorization': `Bearer ${apiKey}` }
      });
      let pollJson;
      try {
        pollJson = await pollRes.json();
      } catch (err) {
        const text = await pollRes.text();
        console.error('[Firecrawl] Poll non-JSON response:', text);
        return NextResponse.json({ error: 'Firecrawl poll returned non-JSON response', details: text }, { status: 500 });
      }
      pollResult = pollJson;
      console.log('[Firecrawl] Polling extract:', pollResult.status, pollResult.data);
      if (pollResult.status === 'completed' && pollResult.data) break;
      if (pollResult.status === 'failed') {
        return NextResponse.json({ error: 'Firecrawl extract failed' }, { status: 500 });
      }
      attempts++;
    }
    if (!pollResult.data) {
      return NextResponse.json({ error: 'Firecrawl extract timed out' }, { status: 504 });
    }
    // Log the pollResult for debugging
    console.log('[Firecrawl] Final pollResult:', pollResult);
    // Use articleContent if present, otherwise markdown
    const dataObj = Array.isArray(pollResult.data) ? pollResult.data[0] : pollResult.data;
    return NextResponse.json({
      markdown: dataObj?.articleContent || dataObj?.markdown || '',
      raw: pollResult
    });
  }

  // If data is present immediately
  const dataObjImmediate = Array.isArray(result.data) ? result.data[0] : result.data;
  return NextResponse.json({
    markdown: dataObjImmediate?.articleContent || dataObjImmediate?.markdown || '',
    raw: result
  });
}
