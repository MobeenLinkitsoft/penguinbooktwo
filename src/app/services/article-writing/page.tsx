"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  FileText, Search, List, PenTool, Edit3, LayoutTemplate, CheckCircle2,
  ThumbsUp, ThumbsDown, Target, TrendingUp, Award,
  MessageSquare, Phone, Mail, 
  ChevronRight, Sparkles, BarChart
} from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal";

export default function ArticleWritingPage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map((_, i) => `/Logos/log${i + 1}.png`);
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // All 86 Portfolio Books (using 10/12 for the grid)
  const portfolioBooks = Array.from({ length: 12 }).map((_, i) => `/Book/Book${i + 1}.jpg`);

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* Global Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Premium Content Creation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Compelling Articles That Drive Traffic and Build Authority.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-light">
              Engage your readers, dominate search engine rankings, and fuel your brand's sustainable growth. Our native-speaking industry specialists craft SEO-optimized articles designed to convert.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-500 transition-all flex items-center gap-2 shadow-lg shadow-amber-600/20 uppercase tracking-widest text-sm"
              >
                Start Your Project
              </button>
              <button onClick={() => Crisp.chat.open()} className="border-2 border-white/80 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2 uppercase tracking-widest text-sm backdrop-blur-sm">
                Live Chat
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-slate-100 relative">
              <div className="absolute -top-5 right-8 bg-amber-500 text-slate-900 text-xs font-black uppercase tracking-widest py-2 px-5 rounded-full shadow-lg flex items-center gap-2">
                <Sparkles size={14} /> 20% Off Today
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Claim Your Strategy Session</h3>
              <p className="text-sm text-slate-500 mb-8">Consult with a senior content strategist for free.</p>
              
             <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="f10abfcd-14e6-40dc-852b-ed7b35bd9825" />
                <input type="hidden" name="redirect" value="https://penguinbookspublisher.com/thank-you" />

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
                  placeholder="Tell us about your content goals..."
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
                <div key={index} className="relative h-10 w-28 shrink-0 flex items-center justify-center">
                  <Image src={logoUrl} alt="Partner Logo" fill sizes="112px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. INTRO SPLIT SECTION ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-slate-50">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-widest">
            <BarChart size={18} />
            Strategic Growth
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Why Invest in Professional Article Writing?
          </h2>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            In the digital age, content is currency. Whether you are an author establishing a readership, or a brand aiming to dominate search engine results, publishing consistent, high-value articles is non-negotiable. 
          </p>
          <ul className="space-y-4 pt-4">
            {[
              "Boost Search Engine Rankings (SEO)",
              "Establish Industry Authority & Trust",
              "Engage and Retain your Target Audience",
              "Drive Meaningful Conversions & Sales"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-slate-800 font-bold text-sm md:text-base">
                <div className="bg-amber-100 p-1 rounded-full text-amber-600">
                  <CheckCircle2 size={18} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 pt-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-amber-700 transition uppercase tracking-widest text-sm shadow-lg shadow-amber-600/20"
            >
              Get A Quote
            </button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[450px]">
          <div className="relative w-full max-w-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-500 rounded-3xl transform translate-x-4 translate-y-4 -z-10 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop" 
              alt="Content Writing Workspace" 
              className="w-full h-[400px] object-cover rounded-3xl shadow-2xl border-[6px] border-white"
            />
          </div>
        </div>
      </section>

      {/* ================= 4. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Content Showcase</h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Our Portfolio</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {portfolioBooks.map((cover, i) => (
              <div key={i} className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-2xl border border-slate-800 group cursor-pointer hover:border-amber-500 transition-colors">
                <Image 
                  src={cover} 
                  alt={`Portfolio ${i + 1}`} 
                  fill 
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-widest border border-amber-500/50 px-4 py-2 rounded-full">Read Sample</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 5. ARTICLE PROCESS GRID ================= */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">The Drafting Process</h2>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Search size={28}/>, title: "Niche Research", desc: "We conduct deep dives into your industry to ensure factual accuracy and uncover trending topics." },
              { icon: <List size={28}/>, title: "Strategic Outlining", desc: "Crafting a logical structure with clear headings to ensure readability and maximum SEO benefits." },
              { icon: <PenTool size={28}/>, title: "Expert Drafting", desc: "Our native-speaking writers create engaging, original content that mirrors your brand's unique voice." },
              { icon: <Edit3 size={28}/>, title: "Editorial Review", desc: "Rigorous proofreading and copy-editing to eliminate all grammatical errors and improve flow." },
              { icon: <Target size={28}/>, title: "SEO Optimization", desc: "Strategic placement of primary and secondary keywords, meta tags, and internal link planning." },
              { icon: <LayoutTemplate size={28}/>, title: "Final Formatting", desc: "We format the article for web readability, utilizing bullet points, bold text, and optimal paragraph lengths." }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center space-y-5 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto bg-white text-amber-500 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors transform group-hover:-translate-y-2">
                  {step.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-xl">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. PROS & CONS SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <p className="text-amber-600 font-bold text-sm uppercase tracking-wider">The Breakdown</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Pros & Cons of Professional Writing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border-t-[6px] border-emerald-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="bg-emerald-50 p-3 rounded-2xl">
                  <ThumbsUp className="text-emerald-500" size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">The Pros</h3>
              </div>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <Award className="text-emerald-500 shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Professional Quality</h4>
                    <p className="text-slate-600 mt-2 leading-relaxed">Access to elite writers ensures polished, error-free, and highly engaging content that resonates with your audience.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <TrendingUp className="text-emerald-500 shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">SEO Expertise</h4>
                    <p className="text-slate-600 mt-2 leading-relaxed">Writers understand keyword density, search intent, and metadata, passively driving organic traffic to your platform.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border-t-[6px] border-rose-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="bg-rose-50 p-3 rounded-2xl">
                  <ThumbsDown className="text-rose-500" size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">The Cons</h3>
              </div>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <ChevronRight className="text-rose-500 shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Financial Investment</h4>
                    <p className="text-slate-600 mt-2 leading-relaxed">High-quality content requires a budget. It is a long-term business investment rather than a free DIY endeavor.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <ChevronRight className="text-rose-500 shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Dialing in the Voice</h4>
                    <p className="text-slate-600 mt-2 leading-relaxed">It may take a draft or two of collaborative feedback for the writer to perfectly capture your brand's specific tone.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CONTACT FORM SECTION ================= */}
     <section className="py-24 relative bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Titles */}
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Ready to scale your content?
            </h2>
            <p className="text-amber-600 font-bold text-sm uppercase tracking-widest">
              Fill out your details below and a strategist will connect with you shortly.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 max-w-4xl mx-auto relative z-10">
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <input type="hidden" name="access_key" value="f10abfcd-14e6-40dc-852b-ed7b35bd9825" />
                  <input type="hidden" name="redirect" value="https://penguinbookspublisher.com/thank-you" />
  
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
                    <option value="" disabled>Select Service Required</option>
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
                    placeholder="Tell us about the topics or niches you want to cover..."
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
            <div className="text-center space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-white text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-sm border border-slate-100">
                <MessageSquare size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Discuss Your Content</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="w-full border border-slate-200 text-slate-700 font-medium py-3 px-4 rounded-lg hover:bg-white hover:border-slate-300 transition bg-white"
              >
                Live Chat
              </button>
            </div>

            {/* Box 2 */}
            <div className="text-center space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-white text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-sm border border-slate-100">
                <Phone size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Make a Call</h4>
              <a
                href="tel:+16463440382"
                className="block w-full border border-slate-200 text-slate-700 font-medium py-3 px-4 rounded-lg hover:bg-white hover:border-slate-300 transition bg-white"
              >
                +1 (888) 919-9811
              </a>
            </div>

            {/* Box 3 */}
            <div className="text-center space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-white text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-sm border border-slate-100">
                <Mail size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Send us an Email</h4>
              <a
                href="mailto:info@penguinebookspublishing.com "
                className="block w-full border border-slate-200 text-slate-700 font-medium py-3 px-2 rounded-lg hover:bg-white hover:border-slate-300 transition bg-white text-sm"
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