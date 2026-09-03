<script setup lang="ts">
useSeoMeta({ title: 'Mapa del sitio | Cristian Salcedo' })

const links = [
  { to: '/', label: 'Inicio — Español' },
  { to: '/en', label: 'Home — English' },
  { to: '/archive', label: 'Archivo visual y web — Español' },
  { to: '/en/archive', label: 'Visual and web archive — English' },
  { to: '/system-lab', label: 'CRIS/OS System + AI Lab — Español' },
  { to: '/en/system-lab', label: 'CRIS/OS System + AI Lab — English' },
  { to: '/resume', label: 'Currículum — Español' },
  { to: '/en/resume', label: 'Resume — English' },
  { to: '/privacy', label: 'Privacidad' },
  { to: '/accessibility', label: 'Accesibilidad' },
]
</script>

<template>
  <LegalPage eyebrow="Navegación" title="Mapa del sitio" intro="Rutas públicas disponibles en el primer prototipo.">
    <ul class="legal-links">
      <li v-for="link in links" :key="link.to"><NuxtLink :to="link.to">{{ link.label }}</NuxtLink></li>
    </ul>
  </LegalPage>
</template>
