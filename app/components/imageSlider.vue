<script setup lang="ts">
import matchCard from "./matchCard.vue";
import { ref, onMounted, watch, onUnmounted } from "vue";
import ChevronLeft from "../assets/imgs/icon-left.svg";
import ChevronRight from "../assets/imgs/icon-right.svg";
interface Slide {
  image: string;
  title?: string;
}

const props = defineProps<{
  slides: Slide[];
}>();

const sliderRef = ref<HTMLDivElement | null>(null);
const itemRefs = ref<HTMLDivElement[]>([]);
const showAll = ref<boolean>(false);
const windowWidth = ref<number>(0);

onMounted(() => {
  itemRefs.value = [];
  handleResize();

  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const handleResize = (): void => {
  windowWidth.value = window.innerWidth;
  showAll.value = window.innerWidth < 768;
};

const setItemRef = (el: HTMLDivElement | null) => {
  if (el) itemRefs.value.push(el);
};

const scrollToNext = () => {
  if (!sliderRef.value || itemRefs.value.length === 0 || showAll.value) return;
  const currentScroll = sliderRef.value.scrollLeft;
  const itemWidth = itemRefs.value[0].clientWidth + 16; // gap-4 = 16px
  const nextScroll = Math.round(currentScroll / itemWidth + 1) * itemWidth;
  sliderRef.value.scrollTo({ left: nextScroll, behavior: "smooth" });
};

const scrollToPrev = () => {
  if (!sliderRef.value || itemRefs.value.length === 0 || showAll.value) return;
  const currentScroll = sliderRef.value.scrollLeft;
  const itemWidth = itemRefs.value[0].clientWidth + 16;
  const prevScroll = Math.round(currentScroll / itemWidth - 1) * itemWidth;
  sliderRef.value.scrollTo({ left: prevScroll, behavior: "smooth" });
};

watch(
  () => props.slides,
  () => {
    itemRefs.value = [];
  }
);
</script>

<template>
  <div class="w-full">
    <!-- Header -->
    <div
      v-if="windowWidth > 768"
      class="flex justify-between items-center mb-4 rounded"
    >
      <span class="text-xs text-gray-500 px-3 py-1">SECTION_Thumbnails</span>
      <a
        @click="showAll = !showAll"
        class="flex items-center text-sm text-black px-3 py-1 cursor-pointer hover:text-purple-600"
      >
        {{ showAll ? "Thu gọn" : "Xem tất cả" }}
        <svg
          v-if="!showAll"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>
    </div>

    <div class="relative w-full">
      <!-- Nút trái -->
      <button
        v-if="!showAll"
        @click="scrollToPrev"
        style="left: -52px"
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2"
      >
        <img :src="ChevronLeft" alt="Prev" class="w-20 h-56" />
      </button>

      <!-- Nút phải -->
      <button
        v-if="!showAll"
        @click="scrollToNext"
        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2"
      >
        <img :src="ChevronRight" alt="Next" class="w-20 h-56" />
      </button>

      <!-- Container -->
      <div
        ref="sliderRef"
        :class="[
          'flex scrollbar-hide scroll-smooth pb-2 border-t-2 rounded-lg border-yellow-400',
          showAll
            ? 'flex-wrap overflow-x-hidden gap-2'
            : 'flex-nowrap overflow-x-auto gap-2',
        ]"
      >
        <div
          v-for="(item, idx) in slides"
          :key="idx"
          :ref="setItemRef"
          class="flex-shrink-0"
          :class="[
            showAll
              ? 'w-[calc(50%-0.5rem)] md:w-[calc(25%-0.5rem)]' // 4 item ngang desktop
              : 'w-1/2 md:w-3/12',
          ]"
        >
          <div class="py-3 rounded-lg overflow-hidden">
            <!-- <img :src="item.image" :alt="item.alt" class="w-full h-48 object-cover" />
            <div v-if="item.title" class="p-2 text-center text-sm font-medium">
              {{ item.title }}
            </div> -->
            <MatchCard :items="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
