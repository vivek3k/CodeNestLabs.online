import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VSCodeHero from "@/components/VSCodeHero";
import {
  Code2,
  Brain,
  Server,
  ArrowRight,
  DollarSign,
  Zap,
  Users,
  HeadphonesIcon,
  FileText,
  Bug,
  Bot,
  CheckCircle2,
  MessageSquareQuote,
  Rocket,
  Globe,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "SaaS Web Applications",
    description:
      "Production-ready SaaS platforms with multi-tenancy, auth, billing, and admin dashboards — built to onboard your first paying customer fast.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom AI systems, LLM integrations, and ML pipelines that plug directly into your product and deliver measurable business outcomes.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Scalable REST & GraphQL APIs, microservices, and cloud infrastructure engineered to handle real production traffic from day one.",
  },
  {
    icon: Bot,
    title: "Automation Systems",
    description:
      "Workflow automation, intelligent bots, and data pipelines that eliminate manual overhead and let your team focus on what matters.",
  },
  {
    icon: FileText,
    title: "E-commerce Solutions",
    description:
      "Custom storefronts, multi-vendor marketplaces, and headless commerce platforms built for conversion, speed, and scale.",
  },
  {
    icon: Bug,
    title: "Testing & QA",
    description:
      "End-to-end testing strategy — unit, integration, performance, and E2E — so every release ships with confidence.",
  },
];

const process = [
  {
    step: "01",
    icon: MessageSquareQuote,
    title: "Discovery Call",
    description:
      "We learn your business goals, technical constraints, and timeline. No fluff — just a focused conversation to scope what needs to be built.",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Architecture & Roadmap",
    description:
      "We design the technical approach — stack selection, system architecture, milestones, and a fixed-price proposal. You approve before we write a line.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Build & Iterate",
    description:
      "Engineering starts immediately. You get working builds, async updates, and direct input at every milestone — not a black box.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Launch & Handover",
    description:
      "Fully tested, documented, and deployed. We handle the launch and stay available for support, feature work, and future scale.",
  },
];


const whyChooseUs = [
  {
    icon: DollarSign,
    title: "Fixed-Scope Pricing",
    description:
      "Every engagement is scoped and priced before a single line is written. No billing surprises, no scope creep.",
  },
  {
    icon: Zap,
    title: "Startup-Speed Delivery",
    description:
      "Most products ship in 2–4 weeks. We move at the pace your business needs — without cutting corners on quality.",
  },
  {
    icon: Users,
    title: "Experienced Engineering Team",
    description:
      "Every project is handled by engineers with real product experience — no outsourcing, no hand-offs.",
  },
  {
    icon: HeadphonesIcon,
    title: "Partnership Beyond Delivery",
    description:
      "We don't disappear at launch. Ongoing support, iterations, and feature work — whenever you need it.",
  },
  {
    icon: ShieldCheck,
    title: "Complete IP Transfer",
    description:
      "Source code, infrastructure configs, and all assets transfer to you on delivery. Clean handover, zero lock-in.",
  },
  {
    icon: TrendingUp,
    title: "Architecture That Scales",
    description:
      "We design for where you're going, not just where you are. No painful rewrites when you hit product-market fit.",
  },
];


