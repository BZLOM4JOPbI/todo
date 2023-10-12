<script setup lang="ts">
import LayoutBase from './components/base/LayoutBase.vue'

import { useUserStore, } from '@/stores/user'

import { onMounted, } from 'vue'
import { RouterView, } from 'vue-router'

import promise from '@/utils/promise'

const user = useUserStore()


onMounted(async () => {

    await promise(1000)

    await user.authorize()

    // localStorage.clear()

})

</script>

<template>
    <LayoutBase>
        <RouterView/>
    </LayoutBase>
</template>