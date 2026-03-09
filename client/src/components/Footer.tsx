/*
  DESIGN: "New England Craftsman" — Warm Organic Naturalism
  Footer: Dark background with white SVG logo, contact info, and links. No email.
*/
import { Phone, MapPin, Facebook } from "lucide-react";
import LogoWhite from "./LogoWhite";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white/80">
      <div className="container py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo & Tagline */}
          <div>
            <LogoWhite className="h-16 w-auto mb-4" />
            <p
              className="text-white/60 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              We specialize in the design and build of creative exteriors.
              Serving Trumbull, CT and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:2034599642"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                <Phone className="w-4 h-4 shrink-0" />
                (203) 459-9642
              </a>
              <div
                className="flex items-center gap-3 text-sm text-white/60"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                <MapPin className="w-4 h-4 shrink-0" />
                Trumbull, CT
              </div>
              <a
                href="https://www.facebook.com/EarthStoneScapes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                <Facebook className="w-4 h-4 shrink-0" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p
            className="text-xs text-white/40"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            &copy; {currentYear} Earth & Stone Scapes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
