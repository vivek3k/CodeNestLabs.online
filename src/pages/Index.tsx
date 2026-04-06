import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  Star,
  MessageSquareQuote,
  Rocket,
  Globe,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "React Web Apps",
    description:
      "Pixel-perfect, blazing-fast web applications that convert visitors into clients. We build with React, TypeScript, and modern tooling.",
  },
  {
    icon: Brain,
    title: "ML / Deep Learning",
    description:
      "End-to-end ML pipelines, neural networks, and AI integrations — from proof of concept to production-ready models.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Scalable REST & GraphQL APIs, database architecture, and cloud infrastructure built to handle real traffic.",
  },
  {
    icon: Bot,
    title: "Automation & Bots",
    description:
      "Intelligent automation scripts, web scrapers, and bots that save hundreds of hours of manual work.",
  },
  {
    icon: FileText,
    title: "Research & Docs",
    description:
      "Technical papers, IEEE-style documentation, and comprehensive reports delivered to the highest academic standard.",
  },
  {
    icon: Bug,
    title: "Testing & QA",
    description:
      "Rigorous testing, bug fixing, and quality assurance so your product ships with confidence.",
  },
];

const process = [
  {
    step: "01",
    icon: MessageSquareQuote,
    title: "Tell Us Your Vision",
    description:
      "Share your idea, requirements, and timeline. We listen carefully and ask the right questions to understand exactly what you need.",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "We Design the Approach",
    description:
      "Our team breaks down your project into a clear plan — tech stack, architecture, milestones, and delivery timeline.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "We Build & Iterate",
    description:
      "Development begins with full transparency. You get progress updates and can provide feedback at every stage.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Delivered & Supported",
    description:
      "Your project is tested, documented, and handed over — with ongoing support so you're never left stranded.",
  },
];

const testimonials = [
  {
    name: "Sahithya ",
    role: "CS Student, Snist Hyderabad",
    text: "CodeNestLabs delivered my final year ML project in just 10 days. The code quality was exceptional and they explained every part so I could present it confidently. Absolute lifesavers.",
    rating: 5,
  },
  {
    name: "Sindhu",
    role: "Startup Founder",
    text: "I needed a full-stack dashboard with authentication and analytics built fast. The team exceeded every expectation — delivered on time, within budget, and with clean code I could maintain myself.",
    rating: 5,
  },
  {
    name: "Vivek",
    role: "Content writer, Tech Blogger",
    text: "They built a custom NLP pipeline for my dissertation research. Professional, communicative, and technically brilliant. I've already referred three colleagues to them.",
    rating: 5,
  },
];

const trustSignals = [
  { icon: Award, label: "150+ Projects Delivered" },
  { icon: Users, label: "100+ Happy Clients" },
  { icon: Globe, label: "Serving All Over India" },
  { icon: Clock, label: "Avg. 7-Day Delivery" },
];

const whyChooseUs = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden costs. Fixed pricing quoted upfront so you always know what you're paying before we start.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Most projects delivered in 5–15 days. Urgent? We offer express timelines for time-sensitive work.",
  },
  {
    icon: Users,
    title: "Expert Engineers",
    description:
      "Senior developers with hands-on experience in React, Python, ML, and cloud — not generalists.",
  },
  {
    icon: HeadphonesIcon,
    title: "End-to-End Support",
    description:
      "From kick-off to post-delivery. We stay available for questions, revisions, and future upgrades.",
  },
  {
    icon: ShieldCheck,
    title: "100% Ownership",
    description:
      "All source code, assets, and IP are yours. No lock-in, no subscriptions — you own everything.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description:
      "We architect for growth from day one so your product doesn't need a full rewrite six months later.",
  },
];

