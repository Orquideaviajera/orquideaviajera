# Orquídea Viajera · Web

Landing page corporativa de **Orquídea Viajera** — asesoría de visados para España y acompañamiento post-llegada.

Construida con **Vue 3 + Vite + TypeScript** siguiendo el design system propio de la marca (Montserrat, paleta azul profundo + salvia + papel cálido) y enfocada en conversión.

---

## Stack

- **Vue 3** (Composition API · `<script setup>`)
- **Vite** + **TypeScript** estricto
- **CSS utility inline** propio (al estilo Bulma simplificado, sin frameworks externos)
- **Sin tests** (por requerimiento)
- **Dockerizado** (multi-stage build → Nginx Alpine)

---

## Estructura

```
app/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BrandLogo.vue
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── ProblemSection.vue
│   │   ├── SolutionSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── ServiceCard.vue           ← reutilizable
│   │   ├── VisaTourismCard.vue
│   │   ├── VisaStudyCard.vue
│   │   ├── SpainSupportService.vue   ← servicio destacado
│   │   ├── ProcessTimeline.vue
│   │   ├── DifferentiatorSection.vue
│   │   ├── CTASection.vue
│   │   └── FooterSection.vue
│   ├── data/
│   │   └── content.ts                ← contenido centralizado
│   ├── styles/
│   │   ├── tokens.css                ← variables de marca
│   │   ├── utilities.css             ← clases utility
│   │   └── base.css                  ← reset + tipografía + botones
│   ├── types/
│   │   └── index.ts                  ← tipos compartidos
│   ├── App.vue
│   └── main.ts
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build de producción

```bash
npm run build
npm run preview
```

## Docker

### Producción (build optimizado servido por Nginx)

```bash
docker compose up --build
# → http://localhost:3000
```

### Desarrollo con hot-reload dentro del contenedor

```bash
docker compose --profile dev up dev
# → http://localhost:3000
```

---

## Servicio destacado: Acompañamiento en España

Bloque diferenciador que incluye:

1. Empadronamiento en el municipio correspondiente
2. Solicitud de NIE / TIE
3. Apertura de cuenta bancaria
4. Acceso al sistema sanitario público
5. Homologación de títulos académicos
6. Registro en extranjería según el tipo de visa
7. Orientación básica para la vida en España
8. Soporte continuo por WhatsApp

---

## Design System

- **Tipografía:** Montserrat (300/400/500/600/700/800)
- **Colores principales:** `#2F5D8C` azul · `#A8C3B0` salvia · `#0F1F33` tinta · `#F4F1EA` papel cálido
- **Tokens:** ver `src/styles/tokens.css`
- **Utilities:** ver `src/styles/utilities.css`

---

## Calidad de código

- Componentes pequeños y enfocados
- Props tipadas (`defineProps<T>()`)
- Datos desacoplados en `data/content.ts`
- Tipos compartidos en `types/index.ts`
- `vue-tsc` valida types en cada `npm run build`
- Mobile-first con breakpoints en 600 / 860 / 980 / 1100 px
