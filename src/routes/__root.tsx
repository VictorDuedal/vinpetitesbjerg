import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="font-serif text-5xl text-[var(--bordeaux)]">Siden findes ikke</h1>
        <p className="mt-4 text-muted-foreground">
          Den side, du leder efter, er flyttet — eller har aldrig eksisteret.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">Tilbage til forsiden</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vin Petit No. 12 - Vinbar i Esbjerg" },
      { name: "description", content: "Stemningsfuld vinbar på Kirkegade i Esbjerg. Velvalgte vine, kendte ølmærker og god kaffe." },
      { name: "author", content: "Vin Petit No. 12" },
      { property: "og:title", content: "Vin Petit No. 12 - Vinbar i Esbjerg" },
      { property: "og:description", content: "Stemningsfuld vinbar på Kirkegade i Esbjerg. Velvalgte vine, kendte ølmærker og god kaffe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Vin Petit No. 12 - Vinbar i Esbjerg" },
      { name: "twitter:description", content: "Stemningsfuld vinbar på Kirkegade i Esbjerg. Velvalgte vine, kendte ølmærker og god kaffe." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/omfZQl5qloPcq1P0kMiwUV4mw2o1/social-images/social-1777374185769-484091917_10233797053403392_5657467761688464307_n.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/omfZQl5qloPcq1P0kMiwUV4mw2o1/social-images/social-1777374185769-484091917_10233797053403392_5657467761688464307_n.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
