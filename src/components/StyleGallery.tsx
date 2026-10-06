import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { gallery, galleryCategories, type GalleryCategory } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function StyleGallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = gallery.filter((g) => filter === "All" || g.category === filter);
  const shown = limit ? items.slice(0, limit) : items;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % shown.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + shown.length) % shown.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, shown.length]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setFilter(c);
              setActive(null);
            }}
            className={cn(
              "border px-4 py-2 font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300",
              filter === c
                ? "border-bronze bg-bronze text-accent-foreground"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {shown.map((item, i) => (
          <Reveal key={`${item.src}-${i}`} delay={(i % 3) * 80}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="hover-zoom group relative block w-full break-inside-avoid border border-border"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={cn("w-full object-cover", item.tall ? "aspect-[3/4]" : "aspect-[4/3]")}
              />
              <span className="pointer-events-none absolute inset-0 bg-background/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-5 left-5 translate-y-2 text-left font-display text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.category}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && shown[active] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Style image"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/97 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setActive(null)}
          >
            <X className="size-7" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 p-2 text-muted-foreground hover:text-foreground sm:left-8"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => ((i ?? 0) - 1 + shown.length) % shown.length);
            }}
          >
            <ChevronLeft className="size-8" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[86vh] max-w-4xl">
            <img
              src={shown[active].src}
              alt={shown[active].alt}
              className="max-h-[78vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              {shown[active].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 p-2 text-muted-foreground hover:text-foreground sm:right-8"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => ((i ?? 0) + 1) % shown.length);
            }}
          >
            <ChevronRight className="size-8" />
          </button>
        </div>
      )}
    </div>
  );
}
