'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: '“Found a $200 Charizard for $45. This tool is 🔥”',
    author: '– @SlabHunter',
  },
  {
    text: '“Caught a PSA 10 for half the price. Unreal.”',
    author: '– @FlipMaster42',
  },
  {
    text: '“Best ROI sniper I’ve used. Period.”',
    author: '– @HobbyWhale',
  },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
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
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 p-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Image
          src="/logo.png"
          alt="AlphaSlabs"
          width={360}
          height={360}
          className="mx-auto mb-6"
          priority
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Built for collectors. Powered by alpha.
        </h1>
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          {submitted
            ? 'Thanks for joining the waitlist!'
            : 'Enter your email to access the Sniper Beta'}
        </p>
        {!submitted && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-sm mx-auto mb-6">
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
        <p className="text-xs text-gray-500 mb-2">As seen on:</p>
        <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-400 mb-8">
          <span className="hover:text-white transition">eBay</span>
          <span className="hover:text-white transition">COMC</span>
          <span className="hover:text-white transition">Mercari</span>
          <span className="hover:text-white transition">MySlabs</span>
          <span className="hover:text-white transition">PSA</span>
          <span className="hover:text-white transition">Beckett</span>
        </div>

        {/* Carousel Testimonial */}
        <div className="w-full flex justify-center mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white text-black p-4 rounded-xl shadow-md max-w-md"
            >
              <p className="text-sm">
                {testimonials[activeIndex].text}
                <br />
                <span className="text-xs text-gray-600">
                  {testimonials[activeIndex].author}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Row */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-300">
          <div>🔥 4,200 Flips Found</div>
          <div>📈 $128,500+ in ROI</div>
          <div>💬 2,900+ Beta Users</div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 modal bg-white text-black p-4 rounded-lg shadow-lg"
          >
            🎉 You&#39;re on the list!
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
