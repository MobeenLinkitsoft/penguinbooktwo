"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  FileSearch,
  Highlighter,
  CheckCheck,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal";

export default function BookEditingPage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`,
  );
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // All 86 Portfolio Books (Mocked to 12 for grid)
  const portfolioBooks = Array.from({ length: 12 }).map(
    (_, i) => `/Book/Book${i + 1}.jpg`,
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* Global Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Premium Editing & Proofreading
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Transform Your Rough Draft into a Publishing Masterpiece.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
              Don't let grammatical blind spots or plot holes derail a great story. Our elite team of NYT-bestselling editors provides deep-dive developmental editing, meticulous line editing, and final-polish proofreading.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-amber-600 text-white px-8 py-4 rounded font-bold hover:bg-amber-500 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-600/30 uppercase tracking-widest text-sm"
              >
                Get A Free Quote
              </button>
              <button
                onClick={() => Crisp.chat.open()}
                className="border-2 border-slate-300 text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-slate-900 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest text-sm"
              >
                Live Chat
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-white/20 relative">
              <div className="absolute -top-5 right-6 bg-amber-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-4 rounded shadow-lg">
                Limited Time: 20% Off
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Claim Your Discount
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Speak with an editorial expert today, completely free.
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
                  value="https://penguinbookspublisher.com/thank-you"
                />

                <input
                  type="text"
                  placeholder="Full Name *"
                  name="name"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-amber-500 outline-none transition bg-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-amber-500 outline-none transition bg-transparent"
                />
                <input
                  name="tel"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-amber-500 outline-none transition bg-transparent"
                />
                <select
                  name="service"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-amber-500 outline-none transition text-slate-500 bg-transparent appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Your Service
                  </option>
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
                  <option value="audio-book">Audio Book Production</option>
                </select>
                <textarea
                  placeholder="Tell us about your manuscript..."
                  name="message"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-amber-500 outline-none transition text-slate-700 bg-transparent resize-none h-20"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white font-bold py-4 mt-4 rounded uppercase tracking-widest hover:bg-amber-600 transition-colors shadow-xl text-sm"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. INFINITE MARQUEE LOGOS ================= */}
      <section className="bg-amber-600 py-6 border-b border-amber-700 overflow-hidden">
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
                  className="relative h-12 w-32 shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={logoUrl}
                    alt="Partner Logo"
                    fill
                    sizes="128px"
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
        <div className="space-y-6 pr-0 lg:pr-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Elevate Your Writing with Industry-Leading Editors
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Even the most brilliant authors need a second pair of eyes. A single
            typo or structural inconsistency can pull readers out of your narrative
            and result in negative reviews that stall your book's success.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Our editorial team doesn't just correct grammar; we enhance your unique voice, refine your pacing, and ensure your manuscript meets the strict standards of traditional publishing houses. Your story deserves to be flawless.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-600 text-white px-8 py-3 rounded font-bold hover:bg-amber-700 transition-colors uppercase tracking-widest text-sm shadow-md"
            >
              Get A Quote
            </button>
            <button
              onClick={() => Crisp.chat.open()}
              className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded font-bold hover:bg-slate-900 hover:text-white transition-colors uppercase tracking-widest text-sm shadow-md"
            >
              Live Chat
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[450px]">
          {/* Real Book Mockup */}
          <div className="relative w-72 h-[420px] rounded-r-2xl rounded-l-md shadow-2xl overflow-hidden transform rotate-2 hover:-translate-y-2 hover:rotate-0 transition-all duration-500 border-l-[12px] border-slate-300">
            <Image
              src="/Book/Book18.jpg"
              alt="Edited Book Example"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= 4. CLIENT-CENTRIC APPROACH ================= */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Comprehensive Editing Solutions
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">From high-level story arcs to the final comma, we cover every angle of your manuscript.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <FileSearch size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">
                Developmental Editing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                We analyze the big picture. Our editors review your plot, pacing, character arcs, and thematic consistency to build a structurally sound narrative.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <Highlighter size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">
                Line & Copy Editing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                We refine your manuscript line by line to improve sentence structure, vocabulary, and flow, ensuring your prose is engaging and flawlessly stylized.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <CheckCheck size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">
                Final Proofreading
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                The absolute final polish. We eliminate all remaining typos, spelling errors, grammatical mistakes, and formatting inconsistencies before you go to print.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-950 text-white border-y-[6px] border-amber-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">
            Our Hall of Fame
          </h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">
            Recently Edited & Published
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
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
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold text-xs uppercase tracking-widest border-2 border-white px-4 py-2 rounded hover:bg-white hover:text-slate-900 transition-colors">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. MIDDLE CTA BANNER ================= */}
      <section className="py-20 bg-amber-500 border-b border-amber-600">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Ready to Polish Your Pages?
          </h2>
          <p className="text-slate-800 font-bold text-sm md:text-base uppercase tracking-widest">
            A flawless, market-ready book is just one conversation away. Let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a href="tel:+16463440382" className="bg-slate-900 text-white px-10 py-4 rounded font-bold hover:bg-slate-800 transition-colors shadow-lg uppercase text-sm tracking-widest flex items-center gap-2">
              <Phone size={18}/> +1 646 344 0382
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-amber-700 px-10 py-4 rounded font-black hover:bg-slate-50 transition-colors shadow-lg uppercase text-sm tracking-widest"
            >
              Get Your Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= 7. 4-STEP PROCESS SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Our Proven Editorial Process
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#f59e0b_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=800&auto=format&fit=crop"
                alt="Editing Process"
                className="w-full h-[550px] object-cover rounded-2xl shadow-2xl border border-slate-200"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#f59e0b_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-30"></div>
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="text-7xl font-black text-amber-100 font-serif leading-none shrink-0 w-16 text-center select-none">
                  1
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Manuscript Assessment
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We start by reviewing your entire manuscript to identify its core strengths and weaknesses. From there, we pair you with a specialized editor who understands your specific genre.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-7xl font-black text-amber-100 font-serif leading-none shrink-0 w-16 text-center select-none">
                  2
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Deep Structural Editing
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our editors dive in to refine clumsy sentence structures, fix pacing issues, and eliminate redundancies. We guarantee your narrative flows seamlessly from cover to cover.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-7xl font-black text-amber-100 font-serif leading-none shrink-0 w-16 text-center select-none">
                  3
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Author Collaboration
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We send the marked-up draft back to you with tracked changes and inline suggestions. You maintain 100% creative control over which edits to accept, reject, or modify.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-7xl font-black text-amber-100 font-serif leading-none shrink-0 w-16 text-center select-none">
                  4
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    The Final Polish
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A fresh set of eyes conducts a final proofreading sweep to catch any microscopic typos, spelling anomalies, or punctuation errors before sending it off for publication formatting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. BOTTOM CONTACT FORM SECTION ================= */}
      <section className="py-24 relative bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Titles */}
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Let's Start Your Next Chapter
            </h2>
            <p className="text-amber-600 font-bold text-sm uppercase tracking-widest">
              Fill out your details below and an editorial consultant will reach out.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_-15px_rgba(245,158,11,0.2)] border border-slate-200 max-w-4xl mx-auto relative z-10">
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <input type="hidden" name="access_key" value="f10abfcd-14e6-40dc-852b-ed7b35bd9825" />
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://penguinbookspublisher.com/thank-you"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full border border-slate-300 rounded-lg p-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition bg-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full border border-slate-300 rounded-lg p-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition bg-white"
                  />
                  <select
                    name="service"
                    required
                    className="w-full border border-slate-300 rounded-lg p-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-slate-600 bg-white appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select A Service
                    </option>
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
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full border border-slate-300 rounded-lg p-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition bg-white"
                  />
                  <textarea
                    placeholder="Tell us about your project requirements..."
                    name="message"
                    required
                    className="w-full border border-slate-300 rounded-lg p-4 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition bg-white flex-grow min-h-[136px] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-amber-600 text-white font-bold py-4 rounded-lg uppercase tracking-wider hover:bg-slate-900 transition-colors shadow-md mt-2"
              >
                Submit Your Project Details
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {/* Box 1 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl text-center space-y-4 hover:border-amber-300 transition-colors">
              <MessageSquare className="w-8 h-8 text-amber-600 mx-auto" />
              <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="w-full bg-white border border-amber-200 text-amber-700 font-bold py-2.5 px-4 rounded hover:bg-amber-50 transition-colors text-sm uppercase tracking-widest"
              >
                Start Live Chat
              </button>
            </div>

            {/* Box 2 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl text-center space-y-4 hover:border-amber-300 transition-colors">
              <Phone className="w-8 h-8 text-amber-600 mx-auto" />
              <h4 className="font-bold text-slate-900">Speak With Us</h4>
              <a
                href="tel:+16463440382"
                className="block w-full bg-white border border-amber-200 text-amber-700 font-bold py-2.5 px-4 rounded hover:bg-amber-50 transition-colors text-sm uppercase tracking-widest"
              >
                +1 646 344 0382
              </a>
            </div>

            {/* Box 3 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl text-center space-y-4 hover:border-amber-300 transition-colors">
              <Mail className="w-8 h-8 text-amber-600 mx-auto" />
              <h4 className="font-bold text-slate-900">Send an Email</h4>
              <a
                href="mailto:info@penguinbookpublishers.net"
                className="block w-full bg-white border border-amber-200 text-amber-700 font-bold py-2.5 px-4 rounded hover:bg-amber-50 transition-colors text-xs md:text-sm uppercase tracking-widest truncate"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}