const techStack = [
  "React", "TypeScript", "Python", "Node.js", "TensorFlow",
  "PyTorch", "FastAPI", "PostgreSQL", "MongoDB", "AWS",
  "Docker", "Next.js",
];

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* StoryVFX: Layered animated orbs */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4" />
        <div className="orb orb-1 top-[10%] right-[15%]" />
        <div className="orb orb-2 bottom-[20%] left-[10%]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/5 rounded-full blur-[160px]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <span className="badge-primary mb-6 inline-flex">
              <Rocket className="w-3 h-3" />
              Startup Studio &amp; Dev Partner
            </span>
          </div>

          <h1 className="animate-fade-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mt-4 mb-6 leading-none tracking-wider uppercase">
            From Idea to
            <br />
            <span className="text-gradient glow-text">Live Product.</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground/70">
              We Build It For You.
            </span>
          </h1>

          <p className="animate-fade-up animation-delay-200 text-muted-foreground max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            CodeNestLabs is the engineering partner for students, founders, and businesses who need
            custom software built <strong className="text-foreground">fast, clean, and right the first time</strong> —
            without the agency price tag.
          </p>

          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glow-box text-base px-8 py-6 h-auto">
              <Link to="/request">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 h-auto border-border/60 hover:border-primary/40">
              <Link to="/our-work">View Our Work</Link>
            </Button>
          </div>

          {/* Trust signals bar */}
          <div className="animate-fade-up animation-delay-400 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {trustSignals.map((t) => (
              <div key={t.label} className="relative group flex flex-col items-center gap-2.5 p-4 rounded-xl tech-card overflow-hidden">
                {/* subtle red glow corner */}
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <t.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground text-center font-medium leading-tight">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCROLLING TECH STRIP ────────────────────────────── */}
      <div className="relative py-5 border-y border-border bg-secondary/70 dark:bg-muted/30 overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-sm font-medium text-muted-foreground px-4 py-1 rounded-full bg-background/60 border border-border/40 shrink-0">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── STORYVFX: CHAPTER TIMELINE ──────────────────────── */}
      <section className="py-24 relative overflow-hidden">
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
                title: "The Problem We Saw",
                body: "Students were staying up all night, scrambling to find developers for their final-year projects. Founders burned money on agencies that disappeared mid-project. Quality code was either too expensive or too slow.",
              },
              {
                chapter: "Chapter 02",
                title: "We Decided to Fix It",
                body: "A small team of engineers — tired of watching good ideas die — built CodeNestLabs. The mission: deliver production-grade software at a price and speed that actually works for real people.",
              },
              {
                chapter: "Chapter 03",
                title: "150+ Projects. One Promise.",
                body: "Every project we take on, we treat like it's our own product. Full transparency, daily updates, clean code, and support after delivery. That promise hasn't changed — and it never will.",
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
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.025] to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story */}
            <div>
              <span className="badge-muted mb-4 inline-flex">Our Story</span>
              <h2 className="section-title mb-6">
                We Started Because
                <span className="text-primary"> Good Dev Work</span> Was Too Hard to Find
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Every week, students scramble to get their final-year projects done. Founders
                  spend months hunting for developers who actually show up. Businesses waste
                  budgets on agencies that over-promise and under-deliver.
                </p>
                <p>
                  We built CodeNestLabs to solve that. A studio where every project gets
                  <span className="text-foreground font-semibold"> senior-level attention</span>,
                  honest timelines, and code you're proud to put your name on.
                </p>
                <p>
                  150+ projects later, serving clients all over India and beyond, that mission
                  hasn't changed. Every client who trusts us gets treated like a founding partner
                  — not a ticket number.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-display text-primary glow-text">150+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Projects</div>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-display text-primary glow-text">100+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Happy Clients</div>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-display text-primary glow-text">PAN</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">India</div>
                </div>
              </div>
            </div>

            {/* Promise cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle2, title: "No ghosting, ever", desc: "We communicate daily and always deliver what we promise." },
                { icon: ShieldCheck, title: "Your code, your IP", desc: "Full ownership transfer on delivery. No lock-in." },
                { icon: Star, title: "4.9 / 5 avg. rating", desc: "Consistently rated top-tier by clients across every project." },
                { icon: Globe, title: "Pan-India team", desc: "Timezone-flexible. We work when you need us to." },
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
      <section className="py-24 bg-secondary/60 dark:bg-muted/20">
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
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-flex">Services</span>
            <h2 className="section-title">Everything You Need to Ship</h2>
            <p className="section-subtitle mx-auto mt-2">
              Whether you're a student, a founder, or an enterprise — we have the expertise to build it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="py-24 bg-secondary/60 dark:bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-flex">
              <Star className="w-3 h-3 fill-primary" />
              Testimonials
            </span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto mt-2">
              Real words from real people who trusted us with their most important work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="tech-card p-6 rounded-xl transition-all duration-300 flex flex-col gap-4">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-flex">Why CodeNestLabs</span>
            <h2 className="section-title">The Difference Is in the Details</h2>
            <p className="section-subtitle mx-auto mt-2">
              We don't just write code. We build partnerships that last beyond delivery.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

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
            Join 100+ clients who trusted CodeNestLabs to bring their ideas to life.
            Tell us what you need — we'll handle the rest.
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
