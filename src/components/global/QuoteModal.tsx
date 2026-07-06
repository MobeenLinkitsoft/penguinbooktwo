"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  // Prevent scrolling on the background body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Headings */}
        <div className="text-center mb-8 pt-2">
          <h2 className="text-xl md:text-2xl text-slate-800 mb-2">
            Activate this offer to avail Exclusive Discounts
          </h2>
          <h3 className="text-2xl md:text-4xl font-black text-yellow-600 uppercase tracking-tight">
            Last 3 Coupons Left
          </h3>
        </div>

        {/* Form */}
          <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="access_key" value="f10abfcd-14e6-40dc-852b-ed7b35bd9825" />
                  <input 
    type="hidden" 
    name="redirect" 
    value="https://penguinebookspublishing.com/thank-you" 
  />
                <input
                  type="text"
                  placeholder="Full Name *"
                  name="name"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-yellow-500 outline-none transition bg-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-yellow-500 outline-none transition bg-transparent"
                />
                <input
                  name="tel"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-yellow-500 outline-none transition bg-transparent"
                />
                <select
                  name="service"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-yellow-500 outline-none transition text-slate-500 bg-transparent"
                >
                  <option value="" disabled selected>
                    Select Service
                  </option>
                  <option value="book-writing">Book Writing</option>
                  <option value="ebook-writing">
                    eBook Writing & Publishing
                  </option>
                  <option value="book-editing">
                    Book Editing & Proofreading
                  </option>
                  <option value="cover-design">Book Cover Design</option>
                  <option value="book-illustrations">Book Illustrations</option>
                  <option value="book-printing">Book Printing</option>
                  <option value="book-marketing">Book Marketing</option>
                  <option value="authors-website">Author's Website</option>
                  <option value="amazon-publishing">Amazon Publishing</option>
                  <option value="article-writing">Article Writing</option>
                  <option value="book-trailer">Book Trailer Services</option>
                  <option value="kindle-vella">Kindle Vella</option>
                </select>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-yellow-500 outline-none transition text-slate-500 bg-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white font-bold py-4 mt-6 rounded uppercase tracking-widest hover:bg-yellow-600 transition shadow-xl text-sm"
                >
                  Submit Request
                </button>
              </form>
      </div>
    </div>
  );
}