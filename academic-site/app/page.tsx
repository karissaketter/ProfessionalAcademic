import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Research from '@/app/components/Research';
import Publications from '@/app/components/Publications';
import Awards from '@/app/components/Awards';
import Contact from '@/app/components/Contact';
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