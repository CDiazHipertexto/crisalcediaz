export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'es' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#080a0f' },
        { name: 'color-scheme', content: 'dark light' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      ],
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://crisalcediaz.co',
    name: 'Cristian Rubén Salcedo Díaz',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/en', '/archive', '/en/archive', '/system-lab', '/en/system-lab', '/resume', '/en/resume', '/privacy', '/accessibility', '/sitemap-html'],
    },
  },
  typescript: {
    typeCheck: true,
  },
})
