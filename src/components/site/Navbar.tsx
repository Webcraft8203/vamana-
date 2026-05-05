import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/vamana-logo.png";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Why Vamana", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200" : "bg-white border-b border-gray-100"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Vamana Insurance Broking" className="h-9 sm:h-10 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+910000000000" className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900">
            <Phone className="h-4 w-4 text-gold" /> +91 00000 00000
          </a>
          <Button variant="gold" size="sm" asChild className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <a href="#contact">Get Free Quote</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-md text-gray-900"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-gray-700 border-b border-gray-100 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <Button variant="gold" className="mt-4 w-full" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Get Free Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
