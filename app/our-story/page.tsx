import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story — Drinko",
  description:
    "Drinko was built for the people. Learn about our mission, our charity work, and our commitment to health and society.",
};

const values = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Always for the People",
    body: "Every decision we make — from our ingredients to our pricing — starts with one question: is this good for the people we serve? We exist for our communities, not the other way around.",
    accent: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
    title: "Health First, Always",
    body: "We formulate every drink with your wellbeing in mind. No hidden nasties, no unnecessary additives. Whether it's our zero-sugar range or our pure natural waters, your health is never compromised.",
    accent: "text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/5",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
        />
      </svg>
    ),
    title: "Giving Back to Society",
    body: "A portion of every Drinko sold goes directly to charitable programmes — from clean water access in underserved communities to food banks, youth education, and mental health initiatives.",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Transparent by Design",
    body: "We believe you deserve to know exactly what's in your drink and exactly where our profits go. Full ingredient transparency and annual charity reports are published for everyone to see.",
    accent: "text-yellow-400",
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/5",
  },
];

const charityStats = [
  { value: "$2.4M+", label: "Donated to charity since founding" },
  { value: "140K+", label: "Meals funded for food banks" },
  { value: "38", label: "Communities with clean water access" },
  { value: "12K+", label: "Students supported through education" },
];

