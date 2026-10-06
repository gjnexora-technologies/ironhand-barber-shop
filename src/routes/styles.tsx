import { createFileRoute } from "@tanstack/react-router";
import { StyleGallery } from "@/components/StyleGallery";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/styles")({
  head: () => ({
    meta: [
      { title: "Style Gallery — Ironhand Barber Studio" },
      {
        name: "description",
        content:
          "Fades, textured cuts, classic styles, beard work and transformations photographed in the Ironhand studio.",
      },
      { property: "og:title", content: "Style Gallery — Ironhand Barber Studio" },
      {
        property: "og:description",
        content: "An editorial gallery of fades, cuts, beard work and transformations.",
      },
    ],
  }),
  component: StylesPage,
});

function StylesPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
      <Reveal>
        <p className="eyebrow">Style Gallery</p>
        <h1 className="mt-4 display-xl">The Work</h1>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
          Filter by category, tap any frame to open it full screen.
        </p>
      </Reveal>
      <div className="mt-16">
        <StyleGallery />
      </div>
    </section>
  );
}
