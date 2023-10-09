<script setup lang="ts">
import ContainerLayout from '../layout/ContainerLayout.vue'
import HeaderLayout from '../layout/HeaderLayout.vue'
import SkeletonBase from './SkeletonBase.vue'

import { useUserStore, } from '@/stores/user'


const user = useUserStore()
</script>
<template>
    <HeaderLayout />
    <main class="main">
        <slot v-if="user.isAuth"/>
        <ContainerLayout
            v-else
            :max-width="1200"
        >
            <div class="padding">
                <SkeletonBase />
            </div>
        </ContainerLayout>
    </main>
</template>
<style scoped lang="sass">
.main
    flex: 1 1 auto

.padding
    padding-block: $view-padding
</style>