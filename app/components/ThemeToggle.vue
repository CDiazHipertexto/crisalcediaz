<script setup lang="ts">
defineProps<{ label: string }>()

const isLight = ref(false)

function toggleTheme() {
  isLight.value = !isLight.value
  document.documentElement.dataset.theme = isLight.value ? 'light' : 'dark'
}
</script>

<template>
  <button class="icon-button" type="button" :aria-label="label" :title="label" @click="toggleTheme">
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19">
      <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    </svg>
  </button>
</template>

