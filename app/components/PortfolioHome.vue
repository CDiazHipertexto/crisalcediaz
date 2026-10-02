<script setup lang="ts">
import type { PortfolioContent } from '~/data/portfolio'

const props = defineProps<{ content: PortfolioContent }>()

const assistant = ref<{ open: () => void } | null>(null)
const activeProjectCategory = ref<'all' | 'frontend' | 'uxui' | 'graphic'>('all')

useSiteMotion()

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
        image: 'https://crisalcediaz.co/images/profile/cristian-salcedo.webp',
        jobTitle: 'Design Engineer',
        knowsAbout: ['Product Design', 'Design Systems', 'UX/UI', 'Frontend Development', 'AI-assisted workflows'],
        sameAs: [
          'https://www.linkedin.com/in/crisalcediaz/',
          'https://github.com/CDiazHipertexto',
          'https://www.behance.net/crisalcediaaz',
          'https://www.youtube.com/@cristianrsalcedodiaz229',
        ],
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

    <SiteHeader
      :locale="content.locale"
      :language-label="content.languageLabel"
      :alternate-path="content.alternatePath"
      :home-path="content.locale === 'es' ? '/' : '/en'"
      :nav="content.nav"
    />

    <main id="main">
      <section class="hero section-grid" aria-labelledby="hero-title" data-reveal>
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

      <section class="principles" :aria-label="content.locale === 'es' ? 'Principios de trabajo' : 'Working principles'" data-reveal>
        <article v-for="principle in content.principles" :key="principle.index" data-reveal-item>
          <span>{{ principle.index }}</span>
          <h2>{{ principle.title }}</h2>
          <p>{{ principle.description }}</p>
        </article>
      </section>

      <section id="about" class="profile-section section-block" aria-labelledby="profile-title" data-reveal>
        <div class="section-heading">
          <p class="eyebrow">{{ content.branches.eyebrow }}</p>
          <h2 id="profile-title">{{ content.branches.title }}</h2>
          <div>
            <p>{{ content.branches.description }}</p>
            <p v-for="paragraph in content.about.paragraphs" :key="paragraph" class="profile-section__bio">{{ paragraph }}</p>
          </div>
        </div>
        <div class="branch-grid">
          <article v-for="(branch, index) in content.branches.items" :key="branch.id" :data-branch="branch.id" data-reveal-item>
            <div class="branch-grid__index">0{{ index + 1 }} / 03</div>
            <p class="branch-grid__role">{{ branch.role }}</p>
            <h3>{{ branch.title }}</h3>
            <p>{{ branch.description }}</p>
            <ul class="tag-list" :aria-label="branch.title">
              <li v-for="capability in branch.capabilities" :key="capability"><TechBadge :label="capability" /></li>
            </ul>
          </article>
        </div>
      </section>

      <section id="stack" class="stack-section section-block section-grid" aria-labelledby="stack-title" data-reveal>
        <div class="section-heading section-heading--compact">
          <p class="eyebrow">{{ content.stack.eyebrow }}</p>
          <h2 id="stack-title">{{ content.stack.title }}</h2>
          <p>{{ content.stack.description }}</p>
        </div>
        <div class="stack-terminal" :aria-label="content.locale === 'es' ? 'Stack profesional' : 'Professional stack'">
          <div class="stack-terminal__bar"><span /><span /><span /><code>cris@portfolio: ~/stack</code></div>
          <div class="stack-terminal__body">
            <section v-for="group in content.stack.groups" :key="group.category" data-reveal-item>
              <h3>{{ group.label }}</h3>
              <ul>
                <li v-for="item in group.items" :key="item"><span aria-hidden="true">├─</span><TechBadge :label="item" /></li>
              </ul>
            </section>
          </div>
          <div class="stack-terminal__status">{{ content.stack.groups.reduce((total, group) => total + group.items.length, 0) }} capabilities · 4 contexts</div>
        </div>
      </section>

      <section id="competencies" class="competencies-section section-block" aria-labelledby="competencies-title" data-reveal>
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ content.competencies.eyebrow }}</p>
            <h2 id="competencies-title">{{ content.competencies.title }}</h2>
          </div>
          <p>{{ content.competencies.description }}</p>
        </div>
        <div class="competency-grid">
          <article v-for="item in content.competencies.items" :key="item.index" data-reveal-item>
            <div class="competency-card__meta">
              <span>{{ item.index }}</span>
              <strong>{{ item.level }}</strong>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
            <ul>
              <li v-for="evidence in item.evidence" :key="evidence">{{ evidence }}</li>
            </ul>
          </article>
        </div>
        <aside class="learning-callout" :aria-labelledby="`learning-callout-${content.locale}`" data-reveal-item>
          <div>
            <p class="eyebrow">AI LEARNING PATH · 2026</p>
            <h3 :id="`learning-callout-${content.locale}`">{{ content.competencies.learningTitle }}</h3>
            <p>{{ content.competencies.learningDescription }}</p>
          </div>
          <div class="learning-callout__actions">
            <NuxtLink class="button button--secondary" :to="content.locale === 'es' ? '/system-lab#ai-path' : '/en/system-lab#ai-path'">{{ content.competencies.learningCta }} →</NuxtLink>
            <NuxtLink class="button button--secondary" :to="content.locale === 'es' ? '/archive' : '/en/archive'">{{ content.competencies.archiveCta }} →</NuxtLink>
            <NuxtLink class="button button--primary" :to="content.locale === 'es' ? '/resume' : '/en/resume'">{{ content.competencies.resumeCta }} →</NuxtLink>
          </div>
        </aside>
      </section>

      <section id="experience" class="experience-section section-block" aria-labelledby="experience-title" data-reveal>
        <div class="section-heading">
          <p class="eyebrow">{{ content.experience.eyebrow }}</p>
          <h2 id="experience-title">{{ content.experience.title }}</h2>
          <p>{{ content.experience.description }}</p>
        </div>
        <ol class="timeline">
          <li v-for="item in content.experience.items" :key="`${item.company}-${item.period}`" data-reveal-item>
            <div class="timeline__marker" aria-hidden="true" />
            <p class="timeline__period">{{ item.period }}</p>
            <article>
              <p class="timeline__company">{{ item.company }}</p>
              <h3>{{ item.role }}</h3>
              <p>{{ item.description }}</p>
              <ul class="tag-list" :aria-label="content.locale === 'es' ? 'Habilidades' : 'Skills'">
                <li v-for="tag in item.tags" :key="tag"><TechBadge :label="tag" /></li>
              </ul>
            </article>
          </li>
        </ol>
      </section>

      <section id="education" class="education-section section-block section-grid" aria-labelledby="education-title" data-reveal>
        <div class="section-heading section-heading--compact">
          <p class="eyebrow">{{ content.education.eyebrow }}</p>
          <h2 id="education-title">{{ content.education.title }}</h2>
          <p>{{ content.education.description }}</p>
        </div>
        <div>
          <ol class="degree-list">
            <li v-for="degree in content.education.degrees" :key="degree.year" data-reveal-item>
              <span>{{ degree.year }}</span>
              <div><h3>{{ degree.title }}</h3><p>{{ degree.institution }}</p></div>
            </li>
          </ol>
          <div class="learning-terminal" data-reveal-item>
            <div class="learning-terminal__bar"><span /><span /><span /><code>pnpm add --global @cris/learning</code></div>
            <div class="learning-terminal__body">
              <h3>{{ content.education.learningLabel }}</h3>
              <ul>
                <li v-for="item in content.education.learning" :key="item"><span aria-hidden="true">+</span>{{ item }}</li>
              </ul>
            </div>
            <p>{{ content.education.learning.length }} {{ content.locale === 'es' ? 'rutas documentadas · aprendizaje continuo' : 'documented tracks · continuous learning' }}</p>
          </div>
        </div>
      </section>

      <section id="work" class="section-block" aria-labelledby="work-title" data-reveal>
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
          <article v-for="project in filteredProjects" :key="project.number" class="project-card" data-reveal-item>
            <div class="project-card__number">{{ project.number }}</div>
            <div class="project-card__content">
              <figure
                v-if="project.image"
                :class="['project-card__visual', { 'project-card__visual--wide': (project.imageWidth ?? 1) / (project.imageHeight ?? 1) > 3 }]"
              >
                <img
                  :src="project.image"
                  :alt="project.imageAlt"
                  :width="project.imageWidth"
                  :height="project.imageHeight"
                  loading="lazy"
                  decoding="async"
                >
              </figure>
              <p class="project-card__type">{{ project.type }}</p>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <ul class="tag-list" :aria-label="content.locale === 'es' ? 'Tecnologías' : 'Technologies'">
                <li v-for="tag in project.tags" :key="tag"><TechBadge :label="tag" /></li>
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
        <div class="archive-cta">
          <p>{{ content.labels.archiveDescription }}</p>
          <NuxtLink class="button button--secondary" :to="content.locale === 'es' ? '/archive' : '/en/archive'">{{ content.labels.archiveCta }} →</NuxtLink>
        </div>
      </section>

      <section id="system" class="lab-preview section-block" aria-labelledby="system-title" data-reveal>
        <div class="section-heading">
          <p class="eyebrow">SYSTEM + AI LAB</p>
          <h2 id="system-title">{{ content.locale === 'es' ? 'La arquitectura merece su propio espacio.' : 'The architecture deserves its own space.' }}</h2>
          <p>{{ content.locale === 'es' ? 'CRIS/OS, la estrategia Vue–React–Angular y las exploraciones de la especialización se documentan como decisiones, no como una lista de habilidades.' : 'CRIS/OS, the Vue–React–Angular strategy and specialization explorations are documented as decisions, not as a skills list.' }}</p>
        </div>
        <div class="lab-preview__grid">
          <NuxtLink :to="content.locale === 'es' ? '/system-lab#design-system' : '/en/system-lab#design-system'" data-reveal-item>
            <span>01 · DESIGN SYSTEM</span><h3>{{ content.system.title }}</h3><p>{{ content.system.description }}</p>
          </NuxtLink>
          <NuxtLink :to="content.locale === 'es' ? '/system-lab#frameworks' : '/en/system-lab#frameworks'" data-reveal-item>
            <span>02 · FRAMEWORK STRATEGY</span><h3>{{ content.framework.title }}</h3><p>{{ content.framework.description }}</p>
          </NuxtLink>
        </div>
        <NuxtLink class="button button--secondary lab-preview__cta" :to="content.locale === 'es' ? '/system-lab' : '/en/system-lab'">{{ content.labels.systemCta }} →</NuxtLink>
      </section>

      <section id="ai-lab" class="ai-section section-block" aria-labelledby="ai-title" data-reveal>
        <div class="ai-section__signal" aria-hidden="true">
          <span v-for="n in 18" :key="n" :style="{ height: `${12 + ((n * 17) % 54)}px` }" />
        </div>
        <div>
          <p class="eyebrow">{{ content.ai.eyebrow }}</p>
          <h2 id="ai-title">{{ content.ai.title }}</h2>
          <p>{{ content.ai.description }}</p>
          <div class="hero__actions">
            <button class="button button--primary" type="button" @click="assistant?.open()">{{ content.ai.cta }}</button>
            <NuxtLink class="button button--secondary" :to="content.locale === 'es' ? '/system-lab#ai-path' : '/en/system-lab#ai-path'">{{ content.locale === 'es' ? 'Ver ruta de exploración' : 'View exploration path' }} →</NuxtLink>
          </div>
        </div>
      </section>

      <ToolMarquee :locale="content.locale" />

      <section id="contact" class="contact-section" aria-labelledby="contact-title" data-reveal>
        <div class="contact-section__content">
          <p class="eyebrow">{{ content.contact.eyebrow }}</p>
          <h2 id="contact-title">{{ content.contact.title }}</h2>
          <p>{{ content.contact.description }}</p>
          <div class="contact-section__actions">
            <button class="button button--primary" type="button" @click="assistant?.open()">{{ content.contact.assistantCta }}</button>
            <a class="button button--secondary" href="mailto:cristianduografico@gmail.com">{{ content.contact.cta }}</a>
            <NuxtLink class="button button--secondary" :to="content.locale === 'es' ? '/resume' : '/en/resume'">{{ content.labels.resumeCta }}</NuxtLink>
          </div>
        </div>
        <nav class="contact-links" :aria-label="content.locale === 'es' ? 'Perfiles profesionales' : 'Professional profiles'">
          <a v-for="link in content.contact.links" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer">
            <TechIcon :label="link.label" /><span><strong>{{ link.label }}</strong><small>{{ link.detail }}</small></span><span aria-hidden="true">↗</span>
          </a>
        </nav>
      </section>
    </main>

    <footer class="site-footer">
      <BrandMark />
      <p>© {{ new Date().getFullYear() }} Cristian Rubén Salcedo Díaz · {{ content.labels.footer }}</p>
      <nav :aria-label="content.locale === 'es' ? 'Información legal' : 'Legal information'">
        <NuxtLink to="/privacy">Privacy</NuxtLink>
        <NuxtLink to="/accessibility">Accessibility</NuxtLink>
        <NuxtLink to="/sitemap-html">Sitemap</NuxtLink>
      </nav>
    </footer>
  </div>
</template>
