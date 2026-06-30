"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Paintbrush,
  Smile,
  Wand2,
  Image as ImageIcon,
  Layers,
  PenTool,
  MessageSquare,
  Phone,
  Mail,
  Palette,
  Sparkles
} from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal";

export default function BookIllustrationsPage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`
  );
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // All 86 Portfolio Books (Simulated 12)
  const portfolioBooks = Array.from({ length: 12 }).map(
    (_, i) => `/Book/Book${i + 1}.jpg`
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-800 overflow-hidden">
      {/* Global Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay - Artistic theme */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-purple-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 animate-pulse"></span>
              <span className="text-white text-xs font-semibold uppercase tracking-widest">
                Premium Book Illustrations
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Bring Your Story to Life with <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Masterful Art.</span>
            </h1>
            <p className="text-lg text-indigo-100 max-w-xl leading-relaxed font-medium">
              Visuals speak volumes. Breathe life into your characters, worlds,
              and narratives with our award-winning book illustration services,
              tailored for children's books, graphic novels, and custom cover art.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-fuchsia-600 text-white px-8 py-4 rounded-full font-bold hover:bg-fuchsia-500 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(192,38,211,0.5)] hover:shadow-[0_0_25px_-5px_rgba(192,38,211,0.7)] uppercase tracking-widest text-sm hover:-translate-y-1"
              >
                Claim Your Free Quote
              </button>
              <button  
                onClick={() => Crisp.chat.open()} 
                className="border-2 border-fuchsia-300/50 text-fuchsia-50 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-fuchsia-900 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest text-sm hover:-translate-y-1"
              >
                Talk to an Artist
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-white/40 relative">
              <div className="absolute -top-5 -right-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-5 rounded-full shadow-lg transform rotate-3">
                Save 20% Today
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                Start Your Masterpiece
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Consult with an illustration expert for free.
              </p>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="access_key" value="f10abfcd-14e6-40dc-852b-ed7b35bd9825" />
                <input type="hidden" name="redirect" value="https://penguinbookspublisher.com/thank-you" />

                <input
                  type="text"
                  placeholder="Full Name *"
                  name="name"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition"
                />
                <input
                  name="tel"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition"
                />
               <select
                  name="service"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition text-slate-600 appearance-none"
                >
                  <option value="" disabled selected>Select Service Required</option>
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
                  placeholder="Tell us about your art vision..."
                  name="message"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition resize-none h-24"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white font-bold py-4 mt-2 rounded-xl uppercase tracking-widest hover:bg-fuchsia-600 transition-colors shadow-lg text-sm"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. INFINITE MARQUEE LOGOS ================= */}
      <section className="bg-purple-50 py-8 border-b border-purple-100 overflow-hidden">
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 40s linear infinite; display: flex; width: max-content; }
          .animate-marquee:hover { animation-play-state: paused; }
        `}</style>

        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-20 pr-12 md:pr-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
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
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Captivating <span className="text-fuchsia-600">Book Illustration</span> Services
          </h2>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            Penguin Books Publisher offers a diverse range of illustration
            styles to match the tone of your manuscript. From whimsical
            watercolors for children's books to hyper-realistic digital
            paintings for sci-fi and fantasy, our artists bring your imagination
            to the page.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            We don't just draw; we tell stories visually. Our illustrators work
            closely with you to ensure character consistency, mood lighting, and
            engaging compositions that make readers want to turn the page.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-fuchsia-700 transition-colors uppercase tracking-widest text-sm shadow-md"
            >
              Start Your Project
            </button>
            <button  
              onClick={() => Crisp.chat.open()} 
              className="border-2 border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-bold hover:border-slate-900 hover:text-slate-900 transition-colors uppercase tracking-widest text-sm shadow-sm"
            >
              Chat With Us
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[450px]">
           {/* Soft Blob Background */}
           <div className="absolute inset-0 bg-fuchsia-200 rounded-full blur-3xl opacity-40 transform scale-90"></div>
           
          {/* Overlapping Real Book Covers for Illustrations */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            <div className="absolute w-56 h-80 rounded-2xl shadow-2xl overflow-hidden transform -rotate-6 hover:-rotate-3 transition-transform duration-500 border-[6px] border-white z-0 -translate-x-12">
              <Image
                src="/Book/Book34.jpg"
                alt="Illustration Design 1"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-fuchsia-900/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute w-56 h-80 rounded-2xl shadow-2xl overflow-hidden transform rotate-6 hover:rotate-3 transition-transform duration-500 border-[6px] border-white z-10 translate-x-12 mt-12">
              <Image
                src="/Book/Book41.jpg"
                alt="Illustration Design 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. 6-GRID SERVICES SECTION ================= */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <p className="text-fuchsia-600 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <Palette size={16} /> Artistic Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              What We Paint & Create
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Box 1 */}
            <div className="bg-slate-50 p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-300 border border-slate-100 text-center group">
              <div className="w-20 h-20 mx-auto bg-fuchsia-100 text-fuchsia-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                <Smile size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">
                Children's Book Art
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Vibrant, colorful, and highly engaging illustrations that
                capture the attention of young readers and perfectly complement
                your storytelling.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-slate-50 p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-300 border border-slate-100 text-center group">
              <div className="w-20 h-20 mx-auto bg-fuchsia-100 text-fuchsia-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
                <Wand2 size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">
                Character Design
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                We develop unique, memorable characters from scratch. From rough
                sketches to full-color turnarounds, we establish iconic looks
                for your protagonists.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-slate-50 p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-300 border border-slate-100 text-center group">
              <div className="w-20 h-20 mx-auto bg-fuchsia-100 text-fuchsia-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                <ImageIcon size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">
                Concept Art & Worlds
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Building immersive worlds for sci-fi and fantasy novels. We
                paint sprawling landscapes, intricate cities, and moody
                atmospheres that draw readers in.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-slate-50 p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-300 border border-slate-100 text-center group">
              <div className="w-20 h-20 mx-auto bg-fuchsia-100 text-fuchsia-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                <Layers size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">
                Comic & Graphic Novels
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Full-service comic production including storyboarding,
                penciling, inking, and lettering. We handle panel layouts to
                maximize narrative pacing.
              </p>
            </div>

            {/* Box 5 */}
            <div className="bg-slate-50 p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-300 border border-slate-100 text-center group">
              <div className="w-20 h-20 mx-auto bg-fuchsia-100 text-fuchsia-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
                <Paintbrush size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">
                Cover Illustrations
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Standalone, high-impact artwork specifically designed for book
                covers. We leave safe zones for typography while creating a
                visually arresting centerpiece.
              </p>
            </div>

            {/* Box 6 */}
            <div className="bg-slate-50 p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-300 border border-slate-100 text-center group">
              <div className="w-20 h-20 mx-auto bg-fuchsia-100 text-fuchsia-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                <PenTool size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">
                Line Art & Spot Art
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Elegant black-and-white chapter headers, maps, and spot
                illustrations that add a touch of class to the interior pages of
                traditional novels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-0"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h4 className="text-fuchsia-400 font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center gap-2">
            <Sparkles size={16} /> Art Showcase
          </h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">
            Our Illustration Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-6">
            {portfolioBooks.map((cover, i) => (
              <div
                key={i}
                className="aspect-[2/3] relative rounded-xl overflow-hidden shadow-2xl border border-slate-800 group cursor-pointer hover:border-fuchsia-500 transition-all duration-300"
              >
                <Image
                  src={cover}
                  alt={`Illustration Portfolio ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white font-bold text-xs uppercase tracking-widest border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-slate-900 transition-colors">
                    Explore
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. MIDDLE CTA BANNER ================= */}
      <section className="py-20 bg-fuchsia-600 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 bg-fuchsia-600/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-fuchsia-500">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Ready to Illustrate Your World?
          </h2>
          <p className="text-fuchsia-100 font-medium text-lg max-w-2xl mx-auto">
            Call us right now. Don't let your unwritten book stay unwritten, and don't let your characters remain unseen.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="tel:+1 646 344 0382"
              className="bg-white text-fuchsia-900 px-10 py-4 rounded-full font-extrabold hover:bg-fuchsia-50 transition-colors shadow-xl uppercase text-sm tracking-widest flex items-center gap-2"
            >
              <Phone size={18} /> +1 646 344 0382
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-slate-900 text-white px-10 py-4 rounded-full font-extrabold hover:bg-slate-800 transition-colors shadow-xl uppercase text-sm tracking-widest"
            >
              Request a Proposal
            </button>
          </div>
        </div>
      </section>

      {/* ================= 7. 4-STEP PROCESS SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              The Creative Process
            </h2>
            <div className="w-24 h-1.5 bg-fuchsia-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-[radial-gradient(#cbd5e1_3px,transparent_3px)] [background-size:20px_20px] -z-10 opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-fuchsia-100 rounded-full -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop"
                alt="Illustration Process"
                className="w-full h-[550px] object-cover rounded-3xl shadow-2xl border border-slate-100"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="text-6xl font-black text-fuchsia-100 font-sans leading-none shrink-0 w-16 text-center group-hover:text-fuchsia-600 transition-colors duration-300">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-fuchsia-600 transition-colors">
                    Creative Brief & Script Review
                  </h4>
                  <p className="text-base text-slate-600 leading-relaxed">
                    We start by reviewing your manuscript and discussing your
                    target audience, preferred art style, and overall vision. We
                    establish the character descriptions and environmental settings.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="text-6xl font-black text-fuchsia-100 font-sans leading-none shrink-0 w-16 text-center group-hover:text-fuchsia-600 transition-colors duration-300">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-fuchsia-600 transition-colors">
                    Storyboarding & Sketches
                  </h4>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Before adding color, we create rough black-and-white
                    sketches and storyboards. This allows you to review the
                    composition, pacing, and character expressions early in the process.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="text-6xl font-black text-fuchsia-100 font-sans leading-none shrink-0 w-16 text-center group-hover:text-fuchsia-600 transition-colors duration-300">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-fuchsia-600 transition-colors">
                    Coloring & Rendering
                  </h4>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Once the sketches are approved, our artists apply full
                    colors, lighting, and textures. We send you the fully
                    rendered artwork for final feedback and minor revisions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="text-6xl font-black text-fuchsia-100 font-sans leading-none shrink-0 w-16 text-center group-hover:text-fuchsia-600 transition-colors duration-300">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-fuchsia-600 transition-colors">
                    Final Delivery & Formatting
                  </h4>
                  <p className="text-base text-slate-600 leading-relaxed">
                    We deliver the high-resolution illustrations in your
                    required formats. If you opted for publishing services, we
                    integrate the art seamlessly into the text layout for print
                    and digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. BOTTOM CONTACT FORM SECTION ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Titles */}
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl font-black text-slate-900">
              Let's Paint Your Story
            </h2>
            <p className="text-fuchsia-600 font-semibold text-base">
              Fill out the details below, and our art directors will be in touch shortly.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(192,38,211,0.1)] border border-slate-100 max-w-4xl mx-auto relative z-10">
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition text-slate-700"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition text-slate-700"
                  />
                  <select
                    name="service"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition text-slate-600 appearance-none"
                  >
                    <option value="" disabled selected>Select a Service</option>
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition text-slate-700"
                  />
                  <textarea
                    placeholder="Tell us about your project..."
                    name="message"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition text-slate-700 flex-grow min-h-[135px] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-fuchsia-600 text-white font-extrabold py-5 mt-4 rounded-xl uppercase tracking-widest hover:bg-fuchsia-700 transition-colors shadow-lg shadow-fuchsia-600/20 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {/* Box 1 */}
            <div className="text-center space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-12 h-12 mx-auto bg-fuchsia-100 text-fuchsia-600 rounded-full flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Discuss Your Art</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="block w-full text-fuchsia-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-fuchsia-100 transition-colors text-sm"
              >
                Start Live Chat
              </button>
            </div>

            {/* Box 2 */}
            <div className="text-center space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
               <div className="w-12 h-12 mx-auto bg-fuchsia-100 text-fuchsia-600 rounded-full flex items-center justify-center">
                <Phone size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Make a Call</h4>
              <a
                href="tel:+1 646 344 0382"
                className="block w-full text-fuchsia-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-fuchsia-100 transition-colors text-sm"
              >
                +1 646 344 0382
              </a>
            </div>

            {/* Box 3 */}
            <div className="text-center space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
               <div className="w-12 h-12 mx-auto bg-fuchsia-100 text-fuchsia-600 rounded-full flex items-center justify-center">
                <Mail size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Send us Email</h4>
              <a
                href="mailto:info@penguinbookspublisher.com "
                className="block w-full text-fuchsia-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-fuchsia-100 transition-colors text-sm"
              >
                info@penguinbookspublisher.com 
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}