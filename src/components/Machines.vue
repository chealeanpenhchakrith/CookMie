<template>
  <div class="flex flex-row gap-4 w-80 h-35 items-center rounded-2xl">
    <div class="pl-6">
      <img
        :src="props.image"
        alt="bonus"
        width="90"
        height="90"
        class="rounded-[11px]"
      />
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="text-2xl text-white mt-1 font-bold">{{ title }}</h2>
      <div class="flex flex-row items-center gap-4">
        <h3 class="text-xl text-white">+{{ bonus }} CPS</h3>
        <div class="flex flex-row items-center gap-1">
          <div v-html="cookieIcon"></div>
          <h3 class="text-xl text-white">{{ cost }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  bonus: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const cookieIcon = `<svg xmlns"http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cookie-icon lucide-cookie"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>`;
</script>

rounded-2xl px-6 py-6 text-2xl font-bold bg-[#b36300] text-white cursor-pointer
