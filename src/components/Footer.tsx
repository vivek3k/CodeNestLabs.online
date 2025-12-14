import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/services" },
    { name: "Request Project", path: "/request" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    "React Web Apps",
    "ML/DL Models",
    "Backend & API Development",
    "Automation Tools",
    "Research & Documentation",
    "Testing & Debugging",
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/codenestLabs", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Code_Nest_Labs", label: "Twitter" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <img 
                src={logo} 
                alt="CodeNestLabs Logo" 
                className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-lg font-semibold tracking-tight">
                CodeNest<span className="text-primary">Labs</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-5">
              Building innovative custom projects with cutting-edge technology.
              React, ML, Deep Learning, and Full-Stack Development.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary-foreground/8 border border-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-tight mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm tracking-tight mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-tight mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/60">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                <a
                  href="mailto:vivekrajanala46@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  vivekrajanala46@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/60">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <span>Remote • Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/50">
              © {currentYear} CodeNestLabs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
