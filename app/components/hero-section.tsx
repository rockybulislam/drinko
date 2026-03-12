"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const WORDS = [
  "Moment.",
  "Thirst.",
  "Vibe.",
  "Energy.",
  "Rush.",
  "Sip.",
  "Journey.",
  "Joy.",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [displayedWord, setDisplayedWord] = useState("Moment.");
  const wordIndexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typewriter cycling effect
  useEffect(() => {
    let cancelled = false;

    const sleep = (ms: number) =>
      new Promise<void>((res) => {
        timerRef.current = setTimeout(res, ms);
      });

    async function cycle() {
      // Wait for the GSAP reveal to finish before starting
      await sleep(3400);

      while (!cancelled) {
        const current = WORDS[wordIndexRef.current];

        // Delete characters one by one
        for (let i = current.length; i >= 0; i--) {
          if (cancelled) return;
          setDisplayedWord(current.slice(0, i));
          await sleep(52);
        }

        await sleep(280);

        wordIndexRef.current = (wordIndexRef.current + 1) % WORDS.length;
        const next = WORDS[wordIndexRef.current];

        // Type characters one by one
        for (let i = 1; i <= next.length; i++) {
          if (cancelled) return;
          setDisplayedWord(next.slice(0, i));
          await sleep(88);
        }

        // Hold the completed word
        await sleep(2600);
      }
    }

    cycle();

    return () => {
      cancelled = true;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in video + overlay
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 2, ease: "power2.out" },
      );

      // Staggered text reveal
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 24, letterSpacing: "0.4em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.25em",
          duration: 0.9,
          delay: 0.6,
        },
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 48, clipPath: "inset(100% 0% 0% 0%)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
          "-=0.4",
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2",
        );

      // Looping scroll bounce on indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "sine.inOut",
        delay: 2.5,
      });

      // Cinematic multi-point drift — smooth pan between 4 corners, no reversal snap
      const drift = gsap.timeline({ repeat: -1, delay: 2 });
      drift
        .to(videoRef.current, {
          x: "-2%",
          y: "-1.5%",
          scale: 1.07,
          duration: 14,
          ease: "power1.inOut",
        })
        .to(videoRef.current, {
          x: "2%",
          y: "-2%",
          scale: 1.1,
          duration: 14,
          ease: "power1.inOut",
        })
        .to(videoRef.current, {
          x: "1.5%",
          y: "1.5%",
          scale: 1.07,
          duration: 14,
          ease: "power1.inOut",
        })
        .to(videoRef.current, {
          x: "0%",
          y: "0%",
          scale: 1,
          duration: 14,
          ease: "power1.inOut",
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-150 overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        src="/4114180-hd_1920_1080_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Layered overlays for depth */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-linear-to-b from-black/85 via-black/60 to-black/90"
      />
      {/* Red color wash — brand accent */}
      <div className="absolute inset-0 bg-linear-to-tr from-red-900/30 via-transparent to-transparent" />

      {/* Vignette ring */}
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.88)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 max-w-5xl mx-auto">
        {/* Pill badge */}
        <div
          ref={taglineRef}
          className="opacity-0 mb-7 flex items-center gap-2.5 px-4 py-2 rounded-full border border-red-500/25 bg-red-500/8 backdrop-blur-sm"
        >
          {/* Pulsing dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="text-red-400 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
            Refreshing the World, One Sip at a Time
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="opacity-0 text-white font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight drop-shadow-2xl"
          style={{ textShadow: "0 4px 40px rgba(0,0,0,0.6)" }}
        >
          Taste the
          <br />
          <span className="inline-flex items-baseline gap-0.5">
            <span className="text-red-500 min-w-[2ch]">{displayedWord}</span>
            <span
              className="inline-block w-0.75 sm:w-1 self-stretch bg-red-500 rounded-sm"
              style={{
                animation: "blink 1.1s step-start infinite",
              }}
            />
          </span>
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className="opacity-0 mt-6 text-gray-300 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed"
        >
          From ice-cold classics to sugar-free refreshment and pure natural
          water — every sip is crafted to make your moment unforgettable.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="opacity-0 mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/products"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-bold text-sm tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(220,38,38,0.45)]"
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-sm tracking-wide backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Bottom edge fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />

      {/* Bottom edge fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium">
          Scroll
        </span>
        <svg
          className="w-5 h-5 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
