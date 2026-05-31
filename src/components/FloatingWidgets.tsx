import React, { useEffect, useRef, useState } from "react";
import { Send, X, MessageCircle, Minimize2 } from "lucide-react";

// ── Knowledge base ─────────────────────────────────────────────────────────────
const KB: { keywords: string[]; response: string }[] = [
  {
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "hii", "howdy", "greetings"],
    response: `Hello 👋 Welcome to CodeNestLabs.

We help startups, entrepreneurs, and businesses build scalable digital products — including websites, SaaS platforms, AI systems, dashboards, and automation solutions.

How can we assist you today?`,
  },
  {
    keywords: ["service", "services", "what do you build", "what do you offer", "what you build", "what do you do"],
    response: `At CodeNestLabs, we offer end-to-end product engineering services including:

• SaaS Platform Development
• Web Applications & Business Portals
• AI & Machine Learning Solutions
• Automation Systems & Workflow Bots
• E-commerce & Marketplace Platforms
• Custom Dashboards & Analytics

We work with startups, entrepreneurs, and growing businesses to build scalable, production-ready digital products.

Would you like to know more about a specific service?`,
  },
  {
    keywords: ["web", "website", "frontend", "backend", "web development", "web app", "react", "next"],
    response: `We build modern static and dynamic websites, scalable web applications, SaaS platforms, admin dashboards, and custom business portals tailored for startups and growing businesses.

Our development stack focuses on performance, responsiveness, scalability, and modern UI/UX using technologies like React, Next.js, Node.js, and cloud infrastructure.

To discuss your project, please submit a Request Project form or book a free consultation with our team.`,
  },
  {
    keywords: ["ai", "ml", "artificial intelligence", "machine learning", "deep learning", "llm", "gpt"],
    response: `We develop AI and machine learning solutions including:

• Prediction & recommendation systems
• Automation pipelines & intelligent workflows
• NLP solutions & LLM-powered applications
• Computer vision systems
• Custom AI-powered business tools

Our solutions are designed to help businesses automate workflows, improve decision-making, and scale operations efficiently.

For custom AI project requirements, please request a project consultation.`,
  },
  {
    keywords: ["automation", "workflow", "pipeline", "pipelines", "bot", "bots", "scraper"],
    response: `We create intelligent automation systems including:

• Workflow & business process automation
• WhatsApp & Telegram bots
• Data pipelines & backend integrations
• Custom automation for reducing manual overhead

Our automation solutions help businesses improve operational efficiency and eliminate repetitive tasks.

For automation planning and consultation, please visit the Request Project page.`,
  },
  {
    keywords: ["dashboard", "analytics", "reports", "report", "data", "kpi", "metrics"],
    response: `We build real-time dashboards and business intelligence systems including:

• KPI dashboards & performance monitoring
• Custom analytics & reporting platforms
• Data visualisation & business intelligence tools
• Role-based admin panels

All solutions are custom-built to match your data structure and reporting requirements.

Interested? Submit a Request Project form to get started.`,
  },
  {
    keywords: ["ecommerce", "e-commerce", "store", "shop", "shopify", "marketplace", "cart"],
    response: `We build scalable e-commerce solutions including:

• Custom storefronts & product catalogues
• Multi-vendor marketplace platforms
• Headless commerce implementations
• Cart, checkout & payment gateway integrations

Our platforms are optimised for conversion, speed, and long-term scalability.

To discuss your project scope, please use the Request Project page.`,
  },
  {
    keywords: ["saas", "startup", "mvp", "product", "b2b"],
    response: `We specialise in SaaS product development — from early-stage MVPs to full-scale platforms.

Our SaaS development includes:

• Architecture & database design
• Authentication & user management
• Subscription & billing integrations
• Multi-tenant admin dashboards
• API development & third-party integrations

Most products ship within 2–4 weeks. We work closely with founders to deliver production-ready platforms fast.

Ready to build? Submit a Request Project for a free consultation.`,
  },
  {
    keywords: ["marketing", "digital marketing", "seo", "ads"],
    response: `We provide select digital marketing services for businesses, including SEO strategy, content planning, and performance marketing.

Our digital marketing support is typically offered alongside development projects to ensure a consistent growth strategy.

For enquiries, please reach out via the Contact page or WhatsApp.`,
  },
  {
    keywords: ["location", "where", "located", "hyderabad", "office", "based", "country"],
    response: `CodeNestLabs operates remotely from Hyderabad, India 🇮🇳, serving clients across India and internationally.

We work across time zones and maintain seamless communication through async-first workflows.

Feel free to reach out — we'd love to work with you regardless of your location.`,
  },
  {
    keywords: ["consultation", "pricing", "price", "cost", "call", "free", "estimate", "quote", "budget"],
    response: `We offer a free initial consultation to understand your project requirements and recommend the best technical solution for your business.

To get started, you can:

• Submit a Request Project form with your requirements
• Book a free consultation call with our team
• Contact us directly via WhatsApp for quick discussions

No commitment required — we're happy to guide you through the process.`,
  },
  {
    keywords: ["contact", "number", "phone", "whatsapp", "email", "reach", "connect", "talk"],
    response: `You can reach the CodeNestLabs team through multiple channels:

• WhatsApp: Use the button below for quick responses
• Request Project: Submit your requirements via the form
• Contact Page: Send a detailed enquiry
• Email: contactcodenestlabs@gmail.com

We typically respond within a few hours during business hours.`,
  },
];

