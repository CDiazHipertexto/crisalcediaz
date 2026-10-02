<script setup lang="ts">
const props = defineProps<{
  locale: 'es' | 'en'
  languageLabel: string
  alternatePath: string
  homePath: string
  nav: Array<{ label: string; href: string; emphasis?: 'resource' | 'primary' }>
}>()

const menuOpen = ref(false)
const activeHref = ref('')
const route = useRoute()
let animationFrame = 0

const isActive = (href: string) => {
  if (href.startsWith('#')) return activeHref.value === href
  if (href.startsWith('/') && !href.includes('#')) return route.path === href
  return false
}

const updateActiveSection = () => {
  const sectionLinks = props.nav.filter(item => item.href.startsWith('#'))
  const threshold = window.innerHeight * 0.38
  let current = ''

  for (const item of sectionLinks) {
    const section = document.querySelector<HTMLElement>(item.href)
    if (section && section.getBoundingClientRect().top <= threshold) current = item.href
  }

  activeHref.value = current
}

const scheduleActiveSection = () => {
  cancelAnimationFrame(animationFrame)
  animationFrame = requestAnimationFrame(updateActiveSection)
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', scheduleActiveSection, { passive: true })
  window.addEventListener('resize', scheduleActiveSection)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
  window.removeEventListener('scroll', scheduleActiveSection)
  window.removeEventListener('resize', scheduleActiveSection)
})
</script>

<template>
  <header class="site-header">
    <NuxtLink :to="homePath" class="site-identity" :aria-label="locale === 'es' ? 'Inicio de Cristian Salcedo' : 'Cristian Salcedo home'">
      <img src="/images/profile/cristian-salcedo.webp" alt="" width="320" height="427">
      <span>
        <strong>Cristian Salcedo</strong>
        <small>Design Engineer · UX/UI · Frontend · Graphic Design</small>
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
      <a
        v-for="item in nav"
        :key="item.href"
        :href="item.href"
        :class="{
          'site-nav__link--active': isActive(item.href),
          'site-nav__link--resource': item.emphasis === 'resource',
          'site-nav__link--primary': item.emphasis === 'primary',
        }"
        :aria-current="isActive(item.href) ? 'location' : undefined"
        @click="menuOpen = false"
      >{{ item.label }}</a>
    </nav>
    <div class="site-header__actions">
      <ThemeToggle :label="locale === 'es' ? 'Cambiar tema' : 'Change theme'" />
      <NuxtLink class="language-link" :to="alternatePath" :lang="locale === 'es' ? 'en' : 'es'">
        {{ languageLabel }}
      </NuxtLink>
    </div>
  </header>
</template>
