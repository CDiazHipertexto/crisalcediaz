<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; intro: string }>()
</script>

<template>
  <main class="legal-page">
    <NuxtLink class="text-link" to="/">← Inicio</NuxtLink>
    <p class="eyebrow">{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p class="legal-page__intro">{{ intro }}</p>
    <div class="legal-page__body"><slot /></div>
  </main>
</template>
