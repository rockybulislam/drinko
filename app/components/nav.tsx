"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const products = [
  { name: "Classic Coke", href: "/products/classic-coke" },
  { name: "Sugar Free Coke", href: "/products/sugar-free-coke" },
  { name: "Still Water", href: "/products/still-water" },
  { name: "Sparkling Water", href: "/products/sparkling-water" },
  { name: "Energy Drink", href: "/products/energy-drink" },
  { name: "Fruit Juice", href: "/products/fruit-juice" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Our Story", href: "/our-story" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Where to Buy", href: "/where-to-buy" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      {/* Red radial glow — only on home page */}
      {isHome && (
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(220,38,38,0.22), transparent)",
            transition: "opacity 0.5s",
            opacity: scrolled ? 0.5 : 1,
          }}
        />
      )}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-black tracking-tight text-white group-hover:text-red-400 transition-colors duration-300">
              DRINK
            </span>
            <span className="text-2xl font-black tracking-tight text-red-500">
              O
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="relative text-white/70 hover:text-white font-medium transition-colors duration-200 text-sm tracking-wide after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link
                href="/products"
                className="relative text-white/70 hover:text-white font-medium transition-colors duration-200 text-sm tracking-wide flex items-center gap-1 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                Products
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-60 transition-all duration-300 ${
                  productsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {/* Invisible bridge fills the gap so mouse doesn't leave the hover zone */}
                <div className="h-5" />
                {/* Caret */}
                <div className="absolute -top-1.75 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-zinc-900 border-l border-t border-white/10" />
                <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                  <div className="px-3 pt-4 pb-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25 px-2 mb-2">
                      Our Range
                    </p>
                    {products.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="group/item flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-white/65 hover:text-white hover:bg-white/[0.07] transition-all duration-200"
                      >
                        <span>{p.name}</span>
                        <svg
                          className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-white/[0.07] mx-3 mb-3 pt-2">
                    <Link
                      href="/products"
                      className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200"
                    >
                      View All Products
                      <svg
                        className="w-3.5 h-3.5"
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
              </div>
            </div>

            {[
              { name: "Our Story", href: "/our-story" },
              { name: "Sustainability", href: "/sustainability" },
              { name: "Where to Buy", href: "/where-to-buy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white/70 hover:text-white font-medium transition-colors duration-200 text-sm tracking-wide after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/40 bg-red-600/10 text-red-400 text-sm font-semibold hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
            >
              Contact Us
            </Link>
            <button
              className="md:hidden p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-130 opacity-100 border-t border-white/8"
            : "max-h-0 opacity-0"
        } bg-black/90 backdrop-blur-xl`}
      >
        <div className="px-5 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-white/65 hover:text-white hover:bg-white/[0.07] font-medium text-sm tracking-wide transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
              <svg
                className="w-4 h-4 text-white/25"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              className="flex items-center justify-center px-4 py-3 rounded-full bg-red-600 text-white font-bold text-sm tracking-wide hover:bg-red-500 transition-colors shadow-[0_0_30px_rgba(220,38,38,0.35)]"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
