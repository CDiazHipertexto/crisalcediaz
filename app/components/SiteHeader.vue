<script setup lang="ts">
defineProps<{
  locale: 'es' | 'en'
  languageLabel: string
  alternatePath: string
  homePath: string
  nav: Array<{ label: string; href: string }>
}>()

const menuOpen = ref(false)
</script>

<template>
  <header class="site-header">
    <NuxtLink :to="homePath" class="site-identity" :aria-label="locale === 'es' ? 'Inicio de Cristian Salcedo' : 'Cristian Salcedo home'">
      <img src="/images/profile/cristian-salcedo.webp" alt="" width="320" height="427">
      <span>
        <strong>Cristian Salcedo</strong>
        <small>Design Engineer · UX/UI · Frontend</small>
      </span>
    </NuxtLink>
    <button
      class="menu-button"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="primary-navigation"
      :aria-label="menuOpen
        ? (locale === 'es' ? 'Cerrar navegación' : 'Close navigation')
        : (locale === 'es' ? 'Abrir navegación' : 'Open navigation')"
      @click="menuOpen = !menuOpen"
      @keydown.esc="menuOpen = false"
    >
      <span /><span />
    </button>
    <nav id="primary-navigation" :class="['site-nav', { 'site-nav--open': menuOpen }]" :aria-label="locale === 'es' ? 'Navegación principal' : 'Primary navigation'">
      <a v-for="item in nav" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
    </nav>
    <div class="site-header__actions">
      <ThemeToggle :label="locale === 'es' ? 'Cambiar tema' : 'Change theme'" />
      <NuxtLink class="language-link" :to="alternatePath" :lang="locale === 'es' ? 'en' : 'es'">
        {{ languageLabel }}
      </NuxtLink>
    </div>
  </header>
</template>