const timeline = [
  {
    year: "2018",
    title: "Drinko is Born",
    body: "Founded in a small warehouse with one mission: make great drinks that are honest, healthy, and accessible to everyone.",
  },
  {
    year: "2019",
    title: "First Charity Pledge",
    body: "We committed 5% of all revenue to community causes from day one. Our first donation funded clean drinking water for three rural schools.",
  },
  {
    year: "2021",
    title: "Sugar-Free & Water Range",
    body: "Responding to what our customers told us they needed — drinks that taste great without compromising their health.",
  },
  {
    year: "2023",
    title: "1 Million Cans Milestone",
    body: "We sold our millionth can. To celebrate, we doubled our charity donation for the entire month — giving back has always been non-negotiable.",
  },
  {
    year: "2025",
    title: "Energy & Juice Launch",
    body: "Expanding the range to fuel every kind of moment — high-performance energy drinks and 100% cold-pressed fruit juices with no shortcuts.",
  },
  {
    year: "2026",
    title: "The Mission Continues",
    body: "More products, more communities, more impact. Drinko is always for the people — today, tomorrow, and always.",
  },
];

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative pt-36 pb-28 px-5 sm:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 [background:radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(220,38,38,0.16),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-red-700/30 to-transparent" />

        <div className="relative max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 mb-6 text-red-400 text-[11px] font-semibold uppercase tracking-[0.22em] border border-red-500/25 bg-red-500/8 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping inline-block" />
            Our Story
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
            Built for the <span className="text-red-500">People.</span>
            <br />
            Always.
          </h1>
          <p className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Drinko isn&apos;t just a drinks brand. It&apos;s a belief that what
            you consume should be good for your body, honest about its
            ingredients, and make the world a little better with every sip.
          </p>
        </div>
      </div>

      {/* ── Motto banner ─────────────────────────────────── */}
      <div className="border-y border-white/8 bg-white/2 py-14 px-5 sm:px-8 text-center">
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            &ldquo;Not for shareholders.
            <br />
            <span className="text-red-500">For the people.</span>&rdquo;
          </p>
          <footer className="mt-5 text-white/35 text-sm font-medium tracking-widest uppercase">
            — The Drinko Motto
          </footer>
        </blockquote>
      </div>

      {/* ── Core values ──────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            What We Stand For
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">
            Four principles that guide every product we make and every decision
            we take.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className={`rounded-2xl border ${v.border} ${v.bg} p-8 flex flex-col gap-4`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${v.bg} border ${v.border} ${v.accent}`}
              >
                {v.icon}
              </div>
              <h3 className={`text-xl font-black text-white`}>{v.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Charity stats ────────────────────────────────── */}
      <div className="relative border-y border-white/8 overflow-hidden">
        <div className="absolute inset-0 [background:radial-gradient(ellipse_80%_100%_at_50%_50%,rgba(220,38,38,0.1),transparent)]" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Our Impact in Numbers
            </h2>
            <p className="text-white/40 text-base max-w-md mx-auto">
              Every can sold contributes to causes that matter. Here&apos;s what
              we&apos;ve achieved together.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {charityStats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-red-500/15 bg-red-500/5"
              >
                <span className="text-4xl sm:text-5xl font-black text-red-500 mb-2">
                  {s.value}
                </span>
                <span className="text-white/45 text-xs leading-snug font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Health commitment ────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sky-400 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              Health &amp; Ingredients
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
              Good for You.
              <br />
              <span className="text-sky-400">No Compromises.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-5">
              We work with nutritionists and food scientists to ensure every
              Drinko product is formulated with your health at the centre.
              Whether you&apos;re going zero-sugar, choosing pure water, or
              reaching for an energy boost — you can trust what&apos;s inside.
            </p>
            <ul className="space-y-3">
              {[
                "No artificial colours in any product",
                "Full ingredient list printed on every can",
                "Sugar-free options across the entire cola range",
                "100% natural still and sparkling water sources",
                "Cold-pressed juice — no concentrate, no preservatives",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/60"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 text-sky-500 shrink-0"
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
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual panel */}
          <div className="relative rounded-2xl border border-sky-500/15 bg-linear-to-b from-sky-950/60 to-black p-8 overflow-hidden">
            <div className="absolute inset-0 [background:radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(14,165,233,0.12),transparent)]" />
            <div className="relative space-y-4">
              {[
                {
                  label: "Artificial Colours",
                  value: "0",
                  color: "text-sky-400",
                },
                {
                  label: "Hidden Additives",
                  value: "0",
                  color: "text-sky-400",
                },
                {
                  label: "Sugar-Free Options",
                  value: "2",
                  color: "text-emerald-400",
                },
                {
                  label: "Natural Water Sources",
                  value: "2",
                  color: "text-emerald-400",
                },
                {
                  label: "100% Juice Products",
                  value: "1",
                  color: "text-orange-400",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-3 border-b border-white/6 last:border-0"
                >
                  <span className="text-sm text-white/45">{row.label}</span>
                  <span className={`text-2xl font-black ${row.color}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Timeline ─────────────────────────────────────── */}
      <div className="border-t border-white/8 py-24 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Our Journey
            </h2>
            <p className="text-white/40 text-base">
              From a warehouse dream to a people&apos;s brand.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-white/8" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Mobile / Desktop dot */}
                  <div className="relative sm:absolute sm:left-1/2 sm:-translate-x-1/2 shrink-0 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-black border-2 border-red-500 flex items-center justify-center z-10">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 sm:w-[calc(50%-2rem)] sm:max-w-[calc(50%-2rem)] ml-4 sm:ml-0 ${
                      i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                    }`}
                  >
                    <div className="rounded-2xl border border-white/8 bg-white/3 p-5 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300">
                      <span className="text-red-500 text-xs font-black uppercase tracking-widest block mb-1.5">
                        {item.year}
                      </span>
                      <h3 className="text-base font-black text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/45 text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────── */}
      <div className="border-t border-white/8 py-20 px-5 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
          Taste the difference of{" "}
          <span className="text-red-500">doing good.</span>
        </h2>
        <p className="text-white/40 text-base max-w-md mx-auto mb-10">
          Every Drinko you buy supports a community, funds a meal, or puts clean
          water on a table. Join us.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-bold text-sm tracking-wide hover:bg-red-500 transition-colors shadow-[0_0_40px_rgba(220,38,38,0.4)]"
          >
            Explore Our Products
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
            href="/sustainability"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/70 font-semibold text-sm hover:text-white hover:bg-white/8 transition-all"
          >
            Our Sustainability Pledge
          </Link>
        </div>
      </div>
    </div>
  );
}
