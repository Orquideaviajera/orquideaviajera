<script setup lang="ts">
import { STUDY_SERVICE } from '@/data/content';
import ServiceCard from './ServiceCard.vue';
</script>

<template>
  <ServiceCard :service="STUDY_SERVICE" variant="study" />
</template>
