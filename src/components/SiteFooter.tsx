import { Link } from "@tanstack/react-router";

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--bordeaux)] text-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-3xl mb-2">Vin Petit</h3>
          <p className="eyebrow text-[var(--gold)] mb-4">No. 12 · Esbjerg</p>
          <p className="text-cream/75 text-sm leading-relaxed max-w-xs">
            En lille vinbar med store stunder. Velvalgte vine, kendte ølmærker og god kaffe — midt i en af Esbjergs smukkeste gader.
          </p>
        </div>

        <div>
          <p className="eyebrow text-[var(--gold)] mb-4">Find os</p>
          <address className="not-italic text-sm text-cream/85 leading-relaxed">
            Kirkegade 12, st. th.<br />
            6700 Esbjerg<br /><br />
            <a href="tel:+4530708170" className="hover:text-[var(--gold)] transition">30 70 81 70</a><br />
            <a href="mailto:goeboe1965@gmail.com" className="hover:text-[var(--gold)] transition">goeboe1965@gmail.com</a>
          </address>
        </div>

        <div>
          <p className="eyebrow text-[var(--gold)] mb-4">Genveje</p>
          <ul className="space-y-2 text-sm text-cream/85">
            <li><Link to="/menu" className="hover:text-[var(--gold)]">Menu</Link></li>
            <li><Link to="/arrangementer" className="hover:text-[var(--gold)]">Arrangementer</Link></li>
            <li><Link to="/reservation" className="hover:text-[var(--gold)]">Reservation</Link></li>
            <li><Link to="/kontakt" className="hover:text-[var(--gold)]">Kontakt & åbningstider</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--gold)]/25">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-cream/60 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Vin Petit No. 12 · Esbjerg</span>
          <span className="tracking-[0.25em] uppercase">Hygge · Kvalitet · Nærvær</span>
        </div>
      </div>
    </footer>
  );
}
