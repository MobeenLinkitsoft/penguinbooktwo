"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare, Phone, Mail, ArrowRight, BookOpen } from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal";

export default function PortfolioPage() {
  // Generates 86 items mapping to public/Book/Book1.jpg through public/Book/Book86.jpg
  const portfolioItems = Array.from({ length: 86 }).map((_, i) => ({
    id: i,
    image: `/Book/Book${i + 1}.jpg`,
    title: `Published Work ${i + 1}`,
  }));

  // Generates array for the 14 logos
  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`,
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Double the array so the infinite scroll animation is completely seamless
  const seamlessLogos = [...trustLogos, ...trustLogos];

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans antialiased">
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[500px] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-900/60 mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16 text-left md:text-center">
          <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Our Masterpieces
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Our Publishing <span className="text-yellow-500">Portfolio</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Explore a curated selection of our most successful titles across fiction, non-fiction, and academic genres.
          </p>
        </div>
      </section>

      {/* ================= AUTO-MOVING LOGO SLIDER ================= */}
      <section className="bg-yellow-600 py-8 border-b border-yellow-700 shadow-inner relative overflow-hidden">
        {/* Gradient masks for smooth fade in/out on the edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-yellow-600 to-transparent z-10 hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-yellow-600 to-transparent z-10 hidden md:block"></div>
        
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-20 pr-12 md:pr-20 opacity-90 hover:opacity-100 transition-opacity">
              {seamlessLogos.map((logoUrl, index) => (
                <div
                  key={index}
                  className="relative h-12 w-32 md:w-40 shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={logoUrl}
                    alt={`Partner Logo ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-contain brightness-0 invert drop-shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN PORTFOLIO GRID ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Publications
          </h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Every book tells a unique story. Discover the exceptional quality, stunning cover designs, and masterful formatting we bring to our authors' works.
          </p>
        </div>

        {/* Dense Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setIsModalOpen(true)}
              className="group relative overflow-hidden rounded-xl shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white border border-slate-200/60"
            >
              <div className="aspect-[2/3] w-full relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Glassmorphism Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-4">
                <BookOpen className="text-yellow-400 w-8 h-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <span className="text-white text-sm font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  Publish Yours
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Ready to Become a Bestselling Author?
          </h2>
          <p className="text-yellow-400 font-medium text-lg md:text-xl tracking-wide max-w-3xl mx-auto">
            Transform your manuscript into a beautifully published book that captivates readers globally.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="tel:+16463440382"
              className="bg-yellow-600 text-white px-8 py-4 rounded-md font-bold hover:bg-yellow-500 transition shadow-lg uppercase text-sm tracking-widest flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +1 646 344 0382
            </a>
            <button
              onClick={() => Crisp.chat.open()}
              className="bg-white/10 border-2 border-white/20 text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-slate-900 transition uppercase text-sm tracking-widest flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Live Chat
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-600 text-white px-8 py-4 rounded-md font-bold hover:bg-yellow-500 transition shadow-lg uppercase text-sm tracking-widest flex items-center gap-2"
            >
              Get A Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CONTACT FORM SECTION ================= */}
      <section className="py-24 relative bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Start Your Publishing Journey
            </h2>
            <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
              Fill out the form below with your project details, and our publishing experts will get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-xl border border-slate-200 max-w-4xl mx-auto relative z-10">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
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
                    placeholder="Full Name"
                    required
                    name="name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition text-slate-800 placeholder-slate-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition text-slate-800 placeholder-slate-400"
                  />
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition text-slate-800 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a Service</option>
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
                </div>
                <div className="flex flex-col gap-6">
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition text-slate-800 placeholder-slate-400"
                  />
                  <textarea
                    placeholder="Tell us about your book or project..."
                    required
                    name="message"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition text-slate-800 placeholder-slate-400 flex-grow min-h-[140px] resize-none"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white font-bold py-5 rounded-lg uppercase tracking-widest hover:bg-yellow-700 transition shadow-lg mt-2 flex items-center justify-center gap-2"
              >
                Submit Project Details
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="w-full bg-slate-50 text-slate-900 font-semibold py-3 px-4 rounded-md hover:bg-slate-100 transition border border-slate-200"
              >
                Start Live Chat
              </button>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900">Give Us A Call</h4>
              <a
                href="tel:+16463440382"
                className="block w-full bg-slate-50 text-slate-900 font-semibold py-3 px-4 rounded-md hover:bg-slate-100 transition border border-slate-200"
              >
                +1 646 344 0382
              </a>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900">Send an Email</h4>
              <a
                href="mailto:info@penguinbookspublisher.com "
                className="block w-full bg-slate-50 text-slate-900 font-semibold py-3 px-2 rounded-md hover:bg-slate-100 transition border border-slate-200 text-sm"
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