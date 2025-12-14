import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import {
  Code2,
  Brain,
  Layers,
  Server,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "React Applications",
    description: "Modern, responsive web applications with React.",
    features: ["Single Page Apps", "Progressive Web Apps", "API Integration", "State Management"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "ML solutions for data insights and automation.",
    features: ["Predictive Analytics", "Classification", "NLP", "Recommendations"],
  },
  {
    icon: Layers,
    title: "Deep Learning",
    description: "Neural networks for complex pattern recognition.",
    features: ["Computer Vision", "Image Recognition", "Object Detection", "Generative AI"],
  },
  {
    icon: Server,
    title: "API Development",
    description: "Robust APIs for seamless integrations.",
    features: ["REST APIs", "GraphQL", "Authentication", "Cloud Deploy"],
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description: "Interactive data visualization dashboards.",
    features: ["Real-time Updates", "Custom Charts", "Data Filtering", "Export"],
  },
  {
    icon: Settings,
    title: "Automation",
    description: "Workflow automation to boost efficiency.",
    features: ["Task Automation", "Data Pipelines", "Scheduled Jobs", "Reports"],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "Understand your requirements and goals." },
  { step: "02", title: "Planning", description: "Create roadmap and specifications." },
  { step: "03", title: "Development", description: "Build with regular updates." },
  { step: "04", title: "Launch", description: "Deploy and provide support." },
];

const Services = () => {
  return (
    <main className="pt-16">
      {/* Hero - Compact */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-primary mb-4">Our Expertise</span>
          <h1 className="section-title text-foreground mb-3">Services We Offer</h1>
          <p className="section-subtitle mx-auto">
            Comprehensive development solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid - Compact */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-xs mb-4">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Compact */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Process" title="Our Process" subtitle="How we work" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-center p-6 rounded-xl bg-card border border-border">
                  <span className="text-4xl font-bold text-gradient">{item.step}</span>
                  <h3 className="text-sm font-semibold text-foreground mt-3 mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Compact */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-foreground mb-3">Ready to Get Started?</h2>
          <p className="section-subtitle mx-auto mb-6">
            Tell us about your project and let's build something amazing.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/request">
              Request a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;