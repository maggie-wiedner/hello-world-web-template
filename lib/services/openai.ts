// OpenAI API call
export async function generatePodcastRecap(articles: string[]): Promise<string> {
  // Replace with your OpenAI API endpoint and key
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const endpoint = 'https://api.openai.com/v1/chat/completions';
  const prompt = `You are a podcast host. Summarize the following articles in a conversational podcast script format.\n\n${articles.map((a, i) => `Article ${i+1}:\n${a}`).join('\n\n')}`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are a podcast host.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 1200,
    }),
  });
  if (!res.ok) throw new Error('Failed to generate podcast recap');
  const data = await res.json();
  return data.choices?.[0]?.message?.content || '';
}
