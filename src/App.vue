<script setup lang="ts">
import { RouterView, } from 'vue-router'
import LayoutBase from './components/layout/LayoutBase.vue'
import { useUserStore, } from '@/stores/user'
import { onMounted, ref, } from 'vue'


const userStore = useUserStore()

const isAuthorize = ref(true)

onMounted(async () => {
    const authResult = await userStore.authorize()
    isAuthorize.value = authResult
})

</script>

<template>
    <LayoutBase
        :is-loading="isAuthorize"
    >
        <RouterView />
    </LayoutBase>
</template>