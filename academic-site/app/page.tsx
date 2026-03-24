import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Awards />
      <Contact />
    </main>
  );
}