<script setup lang="ts">
import { onMounted, ref, } from 'vue'


const isLogoLineActive = ref<boolean>(false)

// const handleEnter = (e: MouseEvent) => {

// }
// const handleLeave = (e: MouseEvent) => {

// }

onMounted(async () => {
    setTimeout(() => isLogoLineActive.value = true)
})
</script>
<template>
    <div 
        class="logo"
        @mouseenter="isLogoLineActive = false"
        @mouseleave="isLogoLineActive = true"
    >
        TODO
        <div 
            class="logo__line"
            :class="{
                'logo__line_active' : isLogoLineActive
            }"
        ></div>
    </div>
</template>
<style scoped lang="sass">
.logo
    user-select: none
    font-size: 30px
    letter-spacing: 0.3em
    position: relative
    display: inline-block
    color: black
.logo__line
    transition: width .6s ease-in
    position: absolute
    left: -10%
    top: 50%
    transform: translateY(-50%)
    height: 1px
    background-color: currentColor
    width: 0
.logo__line_active
    width: 120%
</style>