<script setup lang="ts">
import HeaderLayout from './HeaderLayout.vue'


</script>
<template>
    <HeaderLayout />
    <main class="main">
        <slot />
    </main>
</template>
<style scoped lang="sass">
.main
    flex: 1 1 auto
</style>