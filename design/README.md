# VL Crimson

A varga-levente.com design rendszere. Merész, szögletes, piros a feketén: két inspiráció keveréke. Az elsőből jön a hangulat (óriás condensed tipográfia, crimson akcentus, hajszálvonalak, szögletes képek), a másodikból a szerkezet (szolgáltatás-kártyák, idővonal, kontakt űrlap, tech ikonsor, stat-kártya).

## Hang és tartalom

- Az oldal angol nyelvű. Rövid, egyenes mondatok, első személyben („I build…”).
- Csak valós adat: a projektek, technológiák és számok a repóból jönnek (10 projekt, 13 nyelv és keretrendszer, 2 saját vállalkozás). Kitalált ügyfélszám, értékelés vagy testimonial nincs.
- A kézírásos „Hello, I'm” helyett kód-komment: `// hello, I'm`. Ez a fejlesztői identitás jele, eyebrow-ként is így használjuk (`// software developer`).
- Emoji nincs.

## Vizuális alapok

- **Szín:** a sötét téma az elsődleges, a világos egyenrangú párja. Alapértelmezés a rendszer beállítása, a toggle felülírja. A `crimson` kitöltésre és óriás szövegre való; kis piros szöveg mindig `crimson-text`. Szöveg crimson felületen: `on-crimson`.
- **Tipográfia:** Anton (display, csupa nagybetű), Archivo (szöveg), JetBrains Mono (címkék, nav, gombok, számozás). Az óriás háttérszó (`display-xl`) oldalanként egyszer.
- **Forma:** a rendszer szögletes (`radius-none`) képeknél és paneleknél. `radius-sm` gombokon, tageken, inputokon; `radius-md` csak a szolgáltatás-kártyán, űrlap-panelen, stat-kártyán és tech ikonon; `radius-full` ikon-körökön.
- **Vonalak, nem árnyék:** elválasztás `line` hajszálvonallal. Egyetlen árnyék a `shadow-glow` a hero portré mögött, egy crimson fénygyűrűvel együtt (lásd Fotó).
- **Számozás:** `01 02 03` csak ahol a sorrend valódi (kiemelt projektek sorrendje, munkafolyamat lépései).
- **Mozgás:** visszafogott. Nyilak 3–4px-et csúsznak hoverre, kártyák 2px-et emelkednek. `prefers-reduced-motion` mellett nincs mozgás.

## Elrendezés

Max szélesség 1200px, oldalsó margó min. 16px. Szekciók közt `space-9` (mobilon `space-8`). Szekció-fejléc: cím + hajszálvonal + opcionális link (`SectionHeader`).

Főoldal sorrend: Hero (háttérszó, név, stat-kártya, tech ikonsor) → Kiemelt projektek → Szolgáltatások → Tapasztalat és tanulmányok (idővonal) + Munkafolyamat + Idézet panel → Kontakt (elérhetőségek + űrlap) → Footer.

## Fotó

A portré piros duotone kezelést kap: fekete-fehér (`grayscale(1) contrast(1.2) brightness(1.1)`), rajta `crimson` → `crimson-deep` átmenet `mix-blend-mode: multiply`-jal, 85%-on. Kör alakú kivágás (`radius-full`), körülötte 2px crimson fénygyűrű (`shadow-glow`). Így bármilyen fotó illeszkedik mindkét témához.

## Ikonok

Vonalas, 1.8px stroke, `currentColor`, 18–20px. Az élő oldalon a már használt `react-icons` csomag (Feather / Heroicons outline stílus) megfelel.

## Használat

Tokenek: `tokens.json` (a generált `tokens.css` CSS változókat ad: `--bg`, `--crimson`, `--space-5`, `--radius-md`, `--font-display`…). Komponens-stílusok: `components/bundle.css`, `vl-` előtagú osztályok, React nem kell hozzájuk. Betűk: Google Fonts (Anton, Archivo 400–700, JetBrains Mono 400–500).

Tailwind-hez a tokenek a `tailwind.config.js` `theme.extend` alá mennek CSS változóként (`colors: { crimson: 'var(--crimson)' }`).

## Fájlok ebben a mappában

- `tokens.json`, `tokens.css`: tokenek (a CSS-ben világos/sötét téma, `data-theme` felülírással).
- `components/bundle.css` és `components/*/`: komponens-stílusok, előnézetek, irányelvek.
- `mockup.html`: a főoldal látványterve (böngészőben megnyitható; az élő oldalt nem érinti).
- `mockup-mono.html`: alternatív, fekete-fehér minimál látványterv (önálló, nem a VL Crimson tokeneket használja).
- Élő változat: https://claude.ai/artifact/CGoY8ZWMCagKN2cosRjstv (design system), https://claude.ai/artifact/6ZzySYBgGkgQNzy5v3kdXM (látványterv), https://claude.ai/artifact/MnJF8yNHWYFdj673wmWz54 (monokróm látványterv).
