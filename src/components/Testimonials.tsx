import { useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i]!;

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="flex justify-center gap-1">
        {Array.from({ length: t.rating }).map((_, s) => (
          <Star key={s} className="size-4 fill-bronze text-bronze" />
        ))}
      </div>
      <blockquote className="mt-8 serif-accent text-2xl leading-snug text-beige sm:text-4xl">
        “{t.quote}”
      </blockquote>
      <p className="mt-8 font-display text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        {t.name}
      </p>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
          className="border border-border p-3 text-muted-foreground transition-colors hover:border-bronze hover:text-bronze"
        >
          <ArrowLeft className="size-4" />
        </button>
        <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">
          {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setI((v) => (v + 1) % testimonials.length)}
          className="border border-border p-3 text-muted-foreground transition-colors hover:border-bronze hover:text-bronze"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
