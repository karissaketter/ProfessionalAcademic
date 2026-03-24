"use client";
import { Colours } from '../Colours';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['About', 'Research', 'Publications', 'Awards', 'Contact'];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center md:justify-end md:right-6 md:left-auto px-4 md:px-0">
      <nav
        className="flex gap-3 md:gap-6 px-4 md:px-6 py-3 rounded-full"
        style={{ backgroundColor: Colours.colour1 }}
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-xs md:text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-50"
            style={{ color: "#1C1C1A" }}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;