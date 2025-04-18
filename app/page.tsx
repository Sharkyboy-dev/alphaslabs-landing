"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center">
      {/* === NAVBAR === */}
      <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-white/10 backdrop-blur-md">
        <div className="text-xl font-bold tracking-wide">AlphaSlabs</div>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Dashboard</a>
          <a href="#" className="hover:text-blue-400 transition">Join Discord</a>
        </div>
      </nav>

      {/* === MAIN CONTENT === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center px-6 py-20"
      >
        <Image
          src="https://raw.githubusercontent.com/Sharkyboy-dev/AlphaSlabs/main/images/logo.png"
          alt="AlphaSlabs Logo"
          width={180}
          height={180}
          className="drop-shadow-xl mb-6 rounded-xl"
        />
        <h1 className="text-4xl font-extrabold mb-2">Built for collectors. Powered by alpha.</h1>
        <p className="text-white/80 max-w-md mb-6">Coming soon: the smartest card sniper in the game.</p>
        <Button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 text-base rounded-xl">
          Join Waitlist
        </Button>
      </motion.div>

      {/* === FOOTER === */}
      <footer className="mt-auto py-6 text-sm text-white/50">
        © 2025 AlphaSlabs — Built by Sharkyboy-dev · <a href="#" className="text-blue-400 hover:underline">Twitter</a>
      </footer>
    </main>
  );
}
