<script setup lang="ts">
import { PROBLEMS } from '@/data/content';
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow">El problema</p>
          <h2>Cuando el camino a España <em>se vuelve niebla</em>.</h2>
        </div>
        <p class="lead">
          La mayoría de personas que quieren venir a España se enfrentan a los mismos obstáculos.
          Estos son los que más nos cuentan.
        </p>
      </div>
      <div class="problem-grid">
        <article v-for="p in PROBLEMS" :key="p.title" class="problem">
          <h4>{{ p.title }}</h4>
          <p>{{ p.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-6);
}
.problem {
  background: var(--paper);
  border-left: 2px solid var(--accent);
  padding: var(--sp-6) var(--sp-7);
  transition: border-color var(--t-base), transform var(--t-base);
}
.problem:hover {
  border-left-color: var(--blue);
  transform: translateX(4px);
}
.problem h4 {
  margin: 0 0 6px;
  font-size: var(--fs-17);
  font-weight: var(--fw-semibold);
  color: var(--blue-ink);
}
.problem p {
  font-size: var(--fs-14);
  color: var(--mute);
  margin: 0;
}
@media (max-width: 860px) {
  .problem-grid { grid-template-columns: 1fr; }
}
</style>
