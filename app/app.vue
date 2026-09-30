<script setup lang="ts">
import Hero from './components/Header/Hero.vue';
import Navigation from './components/Header/Navigation.vue';
import Philosophy from './components/Header/Philosophy.vue';
import Manifest from './components/Manifest.vue';
</script>

<template>
  <div class="bg-[#F4F1EA] ">
    <header class="px-5 lg:px-16 border-b border-black/8">
      <Navigation />
      <Hero />
      <Philosophy />
    </header>
    <main class="py-16 lg:py-40">
      <Manifest />
    </main>
  </div>
</template>
