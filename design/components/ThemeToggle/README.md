# ThemeToggle
Háromállású témaváltó: világos, rendszer, sötét. Alapértelmezés a **rendszer** (`prefers-color-scheme`).

- Választáskor `data-theme="light|dark"` kerül a `<html>`-re, rendszernél az attribútum törlődik.
- A választás `localStorage`-ban marad (`theme` kulcs), try/catch-csel.
- Aktív gomb: `crimson` kitöltés, `on-crimson` ikon.
