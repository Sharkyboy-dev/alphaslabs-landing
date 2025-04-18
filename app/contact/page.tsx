import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch('https://formsubmit.co/dev@alphaslabs.app', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <main className="p-6 max-w-2xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="w-full p-2 h-32 rounded bg-gray-800 text-white border border-gray-600"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-green-400 mt-4">✅ Your message has been sent. We'll get back to you soon!</p>
      )}
    </main>
  );
}
