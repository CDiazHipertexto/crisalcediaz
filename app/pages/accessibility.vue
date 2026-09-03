<script setup lang="ts">
useSeoMeta({
  title: 'Accesibilidad | Cristian Salcedo',
  description: 'Compromiso y estado de accesibilidad del portafolio.',
})
</script>

<template>
  <LegalPage
    eyebrow="WCAG 2.2 AA · En progreso"
    title="Accesibilidad como requisito de producto"
    intro="El prototipo prioriza HTML semántico, navegación por teclado, foco visible, contraste y reducción de movimiento."
  >
    <h2>Compatibilidad</h2>
    <p>La interfaz admite zoom, temas claro y oscuro, y respeta <code>prefers-reduced-motion</code>.</p>
    <h2>Limitaciones conocidas</h2>
    <p>TODO: completar auditoría con lectores de pantalla, Safari, Firefox y dispositivos móviles reales.</p>
  </LegalPage>
</template>

