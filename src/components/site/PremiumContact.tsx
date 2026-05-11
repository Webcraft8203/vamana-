import { useState, useMemo } from "react";
import { format } from "date-fns";
import {
  ArrowLeft, ArrowRight, CalendarIcon, CheckCircle2, Sparkles,
  ShieldCheck, Clock, Phone, Mail, Building2, User, Briefcase,
  Users, FileCheck, MessageSquare, Loader2, BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/* ---------- Floating-label input ---------- */
type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  icon?: React.ElementType;
  required?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};
const FloatingInput = ({ id, label, value, onChange, type = "text", icon: Icon, required, inputMode }: FieldProps) => {
  const filled = value.length > 0;
  return (
    <div className="group relative">
      <div className="relative rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:border-white/20 focus-within:border-gold/60 focus-within:bg-white/[0.06] focus-within:shadow-[0_0_0_4px_rgba(212,175,55,0.12),0_8px_24px_-12px_rgba(212,175,55,0.4)] focus-within:-translate-y-0.5">
        {Icon && (
          <Icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 transition-colors group-focus-within:text-gold" />
        )}
        <input
          id={id}
          type={type}
          required={required}
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className={cn(
            "peer w-full bg-transparent text-white placeholder-transparent outline-none",
            "py-4 pr-4 text-[15px]",
            Icon ? "pl-11" : "pl-4",
          )}
        />
        <label
          htmlFor={id}
          className={cn(
            "pointer-events-none absolute top-1/2 -translate-y-1/2 text-white/50 text-[15px] transition-all duration-300 ease-out",
            Icon ? "left-11" : "left-4",
            (filled) && "!top-2 !text-[10px] !tracking-[0.18em] uppercase !text-gold !translate-y-0",
            "peer-focus:!top-2 peer-focus:!text-[10px] peer-focus:!tracking-[0.18em] peer-focus:uppercase peer-focus:!text-gold peer-focus:!translate-y-0",
          )}
        >
          {label}
        </label>
        <span className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500 group-focus-within:w-[92%]" />
      </div>
    </div>
  );
};

const FloatingSelect = ({ id, label, value, onChange, options, icon: Icon }: {
  id: string; label: string; value: string; onChange: (v: string) => void;
  options: string[]; icon?: React.ElementType;
}) => {
  const filled = value.length > 0;
  return (
    <div className="group relative">
      <div className="relative rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:border-white/20 focus-within:border-gold/60 focus-within:bg-white/[0.06] focus-within:shadow-[0_0_0_4px_rgba(212,175,55,0.12)] focus-within:-translate-y-0.5">
        {Icon && <Icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 transition-colors group-focus-within:text-gold" />}
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "peer w-full appearance-none bg-transparent text-white outline-none cursor-pointer",
            "py-4 pr-10 text-[15px]",
            Icon ? "pl-11" : "pl-4",
            !filled && "text-transparent",
          )}
        >
          <option value="" disabled hidden></option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-primary text-white">{o}</option>
          ))}
        </select>
        <label
          htmlFor={id}
          className={cn(
            "pointer-events-none absolute top-1/2 -translate-y-1/2 text-white/50 text-[15px] transition-all duration-300 ease-out",
            Icon ? "left-11" : "left-4",
            filled && "!top-2 !text-[10px] !tracking-[0.18em] uppercase !text-gold !translate-y-0",
          )}
        >
          {label}
        </label>
        <ArrowRight className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 rotate-90 text-white/40" />
      </div>
    </div>
  );
};

/* ---------- Constants ---------- */
const INDUSTRIES = ["Manufacturing","Construction","Logistics","IT & Technology","Healthcare","Hospitality","Retail","Startups","Marine & Cargo","Engineering","Other"];
const COMPANY_SIZES = ["1–10","11–50","51–200","201–500","501–1000","1000+"];
const INSURANCE_TYPES = ["Group Health","Property / Fire","Marine & Cargo","Cyber Liability","Directors & Officers","Professional Indemnity","Workmen's Compensation","Motor Fleet","Other"];
const TIME_SLOTS = ["10:00 AM","11:30 AM","01:00 PM","03:00 PM","04:30 PM","06:00 PM"];

const STEPS = [
  { n: 1, label: "Basic Details" },
  { n: 2, label: "Business" },
  { n: 3, label: "Schedule" },
];

