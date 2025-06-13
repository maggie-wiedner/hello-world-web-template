'use client';

import React from 'react';

export default function Page2() {
  return (
    <div className="min-h-[calc(100vh-4rem)] pt-16 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Newsletter</h1>
        <div className="space-y-8">
          <p className="text-muted-foreground">
            Stay up to date with our latest news, updates, and insights.
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border border-border bg-background"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
