<script setup lang="ts">
import ContainerLayout from './ContainerLayout.vue'
import HeaderLayout from './HeaderLayout.vue';


</script>
<template>
    <HeaderLayout />
    <main class="main">
        <ContainerLayout>
            <div class="main__inner">
                <slot />
            </div>
        </ContainerLayout>
    </main>
</template>
<style scoped lang="sass">
.main
    flex: 1 1 auto
</style>