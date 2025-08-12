<template>
  <div
    class="flex items-center space-x-2 bg-gradient-to-r from-[#0D0D0D] to-[#494949] px-3 py-1 rounded-full"
  >
    <!-- Coins -->
      <div class="relative">
        <!-- Trigger button -->
        <div class="flex items-center bg-white rounded-full px-2 py-0 shadow-inner" >
      <img
        src="https://placehold.co/28x28/png"
        alt="gold coin icon"
        class="w-5 h-5"
      />
      <span class="font-bold text-lg ml-2">1000</span>
      <button 
      @click="toggleDropdown"
        class="ml-2 bg-[#FFD45C] hover:bg-[#fccc42] rounded-full w-6 h-6 flex items-center justify-center font-bold text-black"
      >
        +
      </button>
    </div>

        <!-- Dropdown -->
        <div
          v-if="isOpen"
          class="absolute right-0 mt-1 w-40 bg-white rounded-xl shadow-lg overflow-hidden z-50"
        >
          <!-- Header -->
          <div
            class="bg-gradient-to-b from-yellow-300 to-yellow-500 px-3 py-2 flex items-center justify-between font-bold text-sm"
          >
            <div class="flex items-center space-x-2">
              <img src="https://placehold.co/24x24" alt="Gold icon" class="w-6 h-6" />
              <span>{{ gold }}</span>
            </div>
            <button @click="closeDropdown" class="text-black hover:text-red-500">
              ✕
            </button>
          </div>

          <!-- Currency rows -->
          <div
            class="flex items-center px-3 py-2 bg-gradient-to-r from-gray-200 to-gray-300 text-sm font-medium"
          >
            <img src="https://placehold.co/24x24" alt="Silver icon" class="w-6 h-6 mr-2" />
            <span>{{ silver }}</span>
          </div>

          <div
            class="flex items-center px-3 py-2 bg-gradient-to-r from-gray-300 to-gray-400 text-sm font-medium"
          >
            <img src="https://placehold.co/24x24" alt="King icon" class="w-6 h-6 mr-2" />
            <span>{{ king }}</span>
          </div>

          <!-- Action button -->
          <button
            class="flex items-center w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-sm font-medium"
          >
            <span class="mr-2 text-xl font-bold">＋</span>
            Nạp thêm
          </button>
        </div>
      </div>


    <!-- Notifications -->
    <div class="relative ml-2">
      <i class="fas fa-bell text-yellow-300 text-lg"></i>
      <span
        class="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[7px] w-3 h-3 flex items-center justify-center rounded-full"
        >10</span
      >
    </div>
    <!-- envelope -->
    <div class="relative">
      <i class="fas fa-envelope text-yellow-300 text-lg"></i>
      <span
        class="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[7px] w-3 h-3 flex items-center justify-center rounded-full"
        >2</span
      >
    </div>

    <!-- Calendar -->
    <div class="relative">
      <i class="fas fa-calendar-alt text-yellow-300 text-lg"></i>
    </div>

    <!-- Avatar -->
    <div class="relative ml-1" @click="toggleMenu">
      <img
        src="https://placehold.co/40x40/png"
        alt="user profile picture"
        class="w-7 h-7 rounded-full border-2 border-[#F6E2B3]"
      />
      <div
        class="absolute -bottom-1 -right-1 bg-[#FFD45C] text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white"
      >
        20
      </div>
      
    </div>
      <transition name="fade">
      <div
        v-if="showMenu"
        class="absolute right-8 top-14 -mt-[p-3px] w-64 rounded-lg overflow-hidden shadow-lg z-50"
      >
        <!-- Header -->
        <div
          class="flex items-center justify-center px-4  py-2 rounded-full shadow-md"
         style="background: linear-gradient( #484848, #323232);"

        >
          <i class="fas fa-user text-yellow-200 text-lg mr-2"></i>
          <span class="text-yellow-200 font-bold uppercase text-sm">
            Trung Tâm Tài Khoản
          </span>
        </div>

        <!-- Menu Items -->
        <ul class="bg-white">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
          >
            <a :href="item.link" class="flex items-center px-4 py-3 hover:bg-gray-200">
              <i :class="['text-black text-lg mr-3', item.icon]"></i>
              <span class="text-gray-900 text-sm">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </transition>
      
  </div>
</template>

<script setup lang="ts">
const isOpen = ref<boolean>(false);

const gold = ref<number>(1000);
const silver = ref<number>(20000);
const king = ref<number>(20000);

const toggleDropdown = (): void => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = (): void => {
  isOpen.value = false;
};

interface MenuItem {
  label: string
  icon: string
  link: string
}
const menuItems: MenuItem[] = [
  { label: 'Trang Cá Nhân', icon: 'fas fa-home', link: '#' },
  { label: 'Nhiệm Vụ', icon: 'fas fa-bullseye', link: '#' },
  { label: 'Ví Của Bạn', icon: 'fas fa-wallet', link: '#' },
  { label: 'Lịch Sử Giao Dịch', icon: 'fas fa-chart-bar', link: '#' },
  { label: 'Thoát Tài Khoản', icon: 'fas fa-sign-out-alt', link: '#' }
]

const showMenu = ref(false)

const toggleMenu = (): void => {
  showMenu.value = !showMenu.value
}

// Giả sử API trả về mảng MenuItem
// const { data: menuItems, pending, error } = await useFetch<MenuItem[]>('/api/info')
// console.log(menuItems, "menuItems")

// // Nếu cần xử lý khi lỗi
// if (error.value) {
//   console.error('Lỗi tải menu:', error.value)
// }
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
</style>
