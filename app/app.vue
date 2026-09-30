<template>
  <div class="bg-[#F4F1EA] ">
    <header class="px-5 lg:px-16 border-b border-black/8">
      <Navigation />
      <Hero />
      <Philosophy />
    </header>
    <main class="px-5 lg:px-16 py-16 lg:py-40">
      <Ecosystem />
    </main>
  </div>
</template>

<script setup lang="ts">
import Ecosystem from './components/Ecosystem.vue';
import Hero from './components/Header/Hero.vue';
import Navigation from './components/Header/Navigation.vue';
import Philosophy from './components/Header/Philosophy.vue';
</script>