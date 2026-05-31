import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Brain,
  Layers,
  Server,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle2,
  Rocket,
  MessageSquareQuote,
  Lightbulb,
  ShieldCheck,
  FileText,
  Bug,
  Bot,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "React Web Applications",
    description:
      "Pixel-perfect, blazing-fast SPAs and PWAs built with React, TypeScript, and modern tooling — designed to convert visitors into clients.",
    features: ["Single Page & Progressive Web Apps", "TypeScript + Tailwind", "API & Auth Integration", "Mobile-first responsive UI"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=80",
    gradient: "from-blue-600/40 via-blue-500/15 to-transparent",
    iconBg: "bg-blue-500/20 group-hover:bg-blue-500/30",
    accent: "text-blue-400",
    tag: "bg-black/40 text-blue-300 border-blue-400/30 backdrop-blur-sm",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "End-to-end ML pipelines — from data cleaning and feature engineering to model training, evaluation, and deployment on cloud infrastructure.",
    features: ["Predictive Analytics & Classification", "NLP & Text Processing", "Recommendation Engines", "Model APIs with FastAPI"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80",
    gradient: "from-violet-600/40 via-purple-500/15 to-transparent",
    iconBg: "bg-violet-500/20 group-hover:bg-violet-500/30",
    accent: "text-violet-400",
    tag: "bg-black/40 text-violet-300 border-violet-400/30 backdrop-blur-sm",
  },
  {
    icon: Layers,
    title: "Deep Learning & Computer Vision",
    description:
      "Custom neural networks, CNNs, and transformer models for vision tasks, object detection, and generative AI — production-grade and documented.",
    features: ["Image Recognition & Object Detection", "YOLOv8 / PyTorch / TensorFlow", "Generative AI & Diffusion Models", "Medical Imaging & CV Pipelines"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=80",
    gradient: "from-orange-600/40 via-amber-500/15 to-transparent",
    iconBg: "bg-orange-500/20 group-hover:bg-orange-500/30",
    accent: "text-orange-400",
    tag: "bg-black/40 text-orange-300 border-orange-400/30 backdrop-blur-sm",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Scalable REST and GraphQL APIs, microservices, database architecture, and cloud deployments built to handle real-world traffic.",
    features: ["REST & GraphQL APIs", "JWT / OAuth2 Authentication", "PostgreSQL, MongoDB, Redis", "AWS / Docker / CI-CD"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
    gradient: "from-emerald-600/40 via-teal-500/15 to-transparent",
    iconBg: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
    accent: "text-emerald-400",
    tag: "bg-black/40 text-emerald-300 border-emerald-400/30 backdrop-blur-sm",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description:
      "Interactive, real-time data dashboards that turn raw numbers into clear insights — built for business users and analysts alike.",
    features: ["Real-time WebSocket Updates", "Custom Charts & KPI Tiles", "Advanced Filtering & Drill-down", "PDF / Excel Export"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    gradient: "from-amber-600/40 via-yellow-500/15 to-transparent",
    iconBg: "bg-amber-500/20 group-hover:bg-amber-500/30",
    accent: "text-amber-400",
    tag: "bg-black/40 text-amber-300 border-amber-400/30 backdrop-blur-sm",
  },
  {
    icon: Bot,
    title: "Automation & Bots",
    description:
      "Intelligent automation scripts, web scrapers, Telegram/WhatsApp bots, and workflow pipelines that save hundreds of hours of manual work.",
    features: ["Web Scraping & Data Extraction", "Telegram / Discord Bots", "Scheduled Jobs & Pipelines", "Browser Automation (Playwright)"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80",
    gradient: "from-pink-600/40 via-rose-500/15 to-transparent",
    iconBg: "bg-pink-500/20 group-hover:bg-pink-500/30",
    accent: "text-pink-400",
    tag: "bg-black/40 text-pink-300 border-pink-400/30 backdrop-blur-sm",
  },
  {
    icon: FileText,
    title: "E-commerce & Storefronts",
    description:
      "Custom e-commerce platforms, multi-vendor marketplaces, and headless storefronts built for conversion, performance, and business scale.",
    features: ["Custom Storefront & Product Catalog", "Cart, Checkout & Payment Integration", "Inventory & Order Management", "Customer Portal & Sales Analytics"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80",
    gradient: "from-cyan-600/40 via-sky-500/15 to-transparent",
    iconBg: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
    accent: "text-cyan-400",
    tag: "bg-black/40 text-cyan-300 border-cyan-400/30 backdrop-blur-sm",
  },
  {
    icon: Bug,
    title: "Testing & QA",
    description:
      "Comprehensive testing — unit, integration, E2E, and performance — so your product ships with zero surprises.",
    features: ["Unit & Integration Tests", "E2E with Playwright / Cypress", "Performance & Load Testing", "Bug Fixing & Code Review"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
    gradient: "from-indigo-600/40 via-violet-500/15 to-transparent",
    iconBg: "bg-indigo-500/20 group-hover:bg-indigo-500/30",
    accent: "text-indigo-400",
    tag: "bg-black/40 text-indigo-300 border-indigo-400/30 backdrop-blur-sm",
  },
  {
    icon: Settings,
    title: "Full-Stack SaaS Development",
    description:
      "Complete SaaS products — multi-tenancy, billing, auth, admin dashboards — built from scratch and ready to onboard your first paying customer.",
    features: ["Multi-tenant Architecture", "Stripe / Razorpay Billing", "Role-based Access Control", "Admin & Analytics Dashboard"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    gradient: "from-green-600/40 via-emerald-500/15 to-transparent",
    iconBg: "bg-green-500/20 group-hover:bg-green-500/30",
    accent: "text-green-400",
    tag: "bg-black/40 text-green-300 border-green-400/30 backdrop-blur-sm",
  },
];

const processSteps = [
  {
    step: "01",
    icon: MessageSquareQuote,
    title: "Discovery",
    description: "A focused call to understand your business goals, technical landscape, and what needs to be built — not just what you asked for.",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Architecture",
    description: "We design the technical approach and produce a fixed-price proposal with stack, milestones, and timeline. You approve everything upfront.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Engineering",
    description: "Development runs in clear sprints with working builds at each milestone. You have direct input throughout — no black boxes.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Launch",
    description: "Fully tested, deployed, and documented. Complete IP handover at delivery, with ongoing support available as you scale.",
  },
];

const Services = () => {
  return (
    <main className="pt-16 bg-background page-enter">

      {/* Hero */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4 dark:opacity-[0.08]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/6 rounded-full blur-[100px] dark:opacity-[0.08]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:opacity-[0.07]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-primary mb-4 inline-flex">
            <Rocket className="w-3 h-3" />
            What We Build
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-wider text-foreground mb-5 leading-none">
            Every Service You
            <br />
            <span className="text-gradient glow-text">Need to Ship.</span>
          </h1>
          <p className="section-subtitle mx-auto text-base">
            From your first SaaS MVP to enterprise-grade infrastructure — we build software
            that scales with your business, not against it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glow-box px-8">
              <Link to="/request">
                Start Your Project <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 border-border/60 hover:border-primary/40">
              <Link to="/contact">Talk to Us First</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1.5 hover:border-border/80 transition-all duration-350"
              >
                {/* ── Image header ──────────────────────────────── */}
                <div className="relative h-44 overflow-hidden">
                  {/* Photo */}
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  {/* Dark gradient so tag/icon stay readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Service colour tint */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                  {/* Subtle dot pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />

                  {/* Category pill + icon — top row */}
                  <div className="absolute top-3 inset-x-3 flex items-start justify-between">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${service.tag}`}>
                      {service.title.split(" ")[0]}
                    </span>
                    <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-md group-hover:scale-110`}>
                      <service.icon className={`w-5 h-5 ${service.accent}`} />
                    </div>
                  </div>

                  {/* Service title on image — bottom left */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-sm font-bold text-white leading-tight drop-shadow-sm">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* ── Content ───────────────────────────────────── */}
                <div className="p-5 pt-4">
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${service.accent} flex-shrink-0 mt-0.5`} />
                        <span className="text-foreground/75">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 md:py-14 bg-secondary/60 dark:bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-primary mb-4 inline-flex">How It Works</span>
            <h2 className="section-title">From Brief to Delivery</h2>
            <p className="section-subtitle mx-auto mt-2">
              A simple, transparent process built around your timeline — not ours.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((item, index) => (
              <div key={item.step} className="relative group">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-9 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent z-0" style={{ width: "calc(100% - 1.5rem)", left: "calc(100% - 0.75rem)" }} />
                )}
                <div className="relative z-10 p-6 rounded-xl tech-card transition-all duration-300 text-center h-full">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-4xl font-display text-primary/20 leading-none">{item.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 dark:opacity-[0.07]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_70%)] dark:opacity-[0.08]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.04)_1px,transparent_1px)] bg-[size:40px_40px] dark:opacity-[0.06]" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge-primary mb-5 inline-flex">
            <Rocket className="w-3 h-3" />
            Let's Build Together
          </span>
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-wider text-foreground mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Tell us what you're building — we'll scope it, architect it, and ship it.
            Free discovery call. Fixed pricing. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glow-box px-8">
              <Link to="/request">
                Request a Project <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 border-border/60 hover:border-primary/40">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
