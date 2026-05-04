import { Button } from "@/components/ui/button";
import { ShieldCheck, BadgeCheck, Headphones, Sparkles, ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-family.jpg";
import { useState } from "react";

const trustItems = [
  { icon: ShieldCheck, label: "IRDAI Licensed" },
  { icon: BadgeCheck, label: "100% Transparent" },
  { icon: Headphones, label: "Dedicated Claim Support" },
];

export const Hero = () => {
  const [form, setForm] = useState({ name: "", phone: "", type: "Health" });

  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white pt-28 sm:pt-32 lg:pt-36 pb-24 lg:pb-32">
      {/* faint grid */}
      <div className="absolute inset-0 grid-faint opacity-40 pointer-events-none" />
      {/* gold glow */}
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-gold/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none" />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            IRDAI Licensed Insurance Broker
          </div>

          <h1 className="animate-fade-up delay-100 mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Insurance that <span className="text-gradient-gold">actually works</span> when you need it.
          </h1>

          <p className="animate-fade-up delay-200 mt-5 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
            Clear advice. Transparent pricing. Real human support — from the first quote to your final claim.
          </p>

          <div className="animate-fade-up delay-300 mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button variant="gold" size="xl" asChild>
              <a href="#quote">Get Free Consultation <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="#services">View Plans</a>
            </Button>
          </div>

          <div className="animate-fade-up delay-400 mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/15">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/85 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative animate-fade-in delay-200">
          <div className="relative rounded-3xl overflow-hidden shadow-lift ring-1 ring-white/10">
            <img
              src={heroImg}
              alt="Family protected by Vamana Insurance"
              className="w-full h-[460px] sm:h-[540px] object-cover"
              width={1024}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-primary/10 to-transparent" />
          </div>

          {/* Floating Quote Card */}
          <div id="quote" className="lg:absolute lg:-left-10 lg:bottom-8 lg:w-[360px] mt-6 lg:mt-0 glass rounded-2xl p-5 shadow-card animate-float">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">Quick Quote</p>
                <p className="font-display font-bold text-primary">Get a quote in 30 sec</p>
              </div>
              <div className="flex items-center gap-1 text-gold">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-semibold text-primary">4.9</span>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-2.5">
              <input
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full h-10 rounded-lg border border-border bg-white/80 px-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <input
                value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone number" inputMode="numeric"
                className="w-full h-10 rounded-lg border border-border bg-white/80 px-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <select
                value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full h-10 rounded-lg border border-border bg-white/80 px-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                <option>Health Insurance</option>
                <option>Motor Insurance</option>
                <option>Corporate / Group</option>
                <option>Liability</option>
                <option>Property</option>
              </select>
              <Button variant="gold" className="w-full h-11">Get Quote in 30 sec</Button>
            </form>
          </div>
        </div>
      </div>

      {/* trust bar */}
      <div className="container-x relative mt-20 lg:mt-28">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-5 flex flex-col md:flex-row items-center md:justify-between gap-3 text-center md:text-left">
          <p className="text-sm font-medium text-white/80">
            Trusted by individuals & businesses across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/60 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span>IRDAI</span><span>•</span>
            <span>HDFC Ergo</span><span>•</span>
            <span>ICICI Lombard</span><span>•</span>
            <span>Star Health</span><span>•</span>
            <span>Bajaj Allianz</span>
          </div>
        </div>
      </div>
    </section>
  );
};
