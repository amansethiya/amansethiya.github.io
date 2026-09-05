import React, { useEffect, useState } from "react";
import "./App.css";

const BUILD_LOG = [
  "$ npm run build-portfolio",
  "> installing dependencies ... done",
  "> writing case studies ... done",
  "> optimizing images ... done",
  "> compiling site ...",
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/amansethiya", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/amansethiyaa",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/amansethiyaa", icon: "x" },
  { label: "Email", href: "mailto:amangupta.code@gmail.com", icon: "mail" },
];

function Icon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "github":
      return (
        <svg {...common}>
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 10v7M7 7v.01M11 17v-4.5c0-1.38 1-2.5 2.5-2.5S16 11.12 16 12.5V17M11 10v7" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M4 4l16 16M20 4L4 20" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function App() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisibleLines(BUILD_LOG.length);
      setProgress(73);
      return;
    }

    let line = 0;
    const lineTimer = setInterval(() => {
      line += 1;
      setVisibleLines(line);
      if (line >= BUILD_LOG.length) {
        clearInterval(lineTimer);
        let pct = 0;
        const progressTimer = setInterval(() => {
          pct += 1;
          setProgress(pct);
          if (pct >= 73) clearInterval(progressTimer);
        }, 25);
      }
    }, 550);

    return () => clearInterval(lineTimer);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setStatus(isValid ? "success" : "error");
  }

  const year = new Date().getFullYear();

  return (
    <div className="page">
      <header className="topbar">
        <span className="brand">
          <span className="brand-dim">Dev.</span> Aman Kumar Gupta
        </span>
        <nav className="socials" aria-label="Social links">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="social-link"
            >
              <Icon name={s.icon} />
            </a>
          ))}
        </nav>
      </header>

      <main className="hero">
        <p className="status-line">Portfolio in progress</p>
        <h1 className="headline">
          Currently compiling
          <br />
          something worth shipping.
        </h1>
        <p className="subhead">
          I'm a MERN developer rebuilding this site properly instead of shipping
          something half-finished. Leave your email and I'll let you know the
          moment it's live.
        </p>

        <div
          className="terminal"
          role="img"
          aria-label="Terminal window showing the site build in progress"
        >
          <div className="terminal-titlebar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="terminal-title">amansethiya.github.io</span>
          </div>
          <div className="terminal-body">
            {BUILD_LOG.slice(0, visibleLines).map((line, idx) => (
              <div className="terminal-line" key={idx}>
                {line}
              </div>
            ))}
            {visibleLines >= BUILD_LOG.length && (
              <>
                <div className="terminal-line">
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="progress-label">{progress}%</span>
                </div>
                <div className="terminal-line terminal-cursor-line">
                  <span className="cursor" />
                </div>
              </>
            )}
          </div>
        </div>

        <form className="notify-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="email" className="visually-hidden">
            Email address
          </label>
          <div className="input-wrap">
            <span className="input-prompt">&gt;</span>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              autoComplete="email"
              required
            />
          </div>
          <button type="submit" className="notify-button">
            Notify me
          </button>
        </form>
        <p
          className={status === "error" ? "form-status error" : "form-status"}
          role="status"
          aria-live="polite"
        >
          {status === "success" && "You're on the list — talk soon."}
          {status === "error" && "That email address needs a second look."}
        </p>
      </main>

      <footer className="footer">
        <p>© {year} AMAN KUMAR GUPTA</p>
      </footer>
    </div>
  );
}
