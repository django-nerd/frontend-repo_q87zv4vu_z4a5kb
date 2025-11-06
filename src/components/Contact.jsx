export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Visit us</h2>
            <p className="mt-3 text-neutral-300">123 Roast Street, Bean District, Seattle WA</p>
            <p className="mt-1 text-neutral-400">Open daily • 7:00 AM – 7:00 PM</p>
            <div className="mt-6">
              <a href="#order" className="inline-flex rounded-full bg-amber-500 text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-amber-400">Order for pickup</a>
            </div>
          </div>
          <div>
            <div className="aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1400&auto=format&fit=crop"
                alt="Coffee and pastries"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-neutral-400">© {new Date().getFullYear()} Brew & Co. All rights reserved.</p>
      </div>
    </section>
  );
}
