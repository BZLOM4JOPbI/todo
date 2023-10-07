<script setup lang="ts">

defineProps<{
    title: string,
    height: number,
}>()

</script>
<template>
    <button 
        class="button"
        :style="`height: ${height}px`"
    >
        {{ title }}
    </button>
</template>
<style scoped lang="sass">
.button
    border-radius: $radius
    font-size: $font-size-m
    color: $black
    background-color: transparent
    // text-transform: uppercase
    border-width: 1px
    border-style: solid
    border-color: currentColor
    font-weight: 500
    cursor: pointer
    user-select: none
    box-shadow: 0px 0px 5px rgb(0 0 0 / 0)
    transition: border-color .3s, box-shadow .3s
    &:hover        
        border-color: transparent
        box-shadow: 0px 0px 5px rgb(0 0 0 / 0.2)
</style>