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