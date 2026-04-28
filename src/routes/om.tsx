import { createFileRoute, Link } from "@tanstack/react-router";
import PageLayout, { PageHero } from "@/components/PageLayout";
import hero from "@/assets/hero-vinbar.jpg";
import cheers from "@/assets/wine-cheers.jpg";

export const Route = createFileRoute("/om")({
  head: () => ({
    meta: [
      { title: "Om Vin Petit No. 12 — Vinbar på Kirkegade i Esbjerg" },
      { name: "description", content: "Historien bag Vin Petit No. 12 — en lille, stemningsfuld vinbar i Esbjerg med fokus på hygge, kvalitet og nærvær." },
      { property: "og:title", content: "Om Vin Petit No. 12" },
      { property: "og:description", content: "Læs om konceptet, atmosfæren og menneskene bag Vin Petit No. 12 i Esbjerg." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Om,
});

function Om() {
  return (
    <PageLayout
      hero={
        <PageHero
          eyebrow="Vores historie"
          title="Den lille vinbar i Kirkegade"
          subtitle="Vin Petit No. 12 er født af kærligheden til vin, ærlige samtaler og de aftener, hvor tiden glider lidt langsommere."
          image={hero}
        />
      }
    >
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-6">Konceptet</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--bordeaux)] leading-tight">
            En vinbar, der hellere vil være elsket end stor.
          </h2>
          <div className="gold-rule my-10 max-w-xs" />
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Vin Petit No. 12 ligger på Kirkegade — en af Esbjergs smukkeste og mest levende gader. Indenfor møder du et lille rum med varme farver, stearinlys og et udvalg af vine, der er valgt med omhu og fortalt med begejstring.
            </p>
            <p>
              Vi er ikke en restaurant, og vi forsøger ikke at være det. Vi er stedet, hvor du kommer for at slappe af, mødes med en god ven, fejre en lille sejr — eller bare unde dig selv et glas, fordi det er torsdag.
            </p>
            <p>
              Vores menu rummer velvalgte vine, ølmærker og friskbrygget kaffe. Lejlighedsvis afholder vi små arrangementer — vinsmagninger, fyraftenshygge og temaaftener — og når vejret tillader det, rykker vi bordene udenfor i gaden.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--secondary)] py-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">Atmosfæren</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--bordeaux)] leading-tight">
              Hygge, kvalitet og nærvær — i den rækkefølge.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Vi tror på, at en god vinbar handler lige så meget om mennesker som om vin. Derfor lægger vi vægt på, at du føler dig velkommen fra det øjeblik, du træder ind — uanset om du er vinkender eller bare nysgerrig.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Vores gæster er lokale Esbjerg‑borgere, besøgende og alle dem ind imellem. Det er denne blanding, der gør stemningen særlig.
            </p>
          </div>
          <img src={cheers} alt="Stemning med vin og venner" loading="lazy" className="w-full aspect-[4/5] object-cover shadow-xl" />
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl text-[var(--bordeaux)]">Kom forbi og mærk det selv.</h2>
          <p className="mt-4 text-muted-foreground">Kirkegade 12, st. th. — vi glæder os til at se dig.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/reservation" className="btn-primary">Reservér bord</Link>
            <Link to="/menu" className="btn-outline" style={{ color: "var(--bordeaux)", borderColor: "var(--bordeaux)" }}>Se menuen</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
