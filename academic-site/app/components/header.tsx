const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Publications', href: '#publications' },
  { name: 'Awards', href: '#awards' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 p-6 z-50">
      <nav>
        <ul className="flex flex-col sm:flex-row items-end sm:items-center gap-6 text-brand-accent2 bg-brand-bg/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-brand-accent1/20">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="hover:text-brand-accent3 transition-colors duration-300 font-medium text-sm tracking-wider uppercase"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
