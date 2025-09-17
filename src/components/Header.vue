<template>
    <div class="flex flex-row gap-x-3.5">
        <div v-html="icon"></div>
        <h1 class="text-6xl">{{ title }}</h1>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
</script>