const FALLBACK =
`Thank you for reaching out to CodeNestLabs!

I didn't quite catch that — could you rephrase your question? You can also ask about:

• Our services & solutions
• Pricing & consultation
• Project timelines
• How to get started

Alternatively, reach us directly via WhatsApp or the Request Project page for immediate assistance.`;

const WELCOME =
`Hello 👋 I'm the CodeNestLabs assistant.

I can help you with information about our services, project consultations, pricing, and how we work.

Feel free to ask anything or choose a quick option below.`;

const QUICK_ACTIONS = [
  { label: "Our Services",      query: "services" },
  { label: "AI & ML",           query: "ai" },
  { label: "Web Development",   query: "web development" },
  { label: "SaaS / MVP",        query: "saas" },
  { label: "Get a Quote",       query: "pricing" },
  { label: "Contact Us",        query: "contact" },
];

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const item of KB) {
    if (item.keywords.some((kw) => lower.includes(kw))) return item.response;
  }
  return FALLBACK;
}

// ── WhatsApp SVG ───────────────────────────────────────────────────────────────
function WaIcon({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// ── Typing dots ────────────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-muted-foreground/50"
          style={{ animation: `fw-bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
        />
      ))}
    </div>
  );
}

// ── Message ────────────────────────────────────────────────────────────────────
interface Msg { id: number; from: "user" | "bot"; text: string }

// ── Main component ─────────────────────────────────────────────────────────────
export default function FloatingWidgets() {
  const [chatOpen,   setChatOpen]   = useState(false);
  const [msgs,       setMsgs]       = useState<Msg[]>([]);
  const [input,      setInput]      = useState("");
  const [typing,     setTyping]     = useState(false);
  const [welcomed,   setWelcomed]   = useState(false);
  const [uid,        setUid]        = useState(0);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  const nextId = () => { let id = 0; setUid(n => { id = n; return n + 1; }); return id; };

  // Welcome message on first open
  useEffect(() => {
    if (!chatOpen || welcomed) return;
    setWelcomed(true);
    setTyping(true);
    const t = setTimeout(() => {
      setTyping(false);
      setMsgs([{ id: nextId(), from: "bot", text: WELCOME }]);
    }, 1000);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatOpen]);

  // Scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  // Focus input
  useEffect(() => {
    if (chatOpen) setTimeout(() => inputRef.current?.focus(), 350);
  }, [chatOpen]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs(prev => [...prev, { id: nextId(), from: "user", text: t }]);
    setInput("");
    setTyping(true);
    const delay = 800 + Math.random() * 500;
    setTimeout(() => {
      setTyping(false);
      setMsgs(prev => [...prev, { id: nextId(), from: "bot", text: getResponse(t) }]);
    }, delay);
  };

  const WA_URL =
    "https://wa.me/919014269782?text=Hello%20CodeNestLabs%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

  return (
    <>
      {/* ── Keyframes injected once ─────────────────────────── */}
      <style>{`
        @keyframes fw-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40%            { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes fw-pop-in {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fw-msg-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fw-chat-popup { animation: fw-pop-in 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .fw-msg        { animation: fw-msg-in 0.22s ease forwards; }
        .fw-fab        { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .fw-fab:hover  { transform: scale(1.08); }
        .fw-fab:active { transform: scale(0.96); }
        .fw-send       { transition: background 0.15s ease, color 0.15s ease; }
      `}</style>

      {/* ── Chat popup ──────────────────────────────────────── */}
      {chatOpen && (
        <div
          className="fw-chat-popup fixed z-[9999] flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          style={{
            bottom: 96,
            right: 24,
            width: "min(380px, calc(100vw - 32px))",
            height: "min(520px, calc(100vh - 140px))",
            boxShadow: "0 24px 64px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.25)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #4F46E5 0%, #6366f1 100%)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <div>
                <div className="text-white font-semibold text-sm leading-tight">CNL Assistant</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  <span className="text-white/70 text-[11px]">Online · Replies instantly</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <Minimize2 className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth">

            {/* Typing / messages */}
            {msgs.map((m) => (
              <div key={m.id} className={`fw-msg flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                {m.from === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5 self-end">
                    <MessageCircle className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                  </div>
                )}
                <div
                  className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.from === "bot"
                    ? m.text.split("\n").map((line, i) => (
                        <p key={i} className={line === "" ? "mt-2" : line.startsWith("•") ? "pl-1" : ""}>
                          {line || <>&nbsp;</>}
                        </p>
                      ))
                    : m.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="fw-msg flex justify-start">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mr-2 self-end">
                  <MessageCircle className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                </div>
                <div className="bg-muted rounded-2xl rounded-bl-sm">
                  <TypingDots />
                </div>
              </div>
            )}

            {/* Quick actions — show once after welcome */}
            {msgs.length === 1 && !typing && (
              <div className="fw-msg flex flex-wrap gap-2 pt-1">
                {QUICK_ACTIONS.map((a) => (
                  <button
                    key={a.label}
                    onClick={() => send(a.query)}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-150"
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex-shrink-0 border-t border-border px-3 py-3 flex items-center gap-2 bg-background">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } }}
              placeholder="Ask something…"
              className="flex-1 text-sm bg-muted rounded-xl px-3.5 py-2.5 outline-none border border-transparent focus:border-primary/40 text-foreground placeholder:text-muted-foreground transition-colors"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="fw-send w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── Chat toggle FAB ──────────────────────────────────── */}
      <button
        onClick={() => setChatOpen((o) => !o)}
        aria-label="Toggle chat"
        className="fw-fab fixed z-[9999] flex items-center justify-center rounded-2xl"
        style={{
          bottom: 96,
          right: 24,
          width: 52,
          height: 52,
          background: chatOpen
            ? "rgba(99,102,241,0.12)"
            : "#1A1A1A",
          border: `1px solid ${chatOpen ? "rgba(99,102,241,0.35)" : "rgba(255,255,255,0.10)"}`,
          boxShadow: chatOpen
            ? "0 0 0 1px rgba(99,102,241,0.2), 0 8px 24px rgba(0,0,0,0.4)"
            : "0 8px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {chatOpen ? (
          <X className="w-4 h-4" style={{ color: "#818cf8" }} strokeWidth={2} />
        ) : (
          <MessageCircle className="w-[18px] h-[18px]" style={{ color: "#818cf8" }} strokeWidth={1.75} />
        )}

        {/* Unread pulse — only before first open */}
        {!welcomed && !chatOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-green-500 border border-black/60 flex items-center justify-center text-[8px] font-bold text-white">
            1
          </span>
        )}
      </button>

      {/* ── WhatsApp FAB ─────────────────────────────────────── */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fw-fab fixed z-[9999] flex items-center justify-center rounded-full"
        style={{
          bottom: 24,
          right: 24,
          width: 52,
          height: 52,
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4), 0 2px 8px rgba(37,211,102,0.25)",
        }}
      >
        <WaIcon size={26} />
      </a>

      {/* ── Tooltip labels (desktop only) ────────────────────── */}
      <div
        className="fixed z-[9998] hidden lg:flex flex-col items-end gap-[19px] pointer-events-none"
        style={{ bottom: 36, right: 84 }}
      >
        <span className="text-[11px] font-medium bg-foreground/90 text-background px-2.5 py-1 rounded-lg shadow opacity-0 group-hover:opacity-100 whitespace-nowrap" style={{ marginBottom: 38 }}>
        </span>
      </div>
    </>
  );
}
