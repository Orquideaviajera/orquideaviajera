<script setup lang="ts">
import BrandLogo from './BrandLogo.vue';
import { BRAND, NAV_LINKS } from '@/data/content';
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a href="#" class="brand-link" :aria-label="`${BRAND.name} — Inicio`">
        <BrandLogo :size="36" />
        <span class="brand-text">
          <span class="b">Orquídea</span>
          <span class="l">Viajera</span>
        </span>
      </a>
      <nav class="nav-links" aria-label="Principal">
        <a v-for="link in NAV_LINKS" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>
      <a :href="BRAND.whatsappLink" class="btn btn-primary nav-cta">
        {{ BRAND.whatsappCta }}
        <span class="btn-arrow">→</span>
      </a>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--rule);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  padding-bottom: 18px;
  gap: var(--sp-7);
}
.brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}
.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.brand-text .b {
  font-size: 17px;
  font-weight: var(--fw-semibold);
  color: var(--blue-ink);
  letter-spacing: -0.01em;
}
.brand-text .l {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--sage-deep);
  font-weight: var(--fw-medium);
  margin-top: 2px;
}
.nav-links {
  display: flex;
  gap: var(--sp-7);
}
.nav-links a {
  font-size: var(--fs-14);
  color: var(--blue-ink);
  font-weight: var(--fw-medium);
  letter-spacing: var(--ls-wide);
}
.nav-links a:hover { color: var(--blue); }
.nav-cta { padding: 10px 20px; }

@media (max-width: 980px) {
  .nav-links { display: none; }
}
@media (max-width: 600px) {
  .nav-cta { display: none; }
}
</style>
