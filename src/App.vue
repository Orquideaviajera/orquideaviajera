<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ProblemSection from './components/ProblemSection.vue';
import SolutionSection from './components/SolutionSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import SpainSupportService from './components/SpainSupportService.vue';
import ProcessTimeline from './components/ProcessTimeline.vue';
import DifferentiatorSection from './components/DifferentiatorSection.vue';
import CTASection from './components/CTASection.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <ServicesSection />
    <SpainSupportService />
    <ProcessTimeline />
    <DifferentiatorSection />
    <CTASection />
  </main>
  <FooterSection />
</template>
