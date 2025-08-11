<template>
  <header class="w-full bg-white shadow-md border-b border-gray-100">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-5">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" class="h-8 w-8" />
        <span class="text-xl font-bold text-blue-700 tracking-tight">DG Platform</span>
      </div>
      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8 items-center">
        <a href="#" class="text-gray-700 hover:text-blue-700 font-medium transition">Trang chủ</a>
        <a href="#" class="text-gray-700 hover:text-blue-700 font-medium transition">Tính năng</a>
        <a href="#" class="text-gray-700 hover:text-blue-700 font-medium transition">Bảng giá</a>
        <a href="#" class="text-gray-700 hover:text-blue-700 font-medium transition">Hỗ trợ</a>
      </nav>
      <!-- Actions -->
      <div class="hidden md:flex gap-4 items-center">
        <button class="px-4 py-2 rounded-md text-blue-700 font-semibold hover:bg-blue-50 transition">Đăng nhập</button>
        <button class="px-4 py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">Đăng ký</button>
      </div>
      <!-- Mobile menu button -->
      <button class="md:hidden flex items-center" @click="open = !open">
        <svg v-if="!open" class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Mobile Nav -->
    <div v-if="open" class="md:hidden px-4 pb-4 animate-fade-in">
      <nav class="flex flex-col gap-2">
        <a href="#" class="block py-2 text-gray-700 hover:text-blue-700 font-medium">Trang chủ</a>
        <a href="#" class="block py-2 text-gray-700 hover:text-blue-700 font-medium">Tính năng</a>
        <a href="#" class="block py-2 text-gray-700 hover:text-blue-700 font-medium">Bảng giá</a>
        <a href="#" class="block py-2 text-gray-700 hover:text-blue-700 font-medium">Hỗ trợ</a>
      </nav>
      <div class="flex flex-col gap-2 mt-2">
        <button class="w-full px-4 py-2 rounded-md text-blue-700 font-semibold hover:bg-blue-50 transition">Đăng nhập</button>
        <button class="w-full px-4 py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">Đăng ký</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fade-in {
  animation: fade-in 0.2s ease;
}
</style>