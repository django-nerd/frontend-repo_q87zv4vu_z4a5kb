export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">More than just coffee</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              We started Brew & Co. with a simple belief: great coffee brings people together. Our beans are sourced from small farms and roasted locally in small batches to highlight their unique character.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              The space is designed to be calm, airy, and welcoming—perfect for a quiet morning, a casual meeting, or a creative sprint. Come by and make it your third place.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop"
                alt="Cozy coffee shop interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
