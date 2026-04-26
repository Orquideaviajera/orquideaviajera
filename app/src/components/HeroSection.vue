<script setup lang="ts">
import { BRAND } from '@/data/content';
</script>

<template>
  <section class="hero">
    <div class="container hero-inner">
      <p class="eyebrow">Asesoría de visados · España</p>
      <h1>
        Hacemos tu camino a España<br />
        más <em>seguro y sencillo</em>.
      </h1>
      <p class="hero-lead">
        Te acompañamos desde la primera evaluación hasta la resolución del visado y los
        primeros meses en España. Sin sobresaltos, sin sorpresas.
      </p>
      <div class="hero-actions">
        <a :href="BRAND.whatsappLink" class="btn btn-primary">
          {{ BRAND.whatsappCta }} <span class="btn-arrow">→</span>
        </a>
        <a href="#servicios" class="btn btn-ghost">Ver servicios</a>
      </div>
      <div class="hero-meta">
        <span>Turismo</span>
        <span>·</span>
        <span>Estudios</span>
        <span>·</span>
        <span>Acompañamiento en España</span>
        <span>·</span>
        <span>100% online</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: var(--sp-14) 0 var(--sp-13);
  background:
    radial-gradient(circle at 20% 0%, rgba(168, 195, 176, 0.18), transparent 50%),
    radial-gradient(circle at 90% 100%, rgba(47, 93, 140, 0.08), transparent 60%),
    var(--paper);
}
.hero-inner { max-width: 880px; }
.hero-lead {
  font-size: var(--fs-18);
  color: var(--mute);
  line-height: 1.6;
  max-width: 620px;
  margin: var(--sp-6) 0 var(--sp-9);
}
.hero-actions { display: flex; gap: var(--sp-4); flex-wrap: wrap; }
.hero-meta {
  margin-top: var(--sp-10);
  display: flex;
  gap: var(--sp-3);
  flex-wrap: wrap;
  font-size: var(--fs-12);
  letter-spacing: var(--ls-widest);
  text-transform: uppercase;
  color: var(--mute);
  font-weight: var(--fw-medium);
}
@media (max-width: 720px) {
  .hero { padding: var(--sp-12) 0; }
}
</style>
