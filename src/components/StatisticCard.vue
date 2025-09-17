<template>
  <div class="bg-[#4e3518] px-10 py-5 rounded-xl text-white">
    <div class="flex flex-col gap-2">
      <h1 class="font-bold">{{ title }}</h1>
      <div class="flex flex-row gap-2.5">
        <div v-html="icon"></div>
        <h1 class="font-light">+ 531</h1>
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
  icon: {
    type: String,
    required: true,
  },
});
</script>
