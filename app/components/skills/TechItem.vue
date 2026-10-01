<template>
    <div class="tech-item absolute px-4 py-2 z-15 border border-[#2B52FF]">
        {{ name }}
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    name: string;
}>();
</script>

<style scoped>
.tech-item {
    will-change: transform;
}
</style>