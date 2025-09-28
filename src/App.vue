<template>
  <div
    class="flex flex-row h-dvh text-[#632e13] divide-x-5 divide-line bg-[#f8efd7]"
  >
    <left />
    <Middle />
    <Right />
  </div>
</template>

<script setup>
import left from "./components/Left.vue";
import Right from "./components/Right.vue";
import Middle from "./components/Middle.vue";
</script>
