<script setup lang="ts">
import type { PortfolioContent } from '~/data/portfolio'

const props = defineProps<{ content: PortfolioContent }>()
useSiteMotion()

const home = computed(() => props.content.locale === 'es' ? '/' : '/en')
const archive = computed(() => props.content.locale === 'es' ? '/archive' : '/en/archive')
const canonical = computed(() => props.content.locale === 'es'
  ? 'https://crisalcediaz.co/resume'
  : 'https://crisalcediaz.co/en/resume')
const nav = computed(() => [
  { label: props.content.locale === 'es' ? 'Perfil' : 'Profile', href: '#resume-profile' },
  { label: props.content.locale === 'es' ? 'Experiencia' : 'Experience', href: '#resume-experience' },
  { label: props.content.locale === 'es' ? 'Educación' : 'Education', href: '#resume-education' },
  { label: props.content.locale === 'es' ? 'Competencias' : 'Capabilities', href: '#resume-stack' },
  { label: props.content.locale === 'es' ? 'Portafolio visual' : 'Visual portfolio', href: archive.value, emphasis: 'resource' as const },
])

const printResume = () => window.print()

useHead({
  htmlAttrs: { lang: props.content.locale },
  link: [
    { rel: 'canonical', href: canonical.value },
    { rel: 'alternate', hreflang: 'es', href: 'https://crisalcediaz.co/resume' },
    { rel: 'alternate', hreflang: 'en', href: 'https://crisalcediaz.co/en/resume' },
  ],
})

useSeoMeta({
  title: props.content.locale === 'es' ? 'Currículum | Cristian Salcedo' : 'Resume | Cristian Salcedo',
  description: props.content.about.paragraphs[0],
  ogTitle: props.content.locale === 'es' ? 'Currículum de Cristian Salcedo' : 'Cristian Salcedo resume',
  ogDescription: props.content.about.paragraphs[0],
  ogUrl: canonical.value,
})
</script>

<template>
  <div class="site-shell resume-shell">
    <a class="skip-link" href="#main">{{ content.locale === 'es' ? 'Saltar al contenido' : 'Skip to content' }}</a>
    <SiteHeader :locale="content.locale" :language-label="content.languageLabel" :alternate-path="content.locale === 'es' ? '/en/resume' : '/resume'" :home-path="home" :nav="nav" />

    <main id="main" class="resume-page">
      <section id="resume-profile" class="resume-hero" data-reveal>
        <img src="/images/profile/cristian-salcedo.webp" alt="" width="320" height="427">
        <div>
          <p class="eyebrow">{{ content.locale === 'es' ? 'CURRÍCULUM · PERFIL PÚBLICO' : 'RESUME · PUBLIC PROFILE' }}</p>
          <h1>Cristian Rubén Salcedo Díaz</h1>
          <p class="resume-hero__role">Design Engineer · Product Design & Design Systems · UX/UI + Frontend · AI-assisted workflows</p>
          <p>{{ content.about.paragraphs[0] }}</p>
          <div class="hero__actions resume-actions">
            <button class="button button--primary" type="button" @click="printResume">{{ content.locale === 'es' ? 'Imprimir / guardar PDF' : 'Print / save PDF' }}</button>
            <NuxtLink class="button button--secondary" :to="home">← {{ content.locale === 'es' ? 'Volver al portafolio' : 'Back to portfolio' }}</NuxtLink>
          </div>
        </div>
      </section>

      <section id="resume-experience" class="resume-section" data-reveal>
        <p class="eyebrow">{{ content.experience.eyebrow }}</p><h2>{{ content.experience.title }}</h2>
        <ol class="resume-timeline">
          <li v-for="item in content.experience.items" :key="`${item.company}-${item.period}`" data-reveal-item>
            <p>{{ item.period }}</p><div><span>{{ item.company }}</span><h3>{{ item.role }}</h3><p>{{ item.description }}</p><ul class="tag-list"><li v-for="tag in item.tags" :key="tag"><TechBadge :label="tag" /></li></ul></div>
          </li>
        </ol>
      </section>

      <div class="resume-columns">
        <section id="resume-education" class="resume-section" data-reveal>
          <p class="eyebrow">{{ content.education.eyebrow }}</p><h2>{{ content.locale === 'es' ? 'Educación' : 'Education' }}</h2>
          <ol class="degree-list"><li v-for="degree in content.education.degrees" :key="degree.year" data-reveal-item><span>{{ degree.year }}</span><div><h3>{{ degree.title }}</h3><p>{{ degree.institution }}</p></div></li></ol>
        </section>
        <section id="resume-stack" class="resume-section" data-reveal>
          <p class="eyebrow">{{ content.stack.eyebrow }}</p><h2>{{ content.locale === 'es' ? 'Competencias y herramientas' : 'Capabilities and tools' }}</h2>
          <div class="resume-stack-groups"><section v-for="group in content.stack.groups" :key="group.category" data-reveal-item><h3>{{ group.label }}</h3><ul class="tag-list"><li v-for="item in group.items" :key="item"><TechBadge :label="item" /></li></ul></section></div>
        </section>
      </div>

      <section class="resume-contact" data-reveal>
        <div><p class="eyebrow">{{ content.contact.eyebrow }}</p><h2>{{ content.locale === 'es' ? 'Contacto profesional' : 'Professional contact' }}</h2></div>
        <nav :aria-label="content.locale === 'es' ? 'Contacto profesional' : 'Professional contact'">
          <a v-for="link in content.contact.links" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer"><TechIcon :label="link.label" /><span><strong>{{ link.label }}</strong><small>{{ link.detail }}</small></span></a>
          <a href="mailto:cristianduografico@gmail.com"><TechIcon label="Email" /><span><strong>Email</strong><small>cristianduografico@gmail.com</small></span></a>
        </nav>
      </section>
    </main>
  </div>
</template>
