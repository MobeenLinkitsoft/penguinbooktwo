"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, FileText, LayoutTemplate } from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal";

export default function BookPublishingPage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map((_, i) => `/Logos/log${i + 1}.png`);
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // All 86 Portfolio Books
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
              <span className="text-white text-xs font-bold uppercase tracking-widest">Book Publishing Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Take Your Manuscript to the Global Stage.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
              Our comprehensive book publishing services transform your finished manuscript into a polished masterpiece, ready for Amazon KDP, Barnes & Noble, Apple Books, and bookstores worldwide.
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
              <h3 className="text-2xl font-black text-slate-900 mb-2">Publish Now!</h3>
              <p className="text-sm text-slate-500 mb-8">Consult with a book publishing expert for free.</p>
              
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
            Turn Your Manuscript Into a Globally Recognized Bestseller
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Publishing a book requires a complex understanding of metadata, cover design, formatting, and platform algorithms. Whether you aim to self-publish or establish a traditional presence, navigating the publishing world can be overwhelming.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Our specialized book publishers take care of everything—from ISBN allocation and copyright registration to Kindle Direct Publishing (KDP), paperback print-on-demand, and widespread global distribution via IngramSpark. We ensure your book looks flawless and reaches readers worldwide.
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
          {/* Digital E-Reader / Local Book Mockup */}
          <div className="relative w-64 h-96 rounded-lg shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition duration-500 border-4 border-white">
            <Image 
              src="/Book/Book12.jpg" 
              alt="Featured Published Book" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* ================= 4. CLIENT-CENTRIC APPROACH ================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Comprehensive Publishing Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors transform group-hover:-translate-y-1">
                <FileText size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Manuscript Formatting</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                We prepare your document strictly adhering to industry standards. This includes seamless typesetting, pagination, font selection, and structural styling for print and digital reading.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors transform group-hover:-translate-y-1">
                <LayoutTemplate size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Cover Design & Branding</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                People do judge a book by its cover. Our design experts create captivating, click-worthy covers for eBooks, Paperbacks, and Hardcovers to ensure maximum reader engagement.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors transform group-hover:-translate-y-1">
                <Search size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Global Distribution</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                We assign your ISBN, barcode, and metadata tags before distributing your book across platforms like Amazon, Kobo, Apple Books, Google Books, and local retail systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-900 text-white border-y-[6px] border-yellow-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">Published Works</h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Our Publishing Portfolio</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {portfolioBooks.map((cover, i) => (
              <div key={i} className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-2xl border border-slate-700 group cursor-pointer hover:border-yellow-500 transition-colors">
                <Image 
                  src={cover} 
                  alt={`Published Book ${i + 1}`} 
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

      {/* ================= 6. MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Ready to become a published author?
          </h2>
          <p className="text-yellow-600 font-bold text-sm uppercase tracking-widest">
            Let us handle the technicalities while you reap the rewards of being a published writer.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="bg-slate-900 text-white px-10 py-3.5 rounded font-bold hover:bg-slate-800 transition shadow-md uppercase text-sm tracking-widest">
              +1 (888) 919-9811
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-600 text-white px-10 py-3.5 rounded font-bold hover:bg-yellow-700 transition shadow-md uppercase text-sm tracking-widest"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= 7. 4-STEP PROCESS SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Our Process For Book Publishing</h2>
            <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#e2e8f0_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-70"></div>
              {/* Using img tag here for external Unsplash URL to bypass Next config issues securely */}
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop" 
                alt="Book Publishing Process" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-slate-200"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-10">
              
              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-300 font-serif leading-none shrink-0 w-16 text-center">1</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Manuscript Evaluation</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We begin by reviewing your completed manuscript to identify necessary adjustments. Our publishing experts assess word count, genre, and target audience to strategize your book's release.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-300 font-serif leading-none shrink-0 w-16 text-center">2</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Formatting & Typesetting</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A sloppy interior ruins the reading experience. We professionally format your book for different mediums—adjusting margins, typography, and layout specifically for Kindle (ePub) and Print formats.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-300 font-serif leading-none shrink-0 w-16 text-center">3</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Cover Design & Optimization</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our team creates high-quality, genre-specific cover art. We ensure the spine, bleed, and back cover meet physical print dimensions while keeping the front cover compelling for thumbnail displays on digital stores.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-300 font-serif leading-none shrink-0 w-16 text-center">4</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Publishing & Global Reach</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    After final approval, we handle ISBN registration, copyrighting, and uploading your book. We configure pricing, meta descriptions, and keywords to rank your book globally on platforms like Amazon and Barnes & Noble.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. BOTTOM CONTACT FORM SECTION ================= */}
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

          {/* Form Container with Soft Orange Shadow */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_50px_-12px_rgba(234,88,12,0.15)] border border-slate-100 max-w-4xl mx-auto relative z-10">
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <input type="hidden" name="access_key" value="f10abfcd-14e6-40dc-852b-ed7b35bd9825" />
                  <input 
                    type="hidden" 
                    name="redirect" 
                    value="https://penguinebookspublishing.com/thank-you" 
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
                href="tel:+1 (888) 919-9811"
                className="block w-full border border-yellow-400 text-yellow-600 font-medium py-3 px-4 rounded-md hover:bg-yellow-50 transition bg-white"
              >
                +1 (888) 919-9811
              </a>
            </div>

            {/* Box 3 */}
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Send us Email</h4>
              <a
                href="mailto:info@penguinebookspublishing.com "
                className="block w-full border border-yellow-400 text-yellow-600 font-medium py-3 px-4 rounded-md hover:bg-yellow-50 transition bg-white text-sm md:text-base"
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