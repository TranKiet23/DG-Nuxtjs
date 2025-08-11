<template>
  <header class="w-full">
    <!-- Top Navigation -->
    <div class="flex items-center justify-between bg-gradient-to-r from-black via-black to-yellow-500 px-4">
      <!-- Logo -->
      <div class="bg-black px-6 py-2 text-white text-5xl font-bold">
        LOGO
      </div>

      <!-- Main Menu -->
      <nav class="flex items-center space-x-6 text-sm font-semibold text-black">
        <a href="#" class="hover:text-white">LỊCH TRỰC TIẾP</a>
        <a href="#" class="hover:text-white">LỊCH THI ĐẤU</a>
        <a href="#" class="hover:text-white">TỶ LỆ KÈO</a>
        <a href="#" class="hover:text-white">KẾT QUẢ</a>
        <a href="#" class="hover:text-white">PHÒNG CHAT</a>
        <a href="#" class="hover:text-white">TIN TỨC</a>
      </nav>

      <!-- User Info -->
      <div class="flex items-center space-x-3 text-black">
        <!-- Coin -->
        <div class="bg-white rounded-full px-3 py-1 flex items-center">
          <span>1000</span>
        </div>
        <!-- Icons -->
        <i class="fas fa-gift"></i>
        <i class="fas fa-envelope"></i>
        <i class="fas fa-cog"></i>
        <!-- Avatar -->
        <img src="https://placehold.co/40x40" alt="User avatar" class="rounded-full w-10 h-10" />
      </div>
    </div>

    <!-- Secondary Menu -->
    <div class="flex items-center space-x-8 bg-black px-6 py-2 text-white text-sm">
      <div class="flex items-center space-x-1">
        <i class="fas fa-newspaper"></i>
        <span>Bảng Tin</span>
      </div>
      <div class="flex items-center space-x-1">
        <i class="fas fa-video"></i>
        <span>Reels</span>
      </div>
      <div class="flex items-center space-x-1">
        <i class="fas fa-play"></i>
        <span>Highlight</span>
      </div>
      <div class="flex items-center space-x-1">
        <i class="fas fa-chess-knight"></i>
        <span>Tip Kèo</span>
      </div>
      <div class="flex items-center space-x-1">
        <i class="fas fa-film"></i>
        <span>Phim Ảnh</span>
      </div>
      <div class="flex items-center space-x-1">
        <i class="fas fa-book"></i>
        <span>Truyện Tranh</span>
      </div>
      <button class="bg-red-600 text-white rounded-full px-4 py-1">TIẾNG VIỆT</button>
      <i class="fas fa-cog"></i>
    </div>
  </header>
</template>

<script setup>
// No script logic yet, purely UI
</script>

<style>
/* Optional: match fonts if needed */
</style>
