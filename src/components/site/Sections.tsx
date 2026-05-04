import { Award, ShieldCheck, Users, Handshake, HeartPulse, Car, Building2, Shield, Home, Search, GitCompare, Settings2, LifeBuoy, FileCheck, Clock, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import advisorImg from "@/assets/feature-advisor.jpg";

/* ---------- WHY VAMANA ---------- */
export const WhyVamana = () => {
  const points = [
    { icon: Award, title: "Independent Advisory", desc: "We work for you — not insurers. Honest recommendations, every time." },
    { icon: ShieldCheck, title: "IRDAI Licensed", desc: "Fully regulated insurance broker — your policies are in safe hands." },
    { icon: Handshake, title: "Claims, Done Right", desc: "End-to-end claim assistance from documentation to disbursal." },
    { icon: Users, title: "Dedicated Advisors", desc: "One advisor, one number — for life. No call centres, no scripts." },
  ];
  return (
    <section id="why" className="py-20 sm:py-28 bg-gradient-soft">
      <div className="container-x">
        <SectionHeader
          eyebrow="Why Vamana"
          title="Insurance is complex. We make it simple, honest, and on your side."
          subtitle="Most brokers sell policies. We build long-term protection plans tailored to what you actually need."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="lift bg-card rounded-2xl border border-border p-7 shadow-soft animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-gold">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- SERVICES ---------- */
export const Services = () => {
  const services = [
    { icon: HeartPulse, title: "Health Insurance", desc: "Family floater & individual health plans with cashless network of 10,000+ hospitals.", tag: "Most Popular" },
    { icon: Car, title: "Motor Insurance", desc: "Comprehensive car & two-wheeler cover with zero-depreciation add-ons." },
    { icon: Building2, title: "Corporate / Group", desc: "Employee benefits, group health, and workmen compensation for businesses." },
    { icon: Shield, title: "Liability", desc: "Professional indemnity, D&O, cyber liability — protect your business from risk." },
    { icon: Home, title: "Property Insurance", desc: "Home, office, factory & inventory cover against fire, theft and natural perils." },
    { icon: Lock, title: "Custom Solutions", desc: "Bespoke risk advisory and tailored covers for unique requirements." },
  ];
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we cover"
          title="Protection for every part of life — and business."
          subtitle="From health to high-value assets, we structure the right cover at the right price."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc, tag }, i) => (
            <div key={title} className="group lift relative bg-card rounded-2xl border border-border p-7 shadow-soft animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              {tag && (
                <span className="absolute top-5 right-5 rounded-full bg-gold/15 text-gold text-[11px] font-semibold px-2.5 py-1">{tag}</span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-gold transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <a href="#quote" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-gold transition-colors">
                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- HOW IT WORKS ---------- */
export const HowItWorks = () => {
  const steps = [
    { icon: Search, title: "Discover", desc: "Tell us about you. We assess your real risks — not generic templates." },
    { icon: GitCompare, title: "Compare", desc: "We benchmark plans across top insurers, side-by-side, jargon-free." },
    { icon: Settings2, title: "Customize", desc: "Right cover, right add-ons, right premium. Nothing extra, nothing missing." },
    { icon: LifeBuoy, title: "Claim Support", desc: "We handle the paperwork & follow-ups, end-to-end, so you don't have to." },
  ];
  return (
    <section id="how" className="py-20 sm:py-28 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-faint opacity-30 pointer-events-none" />
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-x relative">
        <SectionHeader
          dark
          eyebrow="How it works"
          title="Four steps. Zero confusion."
          subtitle="A clear, structured process — built around transparency at every stage."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 h-full">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-extrabold text-white/15">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display font-bold text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- FEATURE HIGHLIGHT ---------- */
export const FeatureHighlight = () => {
  const items = [
    { icon: FileCheck, title: "Plain-English policies", desc: "We translate the fine print so you know exactly what's covered." },
    { icon: Clock, title: "24x7 claim helpdesk", desc: "Real humans, available when emergencies don't wait for office hours." },
    { icon: Lock, title: "Your data, secured", desc: "Bank-grade encryption. We never sell your information. Ever." },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden shadow-lift ring-1 ring-border">
            <img src={advisorImg} alt="Vamana advisor consulting client" className="w-full h-[480px] object-cover" loading="lazy" width={1024} height={1024} />
          </div>
          <div className="hidden sm:flex absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-card max-w-[260px]">
            <div>
              <p className="font-display font-extrabold text-3xl text-primary">₹500Cr+</p>
              <p className="text-sm text-muted-foreground mt-1">Sum assured advised across our client portfolio</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">The Vamana difference</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight text-primary">
            A real advisor — not a chatbot, not a call centre.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every client gets a dedicated advisor who knows your portfolio, your family, and your business. The same person who sells you the policy is the one who fights for your claim.
          </p>
          <div className="mt-8 space-y-5">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary">{title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="default" size="lg" className="mt-9" asChild>
            <a href="#quote">Talk to an advisor <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ---------- WHAT TO EXPECT ---------- */
export const Expect = () => {
  const items = [
    { step: "Day 1", title: "Discovery call", desc: "A 20-min conversation to understand your goals, family, assets and existing cover." },
    { step: "Day 2-3", title: "Tailored proposal", desc: "We share a clear, side-by-side comparison of the best-fit plans with our recommendation." },
    { step: "Day 4-7", title: "Onboarding", desc: "We handle paperwork, medicals (if any) and policy issuance — usually within a week." },
    { step: "Lifetime", title: "Ongoing support", desc: "Annual reviews, renewals, endorsements and claims — your advisor is one call away." },
  ];
  return (
    <section className="py-20 sm:py-28 bg-gradient-soft">
      <div className="container-x">
        <SectionHeader
          eyebrow="Client experience"
          title="What you can expect from us."
          subtitle="No surprises. Just a clear, predictable journey from first call to lifelong support."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div key={it.step} className="lift bg-card rounded-2xl border border-border p-7 shadow-soft animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-gold bg-gold/10 rounded-full px-2.5 py-1">{it.step}</span>
              <h3 className="mt-4 font-display font-bold text-lg text-primary">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- INSIGHTS / BLOG ---------- */
export const Insights = () => {
  const posts = [
    { tag: "Health", title: "Family floater vs individual health: which one actually saves more?", read: "6 min read" },
    { tag: "Motor", title: "Zero-dep, IDV, NCB — the 3 add-ons that decide your motor claim.", read: "5 min read" },
    { tag: "Business", title: "Why every Indian SME needs cyber liability cover in 2026.", read: "8 min read" },
  ];
  return (
    <section id="insights" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Insights"
          title="Read before you buy."
          subtitle="Practical, jargon-free guides written by our advisors."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={p.title} className="lift group rounded-2xl overflow-hidden border border-border bg-card shadow-soft animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="h-44 bg-gradient-to-br from-primary to-primary-soft relative overflow-hidden">
                <div className="absolute inset-0 grid-faint opacity-40" />
                <span className="absolute top-4 left-4 rounded-full bg-gold text-primary text-[11px] font-bold px-3 py-1">{p.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-primary leading-snug group-hover:text-primary-soft transition-colors">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{p.read}</span>
                  <span className="font-semibold text-primary inline-flex items-center gap-1 group-hover:text-gold transition-colors">Read <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- FINAL CTA ---------- */
export const FinalCTA = () => (
  <section id="contact" className="py-20 sm:py-28">
    <div className="container-x">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 sm:p-16 text-white shadow-lift">
        <div className="absolute inset-0 grid-faint opacity-30" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
            Let's secure <span className="text-gradient-gold">what matters most.</span>
          </h2>
          <p className="mt-4 text-white/75 text-base sm:text-lg">
            Get a free, no-obligation consultation with a Vamana advisor. We'll review your existing cover and show you exactly where you stand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button variant="gold" size="xl" asChild>
              <a href="#quote">Get Free Consultation <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="tel:+910000000000">Call +91 00000 00000</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- FOOTER ---------- */
export const Footer = () => (
  <footer className="bg-primary text-white/80 pt-16 pb-8">
    <div className="container-x">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-display font-extrabold text-xl text-white">VAMANA</div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold mt-1">Insurance Broking Pvt. Ltd.</p>
          <p className="text-sm mt-5 leading-relaxed text-white/65 max-w-xs">
            Independent insurance advisory built on transparency, expertise and lifelong client relationships.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {["Health Insurance","Motor Insurance","Corporate / Group","Liability","Property"].map(l => (
              <li key={l}><a href="#services" className="hover:text-gold transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {["About Us","Why Vamana","Insights","Careers","Contact"].map(l => (
              <li key={l}><a href="#" className="hover:text-gold transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-white">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>+91 00000 00000</li>
            <li>hello@vamanainsurance.in</li>
            <li>India</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/55">
        <p>© {new Date().getFullYear()} Vamana Insurance Broking Pvt. Ltd. All rights reserved.</p>
        <p>IRDAI Broker License No. XXXXXX • Composite Broker • Insurance is the subject matter of solicitation.</p>
      </div>
    </div>
  </footer>
);

/* ---------- HELPERS ---------- */
const SectionHeader = ({ eyebrow, title, subtitle, dark }: { eyebrow: string; title: string; subtitle?: string; dark?: boolean }) => (
  <div className="max-w-2xl">
    <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-gold" : "text-gold"}`}>{eyebrow}</p>
    <h2 className={`mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight ${dark ? "text-white" : "text-primary"}`}>{title}</h2>
    {subtitle && <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>}
  </div>
);
