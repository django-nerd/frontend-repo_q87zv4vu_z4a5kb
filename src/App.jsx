import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuShowcase from "./components/MenuShowcase";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-inter bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <MenuShowcase />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