/* ---------- Main Section ---------- */
export const PremiumContact = () => {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "",
    industry: "", size: "", insurance: "", existing: "",
    slot: "", message: "",
  });

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canNext = useMemo(() => {
    if (step === 1) return form.name && form.company && form.phone.length >= 10 && /\S+@\S+\.\S+/.test(form.email);
    if (step === 2) return form.industry && form.size && form.insurance && form.existing;
    return !!date && !!form.slot;
  }, [step, form, date]);

  const handleSubmit = async () => {
    if (!canNext) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    const text = `*New Consultation Request — Vamana Insurance*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Company:* ${form.company}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Email:* ${form.email}%0A%0A` +
      `*Industry:* ${form.industry}%0A` +
      `*Company Size:* ${form.size}%0A` +
      `*Insurance Needed:* ${form.insurance}%0A` +
      `*Existing Coverage:* ${form.existing}%0A%0A` +
      `*Preferred Date:* ${date ? format(date, "PPP") : "—"}%0A` +
      `*Time Slot:* ${form.slot}%0A` +
      `*Message:* ${encodeURIComponent(form.message || "—")}`;
    setSubmitting(false);
    setDone(true);
    setTimeout(() => {
      window.open(`https://wa.me/917083550101?text=${text}`, "_blank", "noopener,noreferrer");
    }, 700);
  };

  const progress = done ? 100 : (step / STEPS.length) * 100;

  return (
    <section id="quote" className="relative overflow-hidden py-24 sm:py-32 bg-primary text-white">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary-glow)/0.45),transparent_55%),radial-gradient(ellipse_at_bottom_right,hsl(var(--gold)/0.25),transparent_55%)]" />
        <div className="absolute inset-0 grid-faint opacity-[0.07]" />
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[140px] sm:motion-safe:animate-float-slow" />
        <div className="absolute -bottom-40 right-1/4 h-[520px] w-[520px] rounded-full bg-primary-glow/30 blur-[160px] sm:motion-safe:animate-pulse-glow" style={{ animationDelay: "2s" }} />
        {/* Particles */}
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-gold/40 sm:motion-safe:animate-float-slow"
              style={{
                top: `${(i * 53) % 100}%`,
                left: `${(i * 37) % 100}%`,
                animationDelay: `${(i % 6) * 0.7}s`,
                animationDuration: `${6 + (i % 5)}s`,
                opacity: 0.3 + ((i % 5) / 10),
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-x relative z-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
        {/* LEFT */}
        <div className="lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            <Sparkles className="h-3 w-3" /> Advisory Consultation
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.05]">
            Schedule your <span className="text-gradient-gold">free risk consultation.</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed text-base sm:text-lg max-w-md">
            A licensed Vamana advisor will review your exposure, benchmark your existing cover and design a smarter program — at no cost, no obligation.
          </p>

          {/* Mini stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "98.6%", v: "Claim success" },
              { k: "20+", v: "Insurer panel" },
              { k: "30 min", v: "Avg. response" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-4 transition hover:border-gold/30 hover:-translate-y-0.5">
                <div className="font-display text-2xl font-extrabold text-gradient-gold">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-white/55">{s.v}</div>
              </div>
            ))}
          </div>

          {/* Support info */}
          <div className="mt-10 space-y-3 max-w-md">
            {[
              { icon: Phone, label: "Direct line", value: "+91 70835 50101" },
              { icon: Mail, label: "Email", value: "solutions@vamanainsurance.in" },
              { icon: ShieldCheck, label: "Regulator", value: "IRDAI License No. 1144" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">{label}</div>
                  <div className="text-sm font-semibold text-white truncate">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Glass card */}
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-gold/30 via-white/5 to-primary-glow/30 opacity-60 blur-md pointer-events-none" />
          <div className="relative rounded-[26px] bg-white/[0.05] border border-white/10 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Header / progress */}
            <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-white/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">
                    {done ? "Confirmed" : `Step ${step} of ${STEPS.length}`}
                  </div>
                  <h3 className="mt-1 font-display font-bold text-xl sm:text-2xl">
                    {done ? "You're all set." : STEPS[step - 1].label}
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  {STEPS.map((s) => {
                    const active = s.n === step;
                    const passed = s.n < step || done;
                    return (
                      <div key={s.n} className="flex items-center gap-2">
                        <div className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-all duration-500",
                          passed && "bg-gold border-gold text-primary",
                          active && !passed && "border-gold text-gold bg-gold/10 scale-110",
                          !passed && !active && "border-white/20 text-white/40",
                        )}>
                          {passed ? <CheckCircle2 className="h-4 w-4" /> : s.n}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Progress bar */}
              <div className="mt-5 h-1 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold via-gold to-primary-glow transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Body */}
            <div className="px-6 sm:px-8 py-7 min-h-[440px]">
              {done ? (
                <div className="flex flex-col items-center text-center py-10 motion-safe:animate-fade-in">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gold/30 blur-2xl" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-primary-glow text-primary shadow-[0_10px_30px_-5px_rgba(212,175,55,0.5)]">
                      <BadgeCheck className="h-10 w-10" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h4 className="mt-6 font-display font-bold text-2xl">Thank you, {form.name.split(" ")[0]}!</h4>
                  <p className="mt-3 text-white/70 max-w-sm">
                    Your consultation is booked for <span className="text-gold font-semibold">{date && format(date, "PPP")}</span> at <span className="text-gold font-semibold">{form.slot}</span>. We're opening WhatsApp to confirm with your advisor.
                  </p>
                  <a
                    href={`https://wa.me/917083550101`}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white transition"
                  >
                    Open WhatsApp manually <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <div key={step} className="motion-safe:animate-fade-in space-y-4">
                  {step === 1 && (
                    <>
                      <FloatingInput id="name" label="Full name" value={form.name} onChange={set("name")} icon={User} required />
                      <FloatingInput id="company" label="Company name" value={form.company} onChange={set("company")} icon={Building2} required />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FloatingInput id="phone" label="Mobile number" value={form.phone} onChange={set("phone")} icon={Phone} inputMode="numeric" required />
                        <FloatingInput id="email" label="Email address" value={form.email} onChange={set("email")} icon={Mail} type="email" required />
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <FloatingSelect id="industry" label="Industry" value={form.industry} onChange={set("industry")} options={INDUSTRIES} icon={Briefcase} />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FloatingSelect id="size" label="Company size" value={form.size} onChange={set("size")} options={COMPANY_SIZES} icon={Users} />
                        <FloatingSelect id="insurance" label="Insurance needed" value={form.insurance} onChange={set("insurance")} options={INSURANCE_TYPES} icon={ShieldCheck} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-2 ml-1 flex items-center gap-2">
                          <FileCheck className="h-3 w-3 text-gold" /> Existing coverage?
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {["Yes", "No"].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => set("existing")(opt)}
                              className={cn(
                                "rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all duration-300 backdrop-blur-md",
                                form.existing === opt
                                  ? "border-gold bg-gold/15 text-gold shadow-[0_0_0_4px_rgba(212,175,55,0.12)] -translate-y-0.5"
                                  : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 hover:text-white",
                              )}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-2 ml-1 flex items-center gap-2">
                          <CalendarIcon className="h-3 w-3 text-gold" /> Preferred date
                        </div>
                        <Popover>
                          <PopoverTrigger asChild>
                            <button
                              type="button"
                              className={cn(
                                "w-full rounded-xl border bg-white/[0.04] backdrop-blur-md px-4 py-4 text-left text-[15px] transition-all duration-300 hover:border-white/25 flex items-center justify-between",
                                date ? "border-gold/40 text-white" : "border-white/10 text-white/50",
                              )}
                            >
                              {date ? format(date, "EEEE, PPP") : "Pick a consultation date"}
                              <CalendarIcon className="h-4 w-4 text-gold" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent align="start" className="w-auto p-0 bg-card border-border">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(d) => d < new Date(new Date().setHours(0,0,0,0)) || d.getDay() === 0}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-2 ml-1 flex items-center gap-2">
                          <Clock className="h-3 w-3 text-gold" /> Time slot
                        </div>
                        <div className="grid grid-cols-3 gap-2.5">
                          {TIME_SLOTS.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => set("slot")(t)}
                              className={cn(
                                "rounded-lg border px-2 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md",
                                form.slot === t
                                  ? "border-gold bg-gold/15 text-gold shadow-[0_0_0_3px_rgba(212,175,55,0.12)] -translate-y-0.5"
                                  : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 hover:text-white",
                              )}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="relative rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-white/20 focus-within:border-gold/60 focus-within:shadow-[0_0_0_4px_rgba(212,175,55,0.12)]">
                          <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-white/40 group-focus-within:text-gold" />
                          <textarea
                            value={form.message}
                            onChange={(e) => set("message")(e.target.value)}
                            placeholder="Tell us briefly about your requirement (optional)"
                            rows={3}
                            className="w-full bg-transparent text-white placeholder-white/40 outline-none pl-11 pr-4 py-4 text-[15px] resize-none"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Footer / actions */}
            {!done && (
              <div className="px-6 sm:px-8 py-5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                  className={cn(
                    "inline-flex items-center gap-1.5 text-sm font-semibold transition",
                    step === 1 ? "text-white/25 cursor-not-allowed" : "text-white/70 hover:text-white",
                  )}
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>

                {step < 3 ? (
                  <Button
                    variant="gold" size="lg"
                    disabled={!canNext}
                    onClick={() => setStep((s) => s + 1)}
                    className="min-w-[160px]"
                  >
                    Continue <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                ) : (
                  <Button
                    variant="gold" size="lg"
                    disabled={!canNext || submitting}
                    onClick={handleSubmit}
                    className="min-w-[200px]"
                  >
                    {submitting ? (
                      <><Loader2 className="h-4 w-4 mr-1 animate-spin" /> Booking…</>
                    ) : (
                      <>Confirm & Send via WhatsApp <ArrowRight className="h-4 w-4 ml-1" /></>
                    )}
                  </Button>
                )}
              </div>
            )}
          </div>

          <p className="mt-4 text-center text-xs text-white/45">
            Your data is encrypted and used only by your assigned advisor. We never sell or share information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumContact;
