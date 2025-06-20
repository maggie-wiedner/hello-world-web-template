// Replace the Firecrawl client-side call with a call to the local API route
export async function fetchArticleContent(url: string): Promise<string> {
  const res = await fetch('/api/firecrawl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to extract article content');
  return data.markdown || '';
}
