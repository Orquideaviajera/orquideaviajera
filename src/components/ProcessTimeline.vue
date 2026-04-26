<script setup lang="ts">
import { PROCESS_STEPS } from '@/data/content';
</script>

<template>
  <section id="proceso" class="section warm">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow">Cómo trabajamos</p>
          <h2>Un camino claro, <em>paso a paso</em>.</h2>
        </div>
        <p class="lead">
          Te decimos exactamente dónde estás y qué viene después. Sin ambigüedades.
        </p>
      </div>
      <div class="timeline">
        <div class="timeline-line"><div class="progress"></div></div>
        <div class="steps">
          <div v-for="step in PROCESS_STEPS" :key="step.num" class="step">
            <div class="step-num">{{ step.num }}</div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline { position: relative; }
.timeline-line {
  position: absolute;
  top: 36px; left: 0; right: 0;
  height: 1px;
  background: var(--rule);
}
.timeline-line .progress {
  height: 1px;
  background: var(--sage);
  width: 100%;
}
.steps {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--sp-4);
  position: relative;
}
.step { display: flex; flex-direction: column; align-items: flex-start; }
.step-num {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--paper);
  border: 1.5px solid var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
  font-size: 17px;
  font-weight: var(--fw-bold);
  position: relative;
  z-index: 2;
  transition: background var(--t-base), color var(--t-base), transform var(--t-base);
}
.step:hover .step-num {
  background: var(--blue);
  color: var(--paper);
  transform: scale(1.06);
}
.step h4 {
  margin: var(--sp-6) 0 var(--sp-2);
  font-size: var(--fs-18);
  font-weight: var(--fw-bold);
}
.step p {
  font-size: var(--fs-13);
  color: var(--mute);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 1100px) {
  .steps { grid-template-columns: repeat(4, 1fr); gap: var(--sp-7); }
  .timeline-line { display: none; }
}
@media (max-width: 600px) {
  .steps { grid-template-columns: repeat(2, 1fr); gap: var(--sp-6); }
}
</style>
