import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Briefcase, Users, CheckCircle2, Mail, ArrowRight,
  Globe, Smartphone, Bot, TrendingUp, Star, Zap, Heart, Award
} from "lucide-react";

const positions = [
  {
    icon: Globe,
    title: "Web Developer Intern",
    emoji: "🌐",
    skills: ["React / Next.js", "Tailwind CSS", "Node.js", "REST APIs"],
  },
  {
    icon: Smartphone,
    title: "Flutter Developer Intern",
    emoji: "📱",
    skills: ["Flutter / Dart", "Firebase", "Mobile UI", "State Management"],
  },
  {
    icon: Bot,
    title: "AI Agents Developer Intern",
    emoji: "🤖",
    skills: ["Python", "LLMs / OpenAI", "LangChain", "Automation"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Intern",
    emoji: "📈",
    skills: ["SEO / SEM", "Meta & Google Ads", "Content Strategy", "Analytics"],
  },
];

const eligibility = [
  "B.Tech, BCA, MCA, Diploma or equivalent students",
  "Fresh graduates looking for real-world experience",
  "Self-taught developers with strong project portfolios",
  "Candidates passionate about learning and innovation",
];

const benefits = [
  { icon: Zap,          text: "Real-world project experience" },
  { icon: Users,        text: "Mentorship from experienced professionals" },
  { icon: Star,         text: "Work with modern, cutting-edge technologies" },
  { icon: Heart,        text: "Flexible and collaborative work environment" },
  { icon: Award,        text: "Performance-based full-time opportunity" },
  { icon: CheckCircle2, text: "Official offer letter issued by eStitch AI Pvt. Ltd." },
];

const qualities = [
  "Passionate about technology",
  "Eager to learn and grow",
  "Strong problem solver",
  "Team player with good communication",
  "Committed to delivering quality work",
];

const Careers = () => {
  return (
    <main className="pt-16 bg-background page-enter">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4 dark:opacity-[0.08]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/6 rounded-full blur-[100px] dark:opacity-[0.08]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:opacity-[0.07]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-primary mb-4 inline-flex">
            <Briefcase className="w-3 h-3" />
            Careers at CodeNestLabs
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-wider text-foreground mb-5 leading-none">
            Join Our
            <br />
            <span className="text-gradient glow-text">Team</span>
          </h1>
          <p className="section-subtitle mx-auto text-base">
            We're passionate about building innovative software, AI solutions, web applications,
            and digital experiences. Join us, build real-world projects, and grow with us.
          </p>
        </div>
      </section>

      {/* ── Open Positions ────────────────────────────────────── */}
      <section className="py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge-muted mb-3 inline-flex">Open Internship Positions</span>
            <h2 className="section-title">We're Hiring Interns</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 stagger-children">
            {positions.map((pos) => (
              <div
                key={pos.title}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                    <pos.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="text-lg">{pos.emoji}</span>
                    <h3 className="text-sm font-semibold text-foreground mt-0.5">{pos.title}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pos.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href={`mailto:careers@codenestlabs.in?subject=Application for ${pos.title} – Your Name`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors duration-150"
                  >
                    Apply Now <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Can Apply + Benefits ──────────────────────────── */}
      <section className="py-10 md:py-14 bg-secondary/60 dark:bg-muted/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Who Can Apply */}
            <div>
              <span className="badge-muted mb-3 inline-flex">Eligibility</span>
              <h2 className="text-xl font-semibold text-foreground mb-6">Who Can Apply?</h2>
              <ul className="space-y-3">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You'll Get */}
            <div>
              <span className="badge-muted mb-3 inline-flex">Perks</span>
              <h2 className="text-xl font-semibold text-foreground mb-6">What You'll Get</h2>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b.text} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <b.icon className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Offer Letter Note ─────────────────────────────────── */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/20">
            <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1">📄 Official Offer Letter</h3>
              <p className="text-sm text-muted-foreground">
                Selected candidates will receive an official internship offer letter issued by our
                parent company, <span className="text-foreground font-medium">eStitch AI Pvt. Ltd.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── We're Looking For ─────────────────────────────────── */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="section-title">We're Looking For</h2>
            <p className="section-subtitle mx-auto mt-2">Candidates who share our values and work ethic.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {qualities.map((q) => (
              <span
                key={q}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground"
              >
                <Star className="w-3.5 h-3.5 text-primary" />
                {q}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Apply CTA ──────────────────────────────────── */}
      <section className="py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15 dark:opacity-[0.07]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.12),transparent_70%)] dark:opacity-[0.08]" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge-primary mb-4 inline-flex">
            <Mail className="w-3 h-3" />
            How to Apply
          </span>
          <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wider text-foreground mb-4">
            🚀 Apply Today
          </h2>
          <p className="text-muted-foreground text-sm mb-2">Send your resume to:</p>
          <a
            href="mailto:careers@codenestlabs.in"
            className="text-lg font-semibold text-primary hover:underline"
          >
            careers@codenestlabs.in
          </a>

          <div className="mt-6 p-5 rounded-xl bg-card border border-border text-left max-w-md mx-auto">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Email Subject Format</p>
            <p className="text-sm text-foreground font-mono bg-muted rounded-lg px-3 py-2 mb-2">
              Application for [Position Name] – Your Name
            </p>
            <p className="text-xs text-muted-foreground">Example:</p>
            <p className="text-xs text-foreground font-mono bg-muted rounded-lg px-3 py-1.5 mt-1">
              Application for Web Developer Intern – Rahul Sharma
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="glow-box">
              <a href="mailto:careers@codenestlabs.in">
                Apply Now <Mail className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Start your career with CodeNestLabs and work on impactful projects that shape the future of technology.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Careers;
