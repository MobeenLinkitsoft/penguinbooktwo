import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-6">
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 text-center max-w-lg w-full">
        <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4">Thank You!</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          We have received your request. Our publishing advisors will review your details and reach out to you shortly.
        </p>
        <Link 
          href="/" 
          className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-700 transition uppercase tracking-widest text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}