import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Research } from "./components/Research";
import { Publications } from "./components/Publications";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent1 selection:text-white bg-brand-bg text-brand-accent2">
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Awards />
      </main>
      <Contact />
    </div>
  );
}
