'use client';

import React from 'react';

export default function Page1() {
  return (
    <div className="min-h-[calc(100vh-4rem)] pt-16 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              We're dedicated to creating innovative web solutions that help businesses grow 
              and thrive in the digital landscape. Our team of experts combines technical expertise 
              with creative thinking to deliver exceptional results for our clients.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Jane Doe</h3>
                <p className="text-muted-foreground">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-muted-foreground">Lead Developer</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Alex Johnson</h3>
                <p className="text-muted-foreground">UX Designer</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have questions or want to work with us? Reach out at 
              <a href="mailto:hello@example.com" className="text-primary hover:text-primary/80"> hello@example.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
