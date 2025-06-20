import React from 'react';

interface AudioPlayerProps {
  audioUrl: string;
}

export default function AudioPlayer({ audioUrl }: AudioPlayerProps) {
  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-2">Podcast Audio</h2>
      <audio controls src={audioUrl} className="w-full" />
    </div>
  );
}
