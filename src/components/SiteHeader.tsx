import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/vin-petit-logo.png";

const nav = [
  { to: "/", label: "Forside" },
  { to: "/om", label: "Om Vin Petit" },
  { to: "/menu", label: "Menu" },
  { to: "/arrangementer", label: "Arrangementer" },
  { to: "/reservation", label: "Reservation" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Vin Petit No. 12">
          <img src={logo} alt="Vin Petit No. 12 — Kirkegade Esbjerg" className="h-14 md:h-16 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-cream/85 hover:text-[var(--gold)] text-[0.72rem] tracking-[0.22em] uppercase transition-colors"
              activeProps={{ className: "text-[var(--gold)] text-[0.72rem] tracking-[0.22em] uppercase" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/reservation" className="hidden lg:inline-flex btn-outline">
          Reservér bord
        </Link>

        <button
          aria-label="Menu"
          className="lg:hidden text-cream"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--bordeaux)] border-t border-[var(--gold)]/30">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-cream/90 text-sm tracking-[0.2em] uppercase"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/reservation" className="btn-outline mt-2" onClick={() => setOpen(false)}>
              Reservér bord
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
