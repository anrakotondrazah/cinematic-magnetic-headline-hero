import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div
      className="min-h-screen bg-ink text-cream tracking-[-0.015em]"
      style={{ fontFamily: "'Inter Tight', sans-serif" }}
    >
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
