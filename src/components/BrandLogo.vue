<script setup lang="ts">
defineProps<{
  size?: number;
}>();
</script>

<template>
  <svg
    :width="size ?? 36"
    :height="size ?? 36"
    viewBox="0 0 120 120"
    fill="none"
    aria-hidden="true"
  >
    <path d="M14 96 Q 38 78 58 78" stroke="#A8C3B0" stroke-width="1.76" stroke-linecap="round" fill="none" stroke-dasharray="1.5 3.2"/>
    <path d="M58 78 Q 60 64 60 52" stroke="#2F5D8C" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    <path d="M60 52 C 46 44 40 32 46 22 C 54 24 60 36 60 50" stroke="#2F5D8C" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
    <path d="M60 52 C 74 44 80 32 74 22 C 66 24 60 36 60 50" stroke="#2F5D8C" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
    <path d="M60 52 C 42 50 32 56 30 66 C 40 70 54 64 60 54" stroke="#2F5D8C" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
    <path d="M60 52 C 78 50 88 56 90 66 C 80 70 66 64 60 54" stroke="#2F5D8C" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
    <path d="M60 54 C 52 60 50 70 60 76 C 70 70 68 60 60 54 Z" fill="#A8C3B0" fill-opacity="0.55"/>
    <path d="M60 54 C 52 60 50 70 60 76 C 70 70 68 60 60 54" stroke="#2F5D8C" stroke-width="1.6" stroke-linejoin="round" fill="none"/>
    <circle cx="14" cy="96" r="2.2" fill="#A8C3B0"/>
  </svg>
</template>
