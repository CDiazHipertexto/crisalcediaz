<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="tech-badge"><TechIcon :label="label" /><span>{{ label }}</span></span>
</template>
