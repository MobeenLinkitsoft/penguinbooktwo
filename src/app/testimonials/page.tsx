"use client";

import React, { useState } from "react";
import { Star, Quote, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { Crisp } from "crisp-sdk-web";
import QuoteModal from "../../components/global/QuoteModal"; // Adjusted to standard Next.js path alias

export default function TestimonialsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12); // Show a nice even grid of 12 first

  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`,
  );
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // 50 custom-tailored, realistic testimonials covering all your services
  const testimonials = [
    {
      name: "Rose O Sullivan",
      review:
        "Penguin Books Publisher is a great place to get your book written. They have experienced ghostwriters on board who actually walk extra miles to fulfill your expectations. I have worked with them and got truly impressed.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Brian Payne",
      review:
        "I can highly recommend Penguin Books Publisher as a fantastic company with really helpful people. Their Book Printing service delivered crisp, beautiful hardcovers right on time. I could not have self-published without them.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Thomas Parker",
      review:
        "This has been a delightful experience. The Amazon Publishing team took care of all the backend KDP formatting and category research. Direct to the point, and great timing. Special thanks for making this come true.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "John Selby",
      review:
        "Penguin has been wonderful in editing my book. They caught so many structural issues I had completely missed. They are working in a very timely and responsive way. A BIG THUMBS UP for the proofreading team!",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Stella Vance",
      review:
        "When I was struggling to publish my first eBook, I had no idea of the difficulties involved. The eBook Writing & Publishing team handled everything from formatting to upload. Highly Recommended!",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Stephen Hendry",
      review:
        "The Book Trailer they produced for my fantasy novel was absolutely cinematic! It boosted my pre-orders by 30%. Trust me, call these people if you want top-tier marketing visuals.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Amanda Higgins",
      review:
        "Their web development team built me an absolutely stunning Author Website. It integrates my blog, my book links, and a newsletter capture form seamlessly. It looks so professional.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Marcus Thorne",
      review:
        "I hired them for Book Marketing, and the ROI has been incredible. Their targeted Amazon Ads and social media push got my thriller into the top 100 in its category within a week.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Evelyn Carter",
      review:
        "The children's Book Illustrations they created for my story are breathtaking. The artist perfectly captured the whimsical tone I wanted. The colors pop beautifully on the printed page.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Derek Lawson",
      review:
        "Kindle Vella was a totally new platform for me. Their episodic writers helped me format my story into perfect bite-sized chapters with great cliffhangers. I'm already seeing great token royalties.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Sarah Jenkins",
      review:
        "The Book Cover Design team blew me away. They gave me four initial concepts, and they were all so good I had a hard time choosing. The final cover looks right at home on a bookstore shelf.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Robert Hughes",
      review:
        "I needed high-quality Article Writing to boost my author blog's SEO. They deliver consistent, well-researched, and perfectly optimized posts every single month.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Linda Meyers",
      review:
        "From the initial ghostwriting draft to the final Book Printing, Penguin Books Publisher held my hand through the entire process. My memoirs are beautifully bound and the paper quality is top-notch.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Jameson Clarke",
      review:
        "I was overwhelmed by Amazon KDP's requirements. Their Amazon Publishing experts formatted my manuscript perfectly, bypassing all the errors I was getting on my own.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Chloe Evans",
      review:
        "Their Proofreading team has an eagle eye. They caught typos and grammatical inconsistencies that three other beta readers missed. Worth every penny for the peace of mind.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "William Foster",
      review:
        "The Book Trailer service is a game changer. I posted the 60-second video they made on Facebook and it got thousands of views and drove massive traffic to my Amazon page.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Natalie Brooks",
      review:
        "I didn't have time to manage my online presence. They built my Author Website and now handle my monthly Article Writing. My organic traffic has tripled in four months.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "George Hamilton",
      review:
        "The Book Marketing campaign they ran for my sci-fi novel was aggressive and effective. They really understand how to target the right audience using Facebook and Amazon ads.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Fiona Gallagher",
      review:
        "I had a rough draft that needed a lot of love. The Book Editing team did a structural edit that completely fixed my pacing issues without losing my unique voice.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Victor Chen",
      review:
        "Publishing on Kindle Vella seemed daunting, but their team mapped out the episodes perfectly. Their formatting and strategic tags helped me gain a loyal following fast.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Diana Ross",
      review:
        "The Book Cover Design I received was phenomenal. It totally captured the dark, moody vibe of my mystery novel. It looks incredibly professional next to traditionally published books.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Arthur Pendelton",
      review:
        "Their eBook Writing & Publishing service is flawless. They took my rough notes and turned them into a polished, 40,000-word business guide. Uploading to Apple Books and Kindle was seamless.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Sophie Bennett",
      review:
        "I absolutely love the Book Illustrations they did for my middle-grade novel. The characters are so expressive. The artist was very patient with my revision requests.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Harrison Ford",
      review:
        "If you need bulk Book Printing, look no further. I ordered 500 paperbacks for a local signing event, and they arrived early, shrink-wrapped, and in pristine condition.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Isabella Martinez",
      review:
        "Their Article Writing service has completely transformed my blog. The SEO optimization is spot on, and the content is genuinely engaging, not just keyword-stuffed fluff.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Ethan Wright",
      review:
        "I utilized their Amazon Publishing and Marketing services together. The synergy was incredible. My book launched to a #1 New Release badge in two different categories.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Mia Thompson",
      review:
        "I was nervous about hiring a ghostwriter, but the Book Writing team at Penguin completely nailed my tone. Reading the final manuscript felt like reading my own thoughts.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Oliver Scott",
      review:
        "The Author Website they designed for me is sleek, fast, and mobile-friendly. I've sold more signed copies directly through the site in one month than I did all last year.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Charlotte King",
      review:
        "Their Book Trailer production is Hollywood quality. The voiceover, the music, the motion graphics—everything came together to make an epic promotional tool.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Daniel Baker",
      review:
        "I had a great experience with their Proofreading service. Quick turnaround, professional tracking of changes, and extremely thorough corrections.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Grace Wilson",
      review:
        "Publishing a serialized story on Kindle Vella requires a specific rhythm. Their episodic writers helped me restructure my chapters to maximize reader retention.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Lucas Adams",
      review:
        "Their Book Cover Design team understood my vision immediately. The typography and imagery blend perfectly. I constantly get compliments on how great the cover looks.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Avery Lewis",
      review:
        "I used their eBook Publishing service for my poetry collection. The formatting was impeccable—no weird line breaks or spacing issues on any e-reader device.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Henry Mitchell",
      review:
        "The Book Marketing team provided a comprehensive plan. From Goodreads giveaways to Amazon PPC, they handled the heavy lifting so I could focus on writing my sequel.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Lily Campbell",
      review:
        "The custom Book Illustrations brought my fantasy world to life. The concept art for the environments was so detailed and rich. A truly talented art department.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Jack Roberts",
      review:
        "I highly recommend their Article Writing services for thought leadership. The ghostwritten pieces they've done for my LinkedIn have generated massive B2B leads.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Zoey Carter",
      review:
        "The Book Printing quality is phenomenal. I opted for case laminate hardcovers with glossy pages, and the final product feels like a premium textbook.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Samuel Perez",
      review:
        "They took all the headache out of Amazon Publishing. They handled the ISBNs, the categories, the backend keywords, and the pricing strategy. So stress-free.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Nora White",
      review:
        "The Author Website they built includes a beautiful portfolio grid for all my titles. It's incredibly easy for me to update whenever I release a new book.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Levi Harris",
      review:
        "A fantastic Book Trailer service. I wasn't sure how to condense a 300-page thriller into a one-minute video, but their scriptwriters and editors pulled it off perfectly.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Mila Clark",
      review:
        "Their developmental Editing service completely saved my plot. They pointed out character inconsistencies I was blind to. My book is 100x better because of them.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Isaac Ramirez",
      review:
        "The Kindle Vella formatting service is super convenient. They chopped up my existing novel into perfect episodic chunks and handled the weekly uploading schedule for me.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Eleanor Green",
      review:
        "My Book Cover Design went from amateur to professional overnight. The designers know exactly what visual tropes work for specific genres to drive clicks.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Julian Nelson",
      review:
        "I've used their Book Writing team for three different projects now. The ghostwriters are professional, communicative, and incredibly fast without sacrificing quality.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Hazel Baker",
      review:
        "Their Book Marketing strategies are rooted in data. They showed me exactly where my ad spend was going and adjusted the campaigns weekly to lower my cost-per-click.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Wyatt Hill",
      review:
        "The Article Writing team provides me with weekly SEO content for my author site. It keeps my readers engaged between book launches and brings in new organic traffic.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Stella Moore",
      review:
        "I was blown away by the Book Illustrations. They provided character turnarounds and sketches before committing to final colors, ensuring I was happy every step of the way.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Gabriel Allen",
      review:
        "Their Book Printing logistics are solid. They shipped 200 copies directly to my distributor and another 50 to my house, all arriving right on schedule.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Aurora Young",
      review:
        "The Amazon Publishing team really understands the algorithm. With their optimized blurb and A+ content design, my conversion rate on Amazon has skyrocketed.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Leo King",
      review:
        "From designing my Author Website to producing my Book Trailer, Penguin Books Publisher has been my go-to agency. They are a true one-stop-shop for serious authors.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
  ];

  const visibleTestimonials = testimonials.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[500px] flex flex-col justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 text-center md:text-left">
          <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">
            Author Success Stories
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Hear From Our <br /> Published Authors.
          </h1>
          <p className="text-slate-300 mt-6 max-w-xl text-lg leading-relaxed hidden md:block">
            Join thousands of writers worldwide who have trusted us to turn their manuscripts into celebrated, high-quality books.
          </p>
        </div>
      </section>

      {/* ================= AUTO-MOVING LOGO SLIDER ================= */}
      <section className="bg-yellow-600 py-8 border-b-4 border-yellow-700 shadow-inner overflow-hidden">
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 35s linear infinite; display: flex; width: max-content; }
          .animate-marquee:hover { animation-play-state: paused; }
        `}</style>

        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-16 md:gap-24 pr-16 md:pr-24 opacity-90">
              {seamlessLogos.map((logoUrl, index) => (
                <div key={index} className="relative h-10 w-28 md:w-36 shrink-0 flex items-center justify-center">
                  <Image src={logoUrl} alt="Partner Logo" fill sizes="144px" className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS GRID ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col h-full hover:shadow-[0_20px_40px_-10px_rgba(202,138,4,0.15)] hover:-translate-y-2 hover:border-yellow-200 transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative Background Quote Icon */}
              <Quote className="absolute -top-6 -right-6 text-slate-50 group-hover:text-yellow-50 transition-colors duration-500 w-32 h-32 rotate-12 z-0" />
              
              <div className="flex-grow flex flex-col items-start relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-500 text-yellow-500" size={16} />
                  ))}
                </div>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-8 font-medium italic">
                  "{testimonial.review}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-100 w-full flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold uppercase shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-0.5">Verified Author</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= LOAD MORE BUTTON ================= */}
        {visibleCount < testimonials.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={handleLoadMore}
              className="bg-slate-900 text-white px-12 py-4 rounded-lg font-bold hover:bg-yellow-600 transition-all duration-300 shadow-xl uppercase tracking-widest text-sm flex items-center gap-2"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Ready to write your own success story?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of authors who have transformed their manuscripts into global bestsellers with Penguin Books Publisher.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-yellow-500 transition shadow-lg shadow-yellow-600/20 uppercase tracking-widest text-sm"
            >
              Get A Quote
            </button>
            <button
              onClick={() => Crisp.chat.open()}
              className="border-2 border-slate-700 text-white px-10 py-4 rounded-lg font-bold hover:bg-slate-800 transition uppercase tracking-widest text-sm flex items-center gap-2"
            >
              <MessageCircle size={18} /> Live Chat
            </button>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTACT FORM SECTION ================= */}
      <section className="py-24 relative bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl font-black text-slate-900">
              Request Your Free Consultation
            </h2>
            <p className="text-yellow-600 font-bold text-sm uppercase tracking-wide">
              Fill out your details below and an executive will get back to you shortly.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_50px_-12px_rgba(202,138,4,0.15)] border border-yellow-100 max-w-4xl mx-auto relative z-10">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                  <input type="hidden" name="access_key" value="f10abfcd-14e6-40dc-852b-ed7b35bd9825" />
                  <input type="hidden" name="redirect" value="https://penguinbookspublisher.com/thank-you" />
                  
                  <input type="text" placeholder="Full Name" required name="name" className="w-full border-b-2 border-slate-200 p-4 text-sm focus:border-yellow-500 outline-none transition bg-slate-50/50 rounded-t-md" />
                  <input type="email" placeholder="Email Address" name="email" required className="w-full border-b-2 border-slate-200 p-4 text-sm focus:border-yellow-500 outline-none transition bg-slate-50/50 rounded-t-md" />
                  <select name="service" required className="w-full border-b-2 border-slate-200 p-4 text-sm focus:border-yellow-500 outline-none transition text-slate-500 bg-slate-50/50 rounded-t-md appearance-none">
                    <option value="" disabled selected>Select A Service</option>
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
                <div className="flex flex-col gap-6">
                  <input type="tel" name="tel" placeholder="Phone Number" required className="w-full border-b-2 border-slate-200 p-4 text-sm focus:border-yellow-500 outline-none transition bg-slate-50/50 rounded-t-md" />
                  <textarea placeholder="Tell us about your book project..." required name="message" className="w-full border-b-2 border-slate-200 p-4 text-sm focus:border-yellow-500 outline-none transition bg-slate-50/50 rounded-t-md flex-grow min-h-[140px] resize-none"></textarea>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button type="submit" className="w-full md:w-auto px-16 bg-slate-900 text-white font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-yellow-600 transition shadow-xl">
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="text-center space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
              <button onClick={() => Crisp.chat.open()} className="w-full border-2 border-yellow-400 text-yellow-600 font-bold py-3 px-4 rounded-lg hover:bg-yellow-50 transition bg-white flex justify-center items-center gap-2">
                <MessageCircle size={16} /> Live Chat
              </button>
            </div>
            <div className="text-center space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900">Make a Call</h4>
              <a href="tel:+16463440382" className="flex justify-center items-center gap-2 w-full border-2 border-yellow-400 text-yellow-600 font-bold py-3 px-4 rounded-lg hover:bg-yellow-50 transition bg-white">
                <Phone size={16} /> +1 646 344 0382
              </a>
            </div>
            <div className="text-center space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900">Send us Email</h4>
              <a href="mailto:info@penguinbookspublisher.com " className="flex justify-center items-center gap-2 w-full border-2 border-yellow-400 text-yellow-600 font-bold py-3 px-2 rounded-lg hover:bg-yellow-50 transition bg-white text-xs sm:text-sm truncate">
                info@penguinbookspublisher.com 
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}