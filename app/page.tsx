'use client';

import React, { useState } from 'react';
import UrlInputForm from '../components/UrlInputForm';
import RecapEditor from '../components/RecapEditor';
import { fetchArticleContent } from '../lib/services/firecrawl';
import { generatePodcastRecap } from '../lib/services/openai';

export default function HomePage() {
  const [step, setStep] = useState<'input' | 'recap' | 'audio'>('input');
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState<string[]>(['']);
  const [recap, setRecap] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [articleContents, setArticleContents] = useState<string[]>([]);

  const handleUrlSubmit = async (urls: string[]) => {
    setLoading(true);
    setError(null);
    setUrls(urls);
    console.log('Submitting URLs:', urls);
    try {
      const contents = await Promise.all(
        urls.map(async (url) => {
          try {
            let content = await fetchArticleContent(url);
            console.log(`Fetched content/markdown for ${url}:`, content.slice(0, 200));
            return content;
          } catch (e: any) {
            console.error(`Error fetching content for ${url}:`, e);
            throw new Error(`Error fetching content for ${url}: ${e?.message || e}`);
          }
        })
      );
      setArticleContents(contents);
      // Filter out empty contents before sending to OpenAI
      const nonEmptyContents = contents.filter(c => c && c.trim() !== '');
      if (nonEmptyContents.length === 0) {
        setError('No article content could be extracted.');
        setLoading(false);
        return;
      }
      console.log('All non-empty article contents:', nonEmptyContents);
      const recapText = await generatePodcastRecap(nonEmptyContents);
      console.log('Generated recap from OpenAI:', recapText);
      setRecap(recapText);
      setStep('recap');
    } catch (e: any) {
      setError(e?.message || String(e));
      console.error('Error in handleUrlSubmit:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    setStep('input');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Podcast Recap Assistant</h1>
      {error && (
        <div className="w-full max-w-xl mb-4 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}
      {step === 'input' && (
        <UrlInputForm onSubmit={handleUrlSubmit} loading={loading} />
      )}
      {step === 'recap' && (
        <div className="w-full max-w-2xl mx-auto mt-8">
          <h2 className="text-2xl font-semibold mb-4">Extracted Articles</h2>
          <div className="space-y-4">
            {urls.map((url, i) => (
              <details key={url + i} className="border rounded">
                <summary className="cursor-pointer px-4 py-2 bg-gray-100 font-mono text-sm break-all">{url}</summary>
                <div className="p-4 whitespace-pre-wrap text-sm bg-white">
                  {articleContents[i] ? articleContents[i] : <span className="text-gray-400">No content extracted.</span>}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <RecapEditor
              recap={recap}
              onChange={setRecap}
              onApprove={handleApprove}
              loading={loading}
            />
          </div>
        </div>
      )}
    </main>
  );
}
