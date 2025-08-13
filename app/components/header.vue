<template>
  <header class="w-full font-sans">
    <!-- DESKTOP -->
    <div class="display-desktop">
      <div class="flex flex-col lg:flex-row gradient-golden90">
        <!-- Logo -->
        <div
          class="bg-black w-full lg:w-64 flex items-center justify-center lg:justify-end rounded-none lg:rounded-tr-[45px] py-2"
        >
          <div
            class="text-white font-bold px-6 leading-none text-2xl md:text-4xl lg:text-[48px]"
          >
            LOGO
          </div>
        </div>

        <!-- Menu + User -->
        <div class="flex-1 flex flex-col">
          <!-- Top Menu -->
          <div
            class="flex items-center justify-between h-[60px] px-4 md:px-8 gradient-golden90"
          >
            <!-- Hamburger for mobile -->
            <button
              @click="toggleMobileMenu"
              class="lg:hidden text-black text-2xl"
            >
              <i class="fas fa-bars"></i>
            </button>

            <!-- Desktop Menu -->
            <nav
              class="hidden lg:flex items-center space-x-6 text-black font-semibold text-sm tracking-wide relative z-50"
            >
              <div
                v-for="(item, index) in menu"
                :key="index"
                class="relative group"
              >
                <a
                  :href="item.link || '#'"
                  class="flex items-center hover:text-yellow-300 hover:bg-black rounded-full px-2 py-1"
                >
                  {{ item.value }}
                </a>

                <!-- Dropdown -->
                <div
                  v-if="item.dropdown"
                  class="absolute top-full left-0 hidden group-hover:block min-w-[150px]"
                >
                  <div class="rounded-xl shadow-lg overflow-hidden">
                    <div
                      class="bg-gradient-to-b from-gray-100 p-1 to-gray-300 py-2 space-y-1"
                    >
                      <div
                        v-for="(sub, i) in item.dropdown.items"
                        :key="i"
                        class="flex items-center px-3 py-2 bg-white bg-opacity-40 rounded-full cursor-pointer hover:bg-opacity-70"
                      >
                        <img
                          :src="sub.icon"
                          :alt="sub.alt"
                          class="w-6 h-6 mr-2"
                        />
                        <span class="text-sm font-medium">{{ sub.label }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <!-- Auth -->
            <div
              class="flex items-center space-x-2 lg:space-x-3"
              v-if="!isLogin"
            >
              <button
                class="bg-white text-black font-semibold px-3 py-1 rounded-full text-xs md:text-sm"
              >
                ĐĂNG KÝ
              </button>
              <button
                class="bg-black text-white font-semibold px-3 py-1 rounded-full text-xs md:text-sm"
                @click="login"
              >
                ĐĂNG NHẬP
              </button>
            </div>

            <div class="hidden lg:flex items-center flex-col" v-else>
              <span class="text-black text-xs whitespace-nowrap">
                Xin chào, NguyenVanDen
              </span>
              <navInfo class="mb-2" />
            </div>
          </div>

          <!-- Mobile Menu -->
          <transition name="fade">
            <nav
              v-if="mobileOpen"
              class="lg:hidden bg-white shadow-md px-4 py-2 space-y-2"
            >
              <div
                v-for="(item, index) in menu"
                :key="index"
                class="border-b pb-1"
              >
                <a :href="item.link || '#'" class="block py-1">
                  {{ item.value }}
                </a>
              </div>
            </nav>
          </transition>

          <!-- Secondary Menu -->
          <div
            class="flex items-center bg-black text-white text-xs md:text-[13px] px-4 md:px-8 h-[38px] overflow-x-auto"
          >
            <div
              v-for="(sec, idx) in secondaryMenu"
              :key="idx"
              class="flex items-center mr-6 shrink-0"
            >
              <i :class="[sec.icon, sec.color, 'mr-1']"></i>
              {{ sec.label }}
            </div>

            <!-- Language -->
            <button
              class="bg-red-600 text-white rounded-full px-4 py-[2px] ml-auto mr-3 text-[12px] font-semibold shrink-0"
            >
              TIẾNG VIỆT
            </button>
            <i class="fas fa-cog text-[#f2cb59] text-[14px] shrink-0"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- MB -->

    <div class="w-full display-mb">
      <div class="w-full bg-black overflow-hidden">
        <!-- Top Row -->
        <div class="flex items-center h-full gradient-golden90">
          <!-- Logo -->
          <div
            class="bg-black w-1/3 flex items-center justify-center rounded-none rounded-tr-[40px] py-2"
          >
            <div
              class="text-white font-bold px-6 leading-none text-2xl md:text-4xl lg:text-[48px]"
            >
              LOGO
            </div>
          </div>

          <!-- Right Section -->
          <div
            class="flex items-center justify-end gradient-golden90 px-4 w-2/3 space-x-2"
          >
            <!-- Language -->
            <button
              class="w-10 h-10 rounded-full bg-black flex items-center justify-center text-yellow-300 font-bold"
            >
              VN
            </button>

            <!-- Menu -->
            <button
              @click="toggleMobileMenu"
              class="w-10 h-10 rounded-full bg-black flex items-center justify-center text-yellow-300"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>

        <!-- Bottom Row -->
        <!-- Top Row -->
        <div class="flex items-center h-full">
          <div class="w-1/3 bg-back p-2"></div>
          <div class="flex items-center w-2/3 justify-around bg-back p-2">
            <img
              src="https://placehold.co/40x40/png"
              alt="Football"
              class="w-8 h-8"
            />
            <img
              src="https://placehold.co/40x40/png"
              alt="Basketball"
              class="w-8 h-8"
            />
            <img
              src="https://placehold.co/40x40/png"
              alt="Gamepad"
              class="w-8 h-8"
            />
            <button
              class="flex items-center bg-black text-yellow-300 rounded-full px-3 py-1 border border-yellow-300"
            >
              <i class="fas fa-coins mr-1"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Drawer -->
      <transition name="slide">
        <div
          v-if="mobileOpen"
          class="fixed inset-0 bg-black bg-opacity-50 z-50"
        >
          <div
            class="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-4"
          >
            <button @click="toggleMobileMenu" class="text-black mb-4">
              <i class="fas fa-times"></i>
            </button>
            <ul class="space-y-3">
              <li v-for="(item, idx) in menu" :key="idx">
                <a
                  :href="item.link"
                  class="block text-lg font-medium hover:text-yellow-500"
                >
                  {{ item.value }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import navInfo from "../components/navInfo.vue";

interface DropdownItem {
  icon: string;
  alt: string;
  label: string;
}

interface MenuItem {
  id: string;
  value: string;
  link: string;
  dropdown?: {
    items: DropdownItem[];
  };
}

interface SecondaryMenuItem {
  label: string;
  icon: string;
  color: string;
}

const { data: menu } = await useFetch<MenuItem[]>(
  "https://689ac232e727e9657f627d2c.mockapi.io/menu"
);

const isLogin = ref<boolean>(false);
const mobileOpen = ref<boolean>(false);

const login = (): void => {
  isLogin.value = true;
};

const toggleMobileMenu = (): void => {
  mobileOpen.value = !mobileOpen.value;
};

const secondaryMenu: SecondaryMenuItem[] = [
  { label: "Bảng Tin", icon: "fas fa-comment-alt", color: "" },
  { label: "Reels", icon: "fas fa-video", color: "text-[#f2cb59]" },
  { label: "Highlight", icon: "fas fa-play", color: "text-[#f2cb59]" },
  { label: "Tip Kèo", icon: "fas fa-chess-knight", color: "text-[#f2cb59]" },
  { label: "Phim Ảnh", icon: "fas fa-film", color: "text-[#f2cb59]" },
  { label: "Truyện Tranh", icon: "fas fa-book", color: "text-[#f2cb59]" },
];
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

.display-mb {
  display: none; /* Ẩn mặc định (desktop) */

  @media (max-width: 769px) {
    display: block; /* Hiện khi mobile */
  }
}

.display-desktop {
  display: block; /* Hiện mặc định (desktop) */

  @media (max-width: 769px) {
    display: none; /* Ẩn khi mobile */
  }
}
</style>
