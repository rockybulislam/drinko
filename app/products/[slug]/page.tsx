import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../../lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Drinko`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const related = products.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  );
  const others = products.filter(
    (p) => p.slug !== product.slug && p.category !== product.category,
  );
  const suggestions = [...related, ...others].slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div
        className={`relative pt-36 pb-24 px-5 sm:px-8 bg-linear-to-b ${product.color} overflow-hidden`}
      >
        {/* Glow blob */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full blur-[120px] opacity-30"
          style={{ background: product.glowColor }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-10 text-xs text-white/35 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className={product.textColor}>{product.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-end">
            {/* Left — text */}
            <div className="flex-1">
              {product.badge && (
                <span
                  className={`inline-block mb-4 text-[10px] font-bold uppercase tracking-widest ${product.textColor} border ${product.borderColor} bg-black/30 px-3 py-1 rounded-full`}
                >
                  {product.badge}
                </span>
              )}
              <p
                className={`text-xs uppercase tracking-[0.2em] font-semibold ${product.textColor} mb-3`}
              >
                {product.category}
              </p>
              <h1 className="text-5xl sm:text-6xl font-black leading-none tracking-tight text-white mb-3">
                {product.name}
              </h1>
              <p className={`text-xl font-medium ${product.textColor} mb-6`}>
                {product.tagline}
              </p>
              <p className="text-white/60 text-base leading-relaxed max-w-xl">
                {product.longDescription}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/where-to-buy"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-bold text-sm tracking-wide hover:bg-red-500 transition-colors shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                >
                  Find Near You
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
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/70 font-semibold text-sm hover:text-white hover:bg-white/8 transition-all"
                >
                  ← All Products
                </Link>
              </div>
            </div>

            {/* Centre — product image (desktop) */}
            {product.image && product.imageW && product.imageH && (
              <div className="hidden lg:flex w-56 shrink-0 items-center justify-center relative">
                {/* Glow disc */}
                <div
                  className="absolute w-48 h-48 rounded-full blur-3xl opacity-45"
                  style={{ background: product.glowColor }}
                />
                <Image
                  src={product.image}
                  alt={product.name}
                  width={product.imageW}
                  height={product.imageH}
                  className="relative z-10 object-contain"
                  style={{
                    maxHeight:
                      product.imageH > product.imageW ? "320px" : "200px",
                    width: "auto",
                    height: "auto",
                    animation: "float 4s ease-in-out infinite",
                    filter: `drop-shadow(0 20px 40px ${product.glowColor})`,
                  }}
                  priority
                />
              </div>
            )}

            {/* Mobile — product image */}
            {product.image && product.imageW && product.imageH && (
              <div className="lg:hidden flex items-center justify-center w-full py-6 relative">
                <div
                  className="absolute w-48 h-48 rounded-full blur-3xl opacity-40"
                  style={{ background: product.glowColor }}
                />
                <Image
                  src={product.image}
                  alt={product.name}
                  width={product.imageW}
                  height={product.imageH}
                  className="relative z-10 object-contain"
                  style={{
                    maxHeight:
                      product.imageH > product.imageW ? "220px" : "150px",
                    width: "auto",
                    height: "auto",
                    animation: "float 4s ease-in-out infinite",
                    filter: `drop-shadow(0 12px 24px ${product.glowColor})`,
                  }}
                />
              </div>
            )}

            {/* Right — stats panel */}
            <div
              className={`w-full lg:w-72 shrink-0 rounded-2xl border ${product.borderColor} bg-black/40 backdrop-blur-xl p-6`}
            >
              <p className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-5">
                Nutrition Facts
              </p>
              <div className="space-y-3">
                {[
                  { label: "Volume", value: product.volume },
                  { label: "Calories", value: product.calories },
                  { label: "Sugar", value: product.sugar },
                  {
                    label: "Caffeine",
                    value:
                      product.caffeine === "0mg" ? "None" : product.caffeine,
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-2.5 border-b border-white/6 last:border-0"
                  >
                    <span className="text-sm text-white/45">{row.label}</span>
                    <span className={`text-sm font-bold ${product.textColor}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Category badge */}
              <div
                className={`mt-6 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/4 border ${product.borderColor}`}
              >
                <svg
                  className={`w-4 h-4 ${product.textColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="text-xs text-white/40 font-medium capitalize">
                  Drinko {product.category} range
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related / suggested products */}
      {suggestions.length > 0 && (
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
          <h2 className="text-2xl font-black text-white mb-2">
            You might also like
          </h2>
          <p className="text-white/35 text-sm mb-8">
            More from the Drinko collection
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {suggestions.map((s) => (
              <Link
                key={s.slug}
                href={`/products/${s.slug}`}
                className={`group flex flex-col rounded-2xl border ${s.borderColor} bg-linear-to-b ${s.color} p-6 transition-all duration-300 hover:-translate-y-1`}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 8px 30px ${s.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <span
                  className={`text-[10px] uppercase tracking-widest font-semibold ${s.textColor} mb-2`}
                >
                  {s.category}
                </span>
                <h3 className="text-lg font-black text-white mb-1">{s.name}</h3>
                <p className={`text-xs ${s.textColor} mb-3`}>{s.tagline}</p>
                <span
                  className={`mt-auto text-xs font-bold ${s.textColor} flex items-center gap-1 group-hover:gap-2 transition-all`}
                >
                  View
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
