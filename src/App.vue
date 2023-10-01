<script setup lang="ts">
import { RouterView, } from 'vue-router'
import BaseLayout from './components/layout/BaseLayout.vue'
import { useUserStore, } from '@/stores/user'


const userStore = useUserStore()

await userStore.getUserId()
    .then(res => console.log(res))
    .catch(err => console.error(err))

await userStore.getTask()
    .then(res => console.log(res))
</script>

<template>
    <BaseLayout>
        <RouterView />
    </BaseLayout>
</template>