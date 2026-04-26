<script setup lang="ts">
import { DIFFERENTIATORS } from '@/data/content';
</script>

<template>
  <section id="diferenciales" class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow">Por qué nosotros</p>
          <h2>Cuatro cosas que <em>nos definen</em>.</h2>
        </div>
        <p class="lead">
          No competimos por precio ni por volumen. Competimos por hacer las cosas bien.
        </p>
      </div>
      <div class="diff-grid">
        <article v-for="d in DIFFERENTIATORS" :key="d.num" class="diff-item">
          <div class="num">{{ d.num }}</div>
          <h4>{{ d.title }}</h4>
          <p>{{ d.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.diff-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-7);
}
@media (max-width: 860px) {
  .diff-grid { grid-template-columns: repeat(2, 1fr); }
}
.diff-item {
  border-top: 2px solid var(--blue);
  padding-top: var(--sp-6);
}
.diff-item .num {
  font-size: var(--fs-12);
  letter-spacing: var(--ls-widest);
  text-transform: uppercase;
  color: var(--sage-deep);
  font-weight: var(--fw-medium);
  margin-bottom: var(--sp-4);
}
.diff-item h4 {
  font-size: var(--fs-22);
  font-weight: var(--fw-bold);
  color: var(--blue-ink);
  letter-spacing: var(--ls-snug);
  line-height: 1.15;
  margin: 0 0 var(--sp-3);
}
.diff-item p {
  font-size: var(--fs-15);
  color: var(--mute);
  line-height: 1.55;
  margin: 0;
}
</style>
