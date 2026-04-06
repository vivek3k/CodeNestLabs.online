import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Code2,
  Server,
  Bot,
  BarChart3,
  ShoppingCart,
  MessageSquare,
  Cpu,
  Database,
  Layers,
} from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "LLM-Powered Document Intelligence",
    description:
      "RAG-based system that ingests enterprise documents and answers complex queries with GPT-4. Reduced research time by 80% for client teams.",
    techStack: ["Python", "LangChain", "GPT-4", "FAISS", "FastAPI"],
    category: "AI / LLM",
    gradient: "from-violet-500/25 via-purple-400/10 to-violet-500/5",
    iconBg: "bg-violet-500/15 group-hover:bg-violet-500/25",
    accent: "text-violet-500 dark:text-violet-400",
    border: "hover:border-violet-400/50",
    tag: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-400/20",
  },
  {
    icon: BarChart3,
    title: "Real-Time Stock Analytics Platform",
    description:
      "Live market data dashboard with WebSocket streams, ML-powered trend predictions, and custom alert rules. Processes 50K+ events/sec.",
    techStack: ["React", "TypeScript", "FastAPI", "WebSockets", "Python"],
    category: "Full-Stack + ML",
    gradient: "from-emerald-500/25 via-teal-400/10 to-emerald-500/5",
    iconBg: "bg-emerald-500/15 group-hover:bg-emerald-500/25",
    accent: "text-emerald-600 dark:text-emerald-400",
    border: "hover:border-emerald-400/50",
    tag: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-400/20",
  },
  {
    icon: Cpu,
    title: "Computer Vision Quality Control",
    description:
      "Automated defect detection for manufacturing lines using YOLOv8. Achieved 98.7% detection accuracy, replacing manual inspection.",
    techStack: ["Python", "YOLOv8", "PyTorch", "OpenCV", "FastAPI"],
    category: "Deep Learning",
    gradient: "from-red-500/25 via-orange-400/10 to-red-500/5",
    iconBg: "bg-red-500/15 group-hover:bg-red-500/25",
    accent: "text-red-500 dark:text-red-400",
    border: "hover:border-red-400/50",
    tag: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-400/20",
  },
  {
    icon: ShoppingCart,
    title: "Multi-Tenant SaaS E-commerce",
    description:
      "White-label e-commerce platform with sub-domain routing, Stripe payments, inventory management, and a React admin dashboard.",
    techStack: ["Next.js", "PostgreSQL", "Stripe", "Prisma", "Redis"],
    category: "Full-Stack SaaS",
    gradient: "from-blue-500/25 via-cyan-400/10 to-blue-500/5",
    iconBg: "bg-blue-500/15 group-hover:bg-blue-500/25",
    accent: "text-blue-600 dark:text-blue-400",
    border: "hover:border-blue-400/50",
    tag: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-400/20",
  },
  {
    icon: Bot,
    title: "Autonomous AI Trading Bot",
    description:
      "Algorithmic trading system with ML-based signal generation, backtesting engine, and live trading via broker APIs. 34% Sharpe ratio improvement.",
    techStack: ["Python", "scikit-learn", "Alpaca API", "FastAPI", "MongoDB"],
    category: "ML + Automation",
    gradient: "from-amber-500/25 via-yellow-400/10 to-amber-500/5",
    iconBg: "bg-amber-500/15 group-hover:bg-amber-500/25",
    accent: "text-amber-600 dark:text-amber-400",
    border: "hover:border-amber-400/50",
    tag: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-400/20",
  },
  {
    icon: MessageSquare,
    title: "AI Customer Support Platform",
    description:
      "Omnichannel support SaaS with GPT-4 intent classification, ticket routing, and agent assist. Cut response time from 6h to 8 minutes.",
    techStack: ["React", "Node.js", "OpenAI", "Socket.io", "PostgreSQL"],
    category: "AI SaaS",
    gradient: "from-pink-500/25 via-rose-400/10 to-pink-500/5",
    iconBg: "bg-pink-500/15 group-hover:bg-pink-500/25",
    accent: "text-pink-600 dark:text-pink-400",
    border: "hover:border-pink-400/50",
    tag: "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-400/20",
  },
  {
    icon: Database,
    title: "Healthcare Data Intelligence Suite",
    description:
      "HIPAA-compliant patient analytics platform with predictive readmission models, EHR integration, and interactive clinical dashboards.",
    techStack: ["React", "Python", "TensorFlow", "PostgreSQL", "AWS"],
    category: "Healthcare + ML",
    gradient: "from-green-500/25 via-emerald-400/10 to-green-500/5",
    iconBg: "bg-green-500/15 group-hover:bg-green-500/25",
    accent: "text-green-600 dark:text-green-400",
    border: "hover:border-green-400/50",
    tag: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-400/20",
  },
  {
    icon: Server,
    title: "IoT Fleet Monitoring System",
    description:
      "Real-time monitoring for 10,000+ IoT devices with MQTT ingestion, anomaly detection, geofencing alerts, and a live ops dashboard.",
    techStack: ["React", "MQTT", "Node.js", "InfluxDB", "Docker"],
    category: "IoT + Full-Stack",
    gradient: "from-cyan-500/25 via-sky-400/10 to-cyan-500/5",
    iconBg: "bg-cyan-500/15 group-hover:bg-cyan-500/25",
    accent: "text-cyan-600 dark:text-cyan-400",
    border: "hover:border-cyan-400/50",
    tag: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-400/20",
  },
  {
    icon: Layers,
    title: "NLP Research Paper Assistant",
    description:
      "Academic tool that summarises, cross-references, and generates structured literature reviews from 1M+ arXiv papers using fine-tuned LLMs.",
    techStack: ["Python", "HuggingFace", "LangChain", "Pinecone", "React"],
    category: "NLP / Research",
    gradient: "from-indigo-500/25 via-violet-400/10 to-indigo-500/5",
    iconBg: "bg-indigo-500/15 group-hover:bg-indigo-500/25",
    accent: "text-indigo-600 dark:text-indigo-400",
    border: "hover:border-indigo-400/50",
    tag: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-400/20",
  },
];

const OurWork = () => {
  return (
    <main className="pt-16 bg-background">

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/6 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-primary mb-4 inline-flex">
            <Code2 className="w-3 h-3" />
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-wider text-foreground mb-5 leading-none">
            Work That
            <span className="text-gradient glow-text"> Speaks</span>
            <br />
            for Itself
          </h1>
          <p className="section-subtitle mx-auto text-base">
            A curated selection of high-impact projects engineered for clients across India.
            Production-ready, documented, and delivered on time.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {[
              { label: "Projects Delivered", value: "150+" },
              { label: "Avg. Rating", value: "4.9★" },
              { label: "On-Time Delivery", value: "98%" },
            ].map((s) => (
              <div key={s.label} className="tech-card px-6 py-3 rounded-xl text-center">
                <div className="text-2xl font-display text-primary glow-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm ${project.border} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
              >
                {/* Coloured gradient header */}
                <div className={`h-36 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center relative`}>
                  {/* Subtle dot-grid overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Category pill */}
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold border ${project.tag}`}>
                    {project.category}
                  </span>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${project.iconBg} flex items-center justify-center transition-colors duration-200 shadow-sm`}>
                    <project.icon className={`w-8 h-8 ${project.accent}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/8 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/60 dark:bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.12),transparent_70%)]" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wider text-foreground mb-3">
            Want Something Like This?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Tell us your idea — we'll design, build, and deliver it.
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
