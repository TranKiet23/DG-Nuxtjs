<template>
  <div :class="currentTheme === 'light' ? 'bg-gray-100' : 'bg-gray-400'">
    <!-- Header -->
    <Header  @update:theme="handleThemeChange" />
    <Loading v-if="isLoad"></Loading>

    <!-- Main Content -->
    <main  class="max-w-[1440px] mx-auto px-4 py-2 container-main">
      <h1 class="text-3xl font-bold text-center mb-8">Upcoming Matches</h1>

      <!-- Slider -->
      <div v-if="!isLoad" class="w-full">
        <ImageSlider :slides="slides" />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 text-center py-4 text-sm">
      © 2025 DEMNAY Live. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '../components/layoutHeader.vue';
import ImageSlider from "../components/imageSlider.vue";
import Loading from '../components/loading.vue';
import type { Slide } from "../types/slide";

const currentTheme = ref<'light' | 'dark'>('light');
const isLoad =  ref<boolean>(false)

onMounted(() => {
  isLoad.value = true
  setTimeout(() => {
    isLoad.value = false
  }, 500) 
})

const handleThemeChange = (value: 'light' | 'dark') => {
  currentTheme.value = value
}

const { data: slides } = await useFetch<Slide[]>('https://689ac232e727e9657f627d2c.mockapi.io/match', {
  default: () => [] 
})
</script>

<style scoped>
.container-main {
  min-height: 85vh;
}
</style>
