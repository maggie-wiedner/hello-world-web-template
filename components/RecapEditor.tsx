import React from 'react';

interface RecapEditorProps {
  recap: string;
  onChange: (value: string) => void;
  onApprove: () => void;
  loading: boolean;
}

export default function RecapEditor({ recap, onChange, onApprove, loading }: RecapEditorProps) {
  return (
    <div className="space-y-4 w-full max-w-xl mx-auto mt-8">
      <h2 className="text-xl font-semibold">Review & Edit Podcast Script</h2>
      <textarea
        className="w-full h-48 p-2 border rounded"
        value={recap}
        onChange={e => onChange(e.target.value)}
      />
      <button
        className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
        onClick={onApprove}
        disabled={loading}
      >
        {loading ? 'Generating Audio...' : 'Approve & Generate Audio'}
      </button>
    </div>
  );
}
