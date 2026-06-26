"use client"; // This makes it a Client Component

import { Crisp } from "crisp-sdk-web";
import { MessageCircle, Phone, Mail } from "lucide-react";

export default function FloatingSidebar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-2xl rounded-l-md overflow-hidden">
      {/* Live Chat Button */}
      <button 
        onClick={() => Crisp.chat.open()} 
        className="bg-yellow-600 text-white p-3 hover:bg-yellow-700 transition flex flex-col items-center justify-center gap-1 group"
      >
        <MessageCircle size={20} className="group-hover:scale-110 transition" />
        <span
          className="text-[10px] font-bold uppercase tracking-wider hidden md:block"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Live Chat
        </span>
      </button>

      {/* Call Now */}
      <a
        href="tel:+1 646 344 0382"
        className="bg-slate-900 text-white p-3 hover:bg-slate-800 transition flex flex-col items-center justify-center gap-1 group border-y border-slate-700"
      >
        <Phone size={20} className="group-hover:scale-110 transition" />
        <span
          className="text-[10px] font-bold uppercase tracking-wider hidden md:block"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Call Now
        </span>
      </a>

      {/* Email Us */}
      <a
        href="mailto:info@penguinbookpublishers.net"
        className="bg-yellow-600 text-white p-3 hover:bg-yellow-700 transition flex flex-col items-center justify-center gap-1 group"
      >
        <Mail size={20} className="group-hover:scale-110 transition" />
        <span
          className="text-[10px] font-bold uppercase tracking-wider hidden md:block"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Email Us
        </span>
      </a>
    </div>
  );
}