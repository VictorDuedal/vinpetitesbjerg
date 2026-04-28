import { createFileRoute, Link } from "@tanstack/react-router";
import PageLayout, { PageHero } from "@/components/PageLayout";
import hero from "@/assets/hero-vinbar.jpg";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Reservation — Vin Petit No. 12 i Esbjerg" },
      { name: "description", content: "Reservér bord på Vin Petit No. 12 i Esbjerg. Reservation tages torsdag–lørdag kl. 14.00–15.00 på telefon 30 70 81 70." },
      { property: "og:title", content: "Reservation — Vin Petit No. 12" },
      { property: "og:description", content: "Sådan reserverer du bord i vores lille vinbar på Kirkegade 12 i Esbjerg." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Reservation,
});

function Reservation() {
  return (
    <PageLayout
      hero={
        <PageHero
          eyebrow="Reservation"
          title="Sikr dig en plads ved bordet."
          subtitle="Vi er en lille bar — og vi vil gerne være sikre på, at der er en god plads til dig."
          image={hero}
        />
      }
    >
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="bg-card border border-border p-10 md:p-14 text-center shadow-sm">
            <p className="eyebrow mb-4">Sådan reserverer du</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--bordeaux)] leading-tight">
              Ring til os og hør, hvad vi kan finde på.
            </h2>
            <div className="gold-rule my-8 mx-auto max-w-[10rem]" />

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto mt-10">
              <div>
                <p className="eyebrow mb-2">Telefontid</p>
                <p className="font-serif text-2xl text-foreground">Torsdag – lørdag</p>
                <p className="text-muted-foreground">kl. 14.00 – 15.00</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Ring til</p>
                <a href="tel:+4530708170" className="font-serif text-2xl text-[var(--bordeaux)] hover:text-[var(--gold)] transition">
                  30 70 81 70
                </a>
                <p className="text-muted-foreground">Vi glæder os til at høre fra dig.</p>
              </div>
            </div>

            <div className="gold-rule my-10 mx-auto max-w-xs" />

            <div className="bg-[var(--secondary)] p-6 md:p-8 text-left">
              <p className="eyebrow mb-3">Reservationsgebyr</p>
              <p className="text-foreground leading-relaxed">
                Ved reservation opkræves et gebyr på <span className="font-medium text-[var(--bordeaux)]">100 kr.</span> Beløbet modregnes naturligvis i din regning på aftenen.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Skulle du blive forhindret, sætter vi pris på en hurtig besked, så vi kan tilbyde pladsen videre.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a href="tel:+4530708170" className="btn-primary">Ring og reservér</a>
              <Link to="/kontakt" className="btn-outline" style={{ color: "var(--bordeaux)", borderColor: "var(--bordeaux)" }}>
                Find os på kortet
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
            Drop‑in er altid velkomment — så længe der er plads. Til større selskaber anbefaler vi altid at ringe i forvejen.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
