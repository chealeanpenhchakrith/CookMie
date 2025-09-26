<template>
  <div class="flex flex-row gap-4">
    <div>
      <img
        :src="image"
        alt="multiplier"
        width="90"
        height="90"
        class="rounded-[11px]"
      />
    </div>
    <div class="flex flex-row">
      <div class="flex flex-col gap-3">
        <div class="flex flex-row text-2xl text-white mt-1">
          <h1>{{ multiplier }} Multiplier</h1>
        </div>
        <div class="flex flex-row text-xl text-white items-center gap-1">
          <div v-html="cookieIcon"></div>
          <h2 class="text-xl text-white">{{ cost }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cookieIcon = `<svg xmlns"http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cookie-icon lucide-cookie"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>`;
const props = defineProps({
  multiplier: {
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
</script>
