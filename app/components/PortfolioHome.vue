<script setup lang="ts">
import type { PortfolioContent } from '~/data/portfolio'

const props = defineProps<{ content: PortfolioContent }>()

const assistant = ref<{ open: () => void } | null>(null)
const menuOpen = ref(false)
const activeProjectCategory = ref<'all' | 'frontend' | 'uxui' | 'graphic'>('all')

const filteredProjects = computed(() => activeProjectCategory.value === 'all'
  ? props.content.projects
  : props.content.projects.filter(project => project.category === activeProjectCategory.value))

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

      <section id="about" class="profile-section section-block" aria-labelledby="profile-title">
        <div class="section-heading">
          <p class="eyebrow">{{ content.branches.eyebrow }}</p>
          <h2 id="profile-title">{{ content.branches.title }}</h2>
          <div>
            <p>{{ content.branches.description }}</p>
            <p v-for="paragraph in content.about.paragraphs" :key="paragraph" class="profile-section__bio">{{ paragraph }}</p>
          </div>
        </div>
        <div class="branch-grid">
          <article v-for="(branch, index) in content.branches.items" :key="branch.id" :data-branch="branch.id">
            <div class="branch-grid__index">0{{ index + 1 }} / 03</div>
            <p class="branch-grid__role">{{ branch.role }}</p>
            <h3>{{ branch.title }}</h3>
            <p>{{ branch.description }}</p>
            <ul class="tag-list" :aria-label="branch.title">
              <li v-for="capability in branch.capabilities" :key="capability">{{ capability }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="stack" class="stack-section section-block section-grid" aria-labelledby="stack-title">
        <div class="section-heading section-heading--compact">
          <p class="eyebrow">{{ content.stack.eyebrow }}</p>
          <h2 id="stack-title">{{ content.stack.title }}</h2>
          <p>{{ content.stack.description }}</p>
        </div>
        <div class="stack-terminal" aria-label="Professional stack">
          <div class="stack-terminal__bar"><span /><span /><span /><code>cris@portfolio: ~/stack</code></div>
          <div class="stack-terminal__body">
            <section v-for="group in content.stack.groups" :key="group.category">
              <h3>{{ group.label }}</h3>
              <ul>
                <li v-for="item in group.items" :key="item"><span aria-hidden="true">├─</span>{{ item }}</li>
              </ul>
            </section>
          </div>
          <div class="stack-terminal__status">{{ content.stack.groups.reduce((total, group) => total + group.items.length, 0) }} capabilities · 4 contexts</div>
        </div>
      </section>

      <section id="experience" class="experience-section section-block" aria-labelledby="experience-title">
        <div class="section-heading">
          <p class="eyebrow">{{ content.experience.eyebrow }}</p>
          <h2 id="experience-title">{{ content.experience.title }}</h2>
          <p>{{ content.experience.description }}</p>
        </div>
        <ol class="timeline">
          <li v-for="item in content.experience.items" :key="`${item.company}-${item.period}`">
            <div class="timeline__marker" aria-hidden="true" />
            <p class="timeline__period">{{ item.period }}</p>
            <article>
              <p class="timeline__company">{{ item.company }}</p>
              <h3>{{ item.role }}</h3>
              <p>{{ item.description }}</p>
              <ul class="tag-list" aria-label="Skills">
                <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
              </ul>
            </article>
          </li>
        </ol>
      </section>

      <section id="education" class="education-section section-block section-grid" aria-labelledby="education-title">
        <div class="section-heading section-heading--compact">
          <p class="eyebrow">{{ content.education.eyebrow }}</p>
          <h2 id="education-title">{{ content.education.title }}</h2>
          <p>{{ content.education.description }}</p>
        </div>
        <div>
          <ol class="degree-list">
            <li v-for="degree in content.education.degrees" :key="degree.year">
              <span>{{ degree.year }}</span>
              <div><h3>{{ degree.title }}</h3><p>{{ degree.institution }}</p></div>
            </li>
          </ol>
          <div class="learning-list">
            <h3>{{ content.education.learningLabel }}</h3>
            <ul class="tag-list">
              <li v-for="item in content.education.learning" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="work" class="section-block" aria-labelledby="work-title">
        <div class="section-heading">
          <p class="eyebrow">{{ content.labels.work }}</p>
          <h2 id="work-title">{{ content.labels.workTitle }}</h2>
          <p>{{ content.labels.workIntro }}</p>
        </div>
        <div class="project-tabs" role="group" :aria-label="content.labels.work">
          <button
            v-for="category in (['all', 'frontend', 'uxui', 'graphic'] as const)"
            :key="category"
            type="button"
            :aria-pressed="activeProjectCategory === category"
            @click="activeProjectCategory = category"
          >
            {{ content.labels.projectTabs[category] }}
            <span>{{ category === 'all' ? content.projects.length : content.projects.filter(project => project.category === category).length }}</span>
          </button>
        </div>
        <div class="project-list" aria-live="polite">
          <article v-for="project in filteredProjects" :key="project.number" class="project-card">
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

      <section id="contact" class="contact-section" aria-labelledby="contact-title">
        <div class="contact-section__content">
          <p class="eyebrow">{{ content.contact.eyebrow }}</p>
          <h2 id="contact-title">{{ content.contact.title }}</h2>
          <p>{{ content.contact.description }}</p>
          <div class="contact-section__actions">
            <button class="button button--primary" type="button" @click="assistant?.open()">{{ content.contact.assistantCta }}</button>
            <a class="button button--secondary" href="mailto:cristianduografico@gmail.com">{{ content.contact.cta }}</a>
          </div>
        </div>
        <nav class="contact-links" aria-label="Professional profiles">
          <a v-for="link in content.contact.links" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer">
            <span><strong>{{ link.label }}</strong><small>{{ link.detail }}</small></span><span aria-hidden="true">↗</span>
          </a>
        </nav>
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
