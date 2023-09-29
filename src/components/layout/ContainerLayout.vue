<script setup lang="ts">
import { computed, } from 'vue'


const props = defineProps<{
    maxWidth: number
}>()

const maxWidthStyle = computed(() => `max-width: ${props.maxWidth}px`)
</script>
<template>
    <div 
        class="container"
        :style="maxWidthStyle"
    >
        <slot />
    </div>
</template>
<style lang="sass" scoped>
.container
    // max-width: 1100px
    // width: 100%
    margin-inline: auto
    padding-inline: 20px
</style>