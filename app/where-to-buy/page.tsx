"use client";

import { useState } from "react";
import { storeData, Store } from "@/app/lib/store-data";

const REGION_ICONS: Record<string, string> = {
  Europe: "🌍",
  "North America": "🌎",
  Asia: "🌏",
  "Middle East": "🕌",
};

const TYPE_LABELS: Record<Store["type"], string> = {
  supermarket: "Supermarket",
  convenience: "Convenience Store",
  petrol: "Petrol Station",
  online: "Online Store",
};

const TYPE_COLORS: Record<Store["type"], string> = {
  supermarket: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  convenience: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  petrol: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  online: "bg-red-500/15 text-red-400 border-red-500/30",
};

type Step = 1 | 2 | 3 | 4;

export default function WhereToBuyPage() {
  const [step, setStep] = useState<Step>(1);
  const [region, setRegion] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);

  const regions = Object.keys(storeData);
  const countries = region ? Object.keys(storeData[region] ?? {}) : [];
  const cities =
    region && country ? Object.keys(storeData[region]?.[country] ?? {}) : [];
  const stores =
    region && country && city
      ? (storeData[region]?.[country]?.[city] ?? [])
      : [];

  function selectRegion(r: string) {
    setRegion(r);
    setCountry(null);
    setCity(null);
    setStep(2);
  }

  function selectCountry(c: string) {
    setCountry(c);
    setCity(null);
    setStep(3);
  }

  function selectCity(c: string) {
    setCity(c);
    setStep(4);
  }

  function goBack() {
    if (step === 2) {
      setRegion(null);
      setStep(1);
    } else if (step === 3) {
      setCountry(null);
      setStep(2);
    } else if (step === 4) {
      setCity(null);
      setStep(3);
    }
  }

  const stepLabels = ["Region", "Country", "City", "Stores"];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero */}
      <div className="relative pt-16 pb-12 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 700px 400px at 50% 0%, rgba(220,38,38,0.35) 0%, transparent 70%)",
            }}
          />
        </div>
        <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-500 mb-4">
          <span className="w-6 h-px bg-red-500" />
          Find Drinko Near You
          <span className="w-6 h-px bg-red-500" />
        </p>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4">
          Where to{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-400">
            Buy
          </span>
        </h1>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">
          Discover Drinko products at thousands of stores worldwide. Navigate by
          region, country, and city to find a location near you.
        </p>
      </div>

      {/* Step Progress */}
      <div className="max-w-3xl mx-auto px-6 mb-10">
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {stepLabels.map((label, i) => {
            const num = (i + 1) as Step;
            const isActive = step === num;
            const isDone = step > num;
            const isClickable = isDone;

            function jumpTo() {
              if (num === 1) {
                setRegion(null);
                setCountry(null);
                setCity(null);
                setStep(1);
              } else if (num === 2 && region) {
                setCountry(null);
                setCity(null);
                setStep(2);
              } else if (num === 3 && country) {
                setCity(null);
                setStep(3);
              }
            }

            return (
              <div key={label} className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={isClickable ? jumpTo : undefined}
                  className={[
                    "flex items-center gap-2 transition-all duration-300",
                    isClickable ? "cursor-pointer" : "cursor-default",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all duration-300",
                      isActive
                        ? "bg-red-600 border-red-500 text-white scale-110"
                        : isDone
                          ? "bg-red-600/30 border-red-500/60 text-red-400"
                          : "bg-white/5 border-white/15 text-white/30",
                    ].join(" ")}
                  >
                    {isDone ? (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      num
                    )}
                  </div>
                  <span
                    className={[
                      "hidden sm:block text-sm font-medium transition-colors duration-300",
                      isActive
                        ? "text-white"
                        : isDone
                          ? "text-white/60"
                          : "text-white/25",
                    ].join(" ")}
                  >
                    {label}
                  </span>
                </button>
                {i < stepLabels.length - 1 && (
                  <div
                    className={[
                      "w-8 sm:w-16 h-px transition-colors duration-300",
                      step > num ? "bg-red-600/50" : "bg-white/10",
                    ].join(" ")}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Breadcrumb trail */}
        {step > 1 && (
          <div className="mt-5 flex flex-wrap items-center gap-2 justify-center text-sm text-white/50">
            {region && (
              <span className="flex items-center gap-1">
                <span>{REGION_ICONS[region]}</span>
                <span>{region}</span>
              </span>
            )}
            {country && (
              <>
                <svg
                  className="w-3 h-3 text-white/25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                <span>{country}</span>
              </>
            )}
            {city && (
              <>
                <svg
                  className="w-3 h-3 text-white/25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                <span className="text-red-400 font-medium">{city}</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Panel */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Back button */}
        {step > 1 && (
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white mb-6 transition-colors duration-200 group"
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>
        )}

        {/* Step 1 — Region */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-6 text-white/80">
              Select your region
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => selectRegion(r)}
                  className="group relative flex flex-col items-center justify-center gap-3 bg-white/4 border border-white/8 rounded-2xl p-8 hover:bg-red-600/10 hover:border-red-500/40 transition-all duration-300"
                >
                  <span className="text-4xl">{REGION_ICONS[r]}</span>
                  <span className="text-sm font-semibold text-white/80 group-hover:text-white text-center transition-colors duration-200">
                    {r}
                  </span>
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(220,38,38,0.35)",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 — Country */}
        {step === 2 && region && (
          <div>
            <h2 className="text-xl font-bold mb-6 text-white/80">
              Select a country in <span className="text-red-400">{region}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {countries.map((c) => {
                const cityCount = Object.keys(storeData[region][c]).length;
                return (
                  <button
                    key={c}
                    onClick={() => selectCountry(c)}
                    className="group flex items-center justify-between bg-white/4 border border-white/8 rounded-xl px-5 py-4 hover:bg-red-600/10 hover:border-red-500/40 transition-all duration-300"
                  >
                    <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200">
                      {c}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/35 group-hover:text-white/50 transition-colors duration-200">
                        {cityCount} {cityCount === 1 ? "city" : "cities"}
                      </span>
                      <svg
                        className="w-4 h-4 text-white/25 group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3 — City */}
        {step === 3 && region && country && (
          <div>
            <h2 className="text-xl font-bold mb-6 text-white/80">
              Select a city in <span className="text-red-400">{country}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cities.map((c) => {
                const storeCount = storeData[region][country][c].length;
                return (
                  <button
                    key={c}
                    onClick={() => selectCity(c)}
                    className="group flex items-center justify-between bg-white/4 border border-white/8 rounded-xl px-5 py-4 hover:bg-red-600/10 hover:border-red-500/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white/40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200">
                        {c}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/35 group-hover:text-white/50 transition-colors duration-200">
                        {storeCount} {storeCount === 1 ? "store" : "stores"}
                      </span>
                      <svg
                        className="w-4 h-4 text-white/25 group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4 — Stores */}
        {step === 4 && stores.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white/80">
                Stores in <span className="text-red-400">{city}</span>
              </h2>
              <span className="text-sm text-white/35">
                {stores.length} {stores.length === 1 ? "location" : "locations"}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stores.map((store, i) => (
                <div
                  key={i}
                  className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:bg-white/5 hover:border-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {store.name}
                    </h3>
                    <span
                      className={[
                        "shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border",
                        TYPE_COLORS[store.type],
                      ].join(" ")}
                    >
                      {TYPE_LABELS[store.type]}
                    </span>
                  </div>
                  <div className="space-y-2.5 text-sm text-white/50">
                    <div className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0 text-white/30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                      <span>{store.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <svg
                        className="w-4 h-4 shrink-0 text-white/30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                      </svg>
                      <span>{store.phone}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <svg
                        className="w-4 h-4 shrink-0 text-white/30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>{store.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Start over */}
            <div className="mt-10 text-center">
              <button
                onClick={() => {
                  setRegion(null);
                  setCountry(null);
                  setCity(null);
                  setStep(1);
                }}
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-red-400 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
                </svg>
                Search another location
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
