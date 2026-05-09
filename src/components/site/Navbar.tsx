import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Shield, FileCheck, Briefcase, Sparkles, BadgeCheck, Headset, Clock } from "lucide-react";
import logo from "@/assets/vamana-logo.png";
import { Button } from "@/components/ui/button";

const services = [
  { label: "Risk Management", desc: "Identify, assess & mitigate risks", href: "/services/risk-management", icon: Shield },
  { label: "Claims Management", desc: "Fast, honest claim settlement", href: "/services/claims-management", icon: FileCheck },
  { label: "Insurance Portfolio Management", desc: "Balanced life & non-life cover", href: "/services/insurance-portfolio-management", icon: Briefcase },
];

const links = [
  { label: "About", href: "/#about" },
  { label: "Why Vamana", href: "/#why" },
  { label: "Services", href: "/#services", dropdown: true },
  { label: "How it works", href: "/#how" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHashLink = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      setOpen(false);
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href.slice(1));
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(href.slice(1));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const announcements = [
    { icon: Sparkles, text: "New: Cyber Liability cover now available for SMEs" },
    { icon: BadgeCheck, text: "IRDAI licensed broker — 100% transparent advisory" },
    { icon: Headset, text: "Free 30-min consultation with a senior risk advisor" },
    { icon: Clock, text: "98% claim settlement success rate — lifetime support" },
    { icon: Sparkles, text: "Group health & corporate benefits — request a quote today" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200" : "bg-white border-b border-gray-100"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Link
          to="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 shrink-0"
          aria-label="Go to top"
        >
          <img src={logo} alt="Vamana Insurance Broking" className="h-9 sm:h-10 w-auto" />
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.label} className={l.dropdown ? "relative group" : ""}>
              {l.dropdown ? (
                <>
                  <button
                    onClick={(e) => handleHashLink(e, l.href)}
                    className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors py-2"
                  >
                    {l.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[320px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-[250ms] ease-out">
                    <div className="rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-100 ring-1 ring-black/5 overflow-hidden p-2">
                      {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.href}
                            to={s.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-gold/10 transition-colors group/item"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary group-hover/item:bg-primary group-hover/item:text-gold transition-colors">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-primary">{s.label}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={l.href}
                  onClick={(e) => handleHashLink(e, l.href)}
                  className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+910000000000" className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900">
            <Phone className="h-4 w-4 text-gold" /> +91 00000 00000
          </a>
          <Button variant="gold" size="sm" asChild className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <a href="/#contact" onClick={(e) => handleHashLink(e, "/#contact")}>Get Free Quote</a>
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
            {links.map((l) =>
              l.dropdown ? (
                <div key={l.label} className="border-b border-gray-100">
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-3 text-base font-semibold text-gray-700"
                  >
                    {l.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${mobileServicesOpen ? "grid-rows-[1fr] opacity-100 pb-3" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          onClick={() => setOpen(false)}
                          className="block py-2.5 pl-3 text-sm font-medium text-gray-600 hover:text-primary"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleHashLink(e, l.href)}
                  className="py-3 text-base font-semibold text-gray-700 border-b border-gray-100 last:border-0"
                >
                  {l.label}
                </a>
              ),
            )}
            <Button variant="gold" className="mt-4 w-full" asChild>
              <a href="/#contact" onClick={(e) => handleHashLink(e, "/#contact")}>Get Free Quote</a>
            </Button>
          </div>
        </div>
      )}
      {/* Announcement marquee (below navigation) */}
      <div className="bg-primary text-white overflow-hidden border-t border-white/10">
        <div className="relative flex">
          <div className="flex shrink-0 animate-marquee whitespace-nowrap py-2">
            {[...announcements, ...announcements].map((a, i) => {
              const Icon = a.icon;
              return (
                <span key={i} className="inline-flex items-center gap-2 px-8 text-xs sm:text-[13px] font-medium">
                  <Icon className="h-3.5 w-3.5 text-gold shrink-0" />
                  <span>{a.text}</span>
                  <span className="text-gold/60 ml-6" aria-hidden>•</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
