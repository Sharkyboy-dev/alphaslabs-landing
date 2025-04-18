'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function Home() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/submit-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })

    if (res.ok) {
      router.push('/app') // redirect to your sniper
    } else {
      alert('There was a problem. Try again.')
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#0f172a] px-4">
      <img src="/alphaslabs-logo.png" alt="AlphaSlabs" className="w-48 mb-6" />
      <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-2">
        Built for collectors. Powered by alpha.
      </h1>
      <p className="text-muted-foreground mb-6 text-center">Enter your email to access the Sniper Beta</p>
      <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-sm">
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Enter"}
        </Button>
      </form>
    </main>
  )
}
