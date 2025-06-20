// ElevenLabs API call
export async function generateAudioFromScript(script: string): Promise<string> {
  // Replace with your ElevenLabs API endpoint and key
  const apiKey = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;
  const voiceId = process.env.NEXT_PUBLIC_ELEVENLABS_VOICE_ID || 'Rachel';
  const endpoint = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'xi-api-key': apiKey,
    },
    body: JSON.stringify({
      text: script,
      model_id: 'eleven_multilingual_v2',
      voice_settings: { stability: 0.5, similarity_boost: 0.5 },
    }),
  });
  if (!res.ok) throw new Error('Failed to generate audio');
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
