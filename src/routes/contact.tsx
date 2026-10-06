import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { shop } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Ironhand Barber Studio" },
      {
        name: "description",
        content:
          "Ready for a fresh cut? Book your chair at Ironhand, or call the shop. Address, opening hours and directions inside.",
      },
      { property: "og:title", content: "Book an Appointment — Ironhand Barber Studio" },
      {
        property: "og:description",
        content: "Book your chair at Ironhand or call the shop — hours, address and directions.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <Reveal>
          <p className="eyebrow">Booking</p>
          <h1 className="mt-4 display-xl">Ready for a Fresh Cut?</h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid gap-16 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <BookingForm />
          </Reveal>

          <Reveal delay={120} className="space-y-10">
            <div>
              <p className="eyebrow">Visit the studio</p>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-bronze" />
                  {shop.address}
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-bronze" />
                  <a
                    href={`tel:${shop.phone.replace(/[^+\d]/g, "")}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {shop.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-bronze" />
                  <a href={`mailto:${shop.email}`} className="transition-colors hover:text-foreground">
                    {shop.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow">Opening hours</p>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                {shop.hours.map((h) => (
                  <li key={h.days} className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-bronze" />
                    <span>
                      <span className="block text-foreground">{h.days}</span>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href={shop.instagram}
                className="flex items-center gap-2 border border-border px-5 py-3 font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-bronze hover:text-bronze"
              >
                <Instagram className="size-4" /> Instagram
              </a>
              <a
                href={shop.whatsapp}
                className="flex items-center gap-2 border border-border px-5 py-3 font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-bronze hover:text-bronze"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <iframe
          title="Map to Ironhand Barber Studio"
          src={shop.maps}
          loading="lazy"
          className="h-[420px] w-full grayscale"
        />
      </section>
    </>
  );
}
