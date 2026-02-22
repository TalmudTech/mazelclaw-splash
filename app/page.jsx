"use client";

import { useMemo, useState } from "react";

const quotes = [
  "The AI that actually does things.",
  "Feels like a real teammate, not a chatbot.",
  "Automation from chat in seconds.",
  "Memory + tools + background agents = leverage.",
  "Open architecture, no black-box lock-in.",
];

const commands = {
  oneliner: ["curl -fsSL https://openclaw.ai/install.sh | bash"],
  quick: ["npm i -g openclaw", "openclaw onboard"],
  hackable: [
    "git clone https://github.com/TalmudTech/mazelclaw.git",
    "cd mazelclaw && pnpm install && pnpm run build",
    "pnpm run openclaw onboard",
  ],
};

export default function Page() {
  const [mode, setMode] = useState("hackable");
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />

      <header className="topbar container">
        <a className="brand" href="#" aria-label="MazelClaw home">
          <img src="/assets/mazelclaw-logo-text.png" alt="MazelClaw" />
        </a>
        <nav className="top-actions">
          <a className="btn btn-ghost" href="https://docs.openclaw.ai" target="_blank" rel="noreferrer">
            Docs
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/TalmudTech/mazelclaw"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="btn btn-primary" href="#quickstart">
            Quick Start
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <p className="kicker">open source · self-hosted · always-on</p>
          <h1>The AI that actually does things.</h1>
          <p className="subtitle">
            Clears your inbox, drafts replies, runs terminal workflows, controls browsers, and handles
            real tasks from Telegram, WhatsApp, Discord, and more.
          </p>
          <div className="hero-cta">
            <a
              className="btn btn-primary"
              href="https://github.com/TalmudTech/mazelclaw"
              target="_blank"
              rel="noreferrer"
            >
              View MazelClaw Repo
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/TalmudTech/mazelclaw-splash"
              target="_blank"
              rel="noreferrer"
            >
              View Website Repo
            </a>
          </div>
        </section>

        <section className="container social-proof">
          <div className="pill">Runs where you run: Mac · Linux · cloud</div>
          <div className="pill">Talk via Telegram · WhatsApp · Discord · Slack · Signal</div>
          <div className="pill">Multi-agent workflows + memory + skills</div>
        </section>

        <section className="testimonials" aria-label="community quotes">
          <div className="marquee">
            <div className="marquee-track">
              {quotes.concat(quotes).map((quote, i) => (
                <article key={`${quote}-${i}`} className="quote">
                  “{quote}”
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="quickstart" className="container quickstart">
          <h2>
            <span className="accent">⟩</span> Quick Start
          </h2>

          <div className="code-window">
            <div className="code-header">
              <div className="dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="mode-switch" role="tablist" aria-label="install mode">
                <button
                  className={`mode-btn ${mode === "oneliner" ? "active" : ""}`}
                  onClick={() => setMode("oneliner")}
                >
                  One-liner
                </button>
                <button className={`mode-btn ${mode === "quick" ? "active" : ""}`} onClick={() => setMode("quick")}>
                  npm
                </button>
                <button
                  className={`mode-btn ${mode === "hackable" ? "active" : ""}`}
                  onClick={() => setMode("hackable")}
                >
                  Hackable
                </button>
              </div>
            </div>

            <div className="code-content active">
              {commands[mode].map((line) => (
                <button
                  type="button"
                  key={line}
                  className="code-line"
                  onClick={() => navigator.clipboard.writeText(line).catch(() => {})}
                >
                  <span className="prompt">$</span>
                  <code>{line}</code>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="container features">
          <h2>
            <span className="accent">⟩</span> What It Does
          </h2>
          <div className="feature-grid">
            <article className="card">
              <h3>Runs on your machine</h3>
              <p>Keep your data local and choose your own model providers.</p>
            </article>
            <article className="card">
              <h3>Any chat interface</h3>
              <p>Telegram, WhatsApp, Discord, Slack, Signal, and web chat.</p>
            </article>
            <article className="card">
              <h3>Real execution</h3>
              <p>Shell commands, browser automation, file operations, and more.</p>
            </article>
            <article className="card">
              <h3>Persistent memory</h3>
              <p>Learns your context over time so workflows get faster and smarter.</p>
            </article>
            <article className="card">
              <h3>Skill ecosystem</h3>
              <p>Install community skills or build your own tailored actions.</p>
            </article>
            <article className="card">
              <h3>Background agents</h3>
              <p>Run multi-step tasks asynchronously and get updates in chat.</p>
            </article>
          </div>
        </section>

        <section className="container integrations card">
          <h2>
            <span className="accent">⟩</span> Integrations
          </h2>
          <div className="pill-row">
            {[
              "Telegram",
              "WhatsApp",
              "Discord",
              "Slack",
              "Signal",
              "iMessage",
              "GitHub",
              "Gmail",
              "Browser",
              "Custom skills",
            ].map((item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="container links-grid">
          <a className="card link-card" href="https://github.com/TalmudTech/mazelclaw" target="_blank" rel="noreferrer">
            <h3>Source Code</h3>
            <p>Track main development and changes in the MazelClaw repository.</p>
          </a>
          <a className="card link-card" href="https://docs.openclaw.ai" target="_blank" rel="noreferrer">
            <h3>Documentation</h3>
            <p>Reference docs for setup, architecture, and advanced workflows.</p>
          </a>
          <a className="card link-card" href="https://discord.com/invite/clawd" target="_blank" rel="noreferrer">
            <h3>Community</h3>
            <p>Join builders shipping assistants and sharing production patterns.</p>
          </a>
        </section>

        <section className="container final-cta card">
          <h2>Build your own personal AI stack.</h2>
          <p>
            MazelClaw gives you a branded, hackable, production-ready assistant foundation. Start from the
            repo and adapt it to your exact workflows.
          </p>
          <div className="hero-cta">
            <a
              className="btn btn-primary"
              href="https://github.com/TalmudTech/mazelclaw"
              target="_blank"
              rel="noreferrer"
            >
              Open MazelClaw
            </a>
            <a className="btn btn-ghost" href="https://discord.com/invite/clawd" target="_blank" rel="noreferrer">
              Join Community
            </a>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <p>© {year} MazelClaw. Built on OpenClaw foundations.</p>
      </footer>
    </>
  );
}
