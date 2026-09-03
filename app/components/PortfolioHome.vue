<script setup lang="ts">
import type { PortfolioContent } from '~/data/portfolio'

const props = defineProps<{ content: PortfolioContent }>()

const assistant = ref<{ open: () => void } | null>(null)
const menuOpen = ref(false)

const canonical = computed(() => props.content.locale === 'es'
  ? 'https://crisalcediaz.co/'
  : 'https://crisalcediaz.co/en')

useHead({
  htmlAttrs: { lang: props.content.locale },
  link: [
    { rel: 'canonical', href: canonical.value },
    { rel: 'alternate', hreflang: 'es', href: 'https://crisalcediaz.co/' },
    { rel: 'alternate', hreflang: 'en', href: 'https://crisalcediaz.co/en' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://crisalcediaz.co/' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Cristian Rubén Salcedo Díaz',
        url: 'https://crisalcediaz.co',
        jobTitle: 'Design Engineer',
        knowsAbout: ['Product Design', 'Design Systems', 'UX/UI', 'Frontend Development', 'AI-assisted workflows'],
      }),
    },
  ],
})

useSeoMeta({
  title: props.content.locale === 'es'
    ? 'Cristian Salcedo — Design Engineer, Product Design y Frontend'
    : 'Cristian Salcedo — Design Engineer, Product Design & Frontend',
  description: props.content.hero.lead,
  ogTitle: props.content.hero.title,
  ogDescription: props.content.hero.lead,
  ogType: 'website',
  ogUrl: canonical.value,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main">{{ content.locale === 'es' ? 'Saltar al contenido' : 'Skip to content' }}</a>

    <header class="site-header">
      <NuxtLink :to="content.locale === 'es' ? '/' : '/en'" class="site-header__brand"><BrandMark /></NuxtLink>
      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        :aria-label="content.labels.menu"
        @click="menuOpen = !menuOpen"
      >
        <span /><span />
      </button>
      <nav id="primary-navigation" :class="['site-nav', { 'site-nav--open': menuOpen }]" aria-label="Primary">
        <a v-for="item in content.nav" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
      </nav>
      <div class="site-header__actions">
        <ThemeToggle :label="content.labels.theme" />
        <NuxtLink class="language-link" :to="content.alternatePath" :lang="content.locale === 'es' ? 'en' : 'es'">
          {{ content.languageLabel }}
        </NuxtLink>
      </div>
    </header>

    <main id="main">
      <section class="hero section-grid" aria-labelledby="hero-title">
        <div class="hero__content">
          <p class="eyebrow"><span class="status-light" />{{ content.hero.eyebrow }}</p>
          <h1 id="hero-title">{{ content.hero.title }}</h1>
          <p class="hero__lead">{{ content.hero.lead }}</p>
          <div class="hero__actions">
            <a class="button button--primary" href="#work">{{ content.hero.primaryCta }}</a>
            <AskCris ref="assistant" :locale="content.locale" :label="content.hero.secondaryCta" />
          </div>
          <p class="hero__availability"><span />{{ content.hero.availability }}</p>
        </div>
        <NetworkVisual class="hero__visual" />
      </section>

      <section class="principles" aria-label="Working principles">
        <article v-for="principle in content.principles" :key="principle.index">
          <span>{{ principle.index }}</span>
          <h2>{{ principle.title }}</h2>
          <p>{{ principle.description }}</p>
        </article>
      </section>

      <section id="work" class="section-block" aria-labelledby="work-title">
        <div class="section-heading">
          <p class="eyebrow">{{ content.labels.work }}</p>
          <h2 id="work-title">{{ content.labels.workTitle }}</h2>
          <p>{{ content.labels.workIntro }}</p>
        </div>
        <div class="project-list">
          <article v-for="project in content.projects" :key="project.number" class="project-card">
            <div class="project-card__number">{{ project.number }}</div>
            <div class="project-card__content">
              <p class="project-card__type">{{ project.type }}</p>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <ul class="tag-list" aria-label="Technologies">
                <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
              </ul>
            </div>
            <div class="project-card__meta">
              <span>{{ project.status }}</span>
              <a v-if="project.href" :href="project.href" target="_blank" rel="noopener noreferrer">
                {{ content.labels.openSite }} <span aria-hidden="true">↗</span>
              </a>
              <span v-else>{{ content.labels.caseSoon }}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="system" class="system-section section-block section-grid" aria-labelledby="system-title">
        <div class="section-heading section-heading--sticky">
          <p class="eyebrow">{{ content.system.eyebrow }}</p>
          <h2 id="system-title">{{ content.system.title }}</h2>
          <p>{{ content.system.description }}</p>
          <a class="text-link" href="#framework-lab">{{ content.locale === 'es' ? 'Ver arquitectura del sistema' : 'View system architecture' }} →</a>
        </div>
        <div class="metric-grid">
          <article v-for="metric in content.system.metrics" :key="metric.label">
            <strong>{{ metric.value }}</strong><span>{{ metric.label }}</span>
          </article>
          <div class="token-demo">
            <div><i class="swatch swatch--accent" /><code>color.action.primary</code></div>
            <div><i class="swatch swatch--surface" /><code>color.surface.raised</code></div>
            <div><i class="swatch swatch--focus" /><code>color.border.focus</code></div>
          </div>
        </div>
      </section>

      <section id="framework-lab" class="section-block framework-section" aria-labelledby="framework-title">
        <div class="section-heading">
          <p class="eyebrow">{{ content.framework.eyebrow }}</p>
          <h2 id="framework-title">{{ content.framework.title }}</h2>
          <p>{{ content.framework.description }}</p>
        </div>
        <div class="framework-grid">
          <article v-for="(item, index) in content.framework.items" :key="item.name">
            <div class="framework-grid__top"><span>0{{ index + 1 }}</span><span>ISOLATED BUILD</span></div>
            <h3>{{ item.name }}</h3>
            <strong>{{ item.role }}</strong>
            <p>{{ item.detail }}</p>
          </article>
        </div>
      </section>

      <section id="ai-lab" class="ai-section section-block" aria-labelledby="ai-title">
        <div class="ai-section__signal" aria-hidden="true">
          <span v-for="n in 18" :key="n" :style="{ height: `${12 + ((n * 17) % 54)}px` }" />
        </div>
        <div>
          <p class="eyebrow">{{ content.ai.eyebrow }}</p>
          <h2 id="ai-title">{{ content.ai.title }}</h2>
          <p>{{ content.ai.description }}</p>
          <button class="button button--primary" type="button" @click="assistant?.open()">{{ content.ai.cta }}</button>
        </div>
      </section>

      <section id="about" class="about-section section-block section-grid" aria-labelledby="about-title">
        <p class="eyebrow">{{ content.about.eyebrow }}</p>
        <div>
          <h2 id="about-title">{{ content.about.title }}</h2>
          <p v-for="paragraph in content.about.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
      </section>

      <section id="contact" class="contact-section" aria-labelledby="contact-title">
        <p class="eyebrow">{{ content.contact.eyebrow }}</p>
        <h2 id="contact-title">{{ content.contact.title }}</h2>
        <p>{{ content.contact.description }}</p>
        <span class="button button--disabled" aria-disabled="true">{{ content.contact.cta }}</span>
      </section>
    </main>

    <footer class="site-footer">
      <BrandMark />
      <p>© {{ new Date().getFullYear() }} Cristian Rubén Salcedo Díaz · {{ content.labels.footer }}</p>
      <nav aria-label="Legal">
        <NuxtLink to="/privacy">Privacy</NuxtLink>
        <NuxtLink to="/accessibility">Accessibility</NuxtLink>
        <NuxtLink to="/sitemap-html">Sitemap</NuxtLink>
      </nav>
    </footer>
  </div>
</template>
