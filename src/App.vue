<template>
  <div class="flex flex-row h-dvh divide-x-3 divide-line">
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
