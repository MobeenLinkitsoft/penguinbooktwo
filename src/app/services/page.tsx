import Link from "next/link";

const serviceList = [
  { slug: "book-publishing", title: "Premium Book Publishing", desc: "Comprehensive production layout optimization, ISBN assignments, and distribution routing." },
  { slug: "ghostwriting", title: "Professional Ghostwriting", desc: "Work side-by-side with seasoned co-authors to turn raw ideas into complete, highly descriptive manuscripts." },
  { slug: "cover-design", title: "Bespoke Cover Illustration", desc: "Visual storytelling tailored specifically to catch readers' attention immediately on digital shelves." }
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-serif text-4xl font-bold text-brand-dark">Our Production Ecosystem</h2>
        <p className="text-brand-muted mt-4">We offer end-to-end support for authors, ensuring absolute aesthetic perfection at every stage of the publishing lifecycle.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceList.map((service) => (
          <div key={service.slug} className="border border-slate-100 rounded-2xl p-8 bg-white shadow-sm flex flex-col justify-between group hover:border-brand-primary transition">
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition">{service.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">{service.desc}</p>
            </div>
            <Link href={`/services/${service.slug}`} className="text-brand-primary text-sm font-semibold tracking-wide flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Learn full workflow &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}