<script setup lang="ts">
import LayoutBase from './components/base/LayoutBase.vue'
import LoadingLayout from './components/layout/LoadingLayout.vue'

import { useUserStore, } from '@/stores/user'

import { onMounted, ref, } from 'vue'
import { RouterView, } from 'vue-router'

import promise from '@/utils/promise'


const user = useUserStore()


onMounted(async () => {
    await promise(10000)

    const authResult = await user.authorize()
    localStorage.clear()
})

</script>

<template>
    <LayoutBase>
        <RouterView />
    </LayoutBase>
</template>