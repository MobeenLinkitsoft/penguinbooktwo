"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  MessageSquare,
  BookOpen,
  PenTool,
  LayoutTemplate,
  TrendingUp,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Target,
  Quote,
  Plus,
  Minus,
  BookOpenCheck,
  Bookmark,
  Rocket,
} from "lucide-react";
import QuoteModal from "../components/global/QuoteModal";
import { Crisp } from "crisp-sdk-web";

export default function Home() {
  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`,
  );
  const seamlessLogos = [...trustLogos, ...trustLogos];

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy Portfolio Covers using your local assets
  const portfolioBooks = Array.from({ length: 5 }).map(
    (_, i) => `/Book/Book${i + 1}.jpg`,
  );

  // Testimonial Carousel State & Data
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Fiction Author",
      text: "Penguin Books Publisher transformed my raw manuscript into a polished masterpiece. Their editing team was incredibly thorough, and the cover design blew me away. I hit #1 in my category within a week of launch!",
    },
    {
      name: "David Arquette",
      role: "Business Coach",
      text: "I needed a book to establish authority in my niche. Their ghostwriters captured my voice perfectly. The entire process from outlining to formatting and Amazon publication was completely seamless.",
    },
    {
      name: "Elena Rostova",
      role: "Indie Publisher",
      text: "The book marketing campaign they ran for me was phenomenal. We saw a 300% increase in Kindle pages read within the first month. The ROI has been absolutely incredible. Highly recommend their team.",
    },
  ];

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );

  // FAQ Accordion State & Data
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);
  const faqs = [
    {
      question: "How much does it cost to publish a book?",
      answer:
        "The cost varies depending on your specific needs, such as editing length, cover design complexity, and marketing goals. We offer customizable packages tailored to fit independent author budgets.",
    },
    {
      question: "Do I keep the rights and royalties to my book?",
      answer:
        "Absolutely. 100%. We are a publishing services company, meaning you retain all creative rights, copyrights, and 100% of the net royalties generated from your book sales.",
    },
    {
      question: "How long does the publishing process take?",
      answer:
        "If your manuscript is fully written and edited, publication can happen in as little as 3-4 weeks. If you require ghostwriting from scratch, the process typically takes 3 to 6 months depending on the word count.",
    },
    {
      question: "Do you guarantee my book will be a bestseller?",
      answer:
        "While no ethical company can guarantee a bestseller, our aggressive, data-driven marketing campaigns and Amazon SEO optimization significantly increase your chances of dominating your category charts.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };



  return (
    <div className="w-full bg-slate-50 font-sans">
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Boost Your Book with Our Professional Publishing Service!
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
              We provide end-to-end book writing, editing, publishing, and
              marketing services. Turn your unwritten ideas into a globally
              distributed bestseller with our expert team.
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

          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md relative">
              <div className="absolute -top-6 right-8 bg-yellow-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-4 rounded shadow-lg">
                20% Off Today
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Publish Now!
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Consult with a publishing advisor for free.
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
                  <option value="book-illustrations">Book Illustrations</option>
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

      {/* ================= AUTO-MOVING LOGO SLIDER ================= */}
      <section className="bg-yellow-600 py-6 border-b border-yellow-700 shadow-inner overflow-hidden">
        {/* Inline styles for the infinite marquee animation */}
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
                    /* Note: 'brightness-0 invert' turns logos solid white. Remove this class if you want their original colors! */
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. IT'S TIME TO REVEAL BANNER ================= */}
      <section className="py-12 bg-white text-center px-6">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-wide mb-4">
          It's Time To Reveal Your Creative Vision
        </h2>
        <p className="text-slate-600 font-medium mb-6">
          Call us right now. Don't let your unwritten book stay unwritten any
          further!
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-600 text-white px-8 py-3 rounded font-bold hover:bg-yellow-700 transition shadow-md">
            +1 646 344 0382
          </button>
          <button
            onClick={() => Crisp.chat.open()}
            className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded font-bold hover:bg-slate-900 hover:text-white transition"
          >
            Live Chat
          </button>
        </div>
      </section>

      {/* ================= 3. ENHANCE YOUR JOURNEY & 4-GRID ================= */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Enhance Your Book Publishing Journey With Our Comprehensive
              Services
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto">
              Our end-to-end services are designed to offer an exquisite
              publishing experience, ensuring your book not only launches but
              thrives.
            </p>
          </div>

          {/* Featured Service Split */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-72 rounded-lg shadow-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition duration-500 border-4 border-white">
                <Image
                  src="/Book/Book1.jpg"
                  alt="Featured Book"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h3 className="text-2xl font-black text-slate-900 uppercase">
                Call Us To Get Publishing
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Transform your draft into a masterpiece. We handle every step
                with precision and care, providing you with a dedicated project
                manager.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-800">
                {[
                  "Cover Design",
                  "Formatting",
                  "Manuscript Proofreading",
                  "Book Publishing",
                  "Author Biography",
                  "Book Marketing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="text-yellow-600" size={16} />{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-yellow-600 text-white px-8 py-3 rounded font-bold hover:bg-yellow-700 transition text-sm uppercase"
                >
                  Get A Quote
                </button>
                <button
                  onClick={() => Crisp.chat.open()}
                  className="bg-slate-900 text-white px-8 py-3 rounded font-bold hover:bg-slate-800 transition text-sm uppercase"
                >
                  Live Chat
                </button>
              </div>
            </div>
          </div>

          {/* 4 Icon Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <PenTool size={32} />,
                title: "Book Writing",
                desc: "Professional ghostwriting that perfectly captures your tone and vision.",
              },
              {
                icon: <BookOpenCheck size={32} />,
                title: "Proofreading",
                desc: "Rigorous editing to ensure grammatical perfection and structural flow.",
              },
              {
                icon: <Bookmark size={32} />,
                title: "Publishing",
                desc: "Global distribution setup across Amazon, Apple Books, and Barnes & Noble.",
              },
              {
                icon: <Rocket size={32} />,
                title: "Marketing",
                desc: "Aggressive ad campaigns and PR to catapult your book into bestseller lists.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-slate-50 text-yellow-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. TWO THINGS SPLIT ================= */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Two Things Every Book Must Do: Be Remembered By The Things That
              You Didn't Do, Than By The Ones You Did Do.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We focus on the minute details that elevate a good book to a great
              one. Expert typesetting, flawless cover design, and strategic
              market positioning.
            </p>
            <div className="flex gap-4 pt-6">
              <button className="bg-yellow-600 text-white px-8 py-3 rounded font-bold hover:bg-yellow-700 transition uppercase tracking-widest text-sm">
                Read More
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-slate-900 transition uppercase tracking-widest text-sm"
              >
                Get A Quote
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center h-[400px]">
            {/* 3D Book Stack Representation */}
            <div className="relative w-[300px] h-[350px]">
              <div className="absolute bottom-0 right-0 w-full h-[60px] bg-slate-700 rounded border border-slate-600 shadow-2xl transform translate-x-4 translate-y-4"></div>
              <div className="absolute bottom-4 right-2 w-full h-[60px] bg-slate-600 rounded border border-slate-500 shadow-2xl transform translate-x-2 translate-y-2"></div>
              <div className="absolute bottom-8 right-0 w-full h-[280px] bg-slate-800 rounded border border-slate-700 shadow-2xl flex overflow-hidden">
                <div className="w-[40px] h-full bg-slate-950 flex flex-col items-center justify-center border-r border-slate-700">
                  <span
                    className="text-white text-[10px] tracking-widest font-serif"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    PENGUIN
                  </span>
                </div>
                <div className="flex-grow relative">
                  <Image
                    src="/Book/Book2.jpg"
                    alt="Book Mockup"
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. INFINITE LOGOS ================= */}
      <section className="bg-yellow-600 py-8 border-y-4 border-yellow-650 overflow-hidden">
        <style>{`
          .animate-marquee-slow { animation: marquee 40s linear infinite; display: flex; width: max-content; }
        `}</style>
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee-slow flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
              {seamlessLogos.map((logoUrl, index) => (
                <div
                  key={index}
                  className="relative h-10 w-32 shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={logoUrl}
                    alt="Partner Logo"
                    fill
                    sizes="128px"
                    className="object-contain brightness-0 invert opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. MULTI-FACETED APPROACH ================= */}
      <section className="py-24 bg-[#1A1F24] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-center">
            {/* Custom Radar Graphic */}
            <div className="relative w-[350px] h-[350px] border border-slate-600 rounded-full flex items-center justify-center">
              <div className="absolute w-[250px] h-[250px] border border-slate-500 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
              <div className="relative w-24 h-24 bg-yellow-600 rounded-lg flex items-center justify-center shadow-[0_0_40px_rgba(234,88,12,0.4)] z-10 rotate-45">
                <BookOpen size={40} className="text-white -rotate-45" />
              </div>
              {/* Nodes */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-slate-800 rounded-full border border-yellow-500 flex items-center justify-center">
                <Globe size={18} className="text-yellow-500" />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-slate-800 rounded-full border border-yellow-500 flex items-center justify-center">
                <Target size={18} className="text-yellow-500" />
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800 rounded-full border border-yellow-500 flex items-center justify-center">
                <TrendingUp size={18} className="text-yellow-500" />
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800 rounded-full border border-yellow-500 flex items-center justify-center">
                <MessageSquare size={18} className="text-yellow-500" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-yellow-500 font-bold tracking-widest text-sm uppercase">
              Comprehensive Strategy
            </h4>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Multi-Faceted Publishing Approach
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We leverage multiple channels to ensure your book succeeds. From
              print-on-demand logistics to digital e-book distribution and
              aggressive marketing campaigns, we cover all bases.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "Amazon Kindle Direct Publishing",
                "IngramSpark Distribution",
                "Barnes & Noble Press",
                "Targeted Ad Campaigns",
                "Author Website Setup",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-medium text-slate-300"
                >
                  <CheckCircle2 className="text-yellow-500" size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= 7. PORTFOLIO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-12">
            Our Portfolio
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {portfolioBooks.map((cover, i) => (
              <div
                key={i}
                className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-xl border border-slate-200 hover:-translate-y-2 transition-transform duration-300"
              >
                <Image
                  src={cover}
                  alt={`Portfolio ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => Crisp.chat.open()}
              className="bg-yellow-600 text-white px-8 py-3 rounded font-bold hover:bg-yellow-700 transition uppercase tracking-widest text-sm shadow-md"
            >
              Live Chat
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-slate-900 text-white px-8 py-3 rounded font-bold hover:bg-slate-800 transition uppercase tracking-widest text-sm shadow-md"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= 8. CUSTOMIZED APPROACH (Vertical Timeline) ================= */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Our Customized Approach
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              A seamless step-by-step process ensuring your manuscript gets the
              royal treatment from draft to global distribution.
            </p>
          </div>

          <div className="relative">
            {/* Dashed Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-yellow-300 -translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-24">
              {[
                {
                  title: "Consultation",
                  icon: <MessageSquare size={28} />,
                  desc: "We discuss your goals and target audience.",
                },
                {
                  title: "Writing / Editing",
                  icon: <PenTool size={28} />,
                  desc: "Our team drafts and perfects the manuscript.",
                },
                {
                  title: "Design",
                  icon: <LayoutTemplate size={28} />,
                  desc: "Stunning cover art and interior formatting.",
                },
                {
                  title: "Publishing",
                  icon: <Globe size={28} />,
                  desc: "Uploading to Amazon, Apple, and B&N.",
                },
                {
                  title: "Marketing",
                  icon: <TrendingUp size={28} />,
                  desc: "Aggressive PR and targeted ad campaigns.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`w-full md:w-1/2 p-6 flex ${idx % 2 === 0 ? "md:justify-end text-center md:text-right" : "md:justify-start text-center md:text-left"}`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 max-w-sm w-full relative group hover:border-yellow-500 transition-colors">
                      <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                  {/* Center Dot for Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-yellow-600 rounded-full border-4 border-white shadow-md z-10"></div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-16">
              <button className="bg-yellow-600 text-white px-10 py-4 rounded font-bold hover:bg-yellow-700 transition uppercase tracking-widest text-sm shadow-xl">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. CLIENTS SAY (Testimonials) ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase mb-16">
            Our Clients Say
          </h2>

          <div className="relative bg-slate-900 text-white p-10 md:p-16 rounded-3xl shadow-2xl">
            <Quote
              className="absolute top-8 left-8 text-slate-700 opacity-50"
              size={64}
            />

            <div className="relative z-10 min-h-[150px] flex flex-col items-center justify-center">
              <p className="text-lg md:text-xl font-medium leading-relaxed italic mb-8">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} className="fill-current" />
                ))}
              </div>
              <h4 className="font-bold text-lg">
                {testimonials[currentTestimonial].name}
              </h4>
              <span className="text-slate-400 text-sm">
                {testimonials[currentTestimonial].role}
              </span>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 10. FREQUENTLY ASKED QUESTIONS (Accordion) ================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-900">
                      {faq.question}
                    </span>
                    {activeFAQ === index ? (
                      <Minus className="text-yellow-600" size={20} />
                    ) : (
                      <Plus className="text-slate-400" size={20} />
                    )}
                  </button>
                  {activeFAQ === index && (
                    <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=800&auto=format&fit=crop"
              alt="Reading Book"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= 11. ABOUT US & BOTTOM FORM ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
          {/* About Text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-slate-900 uppercase">
              About Us
            </h2>
            <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm">
              Penguin Books Publisher
            </h4>
            <p className="text-slate-600 leading-relaxed">
              We are a team of passionate literary experts, designers, and
              marketers dedicated to empowering independent authors. Our mission
              is to democratize the publishing industry, providing you with the
              same high-end production value as traditional publishing houses,
              while you retain full creative control and 100% of your royalties.
            </p>
          </div>

          {/* Bottom Contact Form */}
          <div className="bg-slate-50 p-10 md:p-14 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              We Are Here For You
            </h3>
            <p className="text-slate-500 text-sm mb-10">
              Fill out the form below or call us at{" "}
              <strong>+1 646 344 0382</strong>
            </p>

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
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
