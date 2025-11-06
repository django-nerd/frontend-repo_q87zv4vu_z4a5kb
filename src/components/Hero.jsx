import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#f59e0b_0%,transparent_35%),radial-gradient(circle_at_80%_0%,#6b7280_0%,transparent_25%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-amber-100 text-amber-800">Locally Roasted • Ethically Sourced</p>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
              Coffee crafted for slow mornings and bold ideas
            </h1>
            <p className="mt-5 text-neutral-600 text-lg max-w-prose">
              Step into a space where the espresso is rich, the pastries are warm, and the vibe is modern. Order ahead or stay awhile.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#order" className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-amber-700 transition">
                Order Now <ArrowRight size={16} />
              </a>
              <a href="#menu" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium hover:border-neutral-400 hover:bg-neutral-50 transition">
                Explore Menu
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop"
                alt="Pouring latte art"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 ring-1 ring-black/5">
              <p className="text-sm font-semibold">Signature Latte</p>
              <p className="text-xs text-neutral-500">Oat milk • House syrup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
