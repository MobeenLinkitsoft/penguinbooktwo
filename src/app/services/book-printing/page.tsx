"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Printer,
  Package,
  Layers,
  Settings,
  BookCopy,
  CheckCircle2,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal";

export default function BookPrintingPage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`
  );
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // All 86 Portfolio Books (12 shown in array)
  const portfolioBooks = Array.from({ length: 12 }).map(
    (_, i) => `/Book/Book${i + 1}.jpg`
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
        {/* Adjusted gradient for deeper contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Premium Book Printing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Bring Your Manuscript to Life with World-Class Printing.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
              Transform your words into beautifully crafted physical books. From luxurious hardcovers to sleek paperbacks, we deliver pristine quality directly to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-600 text-white px-8 py-4 rounded font-bold hover:bg-yellow-500 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(202,138,4,0.4)] uppercase tracking-widest text-sm hover:-translate-y-1"
              >
                Get A Quote
              </button>
              <button
                onClick={() => Crisp.chat.open()}
                className="border border-white/40 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest text-sm hover:-translate-y-1"
              >
                Live Chat
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-white/30 relative">
              <div className="absolute -top-5 -right-4 bg-yellow-600 text-white text-xs font-black uppercase tracking-widest py-2.5 px-5 rounded-lg shadow-xl transform rotate-3">
                20% Off Today
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Start Printing!
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Consult with a printing expert for free.
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
                  className="w-full border-b border-slate-300 p-3 text-sm focus:border-yellow-500 outline-none transition bg-transparent placeholder-slate-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="w-full border-b border-slate-300 p-3 text-sm focus:border-yellow-500 outline-none transition bg-transparent placeholder-slate-400"
                />
                <input
                  name="tel"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full border-b border-slate-300 p-3 text-sm focus:border-yellow-500 outline-none transition bg-transparent placeholder-slate-400"
                />
                {/* Fixed React select default value issue */}
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full border border-slate-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-600 bg-white appearance-none mt-2"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option value="book-writing">GhostWriting</option>
                  <option value="book-publishing">Book Publishing</option>
                  <option value="book-editing">Book Editing & Proofreading</option>
                  <option value="cover-design">Book Cover Design</option>
                  <option value="book-illustrations">Book Illustrations</option>
                  <option value="book-printing">Book Printing</option>
                  <option value="book-marketing">Book Marketing</option>
                  <option value="authors-website">Author&apos;s Website</option>
                  <option value="global-distributions">Global Distributions</option>
                  <option value="article-writing">Article Writing & Blogs</option>
                  <option value="book-trailer">Book Video Trailer</option>
                  <option value="audio-book">Audio Book</option>
                </select>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="w-full border-b border-slate-300 p-3 text-sm focus:border-yellow-500 outline-none transition text-slate-600 bg-transparent placeholder-slate-400 mt-2 resize-none"
                  rows={2}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white font-bold py-4 mt-6 rounded uppercase tracking-widest hover:bg-yellow-600 transition-colors shadow-lg text-sm"
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
            <div className="animate-marquee flex items-center gap-12 md:gap-20 pr-12 md:pr-20 opacity-80 mix-blend-multiply hover:mix-blend-normal transition-all duration-500">
              {seamlessLogos.map((logoUrl, index) => (
                <div
                  key={index}
                  className="relative h-12 w-32 shrink-0 flex items-center justify-center filter brightness-0 invert"
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
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Your Masterpiece is Ready. Let&apos;s Put It in Their Hands.
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Holding a physical copy of your book is the ultimate reward for any
            author. We provide state-of-the-art Print on Demand (POD) and bulk
            printing solutions. From high-quality paper stock to perfect
            binding, we ensure your book feels as premium as the story inside.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Whether you need a short run of 50 copies for a local launch or
            5,000 copies for worldwide distribution, our fulfillment network
            guarantees fast, affordable, and flawless delivery.
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
              className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded font-bold hover:bg-slate-900 hover:text-white transition uppercase tracking-widest text-sm shadow-sm"
            >
              Live Chat
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[400px]">
          {/* Overlapping Real Book Covers to represent Print */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center group">
            <div className="absolute w-56 h-80 rounded-lg shadow-2xl overflow-hidden transform -rotate-6 group-hover:-rotate-12 transition duration-500 border-4 border-white z-0 -translate-x-10 group-hover:-translate-x-16">
              <Image
                src="/Book/Book15.jpg"
                alt="Printed Book 1"
                fill
                className="object-cover opacity-90"
              />
            </div>
            <div className="absolute w-56 h-80 rounded-lg shadow-2xl overflow-hidden transform rotate-6 group-hover:rotate-12 transition duration-500 border-4 border-white z-10 translate-x-10 group-hover:translate-x-16">
              <Image
                src="/Book/Book16.jpg"
                alt="Printed Book 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. CLIENT-CENTRIC APPROACH ================= */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-yellow-600 font-bold text-sm uppercase tracking-wider">
              Tailored Printing
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
              Standard And Custom Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                <Layers size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">
                Binding & Paper Types
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Select from perfect binding, case laminate, or dust jackets. Choose cream paper for fiction, or premium glossy stock for children&apos;s books.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                <Settings size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">
                Custom Finishes
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Stand out on the shelves with custom trim sizes, matte or glossy cover finishes, foil stamping, embossing, and brilliant color interiors.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                <Package size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">
                Short Run & Bulk
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                No strict minimums. Print exactly what you need with Print on Demand (POD), or order in bulk to reduce your cost-per-unit for inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-950 text-white border-y-[6px] border-yellow-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">
            Print Showcase
          </h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">
            Our Printed Portfolio
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
            {portfolioBooks.map((cover, i) => (
              <div
                key={i}
                className="aspect-[2/3] relative rounded-md overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-slate-800 group cursor-pointer hover:border-yellow-500 transition-all duration-300"
              >
                <Image
                  src={cover}
                  alt={`Printed Portfolio ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-xs uppercase tracking-widest border border-white/50 backdrop-blur-sm px-4 py-2 rounded hover:bg-white hover:text-slate-900 transition-colors">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. MIDDLE CTA BANNER ================= */}
      <section className="py-20 bg-yellow-50 border-b border-yellow-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Ready to Hold Your Book in Your Hands?
          </h2>
          <p className="text-slate-600 font-medium text-lg">
            Call us right now. Let&apos;s bring your digital manuscript into the physical world with precision and care.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a href="tel:+16463440382" className="bg-slate-900 text-white px-10 py-4 rounded font-bold hover:bg-slate-800 transition shadow-lg uppercase text-sm tracking-widest flex items-center gap-2">
              <Phone size={18} /> +1 646 344 0382
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-600 text-white px-10 py-4 rounded font-bold hover:bg-yellow-700 transition shadow-lg uppercase text-sm tracking-widest"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= 7. 4-STEP PROCESS SECTION ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Our 4-Step Printing Process
            </h2>
            <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-[radial-gradient(#cbd5e1_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[radial-gradient(#fde047_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-40"></div>
              <img
                src="/image.png"
                alt="Printing Press Process"
                className="w-full h-[550px] object-cover rounded-2xl shadow-2xl border border-slate-100"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-12">
              <div className="flex gap-6 group cursor-default">
                <div className="text-7xl font-bold text-slate-200 group-hover:text-yellow-500 transition-colors font-serif leading-none shrink-0 w-16 text-center">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    Consultation & Specifications
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We finalize the physical attributes of your book. You select
                    the trim size, paper weight, binding type (paperback vs.
                    hardcover), and cover finish (matte vs. glossy).
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group cursor-default">
                <div className="text-7xl font-bold text-slate-200 group-hover:text-yellow-500 transition-colors font-serif leading-none shrink-0 w-16 text-center">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    Proofing & Sample Copy
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Before mass printing, we run a digital or physical proof.
                    This ensures the bleeds are correct, colors print
                    accurately, and the text formatting is perfect.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group cursor-default">
                <div className="text-7xl font-bold text-slate-200 group-hover:text-yellow-500 transition-colors font-serif leading-none shrink-0 w-16 text-center">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    Mass Production & QA
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Once approved, your book hits the press. Our production
                    managers conduct rigorous quality assurance checks to ensure
                    every single copy meets our pristine standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group cursor-default">
                <div className="text-7xl font-bold text-slate-200 group-hover:text-yellow-500 transition-colors font-serif leading-none shrink-0 w-16 text-center">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    Packaging & Global Delivery
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The final books are securely boxed to prevent damage. We
                    ship directly to your doorstep, your publisher, or straight
                    to global distribution warehouses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. BOTTOM CONTACT FORM SECTION ================= */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Titles */}
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Drop Us A Line
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base">
              Fill out your details below and a printing specialist will get back to you shortly.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 max-w-4xl mx-auto relative z-10">
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700"
                  />
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-600 appearance-none"
                  >
                    <option value="" disabled>
                      Select Service Required
                    </option>
                    <option value="book-writing">GhostWriting</option>
                    <option value="book-publishing">Book Publishing</option>
                    <option value="book-editing">Book Editing & Proofreading</option>
                    <option value="cover-design">Book Cover Design</option>
                    <option value="book-illustrations">Book Illustrations</option>
                    <option value="book-printing">Book Printing</option>
                    <option value="book-marketing">Book Marketing</option>
                    <option value="authors-website">Author&apos;s Website</option>
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700"
                  />
                  <textarea
                    placeholder="Tell us about your printing needs..."
                    name="message"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 flex-grow min-h-[136px] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-yellow-700 transition-colors shadow-md mt-2"
              >
                Send Request
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="bg-white rounded-xl p-6 text-center space-y-4 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Discuss Your Project</h4>
                <button
                  onClick={() => Crisp.chat.open()}
                  className="text-slate-500 hover:text-yellow-600 font-medium transition text-sm"
                >
                  Start a Live Chat
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center space-y-4 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Make a Call</h4>
                <a
                  href="tel:+16463440382"
                  className="text-slate-500 hover:text-yellow-600 font-medium transition text-sm"
                >
                  +1 646 344 0382
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center space-y-4 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Send an Email</h4>
                <a
                  href="mailto:info@penguinbookpublishers.net"
                  className="text-slate-500 hover:text-yellow-600 font-medium transition text-sm"
                >
                  info@penguinbookpublishers.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}