import { createFileRoute, Link } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import hero from "@/assets/hero-vinbar.jpg";
import cheers from "@/assets/wine-cheers.jpg";
import outdoor from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vin Petit No. 12 — Stemningsfuld vinbar i Esbjerg" },
      { name: "description", content: "Lille, hyggelig vinbar på Kirkegade 12 i Esbjerg. Velvalgte vine, ølmærker og god kaffe i en uhøjtidelig og elegant atmosfære." },
      { property: "og:title", content: "Vin Petit No. 12 — Vinbar i Esbjerg" },
      { property: "og:description", content: "Hygge, kvalitet og nærvær midt i Esbjerg. Vin, øl og kaffe i en stemningsfuld vinbar på Kirkegade 12." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
        <img src={hero} alt="Vin Petit No. 12 — interiør med stearinlys og vinflasker" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />
        <div className="relative mx-auto max-w-7xl px-6 text-[var(--cream)] w-full">
          <p className="eyebrow text-[var(--gold)] mb-6">Vinbar · Esbjerg · Siden hjertet</p>
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] max-w-4xl">
            En lille vinbar<br />med store stunder.
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-cream/85 leading-relaxed font-light">
            Velkommen til Vin Petit No. 12 — en stemningsfuld vinbar i Kirkegade midt i Esbjerg. Velvalgte vine, ølmærker og god kaffe i en uhøjtidelig atmosfære.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/reservation" className="btn-primary">Reservér bord</Link>
            <Link to="/kontakt" className="btn-outline">Besøg os</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-[0.4em] uppercase">Kirkegade 12 · 6700 Esbjerg</div>
      </section>

      {/* Velkomst */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6">Velkommen indenfor</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[var(--bordeaux)]">
            Et glas vin, et venligt smil og en stund, der bliver hængende.
          </h2>
          <div className="gold-rule my-10 mx-auto max-w-xs" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vin Petit No. 12 er et lille frirum i en af Esbjergs bedste gader. Vi tror på det enkle: gode råvarer i glasset, varmt lys, ærlig snak og et personale, der gerne deler en anbefaling. Kom forbi efter arbejde, før middagen — eller bliv hele aftenen.
          </p>
        </div>
      </section>

      {/* Tre kolonner */}
      <section className="bg-[var(--secondary)] py-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-12">
          {[
            { t: "Vin", d: "Et omhyggeligt udvalgt kort med vine fra både klassiske og nye huse — fortalt med passion og uden løftet pegefinger." },
            { t: "Øl & kaffe", d: "Kendte ølmærker til den, der foretrækker en kold én — og friskbrygget kaffe, når dagen kalder på en pause." },
            { t: "Stemning", d: "Stearinlys, varme toner og en uhøjtidelig ro. Når vejret tillader det, dækker vi op udenfor i Kirkegade." },
          ].map((c) => (
            <div key={c.t} className="text-center">
              <h3 className="font-serif text-3xl text-[var(--bordeaux)] mb-3">{c.t}</h3>
              <div className="gold-rule mx-auto w-16 mb-5" />
              <p className="text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Billede + tekst */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <img src={cheers} alt="To gæster skåler med rødvin på Vin Petit No. 12" loading="lazy" className="w-full aspect-square object-cover shadow-xl" />
          <div>
            <p className="eyebrow mb-4">Skål for de små stunder</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--bordeaux)] leading-tight">
              Hverdage bliver bedre med et godt glas vin.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Hos os er der plads til både den hurtige fyraftensvin og den lange aften med vennerne. Vi byder ind med anbefalinger, hvis du vil — og lader dig være, hvis du hellere vil være i fred.
            </p>
            <Link to="/menu" className="btn-primary mt-8">Se menuen</Link>
          </div>
        </div>
      </section>

      {/* Udendørs */}
      <section className="relative py-32 px-6 overflow-hidden">
        <img src={outdoor} alt="Udendørs servering i Kirkegade i Esbjerg" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--bordeaux)]/75" />
        <div className="relative mx-auto max-w-3xl text-center text-[var(--cream)]">
          <p className="eyebrow text-[var(--gold)] mb-5">Når solen står på Kirkegade</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">Udendørs servering, når vejret tillader det.</h2>
          <p className="mt-6 text-cream/85 text-lg">
            Find en plads i solen, lyt til byens summen — og lad et glas køligt hvidt gøre eftermiddagen lidt længere.
          </p>
          <Link to="/kontakt" className="btn-outline mt-10">Sådan finder du os</Link>
        </div>
      </section>
    </PageLayout>
  );
}
