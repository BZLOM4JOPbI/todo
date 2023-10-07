<script setup lang="ts">
import HeaderLayout from '../layout/HeaderLayout.vue'
import LoadingLayout from '../layout/LoadingLayout.vue'


defineProps<{
    isLoading: boolean
}>()
</script>
<template>
    <HeaderLayout />
    <main class="main">
        <slot />
    </main>
    <LoadingLayout 
        :is-show="isLoading"
    />
</template>
<style scoped lang="sass">
.main
    flex: 1 1 auto
</style>