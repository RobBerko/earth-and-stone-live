/*
  DESIGN: "New England Craftsman" — Warm Organic Naturalism
  Navbar: Clean, professional. Logo left, nav links right. Sticky with backdrop blur.
*/
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import LogoDark from "./LogoDark";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-18 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center shrink-0"
        >
          <LogoDark className="h-14 md:h-16 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm font-medium tracking-wide text-foreground/70 hover:text-forest transition-colors duration-200 uppercase"
              style={{ fontFamily: "'Source Sans 3', sans-serif", letterSpacing: "0.08em" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:2034599642"
            className="flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest/80 transition-colors"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            <Phone className="w-4 h-4" />
            (203) 459-9642
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border/50 shadow-lg">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-base font-medium text-foreground/70 hover:text-forest transition-colors py-2 uppercase tracking-wide"
                style={{ fontFamily: "'Source Sans 3', sans-serif", letterSpacing: "0.06em" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:2034599642"
              className="flex items-center gap-2 text-base font-semibold text-forest py-2"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              (203) 459-9642
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
