<template>
  <div
    class="flex flex-row h-dvh text-[#632e13] divide-x-5 divide-dashed bg-[#f8efd7]"
  >
    <Left />
    <Middle />
    <Right />
  </div>
</template>

<script setup>
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";
import Middle from "./components/Middle.vue";
</script>
