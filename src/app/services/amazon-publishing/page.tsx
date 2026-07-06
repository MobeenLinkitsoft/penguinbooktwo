"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  BookOpen,
  ShoppingCart,
  MessageSquare,
  Phone,
  Mail,
  TrendingUp,
  Award
} from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal";

export default function AmazonPublishingPage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`,
  );
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // All 86 Portfolio Books (using 12 for the grid showcase)
  const portfolioBooks = Array.from({ length: 12 }).map(
    (_, i) => `/Book/Book${i + 1}.jpg`,
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* Global Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Premium Amazon KDP Services
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Dominate the Amazon Kindle Bestseller Lists.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-light">
              Navigate the complexities of Kindle Direct Publishing with elite industry experts. 
              We handle meticulous formatting, metadata optimization, and backend strategies 
              to ensure your book thrives in Amazon's global marketplace.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-500 transition-all flex items-center gap-2 shadow-lg shadow-amber-600/20 uppercase tracking-widest text-sm"
              >
                Start Your Project
              </button>
              <button
                onClick={() => Crisp.chat.open()}
                className="border-2 border-white/80 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2 uppercase tracking-widest text-sm backdrop-blur-sm"
              >
                Live Chat
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-slate-100 relative">
              <div className="absolute -top-5 right-8 bg-amber-500 text-slate-900 text-xs font-black uppercase tracking-widest py-2 px-5 rounded-full shadow-lg flex items-center gap-2">
                <TrendingUp size={14} /> 20% Off Today
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Claim Your Consultation
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Speak with an Amazon publishing strategist at no cost.
              </p>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="f10abfcd-14e6-40dc-852b-ed7b35bd9825"
                />
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition"
                />
                <input
                  name="tel"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition"
                />
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-slate-600 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select Service</option>
                  <option value="book-writing">Ghostwriting</option>
                  <option value="book-publishing">Book Publishing</option>
                  <option value="book-editing">Book Editing & Proofreading</option>
                  <option value="cover-design">Book Cover Design</option>
                  <option value="book-illustrations">Book Illustrations</option>
                  <option value="book-printing">Book Printing</option>
                  <option value="book-marketing">Book Marketing</option>
                  <option value="authors-website">Author's Website</option>
                  <option value="global-distributions">Global Distribution</option>
                  <option value="article-writing">Article Writing & Blogs</option>
                  <option value="book-trailer">Book Video Trailer</option>
                  <option value="audio-book">Audio Book</option>
                </select>
                <textarea
                  placeholder="Tell us about your book..."
                  name="message"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition resize-none h-24"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white font-bold py-4 mt-2 rounded-xl uppercase tracking-widest hover:bg-amber-600 transition-colors shadow-lg text-sm"
                >
                  Request Callback
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. INFINITE MARQUEE LOGOS ================= */}
      <section className="bg-amber-500 py-6 border-b border-amber-600 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-amber-500 to-transparent z-10 hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-amber-500 to-transparent z-10 hidden md:block"></div>
        
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 35s linear infinite; display: flex; width: max-content; }
          .animate-marquee:hover { animation-play-state: paused; }
        `}</style>

        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-20 pr-12 md:pr-20 opacity-80 brightness-0 invert hover:opacity-100 transition-all duration-500">
              {seamlessLogos.map((logoUrl, index) => (
                <div
                  key={index}
                  className="relative h-10 w-28 shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={logoUrl}
                    alt="Partner Logo"
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. SPLIT SECTION 1 ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-slate-50">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-widest">
            <Award size={18} />
            Industry Leaders
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            A Strategic Approach to Amazon KDP Success.
          </h2>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            Publishing on Amazon is more than just uploading a file. It requires
            strategic categorization, precise keyword indexing, and flawless formatting
            to ensure the Kindle algorithm actively promotes your title.
          </p>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            Our publishing executives manage the entire backend infrastructure. We configure
            your KDP dashboard, optimize your Author Central presence, assign official ISBNs,
            and execute a targeted launch strategy that maximizes your visibility across
            all global territories.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-amber-700 transition uppercase tracking-widest text-sm shadow-lg shadow-amber-600/20"
            >
              Get A Quote
            </button>
            <button
              onClick={() => Crisp.chat.open()}
              className="bg-white border border-slate-200 text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition uppercase tracking-widest text-sm shadow-sm"
            >
              Live Chat
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[400px]">
          {/* Custom Fanned Books Mockup */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            <div className="absolute w-44 h-64 bg-slate-800 rounded-lg shadow-2xl transform -rotate-12 -translate-x-16 z-10 border border-slate-700/50 overflow-hidden transition-transform duration-500 hover:-rotate-12 hover:-translate-x-20">
              <Image
                src="/Book/Book55.jpg"
                alt="Book 1"
                fill
                className="object-cover opacity-80 mix-blend-overlay"
              />
            </div>
            <div className="absolute w-44 h-64 bg-slate-800 rounded-lg shadow-2xl transform rotate-12 translate-x-16 z-10 border border-slate-700/50 overflow-hidden transition-transform duration-500 hover:rotate-12 hover:translate-x-20">
              <Image
                src="/Book/Book56.jpg"
                alt="Book 2"
                fill
                className="object-cover opacity-80 mix-blend-overlay"
              />
            </div>
            <div className="absolute w-52 h-80 bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border border-slate-200 transform -translate-y-4 overflow-hidden transition-transform duration-500 hover:scale-105">
              <Image
                src="/Book/Book57.jpg"
                alt="Book 3 Main"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. CLIENT-CENTRIC APPROACH ================= */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-amber-600 font-bold text-sm uppercase tracking-wider">
              Expert Guidance
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Consult with Elite Publishing Strategists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-white text-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors transform group-hover:-translate-y-2">
                <Globe size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">
                Global Distribution
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                We ensure your book is configured for international Amazon
                marketplaces (UK, CA, AU, etc.) so readers worldwide can
                discover and purchase your work easily.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group relative md:-translate-y-4">
              <div className="absolute inset-0 border-2 border-amber-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 mx-auto bg-white text-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors transform group-hover:-translate-y-2">
                <BookOpen size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">
                KDP Formatting
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Amazon has strict guidelines for eBook and Print-on-Demand
                files. We rigorously format your layouts to bypass all KDP
                automated rejection errors natively.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-white text-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors transform group-hover:-translate-y-2">
                <ShoppingCart size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">
                Royalty Optimization
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                We consult on competitive pricing, KDP Select enrollment, and metadata setup
                (7 targeted keywords and 2 premium categories) to maximize your sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">
            Curated Library
          </h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">
            Bestselling Titles We've Launched
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {portfolioBooks.map((cover, i) => (
              <div
                key={i}
                className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-2xl border border-slate-800 group cursor-pointer hover:border-amber-500 transition-colors"
              >
                <Image
                  src={cover}
                  alt={`Portfolio Book ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-widest border border-amber-500/50 px-4 py-2 rounded-full">
                    View Title
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. MIDDLE CTA BANNER ================= */}
      <section className="py-20 bg-amber-500 text-slate-900 border-b border-amber-600">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Take Your Book to the Next Level
          </h2>
          <p className="text-slate-900/80 font-bold text-sm md:text-base uppercase tracking-widest max-w-2xl mx-auto">
            Call us right now. Let's engineer a launch strategy that gets your manuscript trending on Amazon's charts!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="tel:+16463440382" 
              className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-xl uppercase text-sm tracking-widest flex items-center gap-2"
            >
              <Phone size={18} />
              +1 (888) 919-9811
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition shadow-xl uppercase text-sm tracking-widest"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= 7. 4-STEP PROCESS SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Our Blueprint for Success
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#fbbf24_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#fbbf24_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"
                alt="Publishing Process"
                className="w-full h-[550px] object-cover rounded-3xl shadow-2xl border border-slate-100"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="text-6xl md:text-7xl font-black text-slate-100 group-hover:text-amber-100 transition-colors font-serif leading-none shrink-0 w-20 text-center">
                  01
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    Comprehensive Manuscript Audit
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our publishers begin by reviewing your final manuscript to
                    ensure it meets strict community guidelines and content
                    standards, preparing it for a frictionless backend setup.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="text-6xl md:text-7xl font-black text-slate-100 group-hover:text-amber-100 transition-colors font-serif leading-none shrink-0 w-20 text-center">
                  02
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    Quality Assurance & Editing
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A mandatory final sweep is conducted to eliminate any
                    residual errors. Online readers are highly critical of
                    typos, so we ensure the prose is completely flawless before
                    uploading.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="text-6xl md:text-7xl font-black text-slate-100 group-hover:text-amber-100 transition-colors font-serif leading-none shrink-0 w-20 text-center">
                  03
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    Formatting & Cover Design
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We convert your document into standard digital formats with
                    a dynamic table of contents, and configure the print-ready
                    PDF dimensions seamlessly for KDP paperback and hardcover.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="text-6xl md:text-7xl font-black text-slate-100 group-hover:text-amber-100 transition-colors font-serif leading-none shrink-0 w-20 text-center">
                  04
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    Global Launch & Distribution
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We hit publish. We handle the entire KDP dashboard setup,
                    inputting your optimized metadata, descriptions, pricing,
                    and tax information, ensuring a smooth global rollout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. BOTTOM CONTACT FORM SECTION ================= */}
      <section className="py-24 relative bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Titles */}
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Ready to Publish? Let's Talk.
            </h2>
            <p className="text-amber-600 font-bold text-sm uppercase tracking-widest">
              Fill out your details below and a strategist will connect with you shortly.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 max-w-4xl mx-auto relative z-10">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <input
                    type="hidden"
                    name="access_key"
                    value="f10abfcd-14e6-40dc-852b-ed7b35bd9825"
                  />
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://penguinebookspublishing.com/thank-you"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-slate-700"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-slate-700"
                  />
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-slate-600 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Service Required
                    </option>
                    <option value="book-writing">Ghostwriting</option>
                    <option value="book-publishing">Book Publishing</option>
                    <option value="book-editing">Book Editing & Proofreading</option>
                    <option value="cover-design">Book Cover Design</option>
                    <option value="book-illustrations">Book Illustrations</option>
                    <option value="book-printing">Book Printing</option>
                    <option value="book-marketing">Book Marketing</option>
                    <option value="authors-website">Author's Website</option>
                    <option value="global-distributions">Global Distributions</option>
                    <option value="article-writing">Article Writing & Blogs</option>
                    <option value="book-trailer">Book Video Trailer</option>
                    <option value="audio-book">Audio Book</option>
                  </select>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-slate-700"
                  />
                  <textarea
                    placeholder="Tell us a little bit about your manuscript or idea..."
                    name="message"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-slate-700 flex-grow min-h-[135px] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-amber-600 text-white font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-amber-700 transition shadow-lg shadow-amber-600/20 mt-2"
              >
                Submit Project Details
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {/* Box 1 */}
            <div className="text-center space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="w-full border border-slate-200 text-slate-700 font-medium py-3 px-4 rounded-lg hover:bg-slate-50 transition bg-white"
              >
                Live Chat
              </button>
            </div>

            {/* Box 2 */}
            <div className="text-center space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                <Phone size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Give us a Call</h4>
              <a
                href="tel:+16463440382"
                className="block w-full border border-slate-200 text-slate-700 font-medium py-3 px-4 rounded-lg hover:bg-slate-50 transition bg-white"
              >
                +1 (888) 919-9811
              </a>
            </div>

            {/* Box 3 */}
            <div className="text-center space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                <Mail size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Send an Email</h4>
              <a
                href="mailto:info@penguinebookspublishing.com "
                className="block w-full border border-slate-200 text-slate-700 font-medium py-3 px-2 rounded-lg hover:bg-slate-50 transition bg-white text-sm"
              >
                info@penguinebookspublishing.com 
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}