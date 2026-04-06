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
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconBg: "bg-blue-500/15 group-hover:bg-blue-500/25",
    accent: "text-blue-600 dark:text-blue-400",
    tag: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-400/20",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "End-to-end ML pipelines — from data cleaning and feature engineering to model training, evaluation, and deployment on cloud infrastructure.",
    features: ["Predictive Analytics & Classification", "NLP & Text Processing", "Recommendation Engines", "Model APIs with FastAPI"],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    iconBg: "bg-violet-500/15 group-hover:bg-violet-500/25",
    accent: "text-violet-600 dark:text-violet-400",
    tag: "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-400/20",
  },
  {
    icon: Layers,
    title: "Deep Learning & Computer Vision",
    description:
      "Custom neural networks, CNNs, and transformer models for vision tasks, object detection, and generative AI — production-grade and documented.",
    features: ["Image Recognition & Object Detection", "YOLOv8 / PyTorch / TensorFlow", "Generative AI & Diffusion Models", "Medical Imaging & CV Pipelines"],
    gradient: "from-red-500/20 via-orange-500/10 to-transparent",
    iconBg: "bg-red-500/15 group-hover:bg-red-500/25",
    accent: "text-red-600 dark:text-red-400",
    tag: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-400/20",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Scalable REST and GraphQL APIs, microservices, database architecture, and cloud deployments built to handle real-world traffic.",
    features: ["REST & GraphQL APIs", "JWT / OAuth2 Authentication", "PostgreSQL, MongoDB, Redis", "AWS / Docker / CI-CD"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconBg: "bg-emerald-500/15 group-hover:bg-emerald-500/25",
    accent: "text-emerald-600 dark:text-emerald-400",
    tag: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-400/20",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description:
      "Interactive, real-time data dashboards that turn raw numbers into clear insights — built for business users and analysts alike.",
    features: ["Real-time WebSocket Updates", "Custom Charts & KPI Tiles", "Advanced Filtering & Drill-down", "PDF / Excel Export"],
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    iconBg: "bg-amber-500/15 group-hover:bg-amber-500/25",
    accent: "text-amber-600 dark:text-amber-400",
    tag: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-400/20",
  },
  {
    icon: Bot,
    title: "Automation & Bots",
    description:
      "Intelligent automation scripts, web scrapers, Telegram/WhatsApp bots, and workflow pipelines that save hundreds of hours of manual work.",
    features: ["Web Scraping & Data Extraction", "Telegram / Discord Bots", "Scheduled Jobs & Pipelines", "Browser Automation (Playwright)"],
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    iconBg: "bg-pink-500/15 group-hover:bg-pink-500/25",
    accent: "text-pink-600 dark:text-pink-400",
    tag: "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-400/20",
  },
  {
    icon: FileText,
    title: "Research & Documentation",
    description:
      "IEEE-style research papers, technical documentation, project reports, and literature reviews — delivered to the highest academic standard.",
    features: ["IEEE / ACM Formatted Papers", "Literature Review & Survey", "Technical Project Reports", "LaTeX & Word Formats"],
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    iconBg: "bg-cyan-500/15 group-hover:bg-cyan-500/25",
    accent: "text-cyan-600 dark:text-cyan-400",
    tag: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-400/20",
  },
  {
    icon: Bug,
    title: "Testing & QA",
    description:
      "Comprehensive testing — unit, integration, E2E, and performance — so your product ships with zero surprises.",
    features: ["Unit & Integration Tests", "E2E with Playwright / Cypress", "Performance & Load Testing", "Bug Fixing & Code Review"],
    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
    iconBg: "bg-indigo-500/15 group-hover:bg-indigo-500/25",
    accent: "text-indigo-600 dark:text-indigo-400",
    tag: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-400/20",
  },
  {
    icon: Settings,
    title: "Full-Stack SaaS Development",
    description:
      "Complete SaaS products — multi-tenancy, billing, auth, admin dashboards — built from scratch and ready to onboard your first paying customer.",
    features: ["Multi-tenant Architecture", "Stripe / Razorpay Billing", "Role-based Access Control", "Admin & Analytics Dashboard"],
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    iconBg: "bg-green-500/15 group-hover:bg-green-500/25",
    accent: "text-green-600 dark:text-green-400",
    tag: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-400/20",
  },
];

const processSteps = [
  {
    step: "01",
    icon: MessageSquareQuote,
    title: "Discuss",
    description: "Share your idea, requirements, and timeline. We ask the right questions to understand exactly what you need.",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Plan",
    description: "We break down your project into a clear roadmap — tech stack, architecture, milestones, and pricing.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Build",
    description: "Development begins with full transparency. Daily updates and feedback at every stage.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Deliver",
    description: "Tested, documented, and handed over — with post-delivery support included.",
  },
];

const Services = () => {
  return (
    <main className="pt-16 bg-background">

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/6 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

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
            From a student's final-year ML project to a founder's production SaaS —
            we have the expertise to build it fast, clean, and right the first time.
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
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Coloured gradient header */}
                <div className={`h-28 bg-gradient-to-br ${service.gradient} flex items-center justify-between px-5 relative`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:14px_14px]" />
                  <span className={`relative px-2.5 py-1 rounded-full text-[10px] font-semibold border ${service.tag}`}>
                    {service.title.split(" ")[0]}
                  </span>
                  <div className={`relative w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center transition-colors duration-200 shadow-sm`}>
                    <service.icon className={`w-7 h-7 ${service.accent}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${service.accent} flex-shrink-0 mt-0.5`} />
                        <span className="text-foreground/80">{feature}</span>
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
      <section className="py-16 md:py-20 bg-secondary/60 dark:bg-muted/20">
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge-primary mb-5 inline-flex">
            <Rocket className="w-3 h-3" />
            Let's Build Together
          </span>
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-wider text-foreground mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Tell us what you need — we'll scope it, price it, and ship it.
            Free consultation. No commitment.
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
