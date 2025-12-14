import { Scale } from "lucide-react";

const sections = [
  { title: "1. About CodeNest Lab", content: "CodeNest Lab provides custom software development, React projects, ML/DL solutions, full-stack applications, academic support, documentation and testing services." },
  { title: "2. Acceptance of Terms", content: "By using our website or submitting a project request, you agree to these Terms, our Privacy Policy, providing accurate information, and following all laws related to your project." },
  { title: "3. Services", content: "We offer custom development, research assistance, testing & QA, deployment help, and project guidance. We reserve the right to refuse any service that violates ethics or legality." },
  { title: "4. Client Responsibilities", content: "Clients must provide clear requirements, share files on time, respond promptly, pay agreed amounts, and not request illegal projects. Delays in response may delay delivery." },
  { title: "5. Deliverables & Timelines", content: "Timelines depend on complexity. Revisions may extend delivery time. Final files shared only after full payment. Deployment support for agreed platforms only." },
  { title: "6. Payments", content: "Partial advance required to start. Remaining payment before final delivery. Payments are non-refundable once work starts. We don't accept responsibility for academic grading." },
  { title: "7. Revisions & Support", content: "Minor revisions (UI fixes, small bugs) are free. Major changes billed separately. Limited support period after delivery." },
  { title: "8. Intellectual Property", content: "We retain rights until full payment. After payment, ownership transfers to client. Reusable components remain our IP." },
  { title: "9. Portfolio Rights", content: "We may display projects in portfolio and use for marketing. Request privacy in writing before delivery if needed." },
  { title: "10. Prohibited Requests", content: "We don't accept: hacking tools, malware, plagiarised projects, deepfakes, unethical ML models, or illegal automation tools." },
  { title: "11. Confidentiality", content: "We protect all client information. We don't share or sell data to third parties. Data stored securely for development only." },
  { title: "12. Liability", content: "We're not responsible for: academic penalties, client misuse, hosting issues after delivery, data loss due to client error, or unauthorized code changes." },
  { title: "13. Termination", content: "We may terminate if: client is abusive, fails to pay, violates guidelines, or repeatedly delays communication. No refunds for terminated services." },
  { title: "14. Changes", content: "We may update these Terms at any time. Continued use means you accept the latest version." },
];

const TermsConditions = () => {
  return (
    <main className="pt-16">
      {/* Hero - Compact */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-muted mb-3">
            <Scale className="w-3 h-3" /> Legal
          </span>
          <h1 className="section-title text-foreground mb-2">Terms & Conditions</h1>
          <p className="text-xs text-muted-foreground">Last Updated: December 12, 2025</p>
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
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;