import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Gauge, Code2, Link2 } from "lucide-react";

// ── Syntax-highlight colour tokens ────────────────────────────────────────────
const T = {
  kw:  "#c792ea",
  fn:  "#82aaff",
  str: "#c3e88d",
  jsx: "#f07178",
  cy:  "#89ddff",
  num: "#f78c6c",
  txt: "#e0e4ff",
};

const KEYWORDS = new Set(["import","export","default","function","const","return","from","null"]);
const BLUE_IDS = new Set(["useEffect","useState","Dashboard","api","setData","get","then"]);
const CYAN_IDS = new Set(["className","res","data"]);

function renderLine(line: string): React.ReactNode {
  if (!line) return <span>&#8203;</span>;
  const nodes: React.ReactNode[] = [];
  let i = 0, key = 0;
  const push = (text: string, color: string) =>
    nodes.push(<span key={key++} style={{ color }}>{text}</span>);

  while (i < line.length) {
    const rest = line.slice(i);
    if (rest[0] === "'" || rest[0] === '"') {
      const q = rest[0]; let end = 1;
      while (end < rest.length && rest[end] !== q) end++;
      push(rest.slice(0, end + 1), T.str); i += end + 1; continue;
    }
    const closeTag = rest.match(/^<\/[a-zA-Z][a-zA-Z0-9]*>/);
    if (closeTag) { push(closeTag[0], T.jsx); i += closeTag[0].length; continue; }
    const openTag = rest.match(/^<[a-zA-Z][a-zA-Z0-9]*/);
    if (openTag) { push(openTag[0], T.jsx); i += openTag[0].length; continue; }
    const word = rest.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*/);
    if (word) {
      const w = word[0];
      push(w, KEYWORDS.has(w) ? T.kw : BLUE_IDS.has(w) ? T.fn : CYAN_IDS.has(w) ? T.cy : T.txt);
      i += w.length; continue;
    }
    const num = rest.match(/^\d+/);
    if (num) { push(num[0], T.num); i += num[0].length; continue; }
    push(rest[0], T.cy); i++;
  }
  return <>{nodes}</>;
}

// ── Static data ────────────────────────────────────────────────────────────────
const CODE_LINES = [
  "import { useEffect, useState } from 'react';",
  "import { api } from '@/lib/api';",
  "",
  "export default function Dashboard() {",
  "  const [data, setData] = useState(null);",
  "",
  "  useEffect(() => {",
  "    api.get('/dashboard')",
  "      .then(res => setData(res.data));",
  "  }, []);",
  "",
  "  return (",
  '    <div className="dashboard">',
  "      <h1>Welcome to your product</h1>",
  "    </div>",
  "  )",
  "}",
];

