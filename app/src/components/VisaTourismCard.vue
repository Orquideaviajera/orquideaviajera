<script setup lang="ts">
import { TOURISM_SERVICE } from '@/data/content';
import ServiceCard from './ServiceCard.vue';
</script>

<template>
  <ServiceCard :service="TOURISM_SERVICE" variant="tourism" />
</template>
