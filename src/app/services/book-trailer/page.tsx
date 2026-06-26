"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal";

export default function BookTrailerPage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map((_, i) => `/Logos/log${i + 1}.png`);
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // All Portfolio Books
  const portfolioBooks = Array.from({ length: 12 }).map((_, i) => `/Book/Book${i + 1}.jpg`);

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      
      {/* Global Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">Video Marketing</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Professional Video Book Trailer Services.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
              Capture your audience's attention instantly. We produce cinematic, high-definition book trailers that bring your story to life and dramatically boost your social media engagement and pre-orders.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-600 text-white px-8 py-4 rounded font-bold hover:bg-yellow-700 transition flex items-center gap-2 shadow-lg shadow-yellow-600/20 uppercase tracking-widest text-sm"
              >
                Get A Quote
              </button>
              <button 
                onClick={() => Crisp.chat.open()} 
                className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-slate-900 transition flex items-center gap-2 uppercase tracking-widest text-sm"
              >
                Live Chat
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-white/20 relative">
              <div className="absolute -top-6 right-8 bg-yellow-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-4 rounded shadow-lg">
                20% Off Today
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Get Started!</h3>
              <p className="text-sm text-slate-500 mb-8">Consult with a video production expert for free.</p>
              
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="access_key" value="75a6dce0-fd56-4a07-8fdf-96b1af7c5da2" />
                <input 
                  type="hidden" 
                  name="redirect" 
                  value="https://penguinbookpublishers.com/thank-you" 
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
                  defaultValue=""
                  className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-500 bg-white appearance-none"
                >
                  <option value="" disabled>Select Service</option>
                  <option value="book-writing">GhostWriting</option>
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

        </div>
      </section>

      {/* ================= 2. INFINITE MARQUEE LOGOS ================= */}
      <section className="bg-yellow-600 py-6 border-b border-slate-200 overflow-hidden">
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 35s linear infinite; display: flex; width: max-content; }
          .animate-marquee:hover { animation-play-state: paused; }
        `}</style>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-20 pr-12 md:pr-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {seamlessLogos.map((logoUrl, index) => (
                <div key={index} className="relative h-12 w-32 shrink-0 flex items-center justify-center">
                  <Image src={logoUrl} alt="Partner Logo" fill sizes="128px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. SPLIT SECTION 1 ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Book Video Trailers, Commercials and Marketing
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            In today's fast-paced digital landscape, video content reigns supreme. A cinematic book trailer is the most effective way to communicate your book's mood, setting, and stakes in under 60 seconds. 
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Whether you are launching a dark fantasy epic or a heartwarming romance, our video production team utilizes stunning stock footage, custom animations, professional voiceovers, and stirring soundtracks.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-600 text-white px-8 py-3 rounded font-bold hover:bg-yellow-700 transition uppercase tracking-widest text-sm shadow-md"
            >
              Get A Quote
            </button>
            <button 
              onClick={() => Crisp.chat.open()} 
              className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded font-bold hover:bg-slate-900 hover:text-white transition uppercase tracking-widest text-sm shadow-md"
            >
              Live Chat
            </button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px]">
          <div className="relative w-full max-w-[450px]">
             {/* Thumbnail with Play Button */}
             <div className="aspect-video bg-slate-900 rounded-xl shadow-2xl flex items-center justify-center relative overflow-hidden group">
               <Image src="/image1.png" alt="Trailer" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border-2 border-white/50 group-hover:bg-yellow-600/90 transition-colors">
                 <PlayCircle className="text-white" size={48} />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= 4. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-900 text-white border-y-[6px] border-yellow-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">Promotions</h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Our Trailer Portfolio</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {portfolioBooks.map((cover, i) => (
              <div key={i} className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-2xl border border-slate-700 group cursor-pointer hover:border-yellow-500 transition-colors">
                <Image 
                  src={cover} 
                  alt={`Portfolio ${i + 1}`} 
                  fill 
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-xs uppercase tracking-widest border border-white px-3 py-1.5 rounded">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. PROCESS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Production Process</h2>
            <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Concept Creation", desc: "We establish core themes, mood, and target audience." },
              { title: "Storyboarding", desc: "A visual blueprint frame-by-frame." },
              { title: "Voice Over", desc: "Professional actors for emotional depth." },
              { title: "Animation", desc: "Kinetic typography and motion graphics." },
              { title: "Music & SFX", desc: "Cinematic audio engineering." },
              { title: "Final Approval", desc: "Review and high-res delivery." }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:border-yellow-500 transition-colors">
                <h3 className="font-bold text-slate-900 text-xl mb-4">Step {String(idx+1).padStart(2, '0')}</h3>
                <h4 className="font-bold text-yellow-600 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. BOTTOM CONTACT ================= */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Titles */}
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Drop Us A Line
            </h2>
            <p className="text-yellow-600 font-bold text-sm">
              Fill out your details below and we'll get back to you shortly.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_50px_-12px_rgba(234,88,12,0.15)] border border-slate-100 max-w-4xl mx-auto relative z-10">
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <input type="hidden" name="access_key" value="75a6dce0-fd56-4a07-8fdf-96b1af7c5da2" />
                  <input 
                    type="hidden" 
                    name="redirect" 
                    value="https://penguinbookpublishers.com/thank-you" 
                  />
  
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 bg-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 bg-white"
                  />
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-500 bg-white appearance-none"
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="book-writing">GhostWriting</option>
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
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 bg-white"
                  />
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 bg-white flex-grow min-h-[120px] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white font-bold py-4 rounded-md uppercase tracking-wider hover:bg-yellow-700 transition shadow-md"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {/* Box 1 */}
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="w-full border border-yellow-400 text-yellow-600 font-medium py-3 px-4 rounded-md hover:bg-yellow-50 transition bg-white"
              >
                Live Chat
              </button>
            </div>

            {/* Box 2 */}
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Make a Call</h4>
              <a
                href="tel:+1 646 344 0382"
                className="block w-full border border-yellow-400 text-yellow-600 font-medium py-3 px-4 rounded-md hover:bg-yellow-50 transition bg-white"
              >
                +1 646 344 0382
              </a>
            </div>

            {/* Box 3 */}
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Send us Email</h4>
              <a
                href="mailto:info@penguinbookpublishers.net"
                className="block w-full border border-yellow-400 text-yellow-600 font-medium py-3 px-4 rounded-md hover:bg-yellow-50 transition bg-white text-sm md:text-base"
              >
                info@penguinbookpublishers.net
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}