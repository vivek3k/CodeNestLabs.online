import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Elaan Crafted",
    url: "https://www.elaancrafted.com/",
    preview: "/elaancrafted-preview.png",
    category: "Fashion & Craft",
    categoryStyle: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-400/20",
    accentHover: "hover:border-cyan-400/30",
    description:
      "A refined e-commerce experience for handcrafted goods, blending elegant visual storytelling with a smooth shopping journey built for conversion.",
  },
  {
    title: "The Mulberry Bush",
    url: "https://www.themulberrybush.co.in/",
    preview: "/mulberrybush-preview.png",
    category: "Lifestyle & Retail",
    categoryStyle: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-400/20",
    accentHover: "hover:border-rose-400/30",
    description:
      "A charming lifestyle and retail storefront built to showcase products with warmth and character — designed to turn browsing visitors into repeat customers.",
  },
  {
    title: "PawGap Pets Yoga",
    url: "https://pawgapetsyoga.com/",
    preview: "/pawga-preview.png",
    category: "Wellness & Lifestyle",
    categoryStyle: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-400/20",
    accentHover: "hover:border-emerald-400/30",
    description:
      "A modern digital platform for a yoga studio specialising in pet wellness. Clean UX, strong brand identity, and an experience built to convert visitors into loyal clients.",
  },
  {
    title: "Hands Printer Technology",
    url: "https://handsprintertechnology.com/",
    preview: "/hands-preview.png",
    category: "Technology & Business",
    categoryStyle: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-400/20",
    accentHover: "hover:border-blue-400/30",
    description:
      "Professional business platform showcasing industrial printing solutions — engineered to drive credibility, improve lead generation, and communicate technical expertise.",
  },
  {
    title: "Memora Holidays",
    url: "https://memoraholidays.in/",
    preview: "/memora-preview.png",
    category: "Travel & Tourism",
    categoryStyle: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-400/20",
    accentHover: "hover:border-amber-400/30",
    description:
      "Premium travel platform designed to inspire destination discovery, showcase curated holiday packages, and build lasting trust with modern travellers across India.",
  },
  {
    title: "MSK & R",
    url: "https://mskandr.com/",
    preview: "/mskandr-preview.png",
    category: "Corporate & Consulting",
    categoryStyle: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-400/20",
    accentHover: "hover:border-violet-400/30",
    description:
      "Corporate digital presence engineered to communicate professional authority, strengthen brand positioning, and support client acquisition for a consulting business.",
  },
];

const OurWork = () => {
  return (
    <main className="pt-16 bg-background page-enter">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4 dark:opacity-[0.08]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/6 rounded-full blur-[100px] dark:opacity-[0.08]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:opacity-[0.07]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-primary mb-4 inline-flex">
            <Globe className="w-3 h-3" />
            Client Work
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-wider text-foreground mb-5 leading-none">
            Real Products.
            <br />
            <span className="text-gradient glow-text">Real Businesses.</span>
          </h1>
          <p className="section-subtitle mx-auto text-base">
            A selection of digital platforms and business websites built for modern brands
            and growing companies.
          </p>
        </div>
      </section>

      {/* ── Portfolio Grid ─────────────────────────────────────── */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 stagger-children">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm ${project.accentHover} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/20`}
              >
                {/* ── Screenshot preview ──────────────────────── */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-56 overflow-hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img
                    src={project.preview}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Category badge — top left */}
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold border backdrop-blur-sm bg-black/30 ${project.categoryStyle}`}>
                    {project.category}
                  </span>

                  {/* External link icon — top right */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/40 border border-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ExternalLink className="w-3.5 h-3.5 text-white" strokeWidth={1.75} />
                  </div>

                  {/* Hover overlay — "View Live" pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                    <span className="bg-white/90 dark:bg-white/95 text-black text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                      <ExternalLink className="w-3 h-3" strokeWidth={2} />
                      View Live Site
                    </span>
                  </div>
                </a>

                {/* ── Content ─────────────────────────────────── */}
                <div className="p-6">
                  <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors duration-150"
                  >
                    Visit Website
                    <ExternalLink className="w-3 h-3" strokeWidth={2} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-14 bg-secondary/60 dark:bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15 dark:opacity-[0.07]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.12),transparent_70%)] dark:opacity-[0.08]" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wider text-foreground mb-3">
            Ready to Build Yours?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Tell us what you're building — we'll design, engineer, and deliver it.
          </p>
          <Button asChild size="lg" className="glow-box">
            <Link to="/request">
              Start Your Project <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </section>

    </main>
  );
};

export default OurWork;
