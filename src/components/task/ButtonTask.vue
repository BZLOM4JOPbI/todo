<script setup lang="ts">
defineProps<{
    imgUrl: string,
    title: string,
}>()

// defineEmits<{
//     click: [],
// }>()
// @click="$emit('click')"
</script>
<template>
    <button 
        class="button"
        :title="title"
    >
        <div class="button__inner">
            <div 
                class="button__img"
                :style="`background-image: url(${imgUrl})`"
            >
            </div>
        </div>
    </button>
</template>
<style scoped lang="sass">
.button
    background-color: transparent
    display: block
    flex-basis: 35px
    min-width: 28px
    cursor: pointer

.button__inner
    padding-top: 100%
    position: relative

.button__img
    position: absolute
    inset: 20%
    background-position: center
    background-size: contain
    background-repeat: no-repeat
</style>