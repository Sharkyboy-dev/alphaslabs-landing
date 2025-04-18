export default function PrivacyPolicyPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="text-sm text-gray-300 mb-4">
        AlphaSlabs respects your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our site.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-6">Information We Collect</h2>
      <ul className="list-disc list-inside text-sm text-gray-300 mb-4">
        <li>Email addresses you submit through sign-up forms</li>
        <li>Anonymous usage data (e.g. IP address, browser type)</li>
        <li>Pages visited and interactions with the site</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-6">How We Use Information</h2>
      <ul className="list-disc list-inside text-sm text-gray-300 mb-4">
        <li>To contact you with product updates or promotions</li>
        <li>To improve user experience and performance</li>
        <li>To detect and prevent fraudulent activity</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-6">Third-Party Services</h2>
      <p className="text-sm text-gray-300 mb-4">
        We may use third-party tools such as Google Analytics and email platforms to collect or manage data. These services may have access to certain information as needed to perform their functions.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-6">Your Choices</h2>
      <ul className="list-disc list-inside text-sm text-gray-300 mb-4">
        <li>You may unsubscribe from emails at any time</li>
        <li>You may request deletion of your data by contacting us</li>
      </ul>

      <p className="text-sm text-gray-400 mt-6">
        For questions or concerns, please contact us at support@alphaslabs.app
      </p>
    </main>
  );
}
