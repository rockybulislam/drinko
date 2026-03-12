"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { products, categories, type CategoryKey } from "../lib/products";

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-2 rounded-xl bg-white/5 border border-white/8">
      <span className="text-[10px] uppercase tracking-widest text-white/35 font-medium">
        {label}
      </span>
      <span className="text-sm font-bold text-white mt-0.5">{value}</span>
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const gridRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Animate hero in on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      );
    });
    return () => ctx.revert();
  }, []);

  // Animate cards when filter changes
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".product-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 28, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.07,
      },
    );
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero banner */}
      <div
        ref={heroRef}
        className="relative pt-36 pb-20 px-5 sm:px-8 text-center overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 [background:radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(220,38,38,0.18),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-red-700/40 to-transparent" />

        <p className="inline-block mb-4 text-red-400 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] border border-red-500/30 bg-red-500/8 px-4 py-1.5 rounded-full">
          Our Range
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
          Every Sip,
          <br />
          <span className="text-red-500">Crafted for You.</span>
        </h1>
        <p className="mt-6 text-white/55 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          From bold colas to pure waters and high-octane energy — explore the
          full Drinko collection.
        </p>
      </div>

      {/* Filter bar */}
      <div className="sticky top-18 z-40 bg-black/80 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                  : "text-white/50 hover:text-white hover:bg-white/8"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto shrink-0 text-xs text-white/25 font-medium">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className={`product-card group relative flex flex-col rounded-2xl border ${product.borderColor} bg-linear-to-b ${product.color} overflow-hidden transition-all duration-300 hover:-translate-y-1.5`}
              style={{
                boxShadow: `0 0 0 0 ${product.glowColor}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 8px 40px ${product.glowColor}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 0 0 ${product.glowColor}`;
              }}
            >
              {/* Badge */}
              {product.badge && (
                <span
                  className={`absolute top-4 right-4 z-20 text-[10px] font-bold uppercase tracking-widest ${product.textColor} border ${product.borderColor} bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full`}
                >
                  {product.badge}
                </span>
              )}

              {/* Image stage — centered bottle with color glow disc */}
              <div className="relative flex items-center justify-center h-52 overflow-hidden shrink-0">
                {product.image && (
                  <div
                    className="absolute w-52 h-52 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"
                    style={{ background: product.glowColor }}
                  />
                )}
                {product.image && product.imageW && product.imageH && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={product.imageW}
                    height={product.imageH}
                    className="relative z-10"
                    style={{
                      maxHeight:
                        product.imageH > product.imageW ? "190px" : "150px",
                      width: "auto",
                      height: "auto",
                      animation: "float 4s ease-in-out infinite",
                      filter: `drop-shadow(0 10px 22px ${product.glowColor})`,
                    }}
                  />
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-7 pt-4">
                {/* Category chip */}
                <span
                  className={`text-[10px] uppercase tracking-[0.18em] font-semibold ${product.textColor} mb-4`}
                >
                  {product.category}
                </span>

                <h2 className="text-2xl font-black text-white leading-tight mb-2">
                  {product.name}
                </h2>
                <p className={`text-sm font-medium ${product.textColor} mb-3`}>
                  {product.tagline}
                </p>
                <p className="text-sm text-white/50 leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mt-6">
                  <StatPill label="Calories" value={product.calories} />
                  <StatPill label="Sugar" value={product.sugar} />
                  <StatPill label="Volume" value={product.volume} />
                </div>

                {/* CTA row */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-white/30 font-medium">
                    {product.caffeine !== "0mg"
                      ? `${product.caffeine} caffeine`
                      : "Caffeine free"}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-sm font-bold ${product.textColor} group-hover:gap-2.5 transition-all duration-200`}
                  >
                    View Details
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
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA banner */}
      <div className="border-t border-white/8 py-20 px-5 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
          Can&apos;t decide? <span className="text-red-500">Try them all.</span>
        </h2>
        <p className="text-white/45 text-base max-w-md mx-auto mb-8">
          Find a Drinko retailer near you and experience the full range in
          person.
        </p>
        <Link
          href="/where-to-buy"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-bold text-sm tracking-wide hover:bg-red-500 transition-colors shadow-[0_0_40px_rgba(220,38,38,0.4)]"
        >
          Where to Buy
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
      </div>
    </div>
  );
}
