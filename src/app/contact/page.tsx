"use client";
import { Crisp } from "crisp-sdk-web";
import Image from "next/image";

export default function ContactPage() {
  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`,
  );

  // Double the array so the infinite scroll animation is completely seamless
  const seamlessLogos = [...trustLogos, ...trustLogos];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[450px] flex flex-col justify-center">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />

        {/* Hero Content (pt-24 to account for absolute navbar) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
          <p className="text-white text-sm font-bold uppercase tracking-widest mb-2">
            Ready to Publish?
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white max-w-3xl">
            Let's Bring Your Story To Life.
          </h1>
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

      {/* ================= MAIN CONTACT FORM SECTION ================= */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Titles */}
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl font-black text-slate-900">
              Tell Us About Your Project
            </h2>
            <p className="text-yellow-600 font-bold text-sm">
              Provide your details below, and a dedicated publishing executive
              will contact you shortly.
            </p>
          </div>

          {/* Form Container with Soft Yellow Shadow */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_50px_-12px_rgba(202,138,4,0.15)] border border-slate-100 max-w-4xl mx-auto relative z-10">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <input
                    type="hidden"
                    name="access_key"
                    value="f10abfcd-14e6-40dc-852b-ed7b35bd9825"
                  />
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://penguinebookspublishing.com/thank-you"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Author / Full Name"
                    required
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 bg-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 bg-white"
                  />
                  <select
                    name="service"
                    required
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-500 bg-white appearance-none"
                  >
                    <option value="" disabled selected>
                      Select A Primary Service
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

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 bg-white"
                  />
                  <textarea
                    placeholder="Briefly describe your book, word count, or publishing goals..."
                    name="message"
                    required
                    className="w-full border border-yellow-200 rounded-md p-3.5 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition text-slate-700 bg-white flex-grow min-h-[120px] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white font-bold py-4 rounded-md uppercase tracking-wider hover:bg-yellow-700 transition shadow-md mt-2"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {/* Box 1 */}
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Instant Consultation</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="w-full border border-yellow-400 text-yellow-600 font-medium py-3 px-4 rounded-md hover:bg-yellow-50 transition bg-white"
              >
                Live Chat Now
              </button>
            </div>

            {/* Box 2 */}
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Speak With An Expert</h4>
              <a
                href="tel:+1 (888) 919-9811"
                className="block w-full border border-yellow-400 text-yellow-600 font-medium py-3 px-4 rounded-md hover:bg-yellow-50 transition bg-white"
              >
                +1 (888) 919-9811
              </a>
            </div>

            {/* Box 3 */}
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Email Our Team</h4>
              <a
                href="mailto:info@penguinebookspublishing.com "
                className="block w-full border border-yellow-400 text-yellow-600 font-medium py-3 px-2 rounded-md hover:bg-yellow-50 transition bg-white text-sm md:text-base truncate"
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
