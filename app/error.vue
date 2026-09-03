<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="error-page">
    <p class="eyebrow">SYSTEM / {{ error.statusCode || 404 }}</p>
    <h1>Esta ruta no forma parte del sistema.</h1>
    <p>La página pudo cambiar de ubicación o todavía no está disponible.</p>
    <button class="button button--primary" type="button" @click="handleError">Volver al inicio</button>
  </main>
</template>

