"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

// ─── Particle types ──────────────────────────────────────────────────────────
type ParticleKind = "ember" | "spark" | "ash";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decay: number;
  hue: number; // 0-60 range for red→orange→yellow
  saturation: number;
  lightness: number;
  kind: ParticleKind;
  wobble: number; // horizontal wobble frequency
  wobbleAmp: number;
  wobbleOffset: number;
  age: number;
}

const MAX_PARTICLES = 130;
const SPAWN_PER_FRAME_DESK = 1.4;
const SPAWN_PER_FRAME_MOB = 0.7;

function createParticle(w: number, h: number): Particle {
  const roll = Math.random();
  let kind: ParticleKind;
  if (roll < 0.55) kind = "ember";
  else if (roll < 0.82) kind = "ash";
  else kind = "spark";

  const x = w * 0.35 + Math.random() * w * 0.3; // loose centre band
  const y = h + Math.random() * 60;

  if (kind === "ember") {
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 0.7,
      vy: -(1.2 + Math.random() * 2.2),
      radius: 1.5 + Math.random() * 2.5,
      alpha: 0.55 + Math.random() * 0.45,
      decay: 0.004 + Math.random() * 0.006,
      hue: Math.random() * 40, // deep red → orange
      saturation: 90 + Math.random() * 10,
      lightness: 50 + Math.random() * 20,
      kind,
      wobble: 0.02 + Math.random() * 0.04,
      wobbleAmp: 0.4 + Math.random() * 0.8,
      wobbleOffset: Math.random() * Math.PI * 2,
      age: 0,
    };
  } else if (kind === "spark") {
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 1.8,
      vy: -(2.8 + Math.random() * 3.5),
      radius: 0.8 + Math.random() * 1.2,
      alpha: 0.8 + Math.random() * 0.2,
      decay: 0.012 + Math.random() * 0.012,
      hue: 30 + Math.random() * 30, // amber → yellow
      saturation: 100,
      lightness: 65 + Math.random() * 20,
      kind,
      wobble: 0.07 + Math.random() * 0.05,
      wobbleAmp: 0.5 + Math.random() * 1.0,
      wobbleOffset: Math.random() * Math.PI * 2,
      age: 0,
    };
  } else {
    // ash — slow, pale, large
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -(0.4 + Math.random() * 1.0),
      radius: 3 + Math.random() * 5,
      alpha: 0.12 + Math.random() * 0.18,
      decay: 0.0015 + Math.random() * 0.003,
      hue: 10 + Math.random() * 25,
      saturation: 40 + Math.random() * 30,
      lightness: 35 + Math.random() * 20,
      kind,
      wobble: 0.015 + Math.random() * 0.025,
      wobbleAmp: 1.2 + Math.random() * 2.0,
      wobbleOffset: Math.random() * Math.PI * 2,
      age: 0,
    };
  }
}

/** Seed particles at varied life stages so canvas isn't empty on first render */
function seedParticles(w: number, h: number, count: number): Particle[] {
  return Array.from({ length: count }, () => {
    const p = createParticle(w, h);
    // Place them randomly up the canvas
    const lifeRatio = Math.random();
    p.y = h - lifeRatio * (h + 120);
    p.alpha *= 1 - lifeRatio * 0.8;
    p.age = lifeRatio * 200;
    return p;
  });
}

export default function EmberSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const spawnAccRef = useRef(0);

  // ─── Canvas particle loop ─────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // Re-seed on resize so canvas is never blank
      if (particlesRef.current.length === 0) {
        particlesRef.current = seedParticles(canvas.width, canvas.height, 70);
      }
    }

    resize();
    if (particlesRef.current.length === 0) {
      particlesRef.current = seedParticles(canvas.width, canvas.height, 70);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const isMobile = window.innerWidth < 768;
    const spawnRate = isMobile ? SPAWN_PER_FRAME_MOB : SPAWN_PER_FRAME_DESK;

    function tick() {
      if (!canvas || !ctx) return;
      const w = canvas.width;
      const h = canvas.height;

      // Semi-transparent fade — creates the trailing glow effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.13)";
      ctx.fillRect(0, 0, w, h);

      // Spawn new particles
      spawnAccRef.current += spawnRate;
      while (
        spawnAccRef.current >= 1 &&
        particlesRef.current.length < MAX_PARTICLES
      ) {
        particlesRef.current.push(createParticle(w, h));
        spawnAccRef.current -= 1;
      }

      // Update + draw
      particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0.01);

      for (const p of particlesRef.current) {
        p.age++;
        // Wobble horizontal drift
        p.x += p.vx + Math.sin(p.age * p.wobble + p.wobbleOffset) * p.wobbleAmp;
        p.y += p.vy;
        p.alpha -= p.decay;

        // Gravity fade as they travel up — sparks decelerate
        if (p.kind === "spark") p.vy *= 0.994;
        if (p.kind === "ash") p.vy *= 0.998;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);

        if (p.kind !== "ash") {
          ctx.shadowBlur = p.kind === "spark" ? 8 : 14;
          ctx.shadowColor = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, 0.9)`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${p.hue}, ${p.saturation}%, ${p.lightness}%)`;
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  // ─── GSAP text reveal on scroll into view ─────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveals = section.querySelectorAll<HTMLElement>("[data-reveal]");
    // Set initial state
    gsap.set(reveals, { opacity: 0, y: 48 });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to(reveals, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.14,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Canvas fills the section */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Subtle red heat glow at the bottom — fire source */}
      <div
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(220,38,38,0.55) 0%, rgba(180,20,20,0.25) 40%, transparent 70%)",
        }}
      />

      {/* Dark vignette so text is always readable */}
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.72)_100%)] pointer-events-none" />

      {/* Centered text */}
      <div className="relative z-10 text-center px-6 sm:px-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          data-reveal
          className="inline-flex items-center gap-2 mb-6 text-xs font-bold tracking-[0.3em] uppercase text-orange-400/80"
        >
          <span className="w-8 h-px bg-orange-500/60" />
          Born from Passion
          <span className="w-8 h-px bg-orange-500/60" />
        </p>

        {/* Headline */}
        <h2
          data-reveal
          className="font-black text-white leading-none tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
        >
          FUEL
          <br />
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2px rgba(220,38,38,0.85)",
            }}
          >
            YOUR
          </span>
          <br />
          <span className="text-red-500">FIRE.</span>
        </h2>

        {/* Body */}
        <p
          data-reveal
          className="mt-8 text-white/55 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
        >
          Every drop of Drinko carries the energy of people who refuse to settle
          — athletes, creators, dreamers, and doers. We don&apos;t make drinks.
          We ignite moments.
        </p>

        {/* CTA row */}
        <div
          data-reveal
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-bold text-sm tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(220,38,38,0.5)]"
          >
            <span className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
            <span className="relative">Explore Products</span>
            <svg
              className="relative w-4 h-4 transition-transform group-hover:translate-x-1"
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white/80 font-semibold text-sm tracking-wide hover:bg-white/8 hover:border-white/40 hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
