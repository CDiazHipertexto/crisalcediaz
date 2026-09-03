<script setup lang="ts">
import { getTechIcon } from '~/data/techIcons'

const props = defineProps<{ label: string }>()
const icon = computed(() => getTechIcon(props.label))
const fallback = computed(() => props.label.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase())
</script>

<template>
  <svg v-if="icon" class="tech-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path :d="icon.path" />
  </svg>
  <span v-else class="tech-icon tech-icon--fallback" aria-hidden="true">{{ fallback }}</span>
</template>
