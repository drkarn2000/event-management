"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Tiny inline SVG icon helper
───────────────────────────────────────────────────────────── */
function Icon({ d, className = "h-5 w-5", style }: { d: string; className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d={d} />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Icon paths
───────────────────────────────────────────────────────────── */
const ICONS = {
  star:    "M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6-5.4-3-5.4 3 1.3-6-4.5-4.1 6-.7L12 3z",
  users:   "M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 20c0-3 2.7-5 6-5s6 2 6 5M16 15c2.7.3 5 2.1 5 4.9",
  diamond: "M12 3l8 5v8l-8 5-8-5V8l8-5z",
  venue:   "M3 21h18M9 21V7l3-4 3 4v14M5 21V13H2l10-10 10 10h-3v8",
  impact:  "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  arrow:   "M5 12h14M13 6l6 6-6 6",
  play:    "M5 3l14 9-14 9V3z",
  calendar:"M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zM4 10h16M8 3v4M16 3v4",
  mouse:   "M12 3a5 5 0 0 1 5 5v8a5 5 0 0 1-10 0V8a5 5 0 0 1 5-5zM12 7v4",
};

const FEATURES = [
  { label: "Bespoke\nExperiences", icon: ICONS.diamond },
  { label: "Any Team\nSize",        icon: ICONS.users   },
  { label: "Iconic\nVenues",        icon: ICONS.venue   },
  { label: "Lasting\nImpact",       icon: ICONS.impact  },
];

const AVATAR_COLOURS = ["#3b5fe2", "#7c3aed", "#0891b2", "#059669"];

/* Animation helpers */
const fade = (delay = 0, y = 24) => ({
  initial:   { opacity: 0, y },
  animate:   { opacity: 1, y: 0 },
  transition:{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay },
});

const fadeX = (delay = 0, x = 32) => ({
  initial:   { opacity: 0, x },
  animate:   { opacity: 1, x: 0 },
  transition:{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay },
});

const scaleIn = (delay = 0) => ({
  initial:   { opacity: 0, scale: 0.93 },
  animate:   { opacity: 1, scale: 1 },
  transition:{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay },
});

export function CorporateHero() {
  return (
    <section
      id="corporate-hero"
      aria-label="Corporate & Organisational Events Hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh", background: "#071522" }}
    >
      {/* ════════════ DESKTOP (lg+) ════════════ */}
      <div className="relative hidden lg:block" style={{ minHeight: "100svh" }}>

        {/* RIGHT: photo panel */}
        <div className="absolute inset-y-0 right-0 overflow-hidden" style={{ left: "46%", zIndex: 1 }}>
          <motion.div {...scaleIn(0)} className="absolute inset-0">
            <img
              src="/corporate_hero.jpg"
              alt="Corporate conference speaker presenting to professional audience with city skyline"
              className="h-full w-full object-cover object-center"
              style={{ filter: "brightness(0.88) contrast(1.05) saturate(0.9)" }}
            />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, transparent 45%, rgba(7,21,34,0.5) 100%)" }} />
            <div className="absolute inset-x-0 bottom-0" style={{ height: 160, background: "linear-gradient(to top, #fffaf2 0%, transparent 100%)" }} />
          </motion.div>

          {/* Brand language top-right */}
          <motion.div {...fade(1.2, -10)} className="absolute top-8 right-8 text-right select-none" style={{ zIndex: 10 }}>
            {["PEOPLE", "PURPOSE", "COLLABORATION", "GROWTH"].map((w, i) => (
              <div key={w} className="flex items-center justify-end gap-1.5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.58rem", letterSpacing: "0.3em", lineHeight: 2.1, color: "rgba(255,255,255,0.52)", fontWeight: 700 }}>
                {i > 0 && <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#FF8FB8", opacity: 0.7, display: "inline-block" }} />}
                {w}
              </div>
            ))}
          </motion.div>

          {/* Editorial handwritten */}
          <motion.div {...fade(1.4, 14)} className="absolute select-none" style={{ bottom: "22%", left: "7%", zIndex: 10 }}>
            <div style={{ fontFamily: "Caveat, cursive", fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, textShadow: "0 2px 20px rgba(7,21,34,0.6)" }}>
              Events<br />That Inspire<br />Change
            </div>
            <svg viewBox="0 0 200 22" fill="none" className="mt-1 w-44">
              <path d="M4 14 Q50 2 100 12 Q150 22 196 8" stroke="#FF8FB8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          </motion.div>

          {/* Plan Your Corporate Event card */}
          <motion.div
            {...fadeX(1.0, 44)}
            whileHover={{ y: -5, boxShadow: "0 24px 60px rgba(7,21,34,0.45), 0 0 0 1px rgba(255,143,184,0.3)" }}
            className="absolute"
            style={{ top: "16%", left: "28%", width: 215, zIndex: 15 }}
          >
            <div style={{ background: "rgba(7,21,34,0.74)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, padding: "1.2rem 1.1rem", boxShadow: "0 16px 48px rgba(7,21,34,0.4)", transition: "all 0.3s" }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(255,143,184,0.16)", border: "1px solid rgba(255,143,184,0.32)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.85rem" }}>
                <Icon d={ICONS.calendar} className="h-4 w-4" style={{ color: "#FF8FB8" }} />
              </div>
              <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.02rem", fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: 6 }}>
                Plan Your<br />Corporate Event
              </p>
              <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.6, marginBottom: "0.85rem" }}>
                From strategy to execution,<br />we handle it all.
              </p>
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.25 }} style={{ width: 32, height: 32, borderRadius: "50%", background: "#FF8FB8", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <Icon d={ICONS.arrow} className="h-3.5 w-3.5" style={{ color: "#071522" }} />
              </motion.div>
            </div>
          </motion.div>

          {/* Trust card */}
          <motion.div
            {...fade(1.3, 18)}
            whileHover={{ y: -4 }}
            className="absolute"
            style={{ bottom: "12%", right: "6%", width: 205, zIndex: 15 }}
          >
            <div style={{ background: "rgba(7,21,34,0.76)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "1rem 1.1rem", boxShadow: "0 12px 40px rgba(7,21,34,0.4)", transition: "all 0.3s" }}>
              <div className="flex mb-2.5">
                {AVATAR_COLOURS.map((bg, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.12 }} style={{ width: 28, height: 28, borderRadius: "50%", background: bg, border: "2px solid #071522", marginLeft: i > 0 ? -8 : 0, zIndex: 4 - i, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon d={ICONS.users} className="h-3 w-3" style={{ color: "rgba(255,255,255,0.8)" }} />
                  </motion.div>
                ))}
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,143,184,0.2)", border: "2px solid rgba(255,143,184,0.55)", marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.52rem", fontWeight: 800, color: "#FF8FB8" }}>+</div>
              </div>
              <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.8rem", fontWeight: 800, color: "#fff", marginBottom: 2 }}>Trusted by 200+</p>
              <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.62rem", color: "rgba(255,255,255,0.52)", marginBottom: 7 }}>Companies &amp; Organisations</p>
              <div className="flex items-center gap-1.5">
                <span style={{ color: "#FFB800", fontSize: "0.65rem", letterSpacing: 1 }}>★★★★★</span>
                <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.72rem", fontWeight: 800, color: "#fff" }}>4.9</span>
                <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.58rem", color: "rgba(255,255,255,0.42)" }}>Rated by our clients</span>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div {...fade(1.6, 8)} className="absolute flex items-center gap-2 select-none" style={{ bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 15 }}>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
              <Icon d={ICONS.mouse} className="h-5 w-5" style={{ color: "rgba(255,255,255,0.4)" }} />
            </motion.div>
            <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.52rem", letterSpacing: "0.28em", color: "rgba(255,255,255,0.38)", fontWeight: 700 }}>SCROLL TO EXPLORE</span>
          </motion.div>
        </div>

        {/* LEFT: navy content panel */}
        <div
          className="absolute inset-y-0 left-0 flex flex-col justify-center"
          style={{ right: "54%", zIndex: 5, paddingLeft: "clamp(2rem, 5vw, 5rem)", paddingRight: "0.5rem", paddingTop: "7rem", paddingBottom: "3rem" }}
        >
          {/* Breadcrumb */}
          <motion.div {...fade(0.1, 10)} className="flex items-center gap-2 mb-6">
            <Link href="/" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "rgba(255,255,255,0.48)", textDecoration: "none" }} className="hover:text-white transition-colors">Home</Link>
            <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.72rem" }}>›</span>
            <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "rgba(255,255,255,0.48)" }}>Corporate &amp; Organisational</span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div {...fade(0.25, 16)} className="flex items-center gap-2.5 mb-5">
            <div style={{ width: 28, height: 2, background: "#FF8FB8", borderRadius: 2, flexShrink: 0 }} />
            <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.36em", color: "rgba(255,255,255,0.62)", textTransform: "uppercase" }}>
              Corporate &amp; Organisational Events
            </span>
          </motion.div>

          {/* Headline */}
          <div style={{ marginBottom: "1.7rem" }}>
            {[
              { text: "Meaningful",    delay: 0.38, accent: false },
              { text: "Events.",       delay: 0.52, accent: true  },
              { text: "Stronger Teams.", delay: 0.66, accent: false },
            ].map(({ text, delay, accent }) => (
              <motion.div key={text} {...fade(delay, 22)}>
                <span style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(2.8rem, 4.2vw, 4.8rem)",
                  fontWeight: 900, lineHeight: 1.0,
                  letterSpacing: "-0.03em", display: "block",
                  color: accent ? "#FF8FB8" : "#ffffff",
                  fontStyle: accent ? "italic" : "normal",
                }}>{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.p {...fade(0.82, 14)} style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(0.85rem, 1vw, 1rem)", lineHeight: 1.78, color: "rgba(255,255,255,0.68)", maxWidth: "25rem", marginBottom: "2rem" }}>
            We create exceptional corporate experiences that inspire,<br />connect and deliver real impact.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.97, 12)} className="flex flex-wrap gap-3" style={{ marginBottom: "2.2rem" }}>
            <motion.a
              href="#proposal"
              whileHover={{ y: -3, boxShadow: "0 10px 32px rgba(255,143,184,0.42)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", background: "#FF8FB8", color: "#071522", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800, fontSize: "0.8rem", padding: "0.82rem 1.6rem", borderRadius: 999, textDecoration: "none", boxShadow: "0 4px 18px rgba(255,143,184,0.22)" }}
            >
              <span>Enquire Now</span>
              <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.22 }} style={{ display: "inline-block" }}>→</motion.span>
            </motion.a>
            <motion.a
              href="/galleries"
              whileHover={{ borderColor: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.07)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "0.8rem", padding: "0.82rem 1.4rem", borderRadius: 999, textDecoration: "none", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
            >
              <motion.span whileHover={{ scale: 1.15 }} transition={{ duration: 0.22 }} style={{ width: 20, height: 20, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.48rem" }}>▶</motion.span>
              <span>Watch Video</span>
            </motion.a>
          </motion.div>

          {/* Feature strip */}
          <motion.div {...fade(1.12, 8)}>
            <div style={{ display: "flex", alignItems: "stretch", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.2rem" }}>
              {FEATURES.map(({ label, icon }, i) => (
                <motion.div
                  key={label}
                  whileHover={{ color: "#FF8FB8" }}
                  transition={{ duration: 0.25 }}
                  style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.45rem", padding: "0 0.4rem", borderRight: i < FEATURES.length - 1 ? "1px solid rgba(255,255,255,0.09)" : "none", color: "rgba(255,255,255,0.65)", cursor: "default" }}
                >
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.22 }}>
                    <Icon d={icon} className="h-[17px] w-[17px]" style={{ color: "#FF8FB8" }} />
                  </motion.div>
                  <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.02em", textAlign: "center", lineHeight: 1.35, color: "rgba(255,255,255,0.62)", whiteSpace: "pre-line" }}>{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Brand signature */}
          <motion.p {...fade(1.22, 6)} style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.47rem", fontWeight: 700, letterSpacing: "0.28em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginTop: "1.4rem" }}>
            STRATEGY • PEOPLE • EXPERIENCES • REAL IMPACT
          </motion.p>
        </div>

        {/* SVG curved divider */}
        <div className="absolute inset-y-0 pointer-events-none" style={{ left: "42%", width: 130, zIndex: 3 }}>
          <svg viewBox="0 0 130 800" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0 0 L80 0 Q28 200 52 400 Q76 600 65 800 L0 800 Z" fill="#071522" />
            <path d="M80 0 Q28 200 52 400 Q76 600 65 800" fill="none" stroke="rgba(255,143,184,0.15)" strokeWidth="1" />
          </svg>
        </div>

        {/* Bottom cream glow */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ zIndex: 20, height: 110 }}>
          <div style={{ height: "100%", background: "linear-gradient(to top, #fffaf2 0%, rgba(255,250,242,0.65) 40%, transparent 100%)" }} />
        </div>
      </div>

      {/* ════════════ MOBILE / TABLET (< lg) ════════════ */}
      <div className="lg:hidden flex flex-col" style={{ minHeight: "100svh", background: "#071522" }}>
        <div className="flex flex-col px-5 pt-28 pb-6">
          {/* Breadcrumb */}
          <motion.div {...fade(0.1, 8)} className="flex items-center gap-1.5 mb-5">
            <Link href="/" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.68rem", fontWeight: 600, color: "rgba(255,255,255,0.48)", textDecoration: "none" }} className="hover:text-white transition-colors">Home</Link>
            <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.7rem" }}>›</span>
            <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.68rem", fontWeight: 600, color: "rgba(255,255,255,0.48)" }}>Corporate &amp; Organisational</span>
          </motion.div>
          {/* Eyebrow */}
          <motion.div {...fade(0.2, 14)} className="flex items-center gap-2 mb-4">
            <div style={{ width: 20, height: 2, background: "#FF8FB8", borderRadius: 2, flexShrink: 0 }} />
            <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.3em", color: "rgba(255,255,255,0.58)", textTransform: "uppercase" }}>Corporate &amp; Organisational Events</span>
          </motion.div>
          {/* Headline */}
          <div style={{ marginBottom: "1.2rem" }}>
            {[
              { text: "Meaningful",    delay: 0.3,  accent: false },
              { text: "Events.",       delay: 0.44, accent: true  },
              { text: "Stronger Teams.", delay: 0.57, accent: false },
            ].map(({ text, delay, accent }) => (
              <motion.div key={text} {...fade(delay, 16)}>
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2.3rem, 9vw, 3.3rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.02em", display: "block", color: accent ? "#FF8FB8" : "#fff", fontStyle: accent ? "italic" : "normal" }}>{text}</span>
              </motion.div>
            ))}
          </div>
          {/* Description */}
          <motion.p {...fade(0.7, 12)} style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.88rem", lineHeight: 1.72, color: "rgba(255,255,255,0.68)", marginBottom: "1.6rem" }}>
            We create exceptional corporate experiences that inspire, connect and deliver real impact.
          </motion.p>
          {/* CTAs */}
          <motion.div {...fade(0.85, 10)} className="flex flex-wrap gap-3 mb-7">
            <a href="#proposal" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#FF8FB8", color: "#071522", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800, fontSize: "0.82rem", padding: "0.78rem 1.45rem", borderRadius: 999, textDecoration: "none" }}>
              Enquire Now →
            </a>
            <a href="/galleries" style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "0.82rem", padding: "0.78rem 1.3rem", borderRadius: 999, textDecoration: "none" }}>
              <span style={{ fontSize: "0.5rem" }}>▶</span> Watch Video
            </a>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div {...scaleIn(0.88)} className="relative mx-5 rounded-2xl overflow-hidden" style={{ height: "55vw", minHeight: 220, maxHeight: 370 }}>
          <img src="/corporate_hero.jpg" alt="Corporate conference speaker presenting to professional audience" className="h-full w-full object-cover object-center" style={{ filter: "brightness(0.88) contrast(1.05)" }} />
          <div style={{ position: "absolute", bottom: "12%", left: "5%", zIndex: 5 }}>
            <div style={{ fontFamily: "Caveat, cursive", fontSize: "1.45rem", fontWeight: 700, color: "#fff", lineHeight: 1.15, textShadow: "0 2px 14px rgba(7,21,34,0.6)" }}>Events<br />That Inspire<br />Change</div>
            <svg viewBox="0 0 160 18" fill="none" className="mt-1 w-36"><path d="M3 12 Q40 2 80 10 Q120 18 157 6" stroke="#FF8FB8" strokeWidth="2.2" strokeLinecap="round" /></svg>
          </div>
        </motion.div>

        {/* Cards row */}
        <div className="grid grid-cols-2 gap-3 px-5 py-4">
          <motion.div {...fade(1.0, 16)} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.13)", borderRadius: 14, padding: "1rem", backdropFilter: "blur(14px)" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,143,184,0.16)", border: "1px solid rgba(255,143,184,0.32)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.7rem" }}>
              <Icon d={ICONS.calendar} className="h-4 w-4" style={{ color: "#FF8FB8" }} />
            </div>
            <p style={{ fontFamily: "Playfair Display, serif", fontSize: "0.85rem", fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: 4 }}>Plan Your<br />Corporate Event</p>
            <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.62rem", color: "rgba(255,255,255,0.52)", lineHeight: 1.55 }}>From strategy to execution, we handle it all.</p>
          </motion.div>
          <motion.div {...fade(1.1, 16)} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.13)", borderRadius: 14, padding: "1rem", backdropFilter: "blur(14px)" }}>
            <div className="flex mb-2">
              {AVATAR_COLOURS.map((bg, i) => (
                <div key={i} style={{ width: 24, height: 24, borderRadius: "50%", background: bg, border: "2px solid #071522", marginLeft: i > 0 ? -7 : 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon d={ICONS.users} className="h-2.5 w-2.5" style={{ color: "rgba(255,255,255,0.8)" }} />
                </div>
              ))}
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,143,184,0.2)", border: "2px solid rgba(255,143,184,0.55)", marginLeft: -7, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.5rem", fontWeight: 800, color: "#FF8FB8" }}>+</div>
            </div>
            <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.75rem", fontWeight: 800, color: "#fff", marginBottom: 2 }}>Trusted by 200+</p>
            <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.48)", marginBottom: 5 }}>Companies &amp; Organisations</p>
            <div className="flex items-center gap-1"><span style={{ color: "#FFB800", fontSize: "0.6rem" }}>★★★★★</span><span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.65rem", fontWeight: 800, color: "#fff" }}>4.9</span></div>
          </motion.div>
        </div>

        {/* Feature strip mobile */}
        <motion.div {...fade(1.2, 8)} className="px-5 pb-6">
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1rem", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.4rem" }}>
            {FEATURES.map(({ label, icon }, i) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.38rem", borderRight: i < FEATURES.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <Icon d={icon} className="h-4 w-4" style={{ color: "#FF8FB8" }} />
                <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.52rem", fontWeight: 700, color: "rgba(255,255,255,0.58)", textAlign: "center", lineHeight: 1.3, whiteSpace: "pre-line" }}>{label}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.44rem", fontWeight: 700, letterSpacing: "0.22em", color: "rgba(255,255,255,0.26)", textTransform: "uppercase", textAlign: "center", marginTop: "1.2rem" }}>STRATEGY • PEOPLE • EXPERIENCES • REAL IMPACT</p>
        </motion.div>

        <div style={{ height: 60, background: "linear-gradient(to top, #fffaf2 0%, transparent 100%)" }} />
      </div>
    </section>
  );
}
