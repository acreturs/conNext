# nextria — Next.js Website

KI-Beratung aus München · Landing Page als Next.js 14 (App Router) Projekt.

## Quick start

```bash
# 1. Dependencies installieren
npm install

# 2. Lokal entwickeln (mit Hot Reload)
npm run dev
# → http://localhost:3000

# 3. Produktions-Build testen
npm run build
npm run start
```

## Deployment auf Vercel

### Option 1 — via GitHub (empfohlen)

```bash
git init
git add .
git commit -m "Initial nextria site"
git branch -M main
git remote add origin https://github.com/DEIN-USER/nextria-website.git
git push -u origin main
```

Dann auf [vercel.com/new](https://vercel.com/new) → "Import Git Repository" →
Repo auswählen → **Deploy**. Vercel erkennt Next.js automatisch.

Jeder `git push` auf `main` deployed neu.

### Option 2 — via Vercel CLI

```bash
npx vercel
```

### Eigene Domain (z.B. nextria.de)

Im Vercel-Dashboard → Project Settings → **Domains** → Domain hinzufügen.
DNS-Einträge beim Domain-Anbieter (Strato/IONOS) hinterlegen. SSL automatisch.

## Projektstruktur

```
app/
  layout.jsx         # HTML-Hülle, Fonts (Geist), Metadata
  page.jsx           # Startseite — komponiert alle Sektionen
  globals.css        # Komplettes Design-System (CSS Custom Properties)
  components/
    Nav.jsx          # Sticky Nav mit Scroll-Border
    Hero.jsx         # Zentrierter Hero
    Timeline.jsx     # Scroll-getriebener Zeitstrahl
    Services.jsx     # 2×2 Leistungs-Grid
    About.jsx        # Über nextria
    CTA.jsx          # Calendly-Embed
    Footer.jsx
```

## Stack

- Next.js 14 (App Router)
- React 18
- Geist Sans + Mono (via `geist` package)
- Vanilla CSS mit Custom Properties (keine Tailwind/CSS-in-JS Abhängigkeit)

## Was anpassen?

- **Farben & Typo**: `app/globals.css` ganz oben (`:root` Tokens)
- **Inhalte**: Direkt in den `app/components/*.jsx` Dateien
- **Calendly-Link**: `app/components/CTA.jsx` und `app/components/Footer.jsx`
- **SEO / Open Graph**: `app/layout.jsx` (Metadata-Objekt)

## TODO vor Live-Gang

- [ ] Impressum-Seite (`app/impressum/page.jsx`) — DE Pflicht
- [ ] Datenschutzerklärung (`app/datenschutz/page.jsx`) — DE Pflicht, inkl. Calendly-Hinweis
- [ ] Echtes Favicon in `app/icon.png` (Next.js 14 erkennt das automatisch)
- [ ] Open-Graph-Bild in `app/opengraph-image.png` (1200×630)
# conNext
