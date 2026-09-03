<script setup lang="ts">
const { getContent } = usePortfolioContent()
</script>

<template><ResumePage :content="getContent('es')" /></template>
