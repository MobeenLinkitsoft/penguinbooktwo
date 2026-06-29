"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mic,
  Headphones,
  Volume2,
  Globe,
  MessageSquare,
  Phone,
  Mail,
  CheckCircle2,
  PlayCircle,
  Sparkles
} from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal";

export default function AudiobookPublishingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`
  );
  const seamlessLogos = [...trustLogos, ...trustLogos];
  const portfolioBooks = Array.from({ length: 12 }).map(
    (_, i) => `/Book/Book${i + 1}.jpg`
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-900">
      
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Audiobook Production Studio
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Bring Your Stories to Life with Cinematic Audio Production.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-light">
              Transform your manuscript into an immersive auditory experience. From elite voice talent narration to rigorous studio-grade sound engineering, we handle everything to launch your book on Audible, iTunes, and Amazon.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-500 transition-all flex items-center gap-2 shadow-lg shadow-amber-600/20 uppercase tracking-widest text-sm"
              >
                Start Recording
              </button>
              <button
                onClick={() => Crisp.chat.open()}
                className="border-2 border-white/80 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2 uppercase tracking-widest text-sm backdrop-blur-sm"
              >
                Live Chat
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-slate-100 relative">
              <div className="absolute -top-5 right-8 bg-amber-500 text-slate-900 text-xs font-black uppercase tracking-widest py-2 px-5 rounded-full shadow-lg flex items-center gap-2">
                <Sparkles size={14} /> 20% Off Today
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Book a Studio Session
              </h3>
              <p className="text-sm text-slate-500 mb-8">Consult with an audio director for free.</p>

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
                  name="name"
                  placeholder="Full Name *"
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
                  type="tel"
                  name="tel"
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
                  <option value="" disabled>
                    Select Service
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
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
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
              {seamlessLogos.map((logo, i) => (
                <div key={i} className="relative h-10 w-28 shrink-0 flex items-center justify-center">
                  <Image
                    src={logo}
                    alt="Distribution Partner Logo"
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

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-amber-600 font-bold text-sm uppercase tracking-wider">Our Standards</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Premium Audiobook Services
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mic size={28} />,
                title: "Elite Narration",
                desc: "Access to world-class SAG-AFTRA voice talent perfect for your specific genre.",
              },
              {
                icon: <Headphones size={28} />,
                title: "Studio Recording",
                desc: "Flawless audio capture in professional-grade, acoustically treated studios.",
              },
              {
                icon: <Volume2 size={28} />,
                title: "Mixing & Mastering",
                desc: "Expert post-production to ensure crisp, radio-quality sound dynamics.",
              },
              {
                icon: <Globe size={28} />,
                title: "Global Distribution",
                desc: "Seamless formatting and direct upload to Audible, iTunes, and Amazon.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-slate-100 text-center space-y-5 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto bg-slate-50 text-amber-500 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors transform group-hover:-translate-y-2">
                  {f.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-xl">{f.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Audio Showcase</h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">
            Audiobook Library
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {portfolioBooks.map((cover, i) => (
              <div
                key={i}
                className="aspect-square relative rounded-xl overflow-hidden shadow-2xl border border-slate-800 group cursor-pointer hover:border-amber-500 transition-colors"
              >
                <Image
                  src={cover}
                  alt={`Audiobook ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 flex flex-col items-center justify-center gap-3">
                  <PlayCircle size={32} className="text-amber-400" />
                  <span className="text-white font-bold text-xs uppercase tracking-widest">Listen</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Production Workflow
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Container with Styling */}
            <div className="h-[550px] bg-slate-100 rounded-3xl overflow-hidden relative shadow-2xl shadow-slate-200/50 border-[8px] border-slate-50">
              <Image
                src="/image1.png"
                alt="Audiobook Recording Studio"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              {/* Optional fallback overlay if /image1.png is missing: */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            <div className="space-y-10">
              {[
                {
                  title: "Casting & Scripting",
                  desc: "We analyze your manuscript and select the perfect narrator whose vocal tone perfectly aligns with your book's narrative.",
                },
                {
                  title: "Professional Recording",
                  desc: "High-fidelity recording sessions take place in our sound labs under the supervision of a dedicated audio director.",
                },
                {
                  title: "Post-Production",
                  desc: "Our sound engineers meticulously edit the audio, applying advanced noise reduction, pacing adjustments, and breath control.",
                },
                {
                  title: "Quality Assurance",
                  desc: "A multi-stage QA process ensures your final files meet the strict ACX standards required for seamless global distribution.",
                },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-500 group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}