import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
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
} from "lucide-react";

const services = [
  { icon: Code2, title: "React Web Apps", description: "Modern, responsive web applications with cutting-edge technologies." },
  { icon: Brain, title: "ML/DL Models", description: "Custom machine learning and deep learning solutions." },
  { icon: Server, title: "Backend & API", description: "Robust backends, RESTful APIs, and scalable infrastructure." },
  { icon: Bot, title: "Automation", description: "Smart automation to streamline workflows." },
  { icon: FileText, title: "Research & Docs", description: "Technical papers, documentation, and reports." },
  { icon: Bug, title: "Testing & QA", description: "Thorough testing and quality assurance." },
];

const whyChooseUs = [
  { icon: DollarSign, title: "Affordable", description: "Quality at competitive rates." },
  { icon: Zap, title: "Fast", description: "Quick turnaround times." },
  { icon: Users, title: "Expert", description: "Experienced developers." },
  { icon: HeadphonesIcon, title: "Support", description: "Full project support." },
];

const Index = () => {
  return (
    <main className="bg-background">
      {/* Hero Section - Netflix Style */}
      <section className="min-h-[70vh] flex items-center justify-center pt-16 pb-8 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-up">
            <span className="badge-primary">
              <Code2 className="w-3 h-3" />
              Custom Development
            </span>
          </div>

          <h1 className="animate-fade-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mt-6 mb-4 tracking-wider uppercase">
            We Build Custom
            <br />
            <span className="text-gradient glow-text">Projects for You</span>
          </h1>

          <p className="animate-fade-up animation-delay-200 text-muted-foreground max-w-md mx-auto mb-8 text-sm tracking-wide">
            React • Machine Learning • Deep Learning • Full-Stack
          </p>

          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="hero" size="lg" className="glow-box">
              <Link to="/request">
                Request a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up animation-delay-400 mt-14 flex justify-center gap-12">
            <div className="text-center">
              <div className="text-3xl font-display text-primary glow-text">50+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-primary glow-text">30+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle
            badge="Services"
            title="What We Offer"
            subtitle="Comprehensive solutions for your needs"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Card
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Why Us"
            title="Why Choose Us?"
            subtitle="What sets us apart"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-lg bg-card border border-border hover:neon-border transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.15),transparent_70%)]" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-3 uppercase tracking-wider">
            Ready to <span className="text-primary glow-text">Start?</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Let's turn your ideas into reality.
          </p>
          <Button asChild size="lg" className="glow-box">
            <Link to="/request">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;