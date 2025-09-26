<template>
  <div
    class="bg-[#632e13] rounded-2xl text-white w-70 flex justify-center py-6"
  >
    <div class="flex flex-col gap-6">
      <h1 class="font-bold text-2xl underline underline-offset-5">
        {{ title }}
      </h1>
      <div class="flex flex-row gap-2.5 items-center">
        <div v-html="icon"></div>
        <h1 class="text-xl">{{ counter }}</h1>
        <h1 v-if="rank" class="text-xl">{{ rank }}</h1>
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
  counter: {
    type: Number,
    required: false,
  },
  rank: {
    type: String,
    required: false,
  },
});
</script>
