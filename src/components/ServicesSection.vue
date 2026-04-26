<script setup lang="ts">
import VisaTourismCard from './VisaTourismCard.vue';
import VisaStudyCard from './VisaStudyCard.vue';
</script>

<template>
  <section id="servicios" class="section warm">
    <div class="container">
      <div class="section-head center">
        <div>
          <p class="eyebrow">Servicios principales</p>
          <h2>Dos especialidades, <em>un mismo cuidado</em>.</h2>
          <p class="lead">
            Visados de turismo y estudios para España, con la profundidad que requieren
            y la cercanía que mereces.
          </p>
        </div>
      </div>
      <div class="svc-grid">
        <VisaTourismCard />
        <VisaStudyCard />
      </div>
    </div>
  </section>
</template>

<style scoped>
.svc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-7);
}
@media (max-width: 860px) {
  .svc-grid { grid-template-columns: 1fr; }
}
</style>
