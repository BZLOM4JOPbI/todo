<script setup lang="ts">
import { onMounted, ref, } from 'vue'


const isLogoLineActive = ref<boolean>(false)

onMounted(async () => {
    setTimeout(() => isLogoLineActive.value = true)
})
</script>
<template>
    <div class="logo">
        <div 
            class="logo__inner"
            @mouseenter="() => isLogoLineActive = false"
            @mouseleave="() => isLogoLineActive = true"
            @dblclick="() => console.log('dblclick')"
            @click="() => console.log('click')"
        >
            TODO
            <div 
                class="logo__line"
                :class="{
                    'logo__line_active' : isLogoLineActive
                }"
            ></div>
        </div>
    </div>
</template>
<style scoped lang="sass">
.logo
    display: inline-block
.logo__inner
    user-select: none
    font-size: $font-size-xl
    letter-spacing: 0.3em
    position: relative
    color: $black
    margin-left: 10%
.logo__line
    transition: width .5s ease-in
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