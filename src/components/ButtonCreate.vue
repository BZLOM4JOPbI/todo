<script setup lang="ts">
import { ref, } from 'vue'


const isHovered = ref<boolean>(false)
</script>
<template>
    <button 
        class="button"
        @mouseenter="() => isHovered = true"
        @mouseleave="() => isHovered = false"
        :class="{
            'button_active': isHovered
        }"
    >
        Create
    </button>
</template>
<style scoped lang="sass">
.button
    height: 60px
    border-radius: $radius
    font-size: $font-size-m
    color: $black
    background-color: transparent
    text-transform: uppercase
    border-width: 1px
    border-style: solid
    border-color: currentColor
    font-weight: 500
    cursor: pointer
    user-select: none
    box-shadow: 0px 0px 5px rgb(0 0 0 / 0.2)
    transition: border-color .3s

.button_active
    border-color: transparent
</style>