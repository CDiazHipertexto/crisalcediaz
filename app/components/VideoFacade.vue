<script setup lang="ts">
const props = defineProps<{
  videoId: string
  title: string
  thumbnail: string
  playLabel: string
  openLabel: string
}>()

const playing = ref(false)
const videoUrl = computed(() => `https://www.youtube.com/watch?v=${props.videoId}`)
const embedUrl = computed(() => `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1&rel=0`)
</script>

<template>
  <div class="video-facade">
    <iframe
      v-if="playing"
      :src="embedUrl"
      :title="title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <button v-else type="button" :aria-label="`${playLabel}: ${title}`" @click="playing = true">
      <img :src="thumbnail" alt="" width="960" height="540" loading="lazy" decoding="async">
      <span class="video-facade__play" aria-hidden="true">▶</span>
    </button>
    <a :href="videoUrl" target="_blank" rel="noopener noreferrer">{{ openLabel }} <span aria-hidden="true">↗</span></a>
  </div>
</template>
