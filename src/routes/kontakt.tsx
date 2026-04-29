import { createFileRoute } from "@tanstack/react-router";
import PageLayout, { PageHero } from "@/components/PageLayout";
import outdoor from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & åbningstider — Vin Petit No. 12, Esbjerg" },
      { name: "description", content: "Find Vin Petit No. 12 på Kirkegade 12, st. th., 6700 Esbjerg. Telefon 30 70 81 70 · goeboe1965@gmail.com." },
      { property: "og:title", content: "Kontakt & åbningstider — Vin Petit No. 12" },
      { property: "og:description", content: "Adresse, telefon, e‑mail og åbningstider for vinbaren Vin Petit No. 12 i Esbjerg." },
      { property: "og:image", content: outdoor },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <PageLayout
      hero={
        <PageHero
          eyebrow="Find vej"
          title="Kontakt & åbningstider."
          subtitle="Vi ligger midt i Esbjerg — på en af byens smukkeste gader. Vi glæder os til at se dig."
          image={outdoor}
        />
      }
    >
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow mb-4">Besøg os</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--bordeaux)] leading-tight">
              Vin Petit No. 12
            </h2>
            <div className="gold-rule my-8 max-w-[8rem]" />

            <div className="space-y-7 text-lg">
              <div>
                <p className="eyebrow mb-1">Adresse</p>
                <address className="not-italic text-foreground leading-relaxed">
                  Kirkegade 12, st. th.<br />
                  6700 Esbjerg
                </address>
              </div>

              <div>
                <p className="eyebrow mb-1">Telefon</p>
                <a href="tel:+4530708170" className="font-serif text-2xl text-[var(--bordeaux)] hover:text-[var(--gold)] transition">
                  30 70 81 70
                </a>
              </div>

              <div>
                <p className="eyebrow mb-1">E‑mail</p>
                <a href="mailto:goeboe1965@gmail.com" className="text-foreground hover:text-[var(--bordeaux)] transition underline-offset-4 hover:underline">
                  goeboe1965@gmail.com
                </a>
              </div>

              <div>
                <p className="eyebrow mb-1">Reservation</p>
                <p className="text-muted-foreground">
                  Telefonisk torsdag – lørdag kl. 14.00 – 15.00. Gebyr 100 kr., som modregnes på aftenen.
                </p>
              </div>

              <div>
                <p className="eyebrow mb-1">Udendørs servering</p>
                <p className="text-muted-foreground">Når vejret tillader det, dækker vi op i Kirkegade.</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="tel:+4530708170" className="btn-primary">Ring til os</a>
              <a href="mailto:goeboe1965@gmail.com" className="btn-outline" style={{ color: "var(--bordeaux)", borderColor: "var(--bordeaux)" }}>
                Send en e‑mail
              </a>
            </div>
          </div>

          <div className="bg-[var(--secondary)] p-10">
            <p className="eyebrow mb-4">Åbningstider</p>
            <h3 className="font-serif text-3xl text-[var(--bordeaux)] mb-6">Vi har åbent, når der er stemning.</h3>
            <ul className="divide-y divide-[var(--border)] text-foreground">
              {[
                ["Mandag", "Lukket"],
                ["Tirsdag", "Lukket"],
                ["Onsdag", "Lukket"],
                ["Torsdag", "15.00 – 22.00"],
                ["Fredag", "15.00 – 24.00"],
                ["Lørdag", "14.00 – 24.00"],
                ["Søndag", "Lukket"],
              ].map(([d, t]) => (
                <li key={d} className="flex justify-between py-3">
                  <span className="font-serif text-lg">{d}</span>
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-6 italic">
              Åbningstider kan variere ved arrangementer og helligdage. Ring gerne for at være sikker.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="aspect-[16/9] w-full overflow-hidden border border-border">
            <iframe
              title="Kort over Vin Petit No. 12, Kirkegade 12, Esbjerg"
              src="https://www.google.com/maps?q=Kirkegade+12,+6700+Esbjerg&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
