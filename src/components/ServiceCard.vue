<script setup lang="ts">
import type { ServiceCardData } from '@/types';

defineProps<{
  service: ServiceCardData;
  variant: 'tourism' | 'study';
}>();
</script>

<template>
  <article class="svc">
    <div class="svc-head">
      <div class="icon-box">
        <svg v-if="variant === 'tourism'" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 18 L28 8 L26 14 L14 20 L11 28 L8 24 L4 22 z" />
        </svg>
        <svg v-else width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 12 L16 6 L30 12 L16 18 z" />
          <path d="M8 14 v8 c0 2 4 4 8 4 s8-2 8-4 v-8 M28 13 v8" />
        </svg>
      </div>
      <div>
        <p class="svc-tag">{{ service.tag }}</p>
        <h3>{{ service.title }}</h3>
      </div>
    </div>
    <p class="svc-desc">{{ service.description }}</p>
    <ul>
      <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
    </ul>
  </article>
</template>

<style scoped>
.svc {
  background: var(--paper);
  border: 1px solid var(--rule);
  padding: var(--sp-9);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: var(--sp-6);
  transition: transform var(--t-slow), box-shadow var(--t-slow);
}
.svc:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}
.svc-head { display: flex; align-items: center; gap: var(--sp-5); }
.svc-head .icon-box { width: 64px; height: 64px; }
.svc-tag {
  font-size: 11px;
  letter-spacing: var(--ls-widest);
  text-transform: uppercase;
  color: var(--sage-deep);
  font-weight: var(--fw-medium);
  margin: 0;
}
.svc h3 { font-size: var(--fs-28); margin: 6px 0 0; }
.svc-desc { color: var(--mute); font-size: var(--fs-15); margin: 0; }
.svc ul {
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}
.svc li {
  display: flex;
  gap: var(--sp-3);
  align-items: flex-start;
  font-size: var(--fs-15);
  color: var(--text);
}
.svc li::before {
  content: '';
  flex-shrink: 0;
  margin-top: 9px;
  width: 16px;
  height: 1px;
  background: var(--sage-deep);
}
</style>
