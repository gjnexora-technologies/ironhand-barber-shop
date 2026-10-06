import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { images, experience } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Studio — Ironhand Barber Studio" },
      {
        name: "description",
        content:
          "More than a haircut: how Ironhand approaches personal style, precision grooming and the details that make a cut last.",
      },
      { property: "og:title", content: "About the Studio — Ironhand Barber Studio" },
      {
        property: "og:description",
        content: "Personal style, precision and grooming in a modern studio built around the chair.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <Reveal>
          <p className="eyebrow">The Studio</p>
          <h1 className="mt-4 display-xl max-w-3xl">More Than a Haircut.</h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="hover-zoom border border-border">
          <img
            src={images.studio}
            alt="The Ironhand studio floor with leather chairs and brass lighting"
            loading="lazy"
            width={1408}
            height={1008}
            className="w-full object-cover"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="serif-accent text-3xl leading-snug text-beige sm:text-4xl">
              A haircut is the one thing you wear every day.
            </p>
          </Reveal>
          <Reveal delay={120} className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <p>
              We opened Ironhand because grooming had split into two worlds — fast, forgettable
              chains and rooms that felt stuck in another decade. We wanted a third option.
            </p>
            <p>
              Every appointment starts with a conversation about your hair type, your routine and
              the way you dress. The cut follows from that, not from a menu photo.
            </p>
            <p>
              Precision is the part you don't see: the neckline checked twice, the blend held under
              two different lights, the finish built so it grows out well.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-charcoal py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow">What we care about</p>
          </Reveal>
          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {experience.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <h2 className="border-t border-bronze/60 pt-5 font-display text-xl font-bold uppercase">
                  {f.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={images.fashion}
          alt="Editorial portrait of a man in tailored black"
          loading="lazy"
          width={1408}
          height={912}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 sm:py-36">
          <Reveal>
            <h2 className="display-lg">Your Style Starts Here.</h2>
            <Link
              to="/contact"
              className="mt-10 inline-block bg-bronze px-10 py-4 font-display text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              Book Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
