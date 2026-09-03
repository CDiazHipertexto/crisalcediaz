<script setup lang="ts">
const { getContent } = usePortfolioContent()
</script>

<template>
  <PortfolioHome :content="getContent('en')" />
</template>

