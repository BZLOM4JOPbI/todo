<script setup lang="ts">
import ContainerLayout from './ContainerLayout.vue'
import LogoLayout from './LogoLayout.vue'

import { useUserStore, } from '@/stores/user'


const user = useUserStore()

const logout = () => {
    localStorage.clear()
}
</script>
<template>
    <header class="header">
        <ContainerLayout
            :max-width="1200"
        >
            <div class="header__inner">
                <LogoLayout />
                <div
                    @click="logout"
                >
                    {{ user.isAuth }}
                </div>
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
    border-bottom: 1px solid $black
</style>