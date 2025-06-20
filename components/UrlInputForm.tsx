import React, { useState } from 'react';

interface UrlInputFormProps {
  onSubmit: (urls: string[]) => void;
  loading: boolean;
}

export default function UrlInputForm({ onSubmit, loading }: UrlInputFormProps) {
  const [urls, setUrls] = useState(['']);

  const handleChange = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const handleAddUrl = () => {
    setUrls([...urls, '']);
  };

  const handleRemoveUrl = (index: number) => {
    if (urls.length === 1) return;
    setUrls(urls.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(urls.filter(url => url.trim() !== ''));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Enter article URLs</h2>
      {urls.map((url, i) => (
        <div key={i} className="flex items-center space-x-2 mb-2">
          <input
            type="url"
            required
            value={url}
            onChange={e => handleChange(i, e.target.value)}
            placeholder={`URL ${i + 1}`}
            className="w-full p-2 border rounded"
          />
          {urls.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveUrl(i)}
              className="text-red-500 px-2 py-1 rounded border border-red-300 hover:bg-red-100"
              aria-label="Remove URL"
            >
              &minus;
            </button>
          )}
        </div>
      ))}
      <div className="flex w-full mb-2">
        <button
          type="button"
          onClick={handleAddUrl}
          className="w-full text-green-600 px-2 py-2 rounded border border-green-300 hover:bg-green-100"
          aria-label="Add URL"
          disabled={loading}
        >
          +
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
        disabled={loading || urls.filter(url => url.trim() !== '').length === 0}
      >
        {loading ? 'Loading...' : 'Generate'}
      </button>
    </form>
  );
}
