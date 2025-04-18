// app/page.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzpUNv67jdI2LEotPGfvoKrLc8ArNsldAB7bUlUMQs0us6TgFbS9JQFSeb_iz3UNQC7eQ/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ email }),
        }
      );
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 p-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <img src="/logo.png" alt="AlphaSlabs" className="mx-auto mb-6 w-40" />
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Built for collectors. Powered by alpha.
        </h1>
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          {submitted
            ? 'Thanks for joining the waitlist!'
            : 'Enter your email to access the Sniper Beta'}
        </p>
        {!submitted && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-sm mx-auto">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <Button onClick={handleSubmit} className="w-full sm:w-auto">
              Enter
            </Button>
          </div>
        )}
      </motion.div>
    </main>
  );
}
