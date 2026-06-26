import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ChevronRight, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-8 border-t-[4px] border-yellow-600 relative overflow-hidden z-10">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-yellow-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* ================= COLUMN 1: Brand & Bio ================= */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/Image/logo.png"
                alt="Penguin Book Publishers Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none tracking-tight group-hover:text-yellow-500 transition-colors">
                PENGUIN
              </span>
              <span className="text-yellow-500 text-[9px] font-bold tracking-[0.2em] uppercase mt-1">
                Publishers
              </span>
            </div>
          </Link>
          
          <p className="text-slate-400 text-sm leading-relaxed pr-4">
            Empowering independent authors worldwide with elite self-publishing, professional editing, and aggressive marketing solutions. Your story deserves a global audience.
          </p>

          {/* Trustpilot Logo */}
          <div className="pt-2 hover:opacity-80 transition-opacity cursor-pointer inline-block">
            <img
              src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg"
              alt="Trustpilot"
              className="h-7 object-contain"
            />
          </div>
        </div>

        {/* ================= COLUMN 2: Comprehensive Services ================= */}
        <div>
          <h4 className="font-black text-sm text-white uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
            Our Services
          </h4>
          <ul className="text-slate-400 space-y-3 text-sm">
            {[
              { title: "Book Writing", href: "/services/book-writing" },
              { title: "eBook Writing & Publishing", href: "/services/ebook-writing" },
              { title: "Book Editing & Proofreading", href: "/services/proofreading" },
              { title: "Book Cover Design", href: "/services/cover-design" },
              { title: "Book Illustrations", href: "/services/book-illustration" },
              { title: "Book Printing", href: "/services/book-printing" },
              { title: "Book Marketing", href: "/services/book-marketing" },
              { title: "Author's Website", href: "/services/authors-website" },
              { title: "Amazon Publishing", href: "/services/amazon-publishing" },
              { title: "Article Writing", href: "/services/article-writing" },
              { title: "Book Trailer Services", href: "/services/book-trailer" },
              { title: "Kindle Vella", href: "/services/kindle-vella" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 hover:text-yellow-500 transition-all duration-300 group"
                >
                  <ChevronRight size={14} className="text-yellow-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= COLUMN 3: Useful Links ================= */}
        <div>
          <h4 className="font-black text-sm text-white uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
            Useful Links
          </h4>
          <ul className="text-slate-400 space-y-3 text-sm">
            {[
              { title: "Privacy Policy", href: "/privacy-policy" },
              { title: "Refund Policy", href: "/refund-policy" },
              { title: "Terms and Conditions", href: "/terms-and-conditions" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 hover:text-yellow-500 transition-all duration-300 group"
                >
                  <ChevronRight size={14} className="text-yellow-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= COLUMN 4: Newsletter & Contact ================= */}
        <div>
          <h4 className="font-black text-sm text-white uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
            Connect
          </h4>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            Subscribe to our newsletter for exclusive publishing discounts and author tips.
          </p>
          
          <form className="flex gap-2 relative">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="bg-slate-900 border border-slate-700 text-white rounded-lg p-3 text-sm w-full focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 bg-yellow-600 text-white px-4 rounded-md text-sm font-bold hover:bg-yellow-700 transition flex items-center justify-center"
            >
              <Send size={16} />
            </button>
          </form>

          {/* Direct Contact Info */}
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <a href="tel:+16463440382" className="flex items-center gap-3 hover:text-yellow-500 transition">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-yellow-500 shrink-0">
                <Phone size={14} />
              </div>
              +1 646 344 0382
            </a>
            <a href="mailto:info@penguinbookpublishers.net" className="flex items-center gap-3 hover:text-yellow-500 transition">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-yellow-500 shrink-0">
                <Mail size={14} />
              </div>
              info@penguinbookpublishers.net
            </a>
          </div>

          {/* Secure Payments Badge */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Secure Payment Options
            </div>
            <div className="flex gap-2.5">
              <div className="bg-white p-1 rounded w-10 h-6 flex items-center justify-center">
                <Image src="/Logos/visa.png" alt="Visa" width={32} height={20} className="object-contain" />
              </div>
              <div className="bg-white p-1 rounded w-10 h-6 flex items-center justify-center">
                <Image src="/Logos/master.jpg" alt="Mastercard" width={32} height={20} className="object-contain" />
              </div>
              <div className="bg-white p-1 rounded w-10 h-6 flex items-center justify-center">
                <Image src="/Logos/wire.png" alt="Wire Transfer" width={32} height={20} className="object-contain" />
              </div>
              <div className="bg-white p-1 rounded w-10 h-6 flex items-center justify-center">
                <Image src="/Logos/ae.png" alt="American Express" width={32} height={20} className="object-contain" />
              </div>
              <div className="bg-white p-1 rounded w-10 h-6 flex items-center justify-center">
                <Image src="/Logos/dis.png" alt="Discover" width={32} height={20} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Footer Bottom Bar ================= */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800/60 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-medium">
        <p>
          Copyright © {new Date().getFullYear()} Penguin Book Publishers. All Rights Reserved.
        </p>
        <p className="mt-2 md:mt-0">
          Empowering Independent Authors Globally.
        </p>
      </div>
    </footer>
  );
}