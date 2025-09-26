<template>
  <div class="flex flex-row gap-x-3.5 items-center">
    <div class="text-[#632e13]" v-html="icon"></div>
    <h1 class="text-7xl text-[#632e13]">{{ title }}</h1>
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
