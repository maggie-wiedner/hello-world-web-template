'use client';

import React from 'react';

export default function Page3() {
  return (
    <div className="min-h-[calc(100vh-4rem)] pt-16 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Podcast</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Latest Episodes</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-2">The Future of Web Development</h3>
                <p className="text-muted-foreground mb-4">
                  In this episode, we discuss emerging trends in web development and what the future holds.
                </p>
                <button className="text-primary hover:text-primary/80">Listen Now →</button>
              </div>
              
              <div className="p-6 rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-2">Building Scalable Applications</h3>
                <p className="text-muted-foreground mb-4">
                  Learn about best practices for building applications that can scale to millions of users.
                </p>
                <button className="text-primary hover:text-primary/80">Listen Now →</button>
              </div>
              
              <div className="p-6 rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-2">Design Systems Deep Dive</h3>
                <p className="text-muted-foreground mb-4">
                  Explore how design systems can improve consistency and development speed.
                </p>
                <button className="text-primary hover:text-primary/80">Listen Now →</button>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Subscribe</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                Spotify
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                Apple Podcasts
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                Google Podcasts
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
