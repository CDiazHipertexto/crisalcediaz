<script setup lang="ts">
import type { ArchiveContent } from '~/data/archive'

const props = defineProps<{ content: ArchiveContent }>()

const canonical = computed(() => props.content.locale === 'es'
  ? 'https://crisalcediaz.co/archive'
  : 'https://crisalcediaz.co/en/archive')

const nav = computed(() => [
  { label: props.content.locale === 'es' ? 'Web' : 'Web', href: '#web' },
  { label: props.content.locale === 'es' ? 'Inventario' : 'Inventory', href: '#inventory' },
  { label: 'Motion', href: '#motion' },
  { label: props.content.locale === 'es' ? 'Inicio' : 'Home', href: props.content.locale === 'es' ? '/' : '/en' },
])

const hostname = (url: string) => new URL(url).hostname

useHead({
  htmlAttrs: { lang: props.content.locale },
  link: [
    { rel: 'canonical', href: canonical.value },
    { rel: 'alternate', hreflang: 'es', href: 'https://crisalcediaz.co/archive' },
    { rel: 'alternate', hreflang: 'en', href: 'https://crisalcediaz.co/en/archive' },
  ],
})

useSeoMeta({
  title: props.content.locale === 'es' ? 'Archivo visual y web | Cristian Salcedo' : 'Visual and web archive | Cristian Salcedo',
  description: props.content.hero.description,
  ogTitle: props.content.hero.title,
  ogDescription: props.content.hero.description,
  ogType: 'website',
  ogUrl: canonical.value,
})
</script>

<template>
  <div class="site-shell archive-shell">
    <a class="skip-link" href="#main">{{ content.locale === 'es' ? 'Saltar al contenido' : 'Skip to content' }}</a>
    <SiteHeader
      :locale="content.locale"
      :language-label="content.languageLabel"
      :alternate-path="content.alternatePath"
      :home-path="content.locale === 'es' ? '/' : '/en'"
      :nav="nav"
    />

    <main id="main">
      <section class="archive-hero section-grid">
        <div>
          <p class="eyebrow">{{ content.hero.eyebrow }}</p>
          <h1>{{ content.hero.title }}</h1>
          <p>{{ content.hero.description }}</p>
          <NuxtLink class="button button--secondary" :to="content.locale === 'es' ? '/' : '/en'">← {{ content.hero.back }}</NuxtLink>
        </div>
        <div class="archive-hero__stack" aria-hidden="true">
          <span>WEB</span><span>UX/UI</span><span>MOTION</span>
        </div>
      </section>

      <section id="web" class="section-block archive-web" aria-labelledby="archive-web-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ content.web.eyebrow }}</p>
            <h2 id="archive-web-title">{{ content.web.title }}</h2>
          </div>
          <p>{{ content.web.description }}</p>
        </div>
        <div class="browser-gallery">
          <article v-for="item in content.web.featured" :key="item.url" class="browser-card">
            <div class="browser-card__chrome" aria-hidden="true"><i /><i /><i /><span>{{ hostname(item.url) }}</span></div>
            <div class="browser-card__viewport" tabindex="0" :aria-label="`${content.web.previewLabel}: ${item.title}`">
              <img :src="item.image" :alt="item.alt" :width="item.width" :height="item.height" loading="lazy" decoding="async">
            </div>
            <div class="browser-card__info">
              <div><p>{{ item.sector }}</p><h3>{{ item.title }}</h3></div>
              <a :href="item.url" target="_blank" rel="noopener noreferrer" :aria-label="`${content.web.visit}: ${item.title}`">{{ content.web.visit }} ↗</a>
            </div>
          </article>
        </div>
      </section>

      <section id="inventory" class="section-block inventory-section" aria-labelledby="inventory-title">
        <div>
          <p class="eyebrow">WEB INDEX · 16</p>
          <h2 id="inventory-title">{{ content.web.allTitle }}</h2>
          <p>{{ content.web.allDescription }}</p>
        </div>
        <ol class="site-index">
          <li v-for="(item, index) in content.web.all" :key="item.url">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }} <span aria-hidden="true">↗</span></a>
          </li>
        </ol>
      </section>

      <section id="motion" class="section-block motion-section" aria-labelledby="motion-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ content.motion.eyebrow }}</p>
            <h2 id="motion-title">{{ content.motion.title }}</h2>
          </div>
          <div>
            <p>{{ content.motion.description }}</p>
            <a class="text-link" :href="content.motion.channelUrl" target="_blank" rel="noopener noreferrer">{{ content.motion.channelLabel }} ↗</a>
          </div>
        </div>
        <div class="video-grid">
          <article v-for="video in content.motion.videos" :key="video.id">
            <VideoFacade
              :video-id="video.id"
              :title="video.title"
              :thumbnail="video.thumbnail"
              :play-label="content.motion.playLabel"
              :open-label="content.motion.openLabel"
            />
            <h3>{{ video.title }}</h3>
            <p>{{ video.description }}</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <BrandMark />
      <p>© {{ new Date().getFullYear() }} Cristian Rubén Salcedo Díaz</p>
      <NuxtLink :to="content.locale === 'es' ? '/' : '/en'">{{ content.hero.back }}</NuxtLink>
    </footer>
  </div>
</template>
