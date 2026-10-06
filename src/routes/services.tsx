import { createFileRoute, Link } from "@tanstack/react-router";
import { ServiceCards } from "@/components/ServiceCards";
import { Reveal } from "@/components/Reveal";
import { shop } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Prices — Ironhand Barber Studio" },
      {
        name: "description",
        content:
          "Classic haircuts, skin fades, beard styling, premium grooming and more. See durations and prices, then book your chair.",
      },
      { property: "og:title", content: "Services & Prices — Ironhand Barber Studio" },
      {
        property: "og:description",
        content: "Cuts, fades, beard work and premium grooming with clear durations and prices.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 display-xl">The Menu</h1>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Every service includes a consultation, a hot towel finish and styling advice you can
            actually repeat at home.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <ServiceCards />
      </section>

      <section className="border-t border-border bg-charcoal py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
          <h2 className="display-lg text-center md:text-left">Not sure which one?</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="bg-bronze px-9 py-4 text-center font-display text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-accent-foreground"
            >
              Book Appointment
            </Link>
            <a
              href={`tel:${shop.phone.replace(/[^+\d]/g, "")}`}
              className="border border-border px-9 py-4 text-center font-display text-[0.72rem] font-semibold uppercase tracking-[0.26em] transition-colors hover:border-bronze hover:text-bronze"
            >
              Call the Shop
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
