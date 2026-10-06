import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { barbers } from "@/lib/site-data";

export const Route = createFileRoute("/barbers")({
  head: () => ({
    meta: [
      { title: "Our Barbers — Ironhand Barber Studio" },
      {
        name: "description",
        content:
          "Meet the Ironhand team: fade specialists, beard work and classic cutting, with decades of chair time between them.",
      },
      { property: "og:title", content: "Our Barbers — Ironhand Barber Studio" },
      {
        property: "og:description",
        content: "Fade specialists, beard work and classic cutting — meet the Ironhand team.",
      },
    ],
  }),
  component: BarbersPage,
});

function BarbersPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
      <Reveal>
        <p className="eyebrow">Our Barbers</p>
        <h1 className="mt-4 display-xl">The Team</h1>
      </Reveal>

      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {barbers.map((b, i) => (
          <Reveal key={b.name} delay={i * 90}>
            <article>
              <div className="hover-zoom border border-border">
                <img
                  src={b.image}
                  alt={`Portrait of ${b.name}, ${b.specialty}`}
                  loading="lazy"
                  width={912}
                  height={1104}
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase">{b.name}</h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-bronze">
                    {b.specialty}
                  </p>
                </div>
                <a
                  href={b.social}
                  aria-label={`${b.name} on Instagram`}
                  className="border border-border p-2.5 text-muted-foreground transition-colors hover:border-bronze hover:text-bronze"
                >
                  <Instagram className="size-4" />
                </a>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.bio}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {b.experience} behind the chair
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-block border border-border px-6 py-3 font-display text-[0.68rem] font-semibold uppercase tracking-[0.24em] transition-colors hover:border-bronze hover:text-bronze"
              >
                Book with {b.name.split(" ")[0]}
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
