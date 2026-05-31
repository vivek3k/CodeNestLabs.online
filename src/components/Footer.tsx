import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

// ── Modern X (Twitter) logo ────────────────────────────────────
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ── Instagram logo ─────────────────────────────────────────────
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/services" },
    { name: "Request Project", path: "/request" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    "SaaS Web Applications",
    "AI & Machine Learning",
    "Backend & API Development",
    "Automation Systems",
    "E-commerce Solutions",
    "Testing & QA",
  ];

  const socialLinks = [
    { Icon: XIcon,         href: "https://x.com/CNLonline",                             label: "X (Twitter)" },
    { Icon: InstagramIcon, href: "https://www.instagram.com/codenestlabsonline/",        label: "Instagram"   },
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
                className="h-9 w-9 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-lg font-semibold tracking-tight">
                CodeNest<span className="text-primary">Labs</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-5">
              A product engineering studio for startups, SaaS companies &amp; modern businesses.
              150+ products shipped worldwide.
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
                  <social.Icon className="w-4 h-4" />
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
                  href="mailto:contactcodenestlabs@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  contactcodenestlabs@gmail.com
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
            <div>
              <p className="text-sm text-secondary-foreground/50">
                © {currentYear} CodeNestLabs. All rights reserved.
              </p>
              <p className="text-xs text-secondary-foreground/35 mt-0.5">
                Built by the CodeNestLabs Engineering Team · Remote-first · Worldwide
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
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
              <p className="text-xs text-secondary-foreground/50">
                Last updated on 31/05/2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
