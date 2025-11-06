import { ShoppingBag, Coffee, Menu as MenuIcon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="grid place-items-center h-9 w-9 rounded-full bg-amber-100 text-amber-700 group-hover:scale-105 transition">
              <Coffee size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">Brew & Co.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-sm hover:text-amber-700 transition">Menu</a>
            <a href="#about" className="text-sm hover:text-amber-700 transition">Our Story</a>
            <a href="#contact" className="text-sm hover:text-amber-700 transition">Contact</a>
            <a
              href="#order"
              className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-amber-700 transition"
            >
              <ShoppingBag size={16} /> Order Now
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-200/60 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            <a href="#menu" className="block px-2 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">Menu</a>
            <a href="#about" className="block px-2 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">Our Story</a>
            <a href="#contact" className="block px-2 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">Contact</a>
            <a href="#order" className="block px-2 py-2 rounded-md bg-amber-600 text-white text-center">Order Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
