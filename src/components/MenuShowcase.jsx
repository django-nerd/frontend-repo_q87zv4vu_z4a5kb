import { Coffee, Croissant, Flame } from "lucide-react";

const items = [
  {
    icon: Coffee,
    name: "Espresso",
    desc: "Double shot, velvety crema",
    price: "$3.50",
  },
  {
    icon: Flame,
    name: "Caramel Latte",
    desc: "House caramel, sea salt",
    price: "$5.20",
  },
  {
    icon: Croissant,
    name: "Butter Croissant",
    desc: "Flaky, baked fresh daily",
    price: "$3.80",
  },
];

export default function MenuShowcase() {
  return (
    <section id="menu" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Customer favorites</h2>
            <p className="mt-2 text-neutral-600">A taste of what we serve all day, every day.</p>
          </div>
          <a href="#order" className="hidden sm:inline-flex rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800">Order ahead</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, name, desc, price }) => (
            <div key={name} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-amber-100 text-amber-700 grid place-items-center">
                <Icon />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-neutral-500">{desc}</p>
                </div>
                <span className="font-medium">{price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
