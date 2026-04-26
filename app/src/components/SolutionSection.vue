<script setup lang="ts">
import { SOLUTIONS } from '@/data/content';
</script>

<template>
  <section class="section warm">
    <div class="container">
      <div class="section-head center">
        <div>
          <p class="eyebrow">Nuestra solución</p>
          <h2>Un camino claro, <em>de principio a fin</em>.</h2>
          <p class="lead">
            Asesoría experta, acompañamiento real y trabajo 100% online.
            Tres pilares que sostienen cada caso que tomamos.
          </p>
        </div>
      </div>
      <div class="solution-grid">
        <article v-for="s in SOLUTIONS" :key="s.title" class="solution-card">
          <div class="icon-box">
            <svg v-if="s.icon === 'shield'" width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3 L27 7 v10 c0 6-5 10-11 12 c-6-2-11-6-11-12 V7 z"/><path d="M11 16 l4 4 l7-8"/></svg>
            <svg v-else-if="s.icon === 'compass'" width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="12"/><path d="M21 11 l-3 8 l-8 3 l3-8 z"/></svg>
            <svg v-else width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12 a20 20 0 0 1 28 0"/><path d="M6 17 a14 14 0 0 1 20 0"/><path d="M10 22 a8 8 0 0 1 12 0"/><circle cx="16" cy="26" r="1.5" fill="currentColor"/></svg>
          </div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);
}
.solution-card {
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: var(--radius-md);
  padding: var(--sp-8);
  transition: transform var(--t-base), box-shadow var(--t-base);
}
.solution-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.solution-card h3 {
  margin: var(--sp-6) 0 var(--sp-3);
  font-size: var(--fs-22);
}
.solution-card p {
  color: var(--mute);
  font-size: var(--fs-15);
  line-height: 1.6;
  margin: 0;
}
@media (max-width: 860px) {
  .solution-grid { grid-template-columns: 1fr; }
}
</style>
