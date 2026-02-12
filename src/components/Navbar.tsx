import { useState } from "react";
import { Menu, X } from "lucide-react";
import mpgLogo from "@/assets/mpg-logo.jpg";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={mpgLogo} alt="MPG Pipeline Contractors" className="h-10 md:h-12 rounded" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors"
          >
            Request a Bid
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded"
            >
              Request a Bid
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
