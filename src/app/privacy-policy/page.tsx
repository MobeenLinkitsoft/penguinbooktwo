import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-white-w-none text-white space-y-6">
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Introduction</h3>
          <p>
            Penguin Book Publishers ("we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and share information about you when you use our website, services, and products (collectively, the "Services").
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Information We Collect</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> When you use our Services, we may collect personal information such as your name, email address, phone number, postal address, payment information, and other details necessary to provide you with our Services.</li>
            <li><strong>Usage Information:</strong> We may collect information about how you interact with our website, including IP address, browser type, operating system, referral URLs, and pages visited. This information helps us improve our Services and understand user behavior.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to collect and store information about your usage of our website. This helps us personalize your experience and analyze website traffic.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">How We Use Your Information</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li><strong>To Provide and Improve Services:</strong> We use your personal information to provide, maintain, and improve our Services, process transactions, and communicate with you.</li>
            <li><strong>Marketing and Promotions:</strong> With your consent, we may use your information to send you promotional materials and newsletters. You can opt-out of these communications at any time.</li>
            <li><strong>Analytics:</strong> We use usage information to analyze trends, administer the website, track users' movements, and gather demographic information.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Sharing Your Information</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third-party service providers who assist us in providing our Services. These providers are contractually obligated to protect your information and use it only for the purposes we specify.</li>
            <li><strong>Legal Compliance:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Your Choices</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li><strong>Access and Update:</strong> You can access and update your personal information by contacting us at info@penguinbookspublishers.com.</li>
            <li><strong>Opt-Out:</strong> You can opt-out of receiving marketing communications from us by following the instructions in those communications or contacting us directly.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Security</h3>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued use of the Services after any changes indicates your acceptance of the new terms.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <strong>info@penguinbookspublishers.com</strong>.
          </p>

          <div className="bg-black border border-white p-4 rounded-lg mt-8 text-sm italic">
            <strong>Disclaimer:</strong> Penguin Book Publishers is an independent entity, unaffiliated with, sponsored by, or associated with any other companies or brands with similar or identical names, including major publishing companies or corporations. All content, services, and products offered through our website are exclusively provided by Penguin Book Publishers and are not endorsed or approved by any other entities.
          </div>
        </div>
      </div>
    </div>
  );
}