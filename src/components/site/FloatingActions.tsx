import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Instagram, Linkedin, MessageCircle, ArrowUp, Plus } from "lucide-react";

const PHONE = "+917083550101";
const WHATSAPP = "917083550101";
const EMAIL = "solutions@vamanainsurance.in";
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
  const [isOpen, setIsOpen] = useState(false);
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
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    if (isOpen) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  const Btn = ({ a, i }: { a: Action; i: number }) => {
    const Icon = a.icon;
    const delay = isOpen ? (actions.length - i - 1) * 50 : i * 20;

    return (
      <div className="relative pointer-events-auto">
        <a
          href={a.href}
          target={a.external ? "_blank" : undefined}
          rel={a.external ? "noopener noreferrer" : undefined}
          aria-label={a.label}
          onClick={() => setIsOpen(false)}
          className={`group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] ring-1 ring-white/20 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-110 hover:-translate-y-1 ${a.bg} ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-75 pointer-events-none'}`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          {a.pulse && (
            <span className="absolute inset-0 rounded-full bg-current opacity-40 animate-ping" />
          )}
          <Icon className="relative h-5 w-5" />
          {/* Tooltip (desktop) */}
          <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg bg-primary/95 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white opacity-0 translate-x-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)] ring-1 ring-white/10 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block">
            {a.label}
          </span>
        </a>
      </div>
    );
  };

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-[9998] bg-primary/30 backdrop-blur-md transition-opacity duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      <div ref={ref} className="fixed right-6 bottom-6 sm:right-8 sm:bottom-8 z-[9999] flex flex-col items-end gap-3.5">
        
        {/* Expanded Actions Stack */}
        <div className="flex flex-col items-end gap-3.5 relative pointer-events-none">
           {/* Soft radial glow behind menu when expanded */}
           <div className={`absolute inset-0 bg-gold/15 blur-[60px] rounded-full transition-opacity duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

           {actions.map((a, i) => <Btn key={a.label} a={a} i={i} />)}
        </div>

        <div className="flex items-center gap-4 mt-2">
          {showTop && (
            <button
              aria-label="Scroll to top"
              onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false); }}
              className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-primary shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-border transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:bg-white hover:text-gold hover:shadow-[0_12px_30px_rgba(212,175,55,0.2)] hover:ring-gold/30 ${isOpen ? 'opacity-0 translate-y-4 pointer-events-none scale-75' : 'opacity-100 translate-y-0 scale-100'}`}
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          )}

          <button
            aria-label={isOpen ? "Close menu" : "Open contact menu"}
            onClick={() => setIsOpen((v) => !v)}
            className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground shadow-[0_10px_40px_rgba(212,175,55,0.5)] ring-2 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "rotate-[135deg] scale-105 ring-white/50" : "rotate-0 scale-100 hover:scale-[1.08] hover:-translate-y-1 ring-white/20 hover:ring-white/50"}`}
          >
            <span className="absolute inset-0 rounded-full bg-gold/40 blur-xl -z-10 animate-pulse" />
            <Plus className="h-6 w-6 relative z-10 transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
          </button>
        </div>
      </div>
    </>
  );
};
