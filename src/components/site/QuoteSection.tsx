import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, ShieldCheck, Lock } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Reply within 30 minutes", desc: "A real advisor reaches out — no bots, no spam." },
  { icon: ShieldCheck, title: "Compare top insurers", desc: "We benchmark across 20+ leading insurance providers." },
  { icon: Lock, title: "Your data stays private", desc: "Bank-grade encryption. We never sell your information." },
];

export const QuoteSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "Health Insurance" });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="relative z-0 overflow-hidden py-20 sm:py-24 bg-gradient-soft border-t border-border/60">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Floating gradient blobs */}
        <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] rounded-full bg-gold/10 blur-[120px] sm:motion-safe:animate-float-slow" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] sm:motion-safe:animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-secondary/20 blur-[100px] sm:motion-safe:animate-float-slow" style={{ animationDelay: '4s' }} />
        
        {/* Soft overlay to blend blobs smoothly into the background for depth */}
        <div className="absolute inset-0 bg-background/20" />
      </div>

      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Get a free quote</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight text-primary">
            Talk to an advisor — <span className="text-gradient-gold">not a chatbot.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base sm:text-lg max-w-lg">
            Share a few details and one of our licensed advisors will get back to you with a tailored, no-obligation recommendation.
          </p>

          <ul className="mt-8 space-y-5">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary">{title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — form */}
        <div className="relative">
          <div className="rounded-3xl bg-card border border-border shadow-card p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-primary">Request a callback</h3>
                <p className="text-sm text-muted-foreground mt-1">Free • No obligation • Takes 30 seconds</p>
              </div>
            </div>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center text-center py-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h4 className="mt-4 font-display font-bold text-lg text-primary">Thank you, {form.name || "there"}!</h4>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                  Your advisor will reach out within 30 minutes on the number you provided.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <Field label="Full name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rohan Sharma"
                    className="input-base"
                  />
                </Field>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Phone number">
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91"
                      inputMode="numeric"
                      className="input-base"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="input-base"
                    />
                  </Field>
                </div>
                <Field label="Insurance type">
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="input-base"
                  >
                    <option>Health Insurance</option>
                    <option>Motor Insurance</option>
                    <option>Corporate / Group</option>
                    <option>Liability</option>
                    <option>Property Insurance</option>
                  </select>
                </Field>

                <Button variant="gold" size="lg" className="w-full mt-2">
                  Get my free quote
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted by Vamana Insurance.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">{label}</span>
    <div className="mt-1.5">{children}</div>
  </label>
);
