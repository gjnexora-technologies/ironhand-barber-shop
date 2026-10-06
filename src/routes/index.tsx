import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { images, shop, experience, barbers } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { ServiceCards } from "@/components/ServiceCards";
import { StyleGallery } from "@/components/StyleGallery";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ironhand Barber Studio — Sharp Cuts. Strong Identity." },
      {
        name: "description",
        content:
          "A premium barber and grooming studio. Precision fades, classic cuts and beard work — book your appointment at Ironhand.",
      },
      { property: "og:title", content: "Ironhand Barber Studio — Sharp Cuts. Strong Identity." },
      {
        property: "og:description",
        content: "Precision fades, classic cuts and beard work at a premium grooming studio.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={images.hero}
          alt="Man with a sharp fade and groomed beard in the Ironhand studio"
          width={1600}
          height={1200}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="fade-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-background/35" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
          <Reveal>
            <p className="eyebrow">{shop.full}</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 display-xl max-w-4xl">
              Sharp Cuts.
              <br />
              Strong <span className="serif-accent normal-case text-beige">Identity.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              A grooming studio built for people who treat their haircut as part of how they dress.
              Precision work, modern styling, no rush.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="bg-bronze px-9 py-4 text-center font-display text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-accent-foreground transition-opacity duration-300 hover:opacity-90"
              >
                Book an Appointment
              </Link>
              <Link
                to="/styles"
                className="border border-foreground/40 px-9 py-4 text-center font-display text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-foreground transition-colors duration-300 hover:border-bronze hover:text-bronze"
              >
                Explore Styles
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured styles */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Featured</p>
            <h2 className="mt-4 display-lg">The Signature Cuts</h2>
          </div>
          <Link
            to="/styles"
            className="group inline-flex items-center gap-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-bronze"
          >
            Full gallery
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <div className="mt-14">
          <StyleGallery limit={3} />
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border bg-charcoal py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 display-lg max-w-2xl">Everything, Done Properly</h2>
          </Reveal>
          <div className="mt-14">
            <ServiceCards limit={4} />
          </div>
          <Reveal delay={120}>
            <Link
              to="/services"
              className="mt-10 inline-block border border-border px-8 py-4 font-display text-[0.7rem] font-semibold uppercase tracking-[0.24em] transition-colors hover:border-bronze hover:text-bronze"
            >
              View all services
            </Link>
          </Reveal>
        </div>
      </section>

      {/* About the studio */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="hover-zoom border border-border">
            <img
              src={images.studio}
              alt="Interior of the Ironhand barber studio with black leather chairs"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">The Studio</p>
            <h2 className="mt-4 display-lg">More Than a Haircut.</h2>
            <p className="mt-8 serif-accent text-2xl leading-snug text-beige">
              We start with how you dress, how you move, and how much time you want to spend on your
              hair in the morning.
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Then we cut. Slowly, precisely, and with the finish checked from every angle before
              you leave the chair.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-block font-display text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground underline-offset-8 transition-colors hover:text-bronze hover:underline"
            >
              Our story →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Fashion campaign */}
      <section className="relative overflow-hidden border-y border-border">
        <img
          src={images.fashion}
          alt="Man in tailored black walking past a concrete wall"
          loading="lazy"
          width={1408}
          height={912}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
          <Reveal>
            <h2 className="display-lg max-w-xl">Your Style Starts Here.</h2>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {["Precision.", "Confidence.", "Individuality.", "Style."].map((word, i) => (
              <Reveal key={word} delay={i * 90}>
                <p className="border-t border-bronze/60 pt-5 font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                  {word}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="eyebrow">The Experience</p>
          <h2 className="mt-4 display-lg max-w-2xl">Built Around the Chair</h2>
        </Reveal>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {experience.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-bronze">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-xl font-bold uppercase">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Barbers */}
      <section className="border-y border-border bg-charcoal py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow">Our Barbers</p>
            <h2 className="mt-4 display-lg">The Hands Behind It</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {barbers.map((b, i) => (
              <Reveal key={b.name} delay={i * 90}>
                <Link to="/barbers" className="hover-zoom block border border-border">
                  <img
                    src={b.image}
                    alt={`${b.name}, ${b.specialty}`}
                    loading="lazy"
                    width={912}
                    height={1104}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </Link>
                <h3 className="mt-5 font-display text-lg font-bold uppercase">{b.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-bronze">{b.specialty}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Testimonials />
        </Reveal>
      </section>

      {/* Booking CTA */}
      <section className="border-t border-border bg-charcoal py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="display-lg">Ready for a Fresh Cut?</h2>
            <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
              Pick a service, choose your barber, and we'll confirm your slot by phone.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="bg-bronze px-10 py-4 font-display text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${shop.phone.replace(/[^+\d]/g, "")}`}
                className="border border-border px-10 py-4 font-display text-[0.72rem] font-semibold uppercase tracking-[0.26em] transition-colors hover:border-bronze hover:text-bronze"
              >
                Call the Shop
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
