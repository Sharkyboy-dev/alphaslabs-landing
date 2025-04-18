'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Script from 'next/script';

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
    text: '“Best ROI sniper I\u2019ve used. Period.”',
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
    <>
      <Head>
        <title>AlphaSlabs – Card Sniping Intelligence</title>
        <meta name="description" content="Discover undervalued sports and Pokémon cards in real time. Powered by live scans from eBay, Mercari, COMC & MySlabs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="sports cards, pokemon cards, ebay flips, sniping tool, AlphaSlabs, COMC, Mercari, MySlabs, PSA, Beckett" />
        <meta name="author" content="AlphaSlabs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AlphaSlabs – Card Sniping Intelligence" />
        <meta name="twitter:description" content="Track undervalued cards across eBay, COMC, Mercari & more – join the Sniper Beta." />
        <meta name="twitter:image" content="https://alphaslabs-landing.vercel.app/logo.png" />
        <meta name="twitter:site" content="@AlphaSlabsHQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9VKZ76T3V8"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9VKZ76T3V8');
          `,
        }}
      />

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] p-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-xl"
        >
          <Image
            src="/logo.png"
            alt="AlphaSlabs"
            width={300}
            height={300}
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
              <Button
                onClick={handleSubmit}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700"
              >
                Enter
              </Button>
            </div>
          )}

          <div className="bg-white text-black p-4 rounded-lg shadow-lg max-w-md mx-auto mb-6">
            <p className="text-center italic text-sm">{testimonials[activeIndex].text}</p>
            <p className="text-center text-xs mt-2">{testimonials[activeIndex].author}</p>
          </div>

          <p className="text-xs text-gray-500 mb-4">
            As seen on eBay • COMC • Mercari • MySlabs
          </p>
        </motion.div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-10 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg"
            >
              🎉 You&apos;re on the list!
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
