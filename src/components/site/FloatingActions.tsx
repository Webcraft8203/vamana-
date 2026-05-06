import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Instagram, Linkedin, MessageCircle, ArrowUp, Plus, X } from "lucide-react";

const PHONE = "+910000000000";
const WHATSAPP = "910000000000";
const EMAIL = "info@vamanainsurance.com";
const INSTAGRAM = "https://instagram.com/";
const LINKEDIN = "https://linkedin.com/";

type Action = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  bg: string;
  external?: boolean;
  pulse?: boolean;
};

const actions: Action[] = [
  { label: "WhatsApp Us", href: `https://wa.me/${WHATSAPP}`, icon: MessageCircle, bg: "bg-[#25D366] hover:shadow-[0_8px_24px_-4px_rgba(37,211,102,0.55)]", external: true, pulse: true },
  { label: "Call Now", href: `tel:${PHONE}`, icon: Phone, bg: "bg-gradient-gold text-gold-foreground hover:shadow-[0_8px_24px_-4px_hsl(var(--gold)/0.6)]" },
  { label: "Email Us", href: `mailto:${EMAIL}`, icon: Mail, bg: "bg-primary hover:shadow-[0_8px_24px_-4px_hsl(var(--primary)/0.6)]" },
  { label: "Follow on Instagram", href: INSTAGRAM, icon: Instagram, bg: "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] hover:shadow-[0_8px_24px_-4px_rgba(214,41,118,0.5)]", external: true },
  { label: "Connect on LinkedIn", href: LINKEDIN, icon: Linkedin, bg: "bg-[#0A66C2] hover:shadow-[0_8px_24px_-4px_rgba(10,102,194,0.55)]", external: true },
];

export const FloatingActions = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpenMobile(false);
    };
    if (openMobile) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [openMobile]);

  const Btn = ({ a, i, mobile = false }: { a: Action; i: number; mobile?: boolean }) => {
    const Icon = a.icon;
    return (
      <a
        href={a.href}
        target={a.external ? "_blank" : undefined}
        rel={a.external ? "noopener noreferrer" : undefined}
        aria-label={a.label}
        onClick={() => setOpenMobile(false)}
        className={`group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${a.bg}`}
        style={mobile ? { transitionDelay: `${i * 40}ms` } : undefined}
      >
        {a.pulse && (
          <span className="absolute inset-0 rounded-full bg-current opacity-40 animate-ping" />
        )}
        <Icon className="relative h-5 w-5" />
        {/* Tooltip (desktop) */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white opacity-0 -translate-x-1 shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 hidden md:block">
          {a.label}
        </span>
      </a>
    );
  };

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm transition-opacity duration-300 ${openMobile ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpenMobile(false)}
      />

      <div ref={ref} className="fixed right-4 sm:right-6 bottom-6 z-50 flex flex-col items-end gap-3">
        {/* Scroll to top */}
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-primary shadow-lg ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:bg-white ${showTop ? "opacity-100" : "opacity-0 pointer-events-none translate-y-2"}`}
        >
          <ArrowUp className="h-5 w-5" />
        </button>

        {/* Desktop vertical stack */}
        <div className="hidden md:flex flex-col gap-3">
          {actions.map((a, i) => <Btn key={a.label} a={a} i={i} />)}
        </div>

        {/* Mobile FAB */}
        <div className="md:hidden flex flex-col items-end gap-3">
          <div className={`flex flex-col items-end gap-3 transition-all duration-300 ${openMobile ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
            {actions.map((a, i) => <Btn key={a.label} a={a} i={i} mobile />)}
            {showTop && (
              <button
                aria-label="Scroll to top"
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setOpenMobile(false); }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg ring-1 ring-border"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            )}
          </div>
          <button
            aria-label={openMobile ? "Close menu" : "Open contact menu"}
            onClick={() => setOpenMobile((v) => !v)}
            className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground shadow-xl ring-1 ring-white/30 transition-transform duration-300 ${openMobile ? "rotate-45 scale-105" : "hover:scale-110"}`}
          >
            <span className="absolute inset-0 rounded-full bg-gold/40 blur-xl -z-10 animate-pulse" />
            {openMobile ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </>
  );
};
