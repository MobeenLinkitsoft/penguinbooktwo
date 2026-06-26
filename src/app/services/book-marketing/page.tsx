"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Megaphone, TrendingUp, Target, Share2, Globe,
  MessageSquare, Phone, Mail, Rocket, BarChart3,
  MonitorSmartphone
} from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal";

export default function BookMarketingPage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map((_, i) => `/Logos/log${i + 1}.png`);
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // All 86 Portfolio Books (Simulated 12)
  const portfolioBooks = Array.from({ length: 12 }).map((_, i) => `/Book/Book${i + 1}.jpg`);

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-800 overflow-hidden">
      
      {/* Global Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay - Tech/Marketing theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-blue-900/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-50 text-xs font-semibold uppercase tracking-widest">
                Data-Driven Book Marketing
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Catapult Your Book to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bestseller List.</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-xl leading-relaxed font-medium">
              Writing a book is only half the journey. Our dedicated book marketing experts deploy aggressive, sales-centric digital campaigns to ensure your book reaches the right readers and scales the charts.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.7)] uppercase tracking-widest text-sm hover:-translate-y-1"
              >
                Launch Your Campaign
              </button>
              <button  
                onClick={() => Crisp.chat.open()} 
                className="border-2 border-blue-300/50 text-blue-50 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest text-sm hover:-translate-y-1"
              >
                Speak to a Strategist
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-white/20 relative">
              <div className="absolute -top-5 -right-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-5 rounded-full shadow-lg transform rotate-3">
                Boost Sales Today
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Get Started!</h3>
              <p className="text-sm text-blue-200 mb-8">Get a free promotional strategy audit.</p>
              
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="access_key" value="75a6dce0-fd56-4a07-8fdf-96b1af7c5da2" />
                <input type="hidden" name="redirect" value="https://penguinbookpublishers.com/thank-you" />

                <input
                  type="text"
                  placeholder="Full Name *"
                  name="name"
                  required
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-3.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-3.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                />
                <input
                  name="tel"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-3.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                />
               <select
                  name="service"
                  required
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-3.5 text-sm text-slate-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition appearance-none"
                >
                  <option value="" disabled selected className="text-slate-500">Select Campaign Type</option>
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
                  placeholder="Tell us about your book..."
                  name="message"
                  required
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-3.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition resize-none h-24"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-slate-950 font-black py-4 mt-2 rounded-xl uppercase tracking-widest hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 text-sm"
                >
                  Analyze My Book
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. INFINITE MARQUEE LOGOS ================= */}
      <section className="bg-blue-50/50 py-8 border-b border-blue-100 overflow-hidden">
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 40s linear infinite; display: flex; width: max-content; }
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
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-slate-50">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Sales-Centric Digital <span className="text-blue-600">Content Marketing</span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            For independent authors, visibility is everything. A brilliant book without a marketing strategy is like a hidden treasure. We leverage modern digital marketing techniques to ensure your book gets in front of the readers who are actively looking for it.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            From highly targeted Amazon Ads and social media campaigns to author website development and PR outreach, our holistic approach drives traffic, boosts reviews, and exponentially increases your royalties.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-700 transition-colors uppercase tracking-widest text-sm shadow-md"
            >
              Get Your Strategy
            </button>
            <button  
              onClick={() => Crisp.chat.open()} 
              className="border-2 border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-bold hover:border-slate-900 hover:text-slate-900 transition-colors uppercase tracking-widest text-sm shadow-sm"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[450px]">
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-cyan-200 rounded-full blur-[80px] opacity-40 transform scale-75"></div>
          
          {/* Dynamic Marketing Graphic Mockup */}
          <div className="relative w-full max-w-[450px] z-10">
            <div className="absolute -top-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Sales Growth</p>
                  <p className="text-lg font-black text-slate-900">+314%</p>
                </div>
              </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
              alt="Marketing Analytics" 
              className="w-full h-[360px] object-cover rounded-3xl shadow-2xl border-[6px] border-white"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-700 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Ad Impressions</p>
                  <p className="text-lg font-black text-white">1.2M+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. CLIENT-CENTRIC APPROACH ================= */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <p className="text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <Rocket size={16} /> Strategic Promotion
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Our Concentric Approach
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Box 1 */}
            <div className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto bg-white shadow-sm text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-2 group-hover:scale-110">
                <Target size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">Targeted Ads</h3>
              <p className="text-base text-slate-600 leading-relaxed max-w-xs mx-auto">
                We don't waste budget on broad audiences. We utilize laser-focused Amazon PPC and Meta ads targeting specific demographics and fans of similar authors.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group relative md:-translate-y-6">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl scale-95"></div>
              <div className="w-20 h-20 mx-auto bg-white shadow-sm text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-2 group-hover:scale-110">
                <Share2 size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">Social Media & PR</h3>
              <p className="text-base text-slate-600 leading-relaxed max-w-xs mx-auto">
                We build your brand. From crafting engaging social media content to distributing press releases and organizing virtual book tours, we generate organic buzz.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto bg-white shadow-sm text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-2 group-hover:scale-110">
                <MonitorSmartphone size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">SEO & Websites</h3>
              <p className="text-base text-slate-600 leading-relaxed max-w-xs mx-auto">
                We establish your digital home. We design stunning author websites optimized for search engines to capture leads, build mailing lists, and sell directly to readers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] -z-0"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h4 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center gap-2">
            <BarChart3 size={16} /> Results Driven
          </h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Our Promoted Portfolio</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-6">
            {portfolioBooks.map((cover, i) => (
              <div key={i} className="aspect-[2/3] relative rounded-xl overflow-hidden shadow-2xl border border-slate-800 group cursor-pointer hover:border-cyan-400 transition-all duration-300">
                <Image 
                  src={cover} 
                  alt={`Promoted Portfolio ${i + 1}`} 
                  fill 
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500"
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="text-center">
                    <span className="text-white font-bold text-xs uppercase tracking-widest border-2 border-cyan-400 bg-cyan-500/20 px-4 py-2 rounded-full transition-colors">
                      View Stats
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. MIDDLE CTA BANNER ================= */}
      <section className="py-20 bg-blue-600 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 bg-blue-600/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-blue-500">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Take Your Book to the Next Level
          </h2>
          <p className="text-blue-100 font-medium text-lg max-w-2xl mx-auto">
            Call us right now. Turn your manuscript into a globally recognized best-selling sensation!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="tel:+1 646 344 0382"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-extrabold hover:bg-blue-50 transition-colors shadow-xl uppercase text-sm tracking-widest flex items-center gap-2"
            >
              <Phone size={18} /> +1 646 344 0382
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-slate-900 text-white px-10 py-4 rounded-full font-extrabold hover:bg-slate-800 transition-colors shadow-xl uppercase text-sm tracking-widest"
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
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">The Marketing Pipeline</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-[radial-gradient(#cbd5e1_3px,transparent_3px)] [background-size:20px_20px] -z-10 opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-100 rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                alt="Marketing Process" 
                className="w-full h-[550px] object-cover rounded-3xl shadow-2xl border border-slate-100"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[30px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-200 before:to-cyan-200">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <span className="font-black text-xl">1</span>
                </div>
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Market Research & Audience</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We analyze your genre, tropes, and competitors to craft messaging that directly appeals to your ideal reader.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <span className="font-black text-xl">2</span>
                </div>
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Planning & Asset Creation</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our designers create eye-catching graphics and ad copy. We build the campaign funnel, landing pages, and emails.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <span className="font-black text-xl">3</span>
                </div>
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Execution & Promo Push</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We launch campaigns across Amazon KDP ads, blog tours, and influencer outreach to saturate the market.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <span className="font-black text-xl">4</span>
                </div>
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Analytics & Optimization</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We continuously monitor ad spend, CTRs, and conversions, optimizing campaigns in real-time to maximize ROI.
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
              Let's Scale Your Sales
            </h2>
            <p className="text-blue-600 font-semibold text-base">
              Fill out your details below and a marketing specialist will reach out to you.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] border border-slate-100 max-w-4xl mx-auto relative z-10">
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
                    placeholder="Full Name"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-slate-700"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-slate-700"
                  />
                  <select
                    name="service"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-slate-600 appearance-none"
                  >
                    <option value="" disabled selected>Select Campaign Type</option>
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-slate-700"
                  />
                  <textarea
                    placeholder="Tell us about your marketing goals..."
                    name="message"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-slate-700 flex-grow min-h-[135px] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-extrabold py-5 mt-4 rounded-xl uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 text-sm"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {/* Box 1 */}
            <div className="text-center space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Discuss Your Strategy</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="block w-full text-blue-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-100 transition-colors text-sm"
              >
                Start Live Chat
              </button>
            </div>

            {/* Box 2 */}
            <div className="text-center space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
               <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Phone size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Make a Call</h4>
              <a
                href="tel:+1 646 344 0382"
                className="block w-full text-blue-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-100 transition-colors text-sm"
              >
                +1 646 344 0382
              </a>
            </div>

            {/* Box 3 */}
            <div className="text-center space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
               <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Mail size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Send us Email</h4>
              <a
                href="mailto:info@penguinbookpublishers.net"
                className="block w-full text-blue-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-100 transition-colors text-sm"
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