export default function ContactPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-sm text-gray-300 mb-4">
        Have questions, feedback, or business inquiries?
      </p>
      <a
        href="mailto:dev@alphaslabs.app"
        className="text-blue-400 hover:underline text-sm"
      >
        dev@alphaslabs.app
      </a>
    </main>
  );
}
