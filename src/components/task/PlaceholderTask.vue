<script setup lang="ts">
defineProps<{
    height: number,
}>()
</script>
<template>
    <div 
        class="skeleton-task"         
        :style="`height: ${height}px`"
    >
        &nbsp;
    </div>
</template>
<style scoped lang="sass">
.skeleton-task
    border-radius: $radius
    background-image: linear-gradient(to right, #dedfe0 0%, #e2e3e4 10%, #dedfe0 20%, #dedfe0 100%)
    background-size: 200% 100%
    animation: bgAnimate 1.2s linear infinite

@keyframes bgAnimate 
    0% 
        background-position: 50% 0

    100% 
        background-position: -150% 0
</style>