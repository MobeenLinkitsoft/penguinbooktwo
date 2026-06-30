"use client";

import React, { useState } from "react";
import {
  Check,
  Search,
  PenTool,
  FileEdit,
  LayoutTemplate,
  Megaphone,
} from "lucide-react";
import Image from "next/image";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal"; // Ensure this path matches your project structure

export default function AboutPage() {
  const genres = [
    "General Non-Fiction",
    "Narrative Non-Fiction",
    "Biography",
    "Autobiography",
    "Memoir",
    "Speech",
    "Drama",
    "Poetry",
    "Children's Library",
    "Short Story",
    "Fantasy",
    "Humor",
    "Fable",
    "Fairy Tale",
    "Tall Tale",
    "Science Fiction",
    "Realistic Fiction",
    "Folklore",
    "Historical Fiction",
    "Horror",
    "Legend",
    "Mystery",
    "Mythology",
    "",
  ];

  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`,
  );

  // Double the array so the infinite scroll animation is completely seamless
  const seamlessLogos = [...trustLogos, ...trustLogos];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full bg-white min-h-screen">
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[450px] flex flex-col justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
          <p className="text-white text-sm font-bold uppercase tracking-widest mb-2">
            The Premier Publishing Experience
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            About Us
          </h1>
        </div>
      </section>

      {/* ================= AUTO-MOVING LOGO SLIDER ================= */}
      <section className="bg-yellow-600 py-6 border-b border-yellow-700 shadow-inner overflow-hidden">
        <style>{`
                      @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                      }
                      .animate-marquee {
                        animation: marquee 30s linear infinite;
                        display: flex;
                        width: max-content;
                      }
                      .animate-marquee:hover {
                        animation-play-state: paused;
                      }
                    `}</style>

        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-16 pr-12 md:pr-16 opacity-90">
              {seamlessLogos.map((logoUrl, index) => (
                <div
                  key={index}
                  className="relative h-10 w-28 md:w-32 shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={logoUrl}
                    alt={`Partner Logo ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 112px, 128px"
                    className="object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPLIT SECTION: REFINING YOUR JOURNEY ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            Transforming Your Literary Vision into a Global Masterpiece.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            At Penguin Books Publisher, we believe every author has a story that deserves to be heard. Whether it’s a gripping fictional epic, a profound memoir, or a transformative business guide, we provide the elite infrastructure needed to bring your manuscript to life with pristine quality.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We are a collective of veteran editors, bestselling ghostwriters, and industry-leading marketers. Our team doesn't just publish books; we build author careers. With thousands of successful titles distributed worldwide, we offer the personalized attention of a boutique agency backed by the distribution power of a major publishing house.
          </p>
        </div>

        {/* Abstract Overlapping UI Mockups */}
        <div className="relative h-[500px] w-full hidden md:block">
          {/* Main Document Mockup */}
          <div className="absolute top-0 right-12 w-[280px] h-[380px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 z-10 transform rotate-2">
            <div className="w-3/4 h-4 bg-slate-200 rounded mb-4"></div>
            <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
            <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
            <div className="w-5/6 h-2 bg-slate-100 rounded mb-6"></div>
            <div className="w-full h-32 bg-slate-50 border border-slate-100 rounded mb-4 flex items-center justify-center">
              <span className="text-slate-300 text-xs font-bold uppercase">
                Visual Art
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
            <div className="w-4/5 h-2 bg-slate-100 rounded"></div>
          </div>

          {/* Orange UI Element */}
          <div className="absolute top-20 -right-4 w-[200px] h-[160px] bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-2xl z-20 p-5 transform -rotate-3 text-white">
            <h4 className="font-bold text-sm mb-2">Market Driven</h4>
            <div className="w-full h-1 bg-white/30 rounded mb-2"></div>
            <div className="w-3/4 h-1 bg-white/30 rounded mb-2"></div>
            <div className="w-5/6 h-1 bg-white/30 rounded"></div>
          </div>

          {/* Darker UI Element */}
          <div className="absolute bottom-16 left-8 w-[220px] h-[180px] bg-gradient-to-tr from-slate-800 to-slate-900 rounded-xl shadow-2xl z-30 p-5 transform rotate-3 text-white">
            <h4 className="font-bold text-sm mb-2 text-yellow-500">
              Elite Publishing Standards
            </h4>
            <div className="mt-8 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10"></div>
              <div>
                <div className="w-16 h-2 bg-white/20 rounded mb-1"></div>
                <div className="w-12 h-2 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5-STEP PROCESS SECTION ================= */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <Search
                className="mx-auto text-slate-400 mb-4"
                size={40}
                strokeWidth={1.5}
              />
              <h3 className="font-bold text-sm text-slate-900 mb-2">
                Ideation & Outlining
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We extract your core concepts and structure them into a compelling, market-ready narrative outline.
              </p>
            </div>

            <div className="text-center">
              <PenTool
                className="mx-auto text-slate-400 mb-4"
                size={40}
                strokeWidth={1.5}
              />
              <h3 className="font-bold text-sm text-slate-900 mb-2">
                Original Drafting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our seasoned ghostwriters transform the approved outline into a rich, engaging, and highly original manuscript.
              </p>
            </div>

            <div className="text-center">
              <FileEdit
                className="mx-auto text-slate-400 mb-4"
                size={40}
                strokeWidth={1.5}
              />
              <h3 className="font-bold text-sm text-slate-900 mb-2">
                Editorial Excellence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rigorous developmental editing, line-editing, and proofreading to ensure absolute grammatical and structural perfection.
              </p>
            </div>

            <div className="text-center">
              <LayoutTemplate
                className="mx-auto text-slate-400 mb-4"
                size={40}
                strokeWidth={1.5}
              />
              <h3 className="font-bold text-sm text-slate-900 mb-2">
                Design & Formatting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We provide custom cover art and meticulous interior typesetting optimized perfectly for print and digital reading.
              </p>
            </div>

            <div className="text-center">
              <Megaphone
                className="mx-auto text-slate-400 mb-4"
                size={40}
                strokeWidth={1.5}
              />
              <h3 className="font-bold text-sm text-slate-900 mb-2">
                Publishing & Marketing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Global distribution across major retailers, paired with aggressive PR and targeted marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GENRES / DRIVER'S SEAT SECTION ================= */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Complete Creative Control, Infinite Possibilities.
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
          When you partner with us, you maintain full ownership of your work and 100% of your royalties. You dictate the creative direction—from editorial revisions to cover design choices—while our experts execute the heavy lifting. 
          <br />
          <br />
          Our versatile team spans a multitude of genres, ensuring your specific niche receives the specialized attention it requires to stand out in a crowded market:
        </p>

        {/* Genres Grid Box */}
        <div className="border border-slate-200 rounded-3xl p-8 mb-10 shadow-sm text-left bg-white relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
            {genres.map((genre, idx) =>
              genre ? (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                >
                  <div className="min-w-[16px]">
                    <Check size={16} className="text-slate-400" />
                  </div>
                  {genre}
                </div>
              ) : (
                <div key={idx} className="hidden lg:block"></div>
              ),
            )}
          </div>
        </div>

        <p className="text-lg text-slate-600 font-medium">
          Ready to dominate your specific genre? <br />
          <span className="font-bold text-slate-900">
            Speak to a publishing strategist Toll Free +1 646 344 0382
          </span>
        </p>
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6 relative">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to become a published author?
          </h2>
          <p className="text-yellow-600 font-bold text-sm uppercase tracking-wider">
            Let our experts turn your manuscript into a best-selling reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-600 text-white px-8 py-3 rounded font-bold hover:bg-yellow-700 transition"
            >
              Get A Quote
            </button>
            <button
              onClick={() => Crisp.chat.open()}
              className="border-2 border-slate-800 text-slate-900 px-8 py-3 rounded font-bold hover:bg-slate-800 hover:text-white transition"
            >
              Live Chat
            </button>
            <a href="tel:+16463440382" className="bg-yellow-600 text-white px-8 py-3 rounded font-bold hover:bg-yellow-700 transition flex items-center justify-center">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTACT FORM SECTION ================= */}
      <section className="py-20 relative bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Drop Us A Line
            </h2>
            <p className="text-yellow-600 font-bold text-sm uppercase tracking-wide">
              Fill out your details below and we'll get back to you shortly.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_50px_-12px_rgba(234,88,12,0.15)] border border-yellow-100 max-w-4xl mx-auto relative z-10">
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
                    placeholder="Name"
                    required
                    name="name"
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 bg-white"
                  />
                  <select
                    name="service"
                    required
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-500 bg-white appearance-none"
                  >
                    <option value="" disabled selected>
                      Select Service
                    </option>
                    <option value="book-writing">GhostWriting</option>
                    <option value="book-publishing">Book Publishing</option>
                    <option value="book-editing">
                      Book Editing & Proofreading
                    </option>
                    <option value="cover-design">Book Cover Design</option>
                    <option value="book-illustrations">
                      Book Illustrations
                    </option>
                    <option value="book-printing">Book Printing</option>
                    <option value="book-marketing">Book Marketing</option>
                    <option value="authors-website">Author's Website</option>
                    <option value="global-distributions">
                      Global Distributions
                    </option>
                    <option value="article-writing">
                      Article Writing & Blogs
                    </option>
                    <option value="book-trailer">Book Video Trailer</option>
                    <option value="audio-book">Audio Book</option>
                  </select>
                </div>
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
                    required
                    name="message"
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 bg-white flex-grow min-h-[120px] resize-none"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white font-bold py-4 rounded-md uppercase tracking-wider hover:bg-yellow-700 transition shadow-md"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="w-full border border-yellow-400 text-yellow-600 font-medium py-3 px-4 rounded-md hover:bg-yellow-50 transition bg-white"
              >
                Live Chat
              </button>
            </div>
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Make a Call</h4>
              <a
                href="tel:+1 646 344 0382"
                className="block w-full border border-yellow-400 text-yellow-600 font-medium py-3 px-4 rounded-md hover:bg-yellow-50 transition bg-white"
              >
                +1 646 344 0382
              </a>
            </div>
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Send us Email</h4>
              <a
                href="mailto:info@penguinbookspublisher.com "
                className="block w-full border border-yellow-400 text-yellow-600 font-medium py-3 px-2 rounded-md hover:bg-yellow-50 transition bg-white text-sm md:text-base"
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