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
    </>
  );
}