const techStack = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Next.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "FastAPI",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "AWS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "PyTorch",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
];

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <VSCodeHero />

      {/* ── SCROLLING TECH STRIP ────────────────────────────── */}
      <div className="relative py-4 border-y border-border bg-secondary/70 dark:bg-muted/30 overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground px-4 py-1.5 rounded-full bg-background/60 border border-border/40 shrink-0">
              <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain dark:brightness-90" loading="lazy" />
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── STORYVFX: CHAPTER TIMELINE ──────────────────────── */}
      <section className="py-16 relative overflow-hidden">
        <div className="orb orb-2 top-[20%] right-[5%] opacity-60" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-muted mb-4 inline-flex">Our Journey</span>
            <h2 className="section-title">
              The Story Behind <span className="text-primary">CodeNestLabs</span>
            </h2>
          </div>
          <div className="space-y-10">
            {[
              {
                chapter: "Chapter 01",
                title: "The Gap in the Market",
                body: "Great businesses were being failed by generic dev shops. Projects stalled mid-build. Launches missed windows. Technical debt piled up before the first user signed in. The market didn't need another agency — it needed an engineering partner.",
              },
              {
                chapter: "Chapter 02",
                title: "We Built the Studio",
                body: "A team of engineers who build like founders — fast, opinionated, and accountable. CodeNestLabs was created to close the gap between what businesses need and what most development teams actually deliver.",
              },
              {
                chapter: "Chapter 03",
                title: "One Product Studio. One Standard.",
                body: "Every product we ship is treated as if it were our own. Clean architecture, tested code, and a team that stays accountable long after deployment. That standard applies to every client — from seed-stage startup to established enterprise.",
              },
            ].map((c) => (
              <div key={c.chapter} className="chapter-line">
                <span className="text-[10px] font-semibold text-primary uppercase tracking-widest mb-1 block">{c.chapter}</span>
                <h3 className="text-base font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY / PROBLEM → SOLUTION ──────────────────── */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.025] to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story */}
            <div>
              <span className="badge-muted mb-4 inline-flex">Our Story</span>
              <h2 className="section-title mb-6">
                Built for Businesses That
                <span className="text-primary"> Can't Afford to Get It Wrong</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Founders spend months hunting for developers who actually show up. Growing
                  companies waste engineering budgets on agencies that over-promise, under-deliver,
                  and disappear when problems arise.
                </p>
                <p>
                  We built CodeNestLabs to be a different kind of partner — a product studio where
                  every engagement gets
                  <span className="text-foreground font-semibold"> hands-on engineering attention</span>,
                  honest timelines, and software architected to grow with your business.
                </p>
                <p>
                  We work with startups, SaaS companies, and established businesses.
                  Every client is treated as a long-term partner — not a project in a queue.
                </p>
              </div>
            </div>

            {/* Promise cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle2, title: "Zero ghosting", desc: "Async-first communication, daily updates, and a team that's always reachable." },
                { icon: ShieldCheck, title: "Full IP ownership", desc: "Every line of code, every asset — yours on delivery. No lock-in, ever." },
                { icon: TrendingUp, title: "Long-term partnerships", desc: "We stay engaged after delivery — iterating, scaling, and supporting as you grow." },
                { icon: Globe, title: "Globally distributed", desc: "Remote-native team. We work across timezones without friction." },
              ].map((item) => (
                <div key={item.title} className="relative tech-card p-5 rounded-xl group overflow-hidden">
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/8 rounded-full blur-2xl pointer-events-none" />
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-200">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ─────────────────────────────────────── */}
      <section className="py-16 bg-secondary/60 dark:bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-flex">Process</span>
            <h2 className="section-title">How We Deliver</h2>
            <p className="section-subtitle mx-auto mt-2">
              Simple, transparent, and built around your timeline — not ours.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative group">
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent z-0 -translate-y-px" style={{ width: "calc(100% - 2rem)", left: "calc(100% - 1rem)" }} />
                )}
                <div className="relative z-10 p-6 rounded-xl tech-card transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-display text-primary/20 leading-none">{p.step}</span>
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <p.icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-flex">Services</span>
            <h2 className="section-title">Everything You Need to Ship</h2>
            <p className="section-subtitle mx-auto mt-2">
              From SaaS platforms to AI tools, e-commerce systems to custom dashboards — we build what modern businesses run on.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 rounded-xl tech-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-border/60 hover:border-primary/40">
              <Link to="/services">
                Explore All Services <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-flex">Why CodeNestLabs</span>
            <h2 className="section-title">The Difference Is in the Details</h2>
            <p className="section-subtitle mx-auto mt-2">
              We don't just write code. We build partnerships that last beyond delivery.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl tech-card transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 dark:opacity-[0.07]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.18),transparent_70%)] dark:opacity-[0.08]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.04)_1px,transparent_1px)] bg-[size:40px_40px] dark:opacity-[0.06]" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge-primary mb-6 inline-flex">
            <Rocket className="w-3 h-3" />
            Let's Build Together
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground mb-5 uppercase tracking-wider leading-tight">
            Your Next Project
            <br />
            <span className="text-primary glow-text">Starts Today.</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Startups, SaaS companies, and growing businesses trust CodeNestLabs as their engineering partner.
            Tell us what you're building — we'll make it production-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glow-box text-base px-8 py-6 h-auto">
              <Link to="/request">
                Request a Project <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 h-auto border-border/60 hover:border-primary/40">
              <Link to="/contact">Talk to Us First</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Free consultation · No commitment · Reply within 24 hours
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
