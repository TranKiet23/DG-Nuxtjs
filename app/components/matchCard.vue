<template>
  <div
    style="border-radius: 12% 12% 14% 14%"
    class="w-[320px] display-desktop rounded-xl border-2 rounded-full border-yellow-300 overflow-hidden shadow-lg bg-gradient-to-b from-gray-900 to-gray-800"
  >
    <!-- Header -->
    <div class="text-white p-4 relative">
      <!-- HOT badge -->
      <div
        v-if="items.badge"
        class="absolute top-2 right-2 flex flex-col items-center"
      >
        <span
          class="text-xs font-bold text-red-500 uppercase bg-yellow-300 px-2 py-0.5 rounded-full shadow"
          >HOT</span
        >
        <div
          class="w-5 h-5 bg-yellow-500 rounded-full mt-1 animate-pulse"
        ></div>
      </div>

      <!-- Logo DEMNAY -->
      <div class="flex items-center justify-center space-x-2">
        <img
          :src="items.image"
          alt="Logo DEMNAY"
          class="rounded-full w-8 h-8"
        />
        <span class="font-bold text-lg">
          {{ items.brandName }}
          <span class="text-yellow-400">{{ items.brandHighlight }}</span>
        </span>
      </div>

      <!-- League and Time -->
      <div class="flex justify-between items-center mt-2 text-sm">
        <span
          class="bg-yellow-400 text-black font-semibold px-2 py-0.5 rounded"
        >
          {{ items.league }}
        </span>
        <span>{{ items.date }} | {{ items.time }}</span>
      </div>

      <!-- Teams -->
      <div class="flex justify-center items-center mt-4 space-x-6">
        <div class="flex flex-col items-center">
          <img :src="items.image" :alt="items.alt" class="w-14 h-14" />
          <span class="mt-1 text-sm font-semibold uppercase">{{
            items.teamAName
          }}</span>
        </div>
        <span class="text-2xl font-bold">VS</span>
        <div class="flex flex-col items-center">
          <img :src="items.image" :alt="items.alt" class="w-14 h-14" />
          <span class="mt-1 text-sm font-semibold uppercase">{{
            items.teamBName
          }}</span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="gradient-golden90 rounded-full px-4 py-3 flex justify-between items-center"
    >
      <div>
        <p class="text-sm">
          {{ items.teamAName }} <span class="font-bold">vs</span>
          {{ items.teamBName }}
        </p>
        <p class="font-bold">{{ items.commentator }}</p>
      </div>
      <button
        class="bg-black text-yellow-300 px-3 py-2 rounded-xl flex items-center space-x-1 hover:bg-gray-800"
      >
        <i class="fas fa-bell"></i>
        <span class="text-sm font-semibold">Đặt lịch</span>
      </button>
    </div>
  </div>

  <!--  mobile -->
  <div class="display-mb w-full" style="border-radius: 12% 12% 14% 14%">
      <div class="relative rounded-lg overflow-hidden">
        <span
          class="absolute top-1 left-1 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded"
        >
          LIVE
        </span>

        <img :src="items.image" :alt="items.alt" class="w-full h-auto" />
        <div
          class="bg-white custom-card px-2 py-1 text-center w-10/12 gradient-golden90"
        >
          <p class="text-xs">
            {{ items.teamAName }} <span class="font-bold">vs</span>
            {{ items.teamBName }}
          </p>
          <p class="text-sm font-bold">{{ items.commentator }}</p>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { Slide } from "../types/slide"

const props = defineProps<{
  items: Slide;
}>();
</script>

<style scoped>
.custom-card {
  align-content: center;
  align-items: center;
  position: absolute;
  margin-top:-55px;
  right: 15px;
  padding: 10px 12px;
  border-radius: 30px 30px 0px 0px;
}
</style>
