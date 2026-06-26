import React from "react";

export default function RefundPolicyPage() {
  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Refund Policy</h1>
          <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-white-w-none text-white space-y-6">
          <p>Penguin Book Publishers refund policy is <strong>not applicable</strong> when:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You choose a discounted coupon</li>
            <li>You choose a promo/special service package</li>
            <li>You have approved the initial draft</li>
            <li>You have requested revisions</li>
            <li>You have canceled the order due to non-related reasons in regard to the Penguin Book Publishers and its policies</li>
            <li>You have not contacted Penguin Book Publishers for more than 2 weeks since the project initiated</li>
            <li>You have violated Penguin Book Publishers terms & conditions and privacy policy</li>
            <li>You have approached another service provider or freelancer for the same project assigned to Penguin Book Publishers</li>
            <li>You have provided an incomplete project brief</li>
            <li>You have demanded a change in the any draft</li>
            <li>You have exceeded from the maximum time allowed to 'request for refund' and make claims</li>
            <li>You have other reasons such as change of mind, dispute with your partners, or other similar reasons</li>
            <li>You have approved the deliverables</li>
            <li>You have accepted multiple revisions for any service</li>
            <li>You have ordered a bundle service and are dissatisfied with any specific service, refund can only be claimed against that specific service and 'not' the complete set of bundle services</li>
            <li>You have failed to provide the initial project brief within 10 days of order placement</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">How to Claim Your Refund</h3>
          <p>
            To ensure that your refund request is processed effectively and is approved, please make sure that you meet the following requirements. Specify your concern and claim your refund through any of the following three modes:
          </p>
          <ul className="list-none space-y-2 font-bold text-white">
            <li>Toll-free #: (737) 204-9911</li>
            <li>Live Chat</li>
            <li>Email: info@penguinbookspublishers.com</li>
          </ul>

          <p className="mt-4">
            We will try to resolve your query and concern in light of our revision policy immediately or else will email you a refund request approval from our refund department. After the refund, the rights to your draft would be transferred to Penguin Book Publishers and you would not legally be allowed to use any version of the draft sent by the company.
          </p>
          <p>
            Since the rights to the draft would now be transferred to Penguin Book Publishers, you concur that you will have no right (immediate or circuitous) to use any reaction or other substance, work item or media, nor will you have any ownership interest for or to the same.
          </p>
          <p>
            If you have any questions or concerns about our Refund Policy, please get in touch with us at <strong>info@penguinbookspublishers.com</strong>.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Arrangement Details</h3>
          <p>All refund requests will be fulfilled as per the following arrangement:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>If request for refund is made before the Initial draft delivery, you would be eligible for Full Refund (less 10% service & processing fee).</li>
            <li>If request for refund is made between 48-120 hours of the initial draft delivery, you would be eligible for a 33% refund (less 10% service & processing fee).</li>
            <li>No refund request will be entertained after 120 hours of your initial draft delivery, however since we believe in 100% customer satisfaction you're encouraged to contact us in case of any concern.</li>
          </ul>
          <p className="mt-4">
            All refund requests should be communicated to the support department. Penguin Book Publishers, based on the violation of your user agreement reserves the right to approve/disapprove your request on an individual case to case basis.
          </p>

          <div className="bg-black border border-white p-4 rounded-lg mt-8 text-sm italic">
            <strong>Disclaimer:</strong> Penguin Book Publishers is an independent entity, unaffiliated with, sponsored by, or associated with any other companies or brands with similar or identical names, including major publishing companies or corporations. All content, services, and products offered through our website are exclusively provided by Penguin Book Publishers and are not endorsed or approved by any other entities.
          </div>
        </div>
      </div>
    </div>
  );
}