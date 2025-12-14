import { Shield, Lock, Database, Globe } from "lucide-react";

const sections = [
  { title: "1. Information We Collect", content: "Personal: Name, email, phone, project details, uploaded files. Technical: IP address, browser, device info, pages visited. Payments handled by secure third-party providers." },
  { title: "2. How We Use Information", content: "To communicate, create proposals, build projects, improve services, provide support, and send updates. We never sell your information." },
  { title: "3. Data Protection", content: "We use HTTPS encryption, restrict access to authorized team, store files securely, and regularly update systems. No system is 100% secure." },
  { title: "4. Information Sharing", content: "Shared with: internal team (development), third-party services (payments, hosting, analytics). May disclose if required by law. Never shared for advertising." },
  { title: "5. Your Rights", content: "Request what we store, corrections, deletion, withdraw consent, and remove uploaded documents." },
  { title: "6. Cookies", content: "Used to improve performance, remember preferences, and analyze traffic. Disable in browser settings if preferred." },
  { title: "7. Children's Privacy", content: "Services not intended for children under 13. We don't knowingly collect their data." },
  { title: "8. Data Retention", content: "Retained until project completion, documentation delivery, and legal requirements met. Unnecessary data deleted periodically." },
  { title: "9. External Links", content: "We're not responsible for privacy practices of external sites we link to." },
  { title: "10. Policy Changes", content: "We may update this policy. Continued use means you accept the updated version." },
];

const PrivacyPolicy = () => {
  return (
    <main className="pt-16">
      {/* Hero - Compact */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h1 className="section-title text-foreground mb-2">Privacy Policy</h1>
          <p className="section-subtitle mx-auto">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content - Compact */}
      <section className="py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.title} className="p-4 rounded-lg bg-card border border-border">
                <h2 className="text-sm font-semibold text-foreground mb-2">{section.title}</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
            <Globe className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-foreground mb-1">Questions about privacy?</p>
            <a href="mailto:vivekrajanala46@gmail.com" className="text-primary hover:underline text-xs">
              vivekrajanala46@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;