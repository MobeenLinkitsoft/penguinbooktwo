"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { useModal } from "../../context/ModalContext"; // Using your global modal context
import { Crisp } from "crisp-sdk-web"; // Added Crisp for Live Chat

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { openQuoteModal } = useModal(); // Trigger global quote modal

  // Complete services list
  const servicesList = [
    { title: "GhostWriting", href: "/services/book-writing" },
    { title: "Book Publishing", href: "/services/ebook-writing" },
    { title: "Book Editing & Proofreading", href: "/services/proofreading" },
    { title: "Book Cover Design", href: "/services/cover-design" },
    { title: "Book Illustrations", href: "/services/book-illustration" },
    { title: "Book Printing", href: "/services/book-printing" },
    { title: "Book Marketing", href: "/services/book-marketing" },
    { title: "Author's Website", href: "/services/authors-website" },
    { title: "Global Distributions", href: "/services/amazon-publishing" },
    { title: "Article Writing & Blogs", href: "/services/article-writing" },
    { title: "Book Video Trailer", href: "/services/book-trailer" },
    { title: "Audio Book", href: "/services/audio-book" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-900/90 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* ================= LOGO SECTION ================= */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/Logo.png"
              alt="Penguin Books Publisher Logo"
              fill
              className="object-contain"
              priority 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-xl leading-none tracking-tight group-hover:text-yellow-400 transition-colors">
              PENGUIN
            </span>
            <span className="text-yellow-500 text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5">
              Books Publisher
            </span>
          </div>
        </Link>

        {/* ================= MAIN NAVIGATION ================= */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-slate-200 text-xs font-bold uppercase tracking-widest hover:text-yellow-500 transition">
            Home
          </Link>

          {/* Complex Services Dropdown */}
          <div
            className="relative py-8"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-slate-200 text-xs font-bold uppercase tracking-widest hover:text-yellow-500 transition outline-none">
              Services{" "}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-yellow-500" : ""}`}
              />
            </button>

            {/* Premium Dropdown Menu */}
            <div
              className={`absolute top-[75px] left-1/2 -translate-x-1/2 w-[650px] bg-white rounded-2xl shadow-2xl border border-slate-100 transition-all duration-300 overflow-hidden ${
                isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
              }`}
            >
              <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-4 relative">
                {/* Decorative background element */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                
                {servicesList.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-600 hover:text-yellow-600 hover:bg-yellow-50/50 p-2 rounded-lg transition-colors group relative z-10"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-yellow-500 group-hover:scale-150 transition-all duration-300" />
                    {service.title}
                  </Link>
                ))}
              </div>
              
              {/* Dropdown Footer CTA */}
              <div className="bg-slate-50 p-5 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Not sure what you need?
                </span>
                <button
                  onClick={openQuoteModal}
                  className="text-xs font-black text-yellow-600 uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Talk to an expert <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <Link href="/portfolio" className="text-slate-200 text-xs font-bold uppercase tracking-widest hover:text-yellow-500 transition">
            Portfolio
          </Link>
          <Link href="/testimonials" className="text-slate-200 text-xs font-bold uppercase tracking-widest hover:text-yellow-500 transition">
            Testimonials
          </Link>
          <Link href="/about" className="text-slate-200 text-xs font-bold uppercase tracking-widest hover:text-yellow-500 transition">
            About Us
          </Link>
          <Link href="/contact" className="text-slate-200 text-xs font-bold uppercase tracking-widest hover:text-yellow-500 transition">
            Contact
          </Link>
        </nav>

        {/* ================= CALL TO ACTIONS ================= */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+16463440382"
            className="hidden xl:flex items-center gap-2 text-slate-300 text-xs font-bold tracking-wider hover:text-white transition"
          >
            <Phone size={14} className="text-yellow-500" /> +1 646 344 0382
          </a>
          
          {/* Crisp Chat Trigger */}
          <button
            onClick={() => Crisp.chat.open()}
            className="hidden md:flex items-center gap-2 text-slate-200 text-xs font-bold uppercase tracking-widest hover:text-yellow-500 transition"
          >
            <MessageCircle size={14} /> Chat
          </button>

          {/* Quote Modal Trigger */}
          <button
            onClick={openQuoteModal}
            className="bg-yellow-600 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-yellow-700 transition shadow-[0_0_15px_rgba(234,88,12,0.4)] hover:shadow-[0_0_25px_rgba(234,88,12,0.6)]"
          >
            Get A Quote
          </button>
        </div>
        
      </div>
    </header>
  );
}