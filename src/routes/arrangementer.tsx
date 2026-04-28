import { createFileRoute, Link } from "@tanstack/react-router";
import PageLayout, { PageHero } from "@/components/PageLayout";
import outdoor from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/arrangementer")({
  head: () => ({
    meta: [
      { title: "Arrangementer — Vin Petit No. 12 i Esbjerg" },
      { name: "description", content: "Vinsmagninger, temaaftener og små events hos Vin Petit No. 12 på Kirkegade i Esbjerg." },
      { property: "og:title", content: "Arrangementer — Vin Petit No. 12" },
      { property: "og:description", content: "Vi afholder lejlighedsvis vinsmagninger og hyggelige aftener i vores lille vinbar i Esbjerg." },
      { property: "og:image", content: outdoor },
    ],
  }),
  component: Arrangementer,
});

function Arrangementer() {
  return (
    <PageLayout
      hero={
        <PageHero
          eyebrow="Hos Vin Petit"
          title="Aftener, der bliver husket."
          subtitle="Lejlighedsvis åbner vi dørene til små arrangementer — vinsmagninger, temaaftener og uhøjtidelige fester."
          image={outdoor}
        />
      }
    >
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-5">Hvad sker der hos os?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--bordeaux)] leading-tight">
            Små events i en lille bar.
          </h2>
          <div className="gold-rule my-10 max-w-xs" />
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Vin Petit No. 12 er først og fremmest en vinbar — men en gang imellem inviterer vi indenfor til noget særligt. Det kan være en vinsmagning med en vinhandler vi holder af, en aften om en bestemt region, eller bare en hyggelig fyraftenssamling med fokus på en god flaske.
            </p>
            <p>
              Vi annoncerer arrangementer her på siden og direkte i baren. Vil du være sikker på at høre om de næste? Skriv til os, så sender vi dig en besked, når der er nyt.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--secondary)] py-20 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            { t: "Vinsmagninger", d: "En aften, et tema, en håndfuld vine — og en fortælling, der binder det hele sammen." },
            { t: "Temaaftener", d: "Fra Burgundys pinot til Italiens stille klassikere — vi dykker ned i ét emne ad gangen." },
            { t: "Private events", d: "Skal I fejre noget? Vi tager gerne imod mindre, lukkede selskaber. Skriv til os." },
          ].map((c) => (
            <div key={c.t} className="bg-card p-8 border border-border">
              <h3 className="font-serif text-2xl text-[var(--bordeaux)] mb-3">{c.t}</h3>
              <div className="gold-rule w-12 mb-4" />
              <p className="text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <p className="eyebrow mb-4">Kommende arrangementer</p>
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--bordeaux)] max-w-2xl mx-auto">
          Datoer for næste sæsons events bliver offentliggjort løbende.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Følg med i baren eller kontakt os direkte, hvis du vil sættes på listen — eller arrangere noget privat.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link to="/kontakt" className="btn-primary">Kontakt os</Link>
          <a href="tel:+4530708170" className="btn-outline" style={{ color: "var(--bordeaux)", borderColor: "var(--bordeaux)" }}>Ring 30 70 81 70</a>
        </div>
      </section>
    </PageLayout>
  );
}
