<script setup lang="ts">
import BrandLogo from './BrandLogo.vue';
import { BRAND, FOOTER_COLUMNS } from '@/data/content';

const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <BrandLogo :size="40" />
            <span class="brand-text">{{ BRAND.name }}</span>
          </div>
          <p class="tag">{{ BRAND.tagline }}</p>
          <p class="footer-tagline">
            Asesoría experta de visados para España con acompañamiento real,
            desde el primer documento hasta tu primer mes en el país.
          </p>
        </div>
        <div v-for="col in FOOTER_COLUMNS" :key="col.title">
          <h5>{{ col.title }}</h5>
          <ul class="footer-list">
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© {{ year }} {{ BRAND.name }}</span>
        <span>Servicio 100% online · Trabajamos contigo donde estés</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--blue-ink);
  color: rgba(247, 249, 251, 0.7);
  padding: var(--sp-12) 0 var(--sp-8);
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: var(--sp-10);
  padding-bottom: var(--sp-10);
  border-bottom: 1px solid rgba(168, 195, 176, 0.18);
}
@media (max-width: 860px) {
  .footer-grid { grid-template-columns: 1fr; gap: var(--sp-8); }
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: var(--sp-3);
}
.brand-text {
  color: var(--paper);
  font-size: var(--fs-22);
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-snug);
}
.tag {
  color: var(--sage);
  font-size: var(--fs-13);
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  margin: 0 0 var(--sp-5);
}
.footer-tagline {
  margin: 0;
  max-width: 360px;
  color: rgba(247, 249, 251, 0.6);
  font-size: var(--fs-14);
  line-height: 1.6;
}
footer h5 {
  color: var(--paper);
  font-size: var(--fs-13);
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  margin: 0 0 var(--sp-5);
}
.footer-list {
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  font-size: var(--fs-14);
}
.footer-list a { color: rgba(247, 249, 251, 0.7); }
.footer-list a:hover { color: var(--sage); }
.footer-bottom {
  padding-top: var(--sp-7);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--sp-4);
  font-size: var(--fs-12);
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: rgba(247, 249, 251, 0.4);
}
</style>
