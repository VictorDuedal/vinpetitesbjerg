import { createFileRoute, Link } from "@tanstack/react-router";
import PageLayout, { PageHero } from "@/components/PageLayout";
import board from "@/assets/menu-board.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Vin, øl og kaffe · Vin Petit No. 12, Esbjerg" },
      { name: "description", content: "Vores udvalg af velvalgte vine, kendte ølmærker og god kaffe på Vin Petit No. 12 i Esbjerg." },
      { property: "og:title", content: "Menu — Vin Petit No. 12" },
      { property: "og:description", content: "Velvalgte vine, kendte ølmærker og friskbrygget kaffe i Kirkegade i Esbjerg." },
      { property: "og:image", content: board },
    ],
  }),
  component: Menu,
});

const sections = [
  {
    title: "Vin",
    intro: "Et udvalg, der ændrer sig med årstiden og vores nysgerrighed. Spørg os gerne om en anbefaling.",
    items: [
      { name: "Hvidvin", desc: "Friske, mineralske og fyldige stilarter — fra Loire til Rheingau." },
      { name: "Rødvin", desc: "Lette pinot’er, varme rhônes og klassiske toscanere." },
      { name: "Rosé & orange", desc: "Tørt og elegant — perfekt til de lyse aftener." },
      { name: "Bobler", desc: "Champagne, crémant og udvalgte cava’er — for de små og store anledninger." },
      { name: "Dessertvin & sherry", desc: "Til osten, til chokoladen — eller bare til snakken." },
    ],
  },
  {
    title: "Øl",
    intro: "Kendte ølmærker — kolde, klassiske og altid velkomne.",
    items: [
      { name: "Pilsner", desc: "Den klassiske, sprøde fadøl." },
      { name: "Specialøl", desc: "Et lille udvalg af IPA, weissbier og mørke øl." },
      { name: "Alkoholfri", desc: "For den, der hellere vil tage bilen hjem." },
    ],
  },
  {
    title: "Kaffe & varme drikke",
    intro: "Friskbrygget kaffe og en rolig pause i hverdagen.",
    items: [
      { name: "Espresso & americano", desc: "Bryg af friskmalede bønner." },
      { name: "Cappuccino & latte", desc: "Med blød, varm mælkeskum." },
      { name: "Te", desc: "Et lille, omhyggeligt udvalg." },
    ],
  },
];

function Menu() {
  return (
    <PageLayout
      hero={
        <PageHero
          eyebrow="Vores kort"
          title="Velvalgte vine, kendte ølmærker og god kaffe."
          subtitle="Et lille kort, men et med omtanke. Spørg os gerne — vi anbefaler hjertens gerne."
          image={board}
        />
      }
    >
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-3xl space-y-20">
          {sections.map((s) => (
            <div key={s.title}>
              <p className="eyebrow mb-3">Kategori</p>
              <h2 className="font-serif text-5xl text-[var(--bordeaux)]">{s.title}</h2>
              <div className="gold-rule my-6 max-w-[8rem]" />
              <p className="text-muted-foreground italic mb-10 max-w-2xl">{s.intro}</p>

              <ul className="divide-y divide-[var(--border)]">
                {s.items.map((it) => (
                  <li key={it.name} className="py-5 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                    <span className="font-serif text-2xl text-foreground">{it.name}</span>
                    <span className="text-muted-foreground md:text-right md:max-w-md">{it.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground italic">
              Priser oplyses i baren og opdateres løbende. Sammensætningen af vores kort kan variere efter sæson og leverancer.
            </p>
            <Link to="/reservation" className="btn-primary mt-8 inline-flex">Reservér bord</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
