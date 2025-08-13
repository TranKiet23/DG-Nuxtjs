<template>
  <div class="bg-gray-100">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="max-w-[1448px] mx-auto px-4 py-2 container-main">
      <h1 class="text-3xl font-bold text-center mb-8">Upcoming Matches</h1>

      <!-- Slider -->
      <div class="w-full">
        <ImageSlider :slides="slides" />
      </div>
    </main>

    <!-- Footer (nếu cần) -->
    <footer class="bg-gray-900 text-gray-300 text-center py-4 text-sm">
      © 2025 DEMNAY Live. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/layoutHeader.vue'
import ImageSlider from "../components/imageSlider.vue"

interface Slide {
  alt: string
  image: string
  title?: string
  badge: boolean
}

const { data: slides, error, pending } = await useFetch<Slide[]>(
  'https://689ac232e727e9657f627d2c.mockapi.io/match'
)
</script>

<style scoped>
.container-main {
  min-height: 85vh;
}
</style>
