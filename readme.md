# learnfront (ta25blearnfront)

Ostunimekirja rakendus: Vue 3 + Vite + Bulma. Käivitus käib **Buniga**, mitte Node.js-iga.

## Nõuded

- [Bun](https://bun.sh) (testitud versiooniga 1.4.0) – Node.js ei ole vajalik

## Käivitamine

```bash
bun install      # sõltuvused
bun run dev      # arendusserver
bun run build    # tootmisjooksutus dist/ kausta
```

Skriptid `dev` ja `build` käivitavad Vite'i `bun --bun vite` kaudu, et see töötaks
Buniga, mitte `node_modules/.bin/vite` shebangist tuleva Node.js-iga.

## Olulisus

Igal asjal on `importance`: `high` (kõrge, punane), `medium` (keskmine, kollane)
või `low` (madal, roheline). [src/importance.js](src/importance.js) sisaldab
tasemete andmeid, Bulma värviklasse ja `sortByImportance()` abifunktsiooni, mida
`App.vue` kasutab kolme nimekirja (All / Done / ToDo) `computed`-ites.
