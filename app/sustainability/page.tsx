import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sustainability — Drinko",
  description:
    "Our planet, our responsibility. Learn how Drinko is committed to a greener future through sustainable packaging, carbon reduction, and ethical sourcing.",
};

const pillars = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7"
        />
      </svg>
    ),
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/6",
    glow: "rgba(52,211,153,0.15)",
    title: "Sustainable Packaging",
    stat: "80%",
    statLabel: "recycled materials by 2027",
    body: "We are phasing out all virgin plastic across our entire product range. By 2027, 80% of all Drinko packaging will be made from certified recycled materials. Our water range already ships in 100% rPET bottles.",
    bullets: [
      "100% rPET bottles on Still & Sparkling Water",
      "Aluminium cans — infinitely recyclable",
      "Cardboard multipacks from FSC-certified sources",
      "Zero single-use plastic in all warehouse operations by 2025 ✓",
    ],
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
    accent: "text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/6",
    glow: "rgba(56,189,248,0.15)",
    title: "Carbon Reduction",
    stat: "Net Zero",
    statLabel: "target by 2030",
    body: "We have mapped every gram of CO₂ across our value chain — from ingredient sourcing to last-mile delivery. Our roadmap commits us to Net Zero by 2030, with verified offsets for unavoidable emissions along the way.",
    bullets: [
      "100% renewable energy across all Drinko facilities",
      "Fleet electrification programme — 60% EV by 2026",
      "Supply chain emissions audit published annually",
      "Carbon labelling on all products by Q3 2026",
    ],
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    accent: "text-yellow-400",
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/6",
    glow: "rgba(250,204,21,0.12)",
    title: "Ethical Sourcing",
    stat: "100%",
    statLabel: "ethically verified suppliers",
    body: "Every ingredient in every Drinko product is sourced from suppliers who meet our strict ethical standards — fair wages, safe conditions, no child labour, and environmental responsibility.",
    bullets: [
      "Supplier code of conduct enforced globally",
      "Annual third-party audits on all Tier 1 suppliers",
      "Fair trade certified natural flavours",
      "Local sourcing priority within each region",
    ],
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    accent: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/6",
    glow: "rgba(220,38,38,0.15)",
    title: "Water Stewardship",
    stat: "2.1B L",
    statLabel: "water restored to nature",
    body: "As a drinks company, water is our most precious resource. We have committed to restoring more water to nature than we use in production — and we are already ahead of that target.",
    bullets: [
      "Water-positive operations since 2024",
      "Closed-loop water recycling at all plants",
      "Watershed restoration partnerships in 6 countries",
      "Leakage detection programme saves 40M L/year",
    ],
  },
];

const goals = [
  { year: "2024", label: "Water-Positive Operations", done: true },
  { year: "2025", label: "Zero Single-Use Plastic in Warehouses", done: true },
  {
    year: "2026",
    label: "60% Electric Fleet & Carbon Labels on All Products",
    done: false,
  },
  {
    year: "2027",
    label: "80% Recycled Packaging Across Full Range",
    done: false,
  },
  { year: "2028", label: "50% Reduction in Scope 3 Emissions", done: false },
  {
    year: "2030",
    label: "Net Zero Across the Entire Value Chain",
    done: false,
  },
];

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative pt-36 pb-28 px-5 sm:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 [background:radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(52,211,153,0.13),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-700/30 to-transparent" />
        <div className="relative max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 mb-6 text-emerald-400 text-[11px] font-semibold uppercase tracking-[0.22em] border border-emerald-500/25 bg-emerald-500/8 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
            Sustainability
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
            Our Planet.
            <br />
            <span className="text-emerald-400">Our Responsibility.</span>
          </h1>
          <p className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Being good for people means being good for the planet they live on.
            Drinko&apos;s sustainability commitments are non-negotiable —
            verified, published, and getting tougher every year.
          </p>
        </div>
      </div>

      {/* ── Headline numbers ─────────────────────────────── */}
      <div className="border-y border-white/8 py-16 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              value: "Net Zero",
              sub: "target by 2030",
              color: "text-emerald-400",
            },
            {
              value: "80%",
              sub: "recycled packaging by 2027",
              color: "text-sky-400",
            },
            {
              value: "2.1B L",
              sub: "water restored to nature",
              color: "text-blue-400",
            },
            {
              value: "100%",
              sub: "renewable energy in facilities",
              color: "text-yellow-400",
            },
          ].map((s) => (
            <div
              key={s.sub}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/8 bg-white/3"
            >
              <span
                className={`text-4xl sm:text-5xl font-black ${s.color} mb-2`}
              >
                {s.value}
              </span>
              <span className="text-white/40 text-xs leading-snug font-medium">
                {s.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Four pillars ─────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Four Pillars of Action
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">
            Sustainability isn&apos;t a PR strategy — it&apos;s built into every
            part of how we operate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border ${p.border} ${p.bg} p-8`}
              style={{ boxShadow: `0 0 40px ${p.glow}` }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${p.bg} border ${p.border} ${p.accent} mb-5`}
              >
                {p.icon}
              </div>
              <div className="flex items-end gap-3 mb-2">
                <span className={`text-4xl font-black ${p.accent}`}>
                  {p.stat}
                </span>
                <span className="text-white/35 text-sm mb-1">
                  {p.statLabel}
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-3">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {p.body}
              </p>
              <ul className="space-y-2">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm text-white/55"
                  >
                    <svg
                      className={`w-4 h-4 mt-0.5 ${p.accent} shrink-0`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roadmap timeline ─────────────────────────────── */}
      <div className="border-t border-white/8 py-24 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Our Sustainability Roadmap
            </h2>
            <p className="text-white/40 text-base">
              Commitments with deadlines. No vague pledges.
            </p>
          </div>

          <div className="relative space-y-5">
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-white/8" />
            {goals.map((g) => (
              <div key={g.year} className="flex items-start gap-5">
                <div
                  className={`relative z-10 w-10 h-10 shrink-0 rounded-full flex items-center justify-center border-2 ${g.done ? "border-emerald-500 bg-emerald-500/15" : "border-white/20 bg-black"}`}
                >
                  {g.done ? (
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  )}
                </div>
                <div
                  className={`flex-1 rounded-2xl border p-5 mb-1 ${g.done ? "border-emerald-500/25 bg-emerald-500/5" : "border-white/8 bg-white/2"}`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className={`text-xs font-black uppercase tracking-widest ${g.done ? "text-emerald-400" : "text-white/30"}`}
                    >
                      {g.year}
                    </span>
                    {g.done && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        Achieved
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm font-semibold ${g.done ? "text-white" : "text-white/55"}`}
                  >
                    {g.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────── */}
      <div className="border-t border-white/8 py-20 px-5 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
          Every sip is a{" "}
          <span className="text-emerald-400">vote for the planet.</span>
        </h2>
        <p className="text-white/40 text-base max-w-md mx-auto mb-10">
          When you choose Drinko, you&apos;re choosing a company that puts the
          earth first. Thank you for being part of the solution.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-sm tracking-wide hover:bg-emerald-500 transition-colors shadow-[0_0_40px_rgba(52,211,153,0.3)]"
          >
            Shop Sustainably
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/our-story"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/70 font-semibold text-sm hover:text-white hover:bg-white/8 transition-all"
          >
            Our Story
          </Link>
        </div>
      </div>
    </div>
  );
}
