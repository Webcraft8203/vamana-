import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, Eye, Headphones, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Sections";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ServiceDetailPageProps {
  title: string;
  paragraphs: string[];
  cta: string;
  image: string;
  imageAlt: string;
}

const features = [
  { icon: ShieldCheck, title: "Expert Advisory", desc: "Decades of insurance and risk-advisory expertise on every engagement." },
  { icon: Eye, title: "Transparent Process", desc: "Clear gap analysis, honest recommendations and zero hidden fine print." },
  { icon: Headphones, title: "Dedicated Support", desc: "A single point of contact from onboarding through claim disbursal." },
];

export const ServiceDetailPage = ({ title, paragraphs, cta, image, imageAlt }: ServiceDetailPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} — Vamana Insurance Broking`;
  }, [title]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/40 border-b border-border/60">
          <div className="container-x py-6 flex items-center gap-2 text-sm">
            <Link to="/" className="font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
            <Link to="/#services" className="font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="font-semibold text-primary">{title}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 grid-faint opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container-x relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Our Services</p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] text-primary">
                {title}
              </h1>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-gold to-transparent rounded-full" />
              <div className="mt-8 space-y-5">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-base sm:text-lg text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="gold" size="lg" asChild className="hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                  <Link to="/#contact">{cta} <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="hover:-translate-y-1 transition-all duration-300">
                  <Link to="/#services">All Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="absolute inset-0 bg-gold/20 blur-[80px] rounded-full" />
              <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-2xl ring-1 ring-border animate-float">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={1024}
                  height={896}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-20 sm:py-24 bg-secondary/20 border-t border-border/40">
          <div className="container-x">
            <div className="max-w-2xl animate-fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Why work with us</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
                Built around clarity, expertise and trust.
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="group bg-white rounded-2xl border border-border/60 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-gold/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-gold transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-xl text-primary">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-16 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-faint opacity-[0.08] pointer-events-none" />
          <div className="container-x relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold">Ready to take the next step?</h3>
              <p className="mt-2 text-white/80">Speak with a Vamana advisor — no obligation, no pressure.</p>
            </div>
            <Button variant="gold" size="lg" asChild className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <Link to="/#contact">{cta} <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};
