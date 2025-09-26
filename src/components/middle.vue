<template>
  <div class="flex flex-1 flex-col items-center">
    <Header class="mt-15" title="Cookie Industry" :icon="charIcon" />
    <div class="flex flex-row gap-2.5 mt-25">
      <div v-html="cookieIcon"></div>
      <h1>{{ store.cookieProduced }}</h1>
    </div>
    <div class="mt-10">
      <img
        @click="store.cookieIncrement"
        src="/src/assets/cookie.jpg"
        alt="cookie"
        width="500"
        height="500"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store";
import Header from "./Header.vue";

const store = useStore();

const charIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cookie-icon lucide-cookie"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>`;

const cookieIcon = `<svg xmlns"http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cookie-icon lucide-cookie"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>`;
</script>
