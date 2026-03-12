import Link from "next/link";
import Image from "next/image";
import HeroSection from "./components/hero-section";
import EmberSection from "./components/ember-section";
import StatsSection from "./components/stats-section";
import { products } from "./lib/products";

const FEATURED_SLUGS = ["classic-coke", "still-water", "energy-drink"];

export default function Home() {
  const featured = FEATURED_SLUGS.map((slug) =>
    products.find((p) => p.slug === slug),
  ).filter(Boolean) as typeof products;

  return (
    <main>
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── 2. Featured Products ────────────────────────────────── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-red-500 mb-3">
                Our Range
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                Crafted for
                <br />
                <span className="text-white/40">every moment.</span>
              </h2>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors duration-200 shrink-0"
            >
              View all products
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-linear-to-b ${p.color} flex flex-col hover:scale-[1.015] hover:-translate-y-1.5 transition-all duration-500`}
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 32px 64px rgba(0,0,0,0.45)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="h-px w-full opacity-50"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${p.glowColor}, transparent)`,
                  }}
                />

                {/* Badge */}
                {p.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border bg-black/50 backdrop-blur-sm ${p.textColor} ${p.borderColor}`}
                    >
                      {p.badge}
                    </span>
                  </div>
                )}

                {/* Image stage */}
                <div className="relative flex items-center justify-center pt-8 pb-5 px-6 overflow-hidden">
                  {p.image && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="w-56 h-56 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                        style={{ background: p.glowColor }}
                      />
                    </div>
                  )}
                  {p.image && p.imageW && p.imageH && (
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={p.imageW}
                      height={p.imageH}
                      className="relative z-10"
                      style={{
                        maxHeight: p.imageH > p.imageW ? "200px" : "160px",
                        width: "auto",
                        height: "auto",
                        animation: "float 4.5s ease-in-out infinite",
                        filter: `drop-shadow(0 18px 36px ${p.glowColor})`,
                      }}
                    />
                  )}
                </div>

                {/* Divider */}
                <div className="mx-6 h-px bg-white/8" />

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 pt-5">
                  {/* Category chip */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: p.glowColor }}
                    />
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.22em] ${p.textColor}`}
                    >
                      {p.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white tracking-tight leading-tight mb-1.5">
                    {p.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1">
                    {p.tagline}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-5 mb-6">
                    {[
                      { label: "Volume", val: p.volume },
                      { label: "Calories", val: p.calories },
                      { label: "Sugar", val: p.sugar },
                    ].map((s) => (
                      <div key={s.label} className="flex flex-col gap-0.5">
                        <span className="text-[9px] uppercase tracking-widest text-white/30">
                          {s.label}
                        </span>
                        <span className="text-sm font-bold text-white/75">
                          {s.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${p.textColor} group-hover:gap-3 transition-all duration-300`}
                  >
                    Explore
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover glow border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${p.glowColor}` }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Ember / Fire section ──────────────────────────────── */}
      <EmberSection />

      {/* ── 4. Stats count-up ───────────────────────────────────── */}
      <StatsSection />

      {/* ── 5. Story Teaser ─────────────────────────────────────── */}
      <section className="bg-zinc-950 py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — pull quote */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-red-500 mb-6">
              Our Story
            </p>
            <blockquote
              className="font-black text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              &ldquo;Not for
              <br />
              shareholders.
              <br />
              <span className="text-white/30">For the</span>
              <br />
              people.&rdquo;
            </blockquote>
            <p className="mt-6 text-white/40 text-sm">
              — Drinko Founding Charter, 2021
            </p>
          </div>

          {/* Right — values + CTA */}
          <div className="flex flex-col gap-7">
            {[
              {
                title: "Radically Honest",
                body: "Every label tells the truth. No hidden sugars, no misleading claims.",
              },
              {
                title: "Built to Last",
                body: "From biodegradable packaging to carbon-neutral targets by 2030.",
              },
              {
                title: "People First",
                body: "5% of profits fund clean-water projects in underserved communities.",
              },
            ].map((v) => (
              <div key={v.title} className="flex gap-5">
                <div className="w-1 shrink-0 rounded-full bg-red-600" />
                <div>
                  <h4 className="text-white font-bold text-base mb-1">
                    {v.title}
                  </h4>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </div>
            ))}

            <Link
              href="/our-story"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors duration-200"
            >
              Read the full story
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. Bottom CTA ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-red-600 py-24 px-6">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.07] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')]" />
        {/* Radial light */}
        <div className="absolute inset-0 [background:radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,80,80,0.25),transparent)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-4">
            Find Drinko Near You
          </p>
          <h2
            className="font-black text-white leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Your next sip is
            <br />
            closer than you think.
          </h2>
          <p className="mt-6 text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Drinko is available at thousands of stores across 48 countries.
            Discover your nearest stockist in seconds.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/where-to-buy"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-red-600 font-bold text-sm tracking-wide hover:bg-red-50 transition-all hover:scale-105 active:scale-95 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
            >
              Where to Buy
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/50 text-white font-semibold text-sm tracking-wide hover:bg-white/15 hover:border-white transition-all hover:scale-105 active:scale-95"
            >
              Shop Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
