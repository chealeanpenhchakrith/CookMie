<template>
  <div class="flex flex-row gap-x-3.5 items-center">
    <div class="text-[#b36300]" v-html="icon"></div>
    <h1 class="text-7xl text-[#4e1e06]">{{ title }}</h1>
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
