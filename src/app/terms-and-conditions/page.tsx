import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Terms & Conditions</h1>
          <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-white-w-none text-white space-y-6">
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Introduction</h3>
          <p>
            Welcome to Penguin Book Publishers. These Terms and Conditions ("Terms") govern your use of our website and Services. By accessing or using our Services, you agree to comply with and be bound by these Terms.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Services</h3>
          <p>
            Penguin Book Publishers offers a range of publishing services, including book publishing, editing, marketing, and more. The specific terms and conditions for each service will be provided at the time of engagement.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">User Obligations</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li><strong>Accuracy of Information:</strong> You agree to provide accurate and complete information when using our Services. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
            <li><strong>Compliance with Laws:</strong> You agree to use our Services in compliance with all applicable laws and regulations.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Intellectual Property</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li><strong>Ownership:</strong> All content provided by Penguin Book Publishers, including text, graphics, logos, and software, is the property of Penguin Book Publishers or its licensors and is protected by copyright, trademark, and other intellectual property laws.</li>
            <li><strong>License:</strong> You are granted a limited, non-exclusive, non-transferable license to access and use our Services for personal and non-commercial purposes.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Payment Terms</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li><strong>Fees:</strong> Fees for our Services will be specified at the time of engagement. Payment terms will be outlined in the agreement you enter into with us.</li>
            <li><strong>Refunds:</strong> Refunds will be handled in accordance with our refund policy, which will be provided at the time of engagement.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Limitation of Liability</h3>
          <p>
            Penguin Book Publishers will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our Services. Our total liability to you for any claims arising out of or related to our Services is limited to the amount paid by you for the Services.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Governing Law</h3>
          <p>
            These Terms are governed by and construed in accordance with the laws of Austin Texas, without regard to its conflict of laws principles. Any disputes arising out of or related to these Terms will be resolved in the courts of Austin Texas.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Changes to These Terms</h3>
          <p>
            We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our website. Your continued use of the Services after any changes indicates your acceptance of the new terms.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at <strong>info@penguinbookspublishers.com</strong>.
          </p>

          <div className="bg-black border border-white p-4 rounded-lg mt-8 text-sm italic">
            <strong>Disclaimer:</strong> Penguin Book Publishers is an independent entity, unaffiliated with, sponsored by, or associated with any other companies or brands with similar or identical names, including major publishing companies or corporations. All content, services, and products offered through our website are exclusively provided by Penguin Book Publishers and are not endorsed or approved by any other entities.
          </div>
        </div>
      </div>
    </div>
  );
}