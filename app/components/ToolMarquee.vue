<script setup lang="ts">
import type { Locale } from '~/data/portfolio'
import { marqueeTools } from '~/data/techIcons'

defineProps<{ locale: Locale }>()
</script>

<template>
  <section class="tool-marquee" :aria-label="locale === 'es' ? 'Herramientas y tecnologías' : 'Tools and technologies'" data-reveal>
    <div class="tool-marquee__heading">
      <p class="eyebrow">{{ locale === 'es' ? 'STACK EN MOVIMIENTO' : 'STACK IN MOTION' }}</p>
      <p>{{ locale === 'es' ? 'Herramientas conectadas por práctica, no por decoración.' : 'Tools connected by practice, not decoration.' }}</p>
    </div>
    <div class="tool-marquee__viewport">
      <ul class="tool-marquee__track">
        <li v-for="tool in marqueeTools" :key="`primary-${tool}`"><TechIcon :label="tool" /><span>{{ tool }}</span></li>
        <li v-for="tool in marqueeTools" :key="`duplicate-${tool}`" aria-hidden="true"><TechIcon :label="tool" /><span>{{ tool }}</span></li>
      </ul>
    </div>
  </section>
</template>
