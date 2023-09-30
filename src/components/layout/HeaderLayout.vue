<script setup lang="ts">
import ContainerLayout from './ContainerLayout.vue'
import LogoLayout from './LogoLayout.vue'

</script>
<template>
    <header class="header">
        <ContainerLayout
            :max-width="1200"
        >
            <div class="header__inner">
                <LogoLayout />
            </div>
        </ContainerLayout>
    </header>
</template>
<style scoped lang="sass">
.header__inner
    display: flex
    align-items: center
    justify-content: space-between
    height: $header-height
    border-bottom: 1px solid $font-color-black
</style>