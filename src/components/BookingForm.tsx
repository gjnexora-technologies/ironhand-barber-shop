import { useState, type FormEvent } from "react";
import { Phone, Check, AlertCircle } from "lucide-react";
import { services, barbers, shop } from "@/lib/site-data";

const field =
  "w-full border border-input bg-charcoal px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-bronze";
const label =
  "font-display text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground";

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const date = String(data.get("date") ?? "");

    if (name.length < 2) {
      setStatus("error");
      setError("Please enter your name.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 7) {
      setStatus("error");
      setError("Please enter a phone number we can reach you on.");
      return;
    }
    if (!date) {
      setStatus("error");
      setError("Please choose a preferred date.");
      return;
    }

    setError("");
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 700);
  };

  if (status === "sent") {
    return (
      <div className="border border-bronze/50 bg-charcoal p-10 text-center">
        <Check className="mx-auto size-8 text-bronze" />
        <h3 className="mt-5 display-lg text-3xl">Request received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          We'll confirm your appointment by phone shortly. For same-day cuts, call the shop
          directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 border border-border px-6 py-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-foreground transition-colors hover:border-bronze hover:text-bronze"
        >
          Book another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className={label} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" className={field} placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="+91 98765 43210" />
        </div>
        <div className="space-y-2">
          <label className={label} htmlFor="service">
            Service
          </label>
          <select id="service" name="service" className={field} defaultValue={services[0].name}>
            {services.map((s) => (
              <option key={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className={label} htmlFor="barber">
            Preferred barber
          </label>
          <select id="barber" name="barber" className={field} defaultValue="No preference">
            <option>No preference</option>
            {barbers.map((b) => (
              <option key={b.name}>{b.name}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className={label} htmlFor="date">
            Date
          </label>
          <input id="date" name="date" type="date" className={field} />
        </div>
        <div className="space-y-2">
          <label className={label} htmlFor="time">
            Time
          </label>
          <input id="time" name="time" type="time" className={field} defaultValue="10:00" />
        </div>
      </div>

      <div className="space-y-2">
        <label className={label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
          placeholder="Anything we should know about your style?"
        />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="size-4" />
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex-1 bg-bronze px-8 py-4 font-display text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-accent-foreground transition-opacity duration-300 hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Book Appointment"}
        </button>
        <a
          href={`tel:${shop.phone.replace(/[^+\d]/g, "")}`}
          className="flex items-center justify-center gap-2 border border-border px-8 py-4 font-display text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-foreground transition-colors duration-300 hover:border-bronze hover:text-bronze"
        >
          <Phone className="size-4" /> Call the Shop
        </a>
      </div>
    </form>
  );
}
