import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageLayout({
  children,
  hero,
}: {
  children: React.ReactNode;
  hero?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      {hero}
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 md:pb-24 text-[var(--cream)]">
        <p className="eyebrow text-[var(--gold)] mb-4">{eyebrow}</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-xl text-cream/80 text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
