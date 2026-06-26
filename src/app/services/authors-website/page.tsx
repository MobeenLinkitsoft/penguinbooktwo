"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Monitor, Smartphone, ShoppingCart, Search,
  MessageSquare, Phone, Mail, Feather, BookOpen, Globe 
} from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "@/src/components/global/QuoteModal";

export default function AuthorWebsitePage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map((_, i) => `/Logos/log${i + 1}.png`);
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // All 86 Portfolio Books (Simulated 12 for UI)
  const portfolioBooks = Array.from({ length: 12 }).map((_, i) => `/Book/Book${i + 1}.jpg`);

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Global Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay - Updated to a modern workspace/literary image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-indigo-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"></span>
              <span className="text-white text-xs font-semibold uppercase tracking-widest">Premium Author Web Design</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Build Your Digital Sanctuary. <br/> Connect With Readers.
            </h1>
            <p className="text-lg text-indigo-100 max-w-xl leading-relaxed font-medium">
              Your readers want to know the mind behind the stories. A bespoke author website is your ultimate digital platform—a place to showcase your masterpieces, sell directly, and cultivate a dedicated fanbase.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_-5px_rgba(79,70,229,0.7)] uppercase tracking-widest text-sm hover:-translate-y-1"
              >
                Claim Your Free Quote
              </button>
              <button  
                onClick={() => Crisp.chat.open()} 
                className="border-2 border-indigo-300 text-indigo-50 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-indigo-900 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest text-sm hover:-translate-y-1"
              >
                Talk to an Expert
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-white/40 relative">
              <div className="absolute -top-5 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-5 rounded-full shadow-lg transform rotate-3">
                Save 20% Today
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Let's Build It!</h3>
              <p className="text-sm text-slate-500 mb-8">Schedule your complimentary web consultation.</p>
              
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                />
                <input
                  name="tel"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                />
                <select
                  name="service"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-slate-600 appearance-none"
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
                  placeholder="Tell us about your book or brand..."
                  name="message"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition resize-none h-24"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white font-bold py-4 mt-2 rounded-xl uppercase tracking-widest hover:bg-indigo-600 transition-colors shadow-lg text-sm"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. INFINITE MARQUEE LOGOS ================= */}
      <section className="bg-indigo-50 py-8 border-b border-indigo-100 overflow-hidden">
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 40s linear infinite; display: flex; width: max-content; }
          .animate-marquee:hover { animation-play-state: paused; }
        `}</style>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-20 pr-12 md:pr-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
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
            More Than Just a Webpage: <span className="text-indigo-600">Your Author Brand</span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            Social media platforms dictate the rules and can change algorithms overnight. Your website is the only piece of digital real estate you truly own. We engineer stunning, lightning-fast platforms tailored to tell your story and captivate your audience.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            From intuitive landing pages for your debut release to sophisticated e-commerce hubs designed to sell signed hardcovers and merchandise directly to your loyal readers, our development team bridges the gap between literary art and digital innovation. 
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-indigo-700 transition-colors uppercase tracking-widest text-sm shadow-md"
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
          <div className="absolute inset-0 bg-indigo-100 rounded-full blur-3xl opacity-50 transform scale-90"></div>
          
          {/* Browser Mockup */}
          <div className="relative w-full max-w-lg h-[320px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-500">
             <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <div className="ml-4 flex-grow bg-white border border-slate-200 rounded-md h-5 opacity-50"></div>
             </div>
             <div className="flex-grow bg-slate-900 flex flex-col relative overflow-hidden">
                <div className="h-[60%] w-full bg-slate-950 flex items-center justify-between px-8 relative z-10">
                   <div className="space-y-3 w-1/2">
                      <div className="w-16 h-4 bg-indigo-500 rounded-full mb-4"></div>
                      <div className="w-full h-3 bg-slate-700 rounded-full"></div>
                      <div className="w-4/5 h-3 bg-slate-700 rounded-full"></div>
                      <div className="w-1/2 h-8 bg-indigo-600 rounded-lg mt-6"></div>
                   </div>
                   <div className="w-24 h-32 bg-gradient-to-tr from-indigo-400 to-purple-500 rounded border-2 border-white/20 shadow-2xl transform -translate-y-4 rotate-3"></div>
                </div>
                <div className="h-[40%] bg-slate-900 px-8 py-6 flex gap-4">
                  <div className="w-1/3 h-full bg-slate-800 rounded-lg"></div>
                  <div className="w-1/3 h-full bg-slate-800 rounded-lg"></div>
                  <div className="w-1/3 h-full bg-slate-800 rounded-lg"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= 4. CLIENT-CENTRIC APPROACH ================= */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <p className="text-indigo-600 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <Feather size={16} /> Features Tailored For Bestsellers
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Built to Engage, Designed to Sell</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                <Smartphone size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">Flawless Mobile Experience</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Whether readers are browsing on their morning commute or a massive desktop setup, your site will adapt perfectly for a seamless, visually rich experience.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
                <ShoppingCart size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">Direct E-Commerce</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Keep 100% of your profits. We integrate safe, secure payment gateways so you can distribute books, digital copies, and merch directly to your audience.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                <Globe size={32} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">SEO & Audience Growth</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Rise through Google's ranks. We construct your architecture to be highly searchable and integrate intelligent lead-capture forms to grow your mailing list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-0"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center gap-2">
            <Monitor size={16} /> Digital Showcase
          </h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Recent Website Launches</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-6">
            {portfolioBooks.map((cover, i) => (
              <div key={i} className="aspect-[2/3] relative rounded-xl overflow-hidden shadow-2xl border border-slate-800 group cursor-pointer hover:border-indigo-500 transition-all duration-300">
                <Image 
                  src={cover} 
                  alt={`Website Portfolio ${i + 1}`} 
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
      <section className="py-20 bg-indigo-600 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 bg-indigo-600/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-indigo-500">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Ready to Elevate Your Author Brand?
          </h2>
          <p className="text-indigo-100 font-medium text-lg max-w-2xl mx-auto">
            Speak with our web experts today. Let's design a captivating digital hub that turns casual visitors into lifelong super-fans.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="tel:+1 646 344 0382"
              className="bg-white text-indigo-900 px-10 py-4 rounded-full font-extrabold hover:bg-indigo-50 transition-colors shadow-xl uppercase text-sm tracking-widest flex items-center gap-2"
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">How We Bring Your Vision to Life</h2>
            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-[radial-gradient(#cbd5e1_3px,transparent_3px)] [background-size:20px_20px] -z-10 opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-50 rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="Web Development Process" 
                className="w-full h-[550px] object-cover rounded-3xl shadow-2xl border border-slate-100"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-12">
              
              <div className="flex gap-6 group">
                <div className="text-6xl font-black text-indigo-100 font-sans leading-none shrink-0 w-16 text-center group-hover:text-indigo-600 transition-colors duration-300">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Strategy & Wireframing</h4>
                  <p className="text-base text-slate-600 leading-relaxed">
                    We initiate the process by analyzing your genre, brand voice, and goals. We map out intuitive site architecture and construct wireframes to define the perfect layout for your books and biography.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="text-6xl font-black text-indigo-100 font-sans leading-none shrink-0 w-16 text-center group-hover:text-indigo-600 transition-colors duration-300">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Aesthetic Design</h4>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Our UI/UX specialists craft exquisite, high-fidelity visual mockups utilizing your book covers, custom palettes, and professional typography to forge a cohesive author identity.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="text-6xl font-black text-indigo-100 font-sans leading-none shrink-0 w-16 text-center group-hover:text-indigo-600 transition-colors duration-300">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Development & Coding</h4>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Upon your approval, our developers translate the design into clean, modern code. We integrate your blog, secure your store, and synchronize your email marketing platforms seamlessly.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="text-6xl font-black text-indigo-100 font-sans leading-none shrink-0 w-16 text-center group-hover:text-indigo-600 transition-colors duration-300">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Testing & Launch</h4>
                  <p className="text-base text-slate-600 leading-relaxed">
                    We rigorously test the platform across all devices, execute robust on-page SEO protocols, and finally, deploy your new digital sanctuary live for the world to see.
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
            <h2 className="text-3xl font-black text-slate-900">
              Let's Start a Conversation
            </h2>
            <p className="text-indigo-600 font-semibold text-base">
              Fill out the details below, and our publishing specialists will be in touch shortly.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(79,70,229,0.1)] border border-slate-100 max-w-4xl mx-auto relative z-10">
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-slate-700"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-slate-700"
                  />
                 <select
                    name="service"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-slate-600 appearance-none"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-slate-700"
                  />
                  <textarea
                    placeholder="How can we help you?"
                    name="message"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-slate-700 flex-grow min-h-[135px] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-extrabold py-5 mt-4 rounded-xl uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {/* Box 1 */}
            <div className="text-center space-y-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="block w-full text-indigo-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-indigo-50 transition-colors text-sm"
              >
                Start Live Chat
              </button>
            </div>

            {/* Box 2 */}
            <div className="text-center space-y-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
               <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                <Phone size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Make a Call</h4>
              <a
                href="tel:+1 646 344 0382"
                className="block w-full text-indigo-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-indigo-50 transition-colors text-sm"
              >
                +1 646 344 0382
              </a>
            </div>

            {/* Box 3 */}
            <div className="text-center space-y-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
               <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                <Mail size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Send us Email</h4>
              <a
                href="mailto:info@penguinbookpublishers.net"
                className="block w-full text-indigo-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-indigo-50 transition-colors text-sm"
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