<script setup lang="ts">
import { SPAIN_SUPPORT_ITEMS, BRAND } from '@/data/content';
</script>

<template>
  <section id="acompanamiento" class="section">
    <div class="container">
      <div class="section-head center">
        <div>
          <p class="eyebrow">Servicio · 03 · Premium</p>
          <h2>Acompañamiento <em>en España</em>.</h2>
          <p class="lead">
            El servicio que nadie más ofrece: estamos contigo también después del aterrizaje.
            Trámites, gestiones y orientación durante tus primeros meses en el país.
          </p>
        </div>
      </div>

      <article class="premium-svc">
        <div class="premium-side">
          <span class="premium-badge">Tras la llegada</span>
          <h2>Tu primer mes en España, sin <em>perderse</em>.</h2>
          <p class="premium-lead">
            Diseñado para guiarte en los trámites esenciales que definen tu vida en España:
            empadronamiento, NIE, banca, sanidad y todo lo que necesitas para asentarte
            con tranquilidad.
          </p>
          <div class="premium-actions">
            <a :href="BRAND.whatsappLink" class="btn btn-primary">
              Contratar acompañamiento <span class="btn-arrow">→</span>
            </a>
            <a :href="BRAND.whatsappLink" class="btn btn-ghost">
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        <ul class="premium-list" aria-label="Servicios incluidos en el acompañamiento">
          <li v-for="item in SPAIN_SUPPORT_ITEMS" :key="item.num">
            <span class="px-num">{{ item.num }}</span>
            <div class="px-text">
              {{ item.title }}
              <small>{{ item.description }}</small>
            </div>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.premium-svc {
  position: relative;
  background: var(--paper-warm);
  border: 1px solid #DCD5C5;
  border-radius: var(--radius-lg);
  padding: var(--sp-11);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.1fr 1.4fr;
  gap: var(--sp-11);
  align-items: start;
}
.premium-svc::before {
  content: '';
  position: absolute;
  top: -1px; left: -1px; right: -1px;
  height: 4px;
  background: linear-gradient(90deg, var(--blue) 0%, var(--sage) 100%);
}
@media (max-width: 980px) {
  .premium-svc {
    grid-template-columns: 1fr;
    gap: var(--sp-9);
    padding: var(--sp-9) var(--sp-7);
  }
}
.premium-side h2 { margin: 0 0 var(--sp-4); font-size: clamp(28px, 3.4vw, 40px); }
.premium-lead {
  color: var(--blue-ink);
  font-size: var(--fs-17);
  line-height: 1.6;
  max-width: 420px;
  margin: 0;
}
.premium-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  background: var(--blue);
  color: var(--paper);
  border-radius: var(--radius-pill);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: var(--fw-semibold);
  margin-bottom: var(--sp-6);
}
.premium-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--sage);
}
.premium-actions {
  margin-top: var(--sp-7);
  display: flex;
  gap: var(--sp-4);
  flex-wrap: wrap;
}

.premium-list {
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border-top: 1px solid var(--rule);
}
@media (max-width: 640px) { .premium-list { grid-template-columns: 1fr; } }
.premium-list li {
  display: flex;
  gap: var(--sp-4);
  align-items: flex-start;
  padding: 18px 16px 18px 0;
  border-bottom: 1px solid var(--rule);
  transition: padding-left var(--t-base);
}
.premium-list li:hover { padding-left: 6px; }
.px-num {
  flex-shrink: 0;
  font-size: 12px;
  font-weight: var(--fw-semibold);
  color: var(--sage-deep);
  letter-spacing: 0.1em;
  min-width: 28px;
  line-height: 1.5;
}
.px-text {
  font-size: 14.5px;
  color: var(--blue-ink);
  line-height: 1.5;
  font-weight: var(--fw-medium);
  letter-spacing: -0.005em;
}
.px-text small {
  display: block;
  font-size: 12.5px;
  color: var(--mute);
  font-weight: var(--fw-regular);
  margin-top: 3px;
  letter-spacing: 0;
}
</style>
