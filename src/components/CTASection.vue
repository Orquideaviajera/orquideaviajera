<script setup lang="ts">
import { BRAND } from '@/data/content';
</script>

<template>
  <section id="contacto" class="cta-final">
    <div class="container">
      <div class="cta-final-inner">
        <p class="eyebrow">Próximo paso</p>
        <h2>Cuéntanos tu caso. <em>Hagamos el camino juntos</em>.</h2>
        <p>
          Una conversación inicial es gratuita. Evaluamos tu perfil, te explicamos opciones
          y solo avanzamos si tiene sentido para ti.
        </p>
        <div class="cta-actions">
          <a :href="BRAND.whatsappLink" class="btn btn-sage">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 3 a13 13 0 0 0-11 19.5 L3 29 l6.7-1.8 A13 13 0 1 0 16 3 z"/>
              <path d="M11 13 c0 5 3 8 8 8 l2-2 l-3-1.5 l-1.5 1.5 c-1.5-0.7-2.7-2-3.5-3.5 l1.5-1.5 L13 11 z"/>
            </svg>
            Hablar por WhatsApp
            <span class="btn-arrow">→</span>
          </a>
          <a :href="BRAND.whatsappLink" class="btn btn-ghost btn-ghost-dark">
            Agendar evaluación
          </a>
        </div>
        <p class="trust">
          Respuesta en menos de 24 h · Servicio 100% online · Confidencialidad total
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-final {
  position: relative;
  background: var(--blue-deep);
  color: var(--paper);
  padding: var(--sp-14) 0;
  overflow: hidden;
}
.cta-final::before {
  content: '';
  position: absolute;
  left: -100px; top: -100px;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: var(--sage);
  opacity: 0.18;
}
.cta-final::after {
  content: '';
  position: absolute;
  right: -120px; bottom: -120px;
  width: 360px; height: 360px;
  border-radius: 50%;
  background: var(--sage);
  opacity: 0.12;
}
.cta-final-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
.cta-final .eyebrow { color: var(--sage); }
.cta-final h2 { color: var(--paper); font-size: clamp(34px, 5vw, 56px); }
.cta-final h2 em { color: var(--sage); }
.cta-final p {
  color: rgba(247, 249, 251, 0.8);
  font-size: var(--fs-18);
  margin: var(--sp-6) auto var(--sp-9);
  max-width: 600px;
}
.cta-actions {
  display: flex;
  justify-content: center;
  gap: var(--sp-4);
  flex-wrap: wrap;
}
.btn-ghost-dark {
  border-color: rgba(247, 249, 251, 0.25);
  color: var(--paper);
}
.btn-ghost-dark:hover {
  border-color: var(--sage);
  color: var(--sage);
  background: transparent;
}
.trust {
  margin-top: var(--sp-9);
  font-size: var(--fs-12);
  letter-spacing: var(--ls-widest);
  text-transform: uppercase;
  color: rgba(247, 249, 251, 0.5);
}
</style>
