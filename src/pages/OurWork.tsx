import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import crimeDetection from "@/assets/projects/crime-detection.jpg";
import heartDisease from "@/assets/projects/heart-disease.jpg";
import cancerPrediction from "@/assets/projects/cancer-prediction.jpg";
import ecommerce from "@/assets/projects/ecommerce.jpg";
import drowsinessDetection from "@/assets/projects/drowsiness-detection.jpg";
import chatbot from "@/assets/projects/chatbot.jpg";

const projects = [
  {
    title: "Crime Detection System",
    description: "AI-powered real-time crime detection using computer vision.",
    techStack: ["Python", "TensorFlow", "OpenCV"],
    image: crimeDetection,
    category: "Deep Learning",
  },
  {
    title: "Heart Disease Prediction",
    description: "ML model predicting heart disease with 94% accuracy.",
    techStack: ["Python", "Scikit-learn", "Flask"],
    image: heartDisease,
    category: "Machine Learning",
  },
  {
    title: "Cancer Marker Detection",
    description: "Deep learning for early cancer detection from imaging.",
    techStack: ["Python", "PyTorch", "CNN"],
    image: cancerPrediction,
    category: "Deep Learning",
  },
  {
    title: "E-commerce Platforms",
    description: "Full-featured e-commerce with payments & admin.",
    techStack: ["React", "Node.js", "MongoDB"],
    image: ecommerce,
    category: "Full-Stack",
  },
  {
    title: "Drowsiness Detection",
    description: "Real-time driver drowsiness detection system.",
    techStack: ["Python", "OpenCV", "Dlib"],
    image: drowsinessDetection,
    category: "Computer Vision",
  },
  {
    title: "NLP Chatbots",
    description: "Intelligent chatbots for support & automation.",
    techStack: ["Python", "NLP", "Rasa"],
    image: chatbot,
    category: "NLP",
  },
];

const OurWork = () => {
  return (
    <main className="pt-16">
      {/* Hero - Compact */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-primary mb-3">Portfolio</span>
          <h1 className="section-title text-foreground mb-2">Our Work</h1>
          <p className="section-subtitle mx-auto">
            Projects we've delivered for our clients.
          </p>
        </div>
      </section>

      {/* Projects Grid - Compact */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-background/90 text-[10px] font-medium text-foreground">
                    {project.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-xs mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/10 text-primary">
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

      {/* CTA - Compact */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">Have a Similar Project?</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Contact us to discuss your requirements.
          </p>
          <Button asChild size="default">
            <Link to="/request">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default OurWork;