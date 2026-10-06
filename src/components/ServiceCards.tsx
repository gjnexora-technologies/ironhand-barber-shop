import { Link } from "@tanstack/react-router";
import { services } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function ServiceCards({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {list.map((s, i) => (
        <Reveal key={s.name} delay={(i % 4) * 70} className="h-full">
          <article className="group flex h-full flex-col justify-between bg-background p-8 transition-colors duration-500 hover:bg-charcoal">
            <div>
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-bronze">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight">
                {s.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
            <div className="mt-8">
              <div className="flex items-baseline justify-between border-t border-border pt-5">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.duration}
                </span>
                <span className="serif-accent text-2xl text-beige">{s.price}</span>
              </div>
              <Link
                to="/contact"
                className="mt-5 inline-block font-display text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground underline-offset-8 transition-colors hover:text-bronze hover:underline"
              >
                Book now →
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
