import { Link } from "@tanstack/react-router";

export function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md sm:hidden">
      <Link
        to="/contact"
        className="block bg-bronze py-4 text-center font-display text-sm font-semibold uppercase tracking-[0.26em] text-accent-foreground"
      >
        Book Appointment
      </Link>
    </div>
  );
}