const SLIDES = [
  { img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80", name: "FreshCart Ecommerce",  url: "freshcart.co.in"  },
  { img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&q=80", name: "Brew & Co. Cafe",     url: "brewandco.in"    },
  { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80", name: "FounderOS Dashboard",  url: "founderos.app"   },
  { img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80", name: "PropFind Real Estate", url: "propfind.in"     },
];

const EXPLORER_TREE = [
  { indent: 0, icon: "▾", name: "src" },
  { indent: 1, icon: "▾", name: "components" },
  { indent: 1, icon: "▸", name: "pages" },
  { indent: 1, icon: "▸", name: "lib" },
  { indent: 1, icon: "▾", name: "utils" },
  { indent: 2, icon: "📄", name: "api.ts",    active: true },
  { indent: 2, icon: "📄", name: "db.ts" },
  { indent: 2, icon: "📄", name: "types.ts" },
  { indent: 1, icon: "⚛",  name: "App.tsx" },
  { indent: 1, icon: "⚛",  name: "index.tsx" },
] as const;

const FEATURES = [
  { Icon: Layers, title: "Built for You",    desc: "Custom solutions tailored to your requirements and business goals.",   accent: "#6366F1" },
  { Icon: Gauge,  title: "Fast Delivery",    desc: "We move fast and deliver working software without cutting corners.",    accent: "#10B981" },
  { Icon: Code2,  title: "Clean Code",       desc: "Scalable, maintainable, and future-ready code you can rely on.",       accent: "#F59E0B" },
  { Icon: Link2,  title: "Reliable Partner", desc: "We stay with you from idea to long-term support and growth.",         accent: "#8B5CF6" },
];

type Phase        = "typing" | "carousel";
type PublishState = "hidden" | "idle" | "deploying";

// ── Carousel arrow button ──────────────────────────────────────────────────────
function ArrowBtn({ label, onClick }: { label: string; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 28, height: 28, borderRadius: 6,
        background: hov ? "#4F46E5" : "rgba(255,255,255,0.07)",
        border: `1px solid ${hov ? "#4F46E5" : "rgba(255,255,255,0.12)"}`,
        color: "white", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 14, transition: "background 0.2s, border-color 0.2s",
      }}
    >{label}</button>
  );
}

// ── Mouse cursor SVG ───────────────────────────────────────────────────────────
function MouseCursor() {
  return (
    <svg width="20" height="24" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 2L2 17.5L5.8 13.7L8.6 19.8L10.8 18.9L8 12.8L13.5 12.8L2 2Z"
        fill="white"
        stroke="#1a1a2e"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function VSCodeHero() {
  const [visibleLines,   setVisibleLines]   = useState(0);
  const [publishState,   setPublishState]   = useState<PublishState>("hidden");
  const [phase,          setPhase]          = useState<Phase>("typing");
  const [codeFading,     setCodeFading]     = useState(false);
  const [carouselSlide,  setCarouselSlide]  = useState(0);
  const [statusLeft,     setStatusLeft]     = useState("● TypeScript · main ⎇");
  const [statusRight,    setStatusRight]    = useState("Ln 1, Col 1");
  const [filename,       setFilename]       = useState("project.ts");

  // cursor states
  const [cursorVisible,  setCursorVisible]  = useState(false);
  const [cursorAtBtn,    setCursorAtBtn]    = useState(false);
  const [cursorClicking, setCursorClicking] = useState(false);

  const carouselTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetCarouselTimer = () => {
    if (carouselTimer.current) clearInterval(carouselTimer.current);
    carouselTimer.current = setInterval(
      () => setCarouselSlide(s => (s + 1) % SLIDES.length),
      2800,
    );
  };

  // ── Animation sequence ─────────────────────────────────────────────────────
  useEffect(() => {
    const ids: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => ids.push(setTimeout(fn, ms));

    // Phase 1 — type code lines (600 ms start, 250 ms / line)
    let t = 600;
    for (let i = 0; i < CODE_LINES.length; i++) {
      const n = i + 1;
      at(t, () => { setVisibleLines(n); setStatusRight(`Ln ${n}, Col 1`); });
      t += 250;
    }
    // t = 4 850 ms after mount

    // Build ready
    at(t, () => { setStatusLeft("✓ Build ready — 0 errors"); setStatusRight("Ready"); });

    // Publish button appears
    at(t + 500, () => setPublishState("idle"));

    // Cursor fades in (editor area — handled by CSS default position)
    at(t + 750, () => setCursorVisible(true));

    // Cursor starts gliding toward the button
    at(t + 980, () => setCursorAtBtn(true));

    // Cursor reaches button → click animation + button enters deploying state
    at(t + 1680, () => {
      setCursorClicking(true);
      setPublishState("deploying");
      setStatusLeft("↑ Pushing to production...");
    });

    // Click animation done → cursor fades out
    at(t + 1900, () => {
      setCursorClicking(false);
      setCursorVisible(false);
      setCursorAtBtn(false);
    });

    // Deploy button disappears
    at(t + 2300, () => setPublishState("hidden"));

    // Code fades out
    at(t + 2700, () => setCodeFading(true));

    // Carousel phase begins
    at(t + 3100, () => {
      setPhase("carousel");
      setFilename("live-projects.tsx");
      setStatusLeft("🌐 4 sites deployed & live");
      setStatusRight("✓ Success");
    });

    return () => ids.forEach(clearTimeout);
  }, []);

  // ── Carousel auto-advance ──────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "carousel") return;
    resetCarouselTimer();
    return () => { if (carouselTimer.current) clearInterval(carouselTimer.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const goToSlide = (i: number) => { setCarouselSlide(i); resetCarouselTimer(); };

  // Cursor class string
  const cursorClass = [
    "vsc-mouse",
    cursorVisible  ? "visible"  : "",
    cursorAtBtn    ? "at-btn"   : "",
    cursorClicking ? "clicking" : "",
  ].filter(Boolean).join(" ");

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="vsc-hero-section">
        <div className="vsc-hero-grid">

          {/* Left column */}
          <div>
            <div className="vsc-headline">
              <div className="vsc-h-black">From idea to</div>
              <div className="vsc-h-indigo">live product.</div>
              <div className="vsc-h-sub">We build it for you.</div>
            </div>
            <p className="vsc-subtext">
              CodeNestLabs is the product engineering studio for startups, SaaS companies,
              and modern businesses that need software built{" "}
              <strong>fast, clean</strong>, and{" "}
              <strong>architected to scale</strong> — without the enterprise agency overhead.
            </p>
            <div className="vsc-cta-row">
              <Link to="/request" className="vsc-btn-primary">
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/our-work" className="vsc-btn-outline">
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right column — VS Code window */}
          <div className="vsc-window">

            {/* Animated mouse cursor */}
            <div className={cursorClass}>
              <MouseCursor />
            </div>

            {/* Title bar */}
            <div className="vsc-titlebar">
              <div className="vsc-traffic-lights">
                <span style={{ background: "#FF5F57" }} />
                <span style={{ background: "#FFBD2E" }} />
                <span style={{ background: "#28CA41" }} />
              </div>
              <div className="vsc-tab-info">
                <span className="vsc-ts-badge">TS</span>
                <span className="vsc-filename">{filename}</span>
              </div>
            </div>

            {/* Body: explorer + editor */}
            <div className="vsc-body">

              {/* File explorer */}
              <div className="vsc-explorer">
                <div className="vsc-explorer-label">EXPLORER</div>
                {EXPLORER_TREE.map((item, idx) => (
                  <div
                    key={idx}
                    className={`vsc-tree-row${item.active ? " active" : ""}`}
                    style={{ paddingLeft: 12 + item.indent * 12 }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>

              {/* Editor */}
              <div className="vsc-editor">
                <div className="vsc-tabbar">
                  {["project.ts", "styles.css", "api.ts"].map((tab, i) => (
                    <div key={tab} className={`vsc-tab${i === 0 ? " active" : ""}`}>{tab}</div>
                  ))}
                </div>

                <div className="vsc-content-area">

                  {/* Code phase */}
                  {phase === "typing" && (
                    <div
                      className="vsc-code-pane"
                      style={{
                        opacity:   codeFading ? 0 : 1,
                        transform: codeFading ? "translateY(-8px)" : "translateY(0)",
                      }}
                    >
                      {CODE_LINES.slice(0, visibleLines).map((line, idx) => (
                        <div key={idx} className="vsc-code-line">
                          <span className="vsc-ln">{idx + 1}</span>
                          <span>
                            {renderLine(line)}
                            {idx === visibleLines - 1 && !codeFading && (
                              <span className="vsc-cursor" />
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Carousel phase */}
                  {phase === "carousel" && (
                    <div className="vsc-carousel">
                      <div className="vsc-slides-viewport">
                        <div
                          className="vsc-slides-track"
                          style={{ transform: `translateX(-${carouselSlide * 100}%)` }}
                        >
                          {SLIDES.map((slide, i) => (
                            <div key={i} className="vsc-slide">
                              <img src={slide.img} alt={slide.name} className="vsc-slide-img" />
                              <div className="vsc-slide-overlay" />
                              <div className="vsc-slide-info">
                                <div>
                                  <div className="vsc-slide-name">{slide.name}</div>
                                  <div className="vsc-slide-url">{slide.url}</div>
                                </div>
                                <div className="vsc-live-badge">
                                  <span className="vsc-live-dot" />
                                  <span className="vsc-live-text">LIVE</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="vsc-carousel-bar">
                        <div className="vsc-dots">
                          {SLIDES.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => goToSlide(i)}
                              className={`vsc-dot${i === carouselSlide ? " active" : ""}`}
                            />
                          ))}
                        </div>
                        <div className="vsc-arrows">
                          <ArrowBtn label="←" onClick={() => goToSlide((carouselSlide - 1 + SLIDES.length) % SLIDES.length)} />
                          <ArrowBtn label="→" onClick={() => goToSlide((carouselSlide + 1) % SLIDES.length)} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="vsc-statusbar">
              <span>{statusLeft}</span>
              <span>{statusRight}</span>
            </div>

            {/* Publish / Deploying button */}
            {publishState !== "hidden" && (
              <div className="vsc-publish-area">
                <div
                  className={`vsc-publish-btn${publishState === "deploying" ? " deploying" : ""}`}
                >
                  {publishState === "deploying" ? (
                    <><span className="vsc-spinner" />⚡ Deploying to servers...</>
                  ) : (
                    "🚀  Publish to Production"
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Feature strip ─────────────────────────────────────── */}
      <div className="vsc-feature-strip">
        <div className="vsc-feature-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="vsc-feature-card">
              <div className="vsc-feature-icon-wrap">
                <f.Icon size={15} strokeWidth={1.8} style={{ color: f.accent }} />
              </div>
              <div>
                <div className="vsc-feature-title">{f.title}</div>
                <div className="vsc-feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
