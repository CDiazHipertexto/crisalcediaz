<script setup lang="ts">
import type { LabContent } from '~/data/lab'

const props = defineProps<{ content: LabContent }>()
useSiteMotion()

const home = computed(() => props.content.locale === 'es' ? '/' : '/en')
const canonical = computed(() => props.content.locale === 'es'
  ? 'https://crisalcediaz.co/system-lab'
  : 'https://crisalcediaz.co/en/system-lab')
const nav = computed(() => [
  { label: props.content.locale === 'es' ? 'Sistema' : 'System', href: '#design-system' },
  { label: 'Frameworks', href: '#frameworks' },
  { label: 'AI Path', href: '#ai-path' },
  { label: props.content.archive, href: props.content.locale === 'es' ? '/archive' : '/en/archive' },
  { label: props.content.resume, href: props.content.locale === 'es' ? '/resume' : '/en/resume' },
])

useHead({
  htmlAttrs: { lang: props.content.locale },
  link: [
    { rel: 'canonical', href: canonical.value },
    { rel: 'alternate', hreflang: 'es', href: 'https://crisalcediaz.co/system-lab' },
    { rel: 'alternate', hreflang: 'en', href: 'https://crisalcediaz.co/en/system-lab' },
  ],
})

useSeoMeta({
  title: props.content.locale === 'es' ? 'CRIS/OS · System + AI Lab | Cristian Salcedo' : 'CRIS/OS · System + AI Lab | Cristian Salcedo',
  description: props.content.hero.description,
  ogTitle: props.content.hero.title,
  ogDescription: props.content.hero.description,
  ogUrl: canonical.value,
})
</script>

<template>
  <div class="site-shell lab-shell">
    <a class="skip-link" href="#main">{{ content.locale === 'es' ? 'Saltar al contenido' : 'Skip to content' }}</a>
    <SiteHeader :locale="content.locale" :language-label="content.languageLabel" :alternate-path="content.alternatePath" :home-path="home" :nav="nav" />

    <main id="main">
      <section class="lab-hero section-grid" data-reveal>
        <div>
          <p class="eyebrow">{{ content.hero.eyebrow }}</p>
          <h1>{{ content.hero.title }}</h1>
          <p>{{ content.hero.description }}</p>
          <p class="lab-note">{{ content.hero.note }}</p>
          <NuxtLink class="button button--secondary" :to="home">← {{ content.back }}</NuxtLink>
        </div>
        <NetworkVisual />
      </section>

      <section id="design-system" class="section-block lab-detail" aria-labelledby="lab-system-title" data-reveal>
        <div class="section-heading">
          <div><p class="eyebrow">{{ content.system.eyebrow }}</p><h2 id="lab-system-title">{{ content.system.title }}</h2></div>
          <p>{{ content.system.description }}</p>
        </div>
        <div class="system-layer-grid">
          <article v-for="layer in content.system.layers" :key="layer.number" data-reveal-item>
            <span>{{ layer.number }} / 03</span><h3>{{ layer.title }}</h3><p>{{ layer.description }}</p>
            <ul class="tag-list"><li v-for="example in layer.examples" :key="example"><TechBadge :label="example" /></li></ul>
          </article>
        </div>
        <div class="token-console" data-reveal-item>
          <div class="learning-terminal__bar"><span /><span /><span /><code>cris-os/tokens.semantic.css</code></div>
          <div class="token-console__body">
            <code>--color-action-primary: var(--primitive-green-300);</code>
            <code>--color-surface-raised: var(--primitive-neutral-900);</code>
            <code>--color-border-focus: var(--primitive-yellow-300);</code>
          </div>
          <p><span aria-hidden="true">●</span> {{ content.system.statusLabel }}</p>
        </div>
      </section>

      <section id="frameworks" class="section-block framework-lab" aria-labelledby="lab-framework-title" data-reveal>
        <div class="section-heading">
          <div><p class="eyebrow">{{ content.frameworks.eyebrow }}</p><h2 id="lab-framework-title">{{ content.frameworks.title }}</h2></div>
          <p>{{ content.frameworks.description }}</p>
        </div>
        <div class="framework-flow" aria-hidden="true"><span>CONTENT</span><i>→</i><span>NUXT SHELL</span><i>→</i><span>ISOLATED LABS</span><i>→</i><span>STATIC DEPLOY</span></div>
        <div class="framework-grid">
          <article v-for="(item, index) in content.frameworks.items" :key="item.name" data-reveal-item>
            <div class="framework-grid__top"><span>0{{ index + 1 }}</span><span>{{ item.status }}</span></div>
            <h3>{{ item.name }}</h3><strong>{{ item.responsibility }}</strong><p>{{ item.reason }}</p><code>{{ item.route }}</code>
          </article>
        </div>
      </section>

      <section id="ai-path" class="section-block ai-path" aria-labelledby="ai-path-title" data-reveal>
        <div class="section-heading">
          <div><p class="eyebrow">{{ content.ai.eyebrow }}</p><h2 id="ai-path-title">{{ content.ai.title }}</h2></div>
          <p>{{ content.ai.description }}</p>
        </div>
        <div class="ai-path__grid">
          <article v-for="item in content.ai.items" :key="item.title" data-reveal-item>
            <span>{{ item.status }}</span><h3>{{ item.title }}</h3><p>{{ item.description }}</p><small>{{ item.evidence }}</small>
          </article>
        </div>
        <p class="lab-guardrail">{{ content.ai.guardrail }}</p>
      </section>
    </main>

    <footer class="site-footer">
      <BrandMark /><p>© {{ new Date().getFullYear() }} Cristian Rubén Salcedo Díaz</p><NuxtLink :to="home">{{ content.back }}</NuxtLink>
    </footer>
  </div>
</template>
