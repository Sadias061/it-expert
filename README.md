# Service IT

Site vitrine React + Tailwind CSS créé avec Vite pour une structure de prestations informatiques.
La navigation utilise React Router : les pages changent sans rechargement complet,
et l’accueil conserve des sections ancrées pour une lecture fluide.

## Organisation

```text
src/
├── components/    Sections de la page et composants réutilisables
│   ├── icons/      Icônes et identité visuelle
│   └── ui/         Composants d’interface génériques
├── hooks/          Comportements partagés
├── lib/            Helpers
└── pages/          Composition des pages et page 404
```

La charte Tailwind se trouve dans [`tailwind.config.js`](./tailwind.config.js) :
couleurs `primary`, `cyan`, `navy`, `orange`, `page`, `ink` et `muted`, ainsi que
les polices `Cormorant Garamond` et `DM Sans`.

Les expertises principales sont l’infogérance et le support IT, la cybersécurité,
l’infrastructure et les réseaux, ainsi que le conseil et la transformation numérique.
Le menu fixe fonctionne aussi sur mobile.

## Pages

- `/` : accueil et présentation des expertises
- `/services` : détail des prestations
- `/a-propos` : approche et méthode
- `/partenaires` : écosystème de partenaires
- `/blog` : actualités et conseils IT
- `/carrieres` : culture et candidatures
- `/contact` : formulaire de prise de contact

## Démarrage

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
