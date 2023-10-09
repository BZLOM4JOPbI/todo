<script setup lang="ts">
// const props = defineProps<{
//     isShow: boolean
// }>()
// v-if="!isShow"
</script>
<template>
    <div 
        class="loading"
    >
    </div>
</template>
<style scoped lang="sass">
.loading
    position: fixed
    inset: 0
    background-color: black
    z-index: 100
</style>