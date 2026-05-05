import { useState } from "react";
import { Award, ShieldCheck, Users, Handshake, HeartPulse, Car, Plane, Building2, Shield, Anchor, Truck, Wrench, Factory, Boxes, Target, Eye, Sparkles, Scale, Headphones, ArrowRight, FileCheck, Clock, Lock, Mail, Phone, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/site/Modal";
import advisorImg from "@/assets/feature-advisor.jpg";
import aboutImg from "@/assets/about-team.jpg";

/* ---------- ABOUT ---------- */
export const About = () => {
  const features = [
    { icon: ShieldCheck, title: "Trust", desc: "Built on integrity and long-term client relationships." },
    { icon: Eye, title: "Transparency", desc: "Clear pricing, plain-English policies, no fine-print surprises." },
    { icon: Award, title: "Expert Advisory", desc: "Decades of risk and insurance domain expertise." },
    { icon: Handshake, title: "Long-term Support", desc: "Lifetime advisor — from onboarding to claim disbursal." },
  ];
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-lift ring-1 ring-border">
            <img src={aboutImg} alt="Vamana team in consultation" className="w-full h-[460px] object-cover" loading="lazy" width={1024} height={1024} />
          </div>
          <div className="hidden sm:grid grid-cols-2 gap-3 absolute -bottom-6 left-6 right-6">
            <div className="bg-card rounded-2xl p-5 shadow-card border border-border">
              <p className="font-display font-extrabold text-3xl text-primary">20+</p>
              <p className="text-xs text-muted-foreground mt-1">Years of industry experience</p>
            </div>
            <div className="bg-card rounded-2xl p-5 shadow-card border border-border">
              <p className="font-display font-extrabold text-3xl text-primary">100+</p>
              <p className="text-xs text-muted-foreground mt-1">Years of combined team knowledge</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">About Vamana</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight text-primary">
            Independent insurance advisory, built for the long run.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Vamana Insurance Broking is an IRDAI-licensed broker helping individuals, families and businesses make informed insurance decisions. We combine deep domain expertise with a client-first approach — so you always know what you're buying and why.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="lift bg-card rounded-2xl border border-border p-5 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-display font-bold text-primary">{title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- VISION & MISSION ---------- */
export const VisionMission = () => {
  const cards = [
    { icon: Eye, eyebrow: "Our Vision", title: "To be India's most trusted insurance advisor.", desc: "We aim to redefine insurance broking with transparency, technology and lifelong client relationships — so every Indian family and business is properly protected." },
    { icon: Target, eyebrow: "Our Mission", title: "Make insurance simple, honest and effective.", desc: "We help clients understand risk, choose the right cover and get claims paid — with zero jargon, zero pressure and full accountability at every step." },
  ];
  return (
    <section className="py-20 sm:py-28 bg-gradient-soft">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Purpose</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-primary leading-tight">What drives us, every day.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {cards.map(({ icon: Icon, eyebrow, title, desc }) => (
            <div key={eyebrow} className="lift group relative overflow-hidden bg-card rounded-3xl border border-border p-8 sm:p-10 shadow-soft">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-gold">
                <Icon className="h-7 w-7" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
              <h3 className="mt-2 font-display font-extrabold text-2xl text-primary leading-snug">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- WHY VAMANA ---------- */
export const WhyVamana = () => {
  const points = [
    { icon: Scale, title: "Independent Advisory", desc: "We work for you — not insurers. Honest, unbiased recommendations every time." },
    { icon: Sparkles, title: "Expert Consultation", desc: "Decades of underwriting and risk-advisory experience on every conversation." },
    { icon: Handshake, title: "Claims Done Right", desc: "End-to-end claim assistance — documentation, follow-ups and disbursal." },
    { icon: Headphones, title: "Strong Customer Support", desc: "A dedicated advisor on call — no scripts, no IVRs, no wait times." },
  ];
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Why Vamana"
          title="Insurance, simplified — and on your side."
          subtitle="Four reasons clients trust us with crores in cover."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="lift bg-card rounded-2xl border border-border p-7 shadow-soft animate-fade-up h-full" style={{ animationDelay: `${i * 80}ms` }}>
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
  const corporate = [
    { icon: Factory, title: "Industrial", desc: "Property, fire & business interruption cover for plants and warehouses." },
    { icon: Wrench, title: "Engineering", desc: "Contractor's all-risk, erection all-risk and equipment cover." },
    { icon: Anchor, title: "Marine", desc: "Cargo, hull and transit insurance across import, export and inland routes." },
    { icon: Truck, title: "Motor Fleet", desc: "Comprehensive fleet cover for commercial vehicles and logistics." },
    { icon: Shield, title: "Liability", desc: "Professional indemnity, D&O, cyber and public liability cover." },
    { icon: Boxes, title: "Other Products", desc: "Group health, workmen comp and bespoke corporate risk solutions." },
  ];
  const individual = [
    { icon: Plane, title: "Travel", desc: "Domestic & international travel cover — medical, baggage and trip delay." },
    { icon: HeartPulse, title: "Health", desc: "Family floater & individual health plans with cashless hospital network." },
    { icon: ShieldCheck, title: "Life", desc: "Term, whole-life and savings plans aligned to your financial goals." },
    { icon: Car, title: "Motor Insurance", desc: "Car & two-wheeler cover with zero-depreciation and engine protection add-ons." },
  ];
  return (
    <section id="services" className="py-20 sm:py-28 bg-gradient-soft">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we cover"
          title="Protection for every part of life — and business."
          subtitle="From boardroom risks to family health, we structure the right cover at the right price."
        />

        <div className="mt-14">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-5 w-5 text-gold" />
            <h3 className="font-display font-bold text-xl text-primary">Corporate Insurance</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {corporate.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 60} />)}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-5 w-5 text-gold" />
            <h3 className="font-display font-bold text-xl text-primary">Individual Insurance</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {individual.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 60} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, delay }: any) => (
  <div className="group lift relative bg-card rounded-2xl border border-border p-6 shadow-soft animate-fade-up h-full" style={{ animationDelay: `${delay}ms` }}>
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-gold transition-colors">
      <Icon className="h-6 w-6" />
    </div>
    <h4 className="mt-5 font-display font-bold text-lg text-primary">{title}</h4>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
  </div>
);

/* ---------- HOW IT WORKS ---------- */
export const HowItWorks = () => {
  const steps = [
    { title: "Discover", desc: "Tell us about you. We assess your real risks — not generic templates." },
    { title: "Compare", desc: "We benchmark plans across top insurers, side-by-side, jargon-free." },
    { title: "Customize", desc: "Right cover, right add-ons, right premium. Nothing extra, nothing missing." },
    { title: "Claim Support", desc: "We handle paperwork & follow-ups, end-to-end, so you don't have to." },
  ];
  return (
    <section id="how" className="py-20 sm:py-28 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-faint opacity-30 pointer-events-none" />
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-x relative">
        <SectionHeader dark eyebrow="How it works" title="Four steps. Zero confusion." subtitle="A clear, structured process — built around transparency at every stage." />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <span className="font-display text-3xl font-extrabold text-gold">0{i + 1}</span>
              <h3 className="mt-4 font-display font-bold text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
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
        </div>
      </div>
    </section>
  );
};

/* ---------- INSIGHTS / BLOG ---------- */
const blogPosts = [
  {
    id: "health",
    tag: "Health",
    title: "Family floater vs individual health: which one actually saves more?",
    read: "6 min read",
    body: `When choosing health insurance, most Indian families face the same question — should you buy a single family floater or individual policies for each member?\n\nA family floater shares one sum insured across all members. It's typically cheaper when everyone is young and healthy, and gives the flexibility of one large pool. However, if one member has a major claim, the cover is depleted for the rest of the year.\n\nIndividual policies cost more in total premium, but each member has their own dedicated cover. This is often the better choice when there's an age gap of 15+ years between members, when a parent has pre-existing conditions, or when the eldest member is over 50.\n\nA practical hybrid: keep a family floater of ₹10–15L for routine claims, and add a ₹25–50L super top-up that kicks in for major hospitalisations. You get high cover at low premium — and protection that doesn't run out.`,
  },
  {
    id: "motor",
    tag: "Motor",
    title: "Zero-dep, IDV, NCB — the 3 add-ons that decide your motor claim.",
    read: "5 min read",
    body: `Motor insurance looks simple until you actually file a claim. Three terms quietly decide how much money you receive — IDV, Zero Depreciation, and No Claim Bonus.\n\nIDV (Insured Declared Value) is the maximum payout if your vehicle is stolen or written off. Many buyers reduce IDV to lower premium — and regret it badly during a total loss claim. Always insure at fair market value.\n\nZero Depreciation cover ensures the insurer pays the full part-replacement cost without deducting depreciation on plastic, rubber and metal parts. For cars under 5 years old, this single add-on can mean the difference between a ₹40,000 and a ₹15,000 settlement on a typical bumper repair.\n\nNo Claim Bonus (NCB) is a discount earned for every claim-free year — going up to 50%. Don't lose it on a small dent claim; pay small repairs out of pocket and protect the bonus.`,
  },
  {
    id: "cyber",
    tag: "Business",
    title: "Why every Indian SME needs cyber liability cover in 2026.",
    read: "8 min read",
    body: `India recorded over 1.6 million cyber incidents in 2025 — and SMEs were the biggest target. A single ransomware attack now costs an average Indian SME ₹35–80 lakh in downtime, recovery and regulatory penalties.\n\nUnder the Digital Personal Data Protection Act, businesses handling customer data are now legally accountable for breaches. Fines can go up to ₹250 crore per violation.\n\nA cyber liability policy typically covers: data breach response, forensic investigation, legal defence, regulatory penalties, business interruption, and ransomware payments. Premium for a ₹5 crore cover starts as low as ₹40,000 a year — a fraction of the potential loss.\n\nIf your business processes payments, stores customer data, or runs on email and cloud apps, you already have cyber exposure. The question is whether it's insured.`,
  },
];

export const Insights = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = blogPosts.find((p) => p.id === openId) || null;

  return (
    <section id="insights" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader eyebrow="Insights" title="Read before you buy." subtitle="Practical, jargon-free guides written by our advisors." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {blogPosts.map((p, i) => (
            <article key={p.id} className="lift group rounded-2xl overflow-hidden border border-border bg-card shadow-soft animate-fade-up flex flex-col" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="h-44 bg-gradient-to-br from-primary to-primary-soft relative overflow-hidden">
                <div className="absolute inset-0 grid-faint opacity-40" />
                <span className="absolute top-4 left-4 rounded-full bg-gold text-primary text-[11px] font-bold px-3 py-1">{p.tag}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg text-primary leading-snug">{p.title}</h3>
                <div className="mt-auto pt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{p.read}</span>
                  <button onClick={() => setOpenId(p.id)} className="font-semibold text-primary inline-flex items-center gap-1 hover:text-gold transition-colors">
                    Read Blog <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal open={!!active} onOpenChange={(o) => !o && setOpenId(null)} title={active?.title || ""} description={active ? `${active.tag} • ${active.read}` : ""} size="xl">
        {active && (
          <div className="space-y-6">
            <div className="prose prose-sm max-w-none whitespace-pre-line text-foreground leading-relaxed">
              {active.body}
            </div>
            <div className="border-t border-border pt-6">
              <h4 className="font-display font-bold text-primary mb-4">Other Blogs</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {blogPosts.filter((p) => p.id !== active.id).map((p) => (
                  <button key={p.id} onClick={() => setOpenId(p.id)} className="text-left p-4 rounded-xl border border-border hover:border-gold/50 hover:bg-secondary/50 transition-colors">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">{p.tag}</span>
                    <p className="mt-1 font-display font-semibold text-sm text-primary leading-snug">{p.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.read}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

/* ---------- FINAL CTA ---------- */
export const FinalCTA = () => (
  <section id="contact" className="py-20 sm:py-28">
    <div className="container-x">
      <div className="relative overflow-hidden rounded-3xl bg-primary p-10 sm:p-16 text-white shadow-lift">
        <div className="absolute inset-0 grid-faint opacity-30 pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold/25 blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
            Let's secure <span className="text-gradient-gold">what matters most.</span>
          </h2>
          <p className="mt-4 text-white/75 text-base sm:text-lg">
            Get a free, no-obligation consultation with a Vamana advisor. We'll review your existing cover and show you exactly where you stand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button variant="gold" size="xl" asChild>
              <a href="tel:+910000000000">Call an Advisor <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="mailto:hello@vamanainsurance.in">Email Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- FOOTER ---------- */
const legalDocs: Record<string, { title: string; body: string }> = {
  terms: { title: "Terms & Conditions", body: `These Terms govern your use of Vamana Insurance Broking Pvt. Ltd.'s website and services. By accessing our services, you agree to comply with all applicable laws and regulations of India, including the IRDAI (Insurance Brokers) Regulations.\n\nVamana acts as an intermediary between clients and insurance companies. We do not underwrite policies. All policy terms, conditions, and claim approvals are governed by the respective insurer.\n\nYou agree to provide accurate information for any quote, application or claim. Misrepresentation may result in policy cancellation by the insurer.\n\nFor full terms, please contact our legal team.` },
  privacy: { title: "Privacy Policy", body: `Vamana respects your privacy. We collect personal information solely to provide insurance advisory and policy services.\n\nWe collect: name, contact details, demographic data, financial information, and health information (where required for underwriting).\n\nWe use this data to: source quotes, issue policies, process claims and provide ongoing service. We share data only with insurers and regulatory authorities, never with marketers.\n\nYou may request access, correction or deletion of your personal data at any time by writing to privacy@vamanainsurance.in.` },
  refund: { title: "Refund Policy", body: `Insurance premium refunds are governed by the free-look period and cancellation terms of each insurer.\n\nFree-look period: Most policies allow a 15–30 day free-look window from issuance. You may cancel for a full refund minus stamp duty, medical and proportionate risk charges.\n\nMid-term cancellation: Refund is calculated on a short-period basis as per insurer's tariff.\n\nVamana does not charge any separate broker fee from clients; our remuneration is paid by insurers as commission.` },
  shipping: { title: "Shipping Policy", body: `Vamana provides digital insurance services. Policy documents are typically delivered electronically (PDF) within 24–72 hours of policy issuance to your registered email.\n\nPhysical policy documents, where applicable, are dispatched directly by the insurer to the address on record, usually within 7–15 business days.\n\nNo shipping charges are levied by Vamana.` },
  warranty: { title: "Warranty Policy", body: `Vamana provides advisory services and does not manufacture or sell physical goods. As such, no product warranty applies.\n\nOur service commitment: we promise unbiased advice, transparent disclosures and dedicated claim support throughout the policy lifecycle. If you are dissatisfied with our service, please contact grievance@vamanainsurance.in for resolution within 14 working days.` },
  disclaimer: { title: "Disclaimer", body: `Information on this website is for general guidance only and does not constitute a contract of insurance. All policy benefits, exclusions and conditions are governed by the respective insurer's policy wording.\n\nInsurance is the subject matter of solicitation. Premium quotes are indicative and subject to underwriting approval. Past performance of any insurer is not indicative of future claim experience.\n\nVamana Insurance Broking Pvt. Ltd. — IRDAI Composite Broker License No. XXXXXX. Validity: as per IRDAI register.` },
};

export const Footer = () => {
  const [openLegal, setOpenLegal] = useState<string | null>(null);
  const [careersOpen, setCareersOpen] = useState(false);
  const active = openLegal ? legalDocs[openLegal] : null;

  return (
    <footer className="bg-primary text-white/80 pt-16 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="font-display font-extrabold text-xl text-white">VAMANA</div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mt-1">Insurance Broking Pvt. Ltd.</p>
            <p className="text-sm mt-5 leading-relaxed text-white/65 max-w-sm">
              Independent insurance advisory built on transparency, expertise and lifelong client relationships.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#why" className="hover:text-gold transition-colors">Why Vamana</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#insights" className="hover:text-gold transition-colors">Insights</a></li>
              <li><button onClick={() => setCareersOpen(true)} className="hover:text-gold transition-colors">Careers</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white">Legal</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {Object.entries(legalDocs).map(([key, doc]) => (
                <li key={key}>
                  <button onClick={() => setOpenLegal(key)} className="text-left hover:text-gold transition-colors">{doc.title}</button>
                </li>
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

      <Modal open={!!active} onOpenChange={(o) => !o && setOpenLegal(null)} title={active?.title || ""}>
        <div className="whitespace-pre-line text-foreground leading-relaxed">{active?.body}</div>
      </Modal>

      <Modal open={careersOpen} onOpenChange={setCareersOpen} title="Careers at Vamana" description="Join a team that's redefining insurance broking in India.">
        <div className="space-y-5">
          <p className="text-foreground">
            We're always looking for sharp, client-first people — advisors, claims specialists, underwriters and engineers. If you care about doing insurance the right way, we'd love to hear from you.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-secondary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-gold"><Mail className="h-5 w-5" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a href="mailto:careers@vamanainsurance.in" className="text-sm font-semibold text-primary hover:text-gold">careers@vamanainsurance.in</a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-secondary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-gold"><Phone className="h-5 w-5" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <a href="tel:+910000000000" className="text-sm font-semibold text-primary hover:text-gold">+91 00000 00000</a>
              </div>
            </div>
          </div>
          <Button variant="default" asChild className="w-full sm:w-auto">
            <a href="mailto:careers@vamanainsurance.in?subject=Application%20%E2%80%93%20Resume"><Briefcase className="h-4 w-4" /> Send Resume</a>
          </Button>
        </div>
      </Modal>
    </footer>
  );
};

/* ---------- HELPERS ---------- */
const SectionHeader = ({ eyebrow, title, subtitle, dark }: { eyebrow: string; title: string; subtitle?: string; dark?: boolean }) => (
  <div className="max-w-2xl">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
    <h2 className={`mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight ${dark ? "text-white" : "text-primary"}`}>{title}</h2>
    {subtitle && <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>}
  </div>
);

/* legacy export kept for compatibility */
export const Expect = () => null;
