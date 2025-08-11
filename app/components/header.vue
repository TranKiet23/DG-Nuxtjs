<template>
  <header class="w-full font-sans">
    <div class="flex h-[86px] bg-gradient-to-r from-[#F8E889] to-[#E4B764]">
      <!-- Logo Section -->
      <div class="bg-black w-96 flex items-center justify-end rounded-tr-[45px]">
        <div class="text-white text-[52px] font-bold px-12 leading-none">
          <span class="text-right"> LOGO </span>
        </div>
      </div>

      <!-- Menu + User Section -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Top Menu -->
        <div
          class="flex items-center justify-between h-[48px] px-8 bg-gradient-to-r from-[#F8E889] to-[#E4B764]"
        >
          <!-- Left Menu Links -->
          <nav
            class="flex items-center space-x-10 text-black font-semibold text-[14px] tracking-wide"
          >
            <a href="#" class="hover:text-white">LỊCH TRỰC TIẾP</a>
            <a href="#" class="hover:text-white">LỊCH THI ĐẤU</a>
            <a href="#" class="hover:text-white">TỶ LỆ KÈO</a>
            <a href="#" class="hover:text-white">KẾT QUẢ</a>
            <a href="#" class="hover:text-white">PHÒNG CHAT</a>
            <a href="#" class="hover:text-white">TIN TỨC</a>
          </nav>

          <!-- User Info -->
          <div class="flex items-center space-x-3">
            <!-- Coin -->
            <div
              class="bg-white rounded-full px-4 py-0.5 flex items-center text-[13px] font-bold leading-none shadow"
            >
              1000
            </div>
            <!-- Icons -->
            <i class="fas fa-gift text-black text-[14px]"></i>
            <i class="fas fa-envelope text-black text-[14px]"></i>
            <i class="fas fa-cog text-black text-[14px]"></i>
            <!-- Avatar -->
            <img
              src="https://placehold.co/34x34"
              alt="User avatar"
              class="rounded-full w-[34px] h-[34px] border border-white"
            />
          </div>
        </div>

        <!-- Secondary Menu -->
        <div
          class="flex items-center bg-black text-white text-[13px] px-8 h-[38px]"
        >
          <div class="flex items-center mr-8">
            <i class="fas fa-comment-alt mr-1 text-[#f2cb59] text-[14px]"></i>
            Bảng Tin
          </div>
          <div class="flex items-center mr-8">
            <i class="fas fa-video mr-1 text-[#f2cb59] text-[14px]"></i> Reels
          </div>
          <div class="flex items-center mr-8">
            <i class="fas fa-play mr-1 text-[#f2cb59] text-[14px]"></i>
            Highlight
          </div>
          <div class="flex items-center mr-8">
            <i class="fas fa-chess-knight mr-1 text-[#f2cb59] text-[14px]"></i>
            Tip Kèo
          </div>
          <div class="flex items-center mr-8">
            <i class="fas fa-film mr-1 text-[#f2cb59] text-[14px]"></i> Phim Ảnh
          </div>
          <div class="flex items-center mr-8">
            <i class="fas fa-book mr-1 text-[#f2cb59] text-[14px]"></i> Truyện
            Tranh
          </div>

          <!-- Language Button -->
          <button
            class="bg-red-600 text-white rounded-full px-4 py-[2px] ml-auto mr-3 text-[12px] font-semibold"
          >
            TIẾNG VIỆT
          </button>
          <i class="fas fa-cog text-[#f2cb59] text-[14px]"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// Font Awesome - thêm vào app.vue hoặc nuxt.config.ts
</script>
