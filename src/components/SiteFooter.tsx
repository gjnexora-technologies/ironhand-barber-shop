import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { shop } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-extrabold uppercase tracking-[0.3em]">
              {shop.name}
            </p>
            <p className="mt-4 max-w-xs serif-accent text-xl text-beige">{shop.tagline}</p>
            <div className="mt-6 flex gap-4">
              <a
                href={shop.instagram}
                aria-label="Instagram"
                className="border border-border p-3 text-muted-foreground transition-colors hover:border-bronze hover:text-bronze"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={shop.whatsapp}
                aria-label="WhatsApp"
                className="border border-border p-3 text-muted-foreground transition-colors hover:border-bronze hover:text-bronze"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href={`tel:${shop.phone.replace(/[^+\d]/g, "")}`}
                aria-label="Call the shop"
                className="border border-border p-3 text-muted-foreground transition-colors hover:border-bronze hover:text-bronze"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Studio</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/services" className="transition-colors hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/styles" className="transition-colors hover:text-foreground">
                  Style Gallery
                </Link>
              </li>
              <li>
                <Link to="/barbers" className="transition-colors hover:text-foreground">
                  Our Barbers
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Visit</p>
            <address className="mt-5 space-y-3 text-sm not-italic text-muted-foreground">
              <p>{shop.address}</p>
              <p>{shop.phone}</p>
              <p>{shop.email}</p>
              {shop.hours.map((h) => (
                <p key={h.days}>
                  <span className="text-foreground">{h.days}</span> — {h.time}
                </p>
              ))}
            </address>
          </div>
        </div>

        <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {shop.full}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
