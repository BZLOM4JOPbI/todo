<script setup lang="ts">
import { RouterView, } from 'vue-router'
import BaseLayout from './components/layout/BaseLayout.vue'
import { useUserStore, } from '@/stores/user'


const userStore = useUserStore()

const currentUrl = window.location

// if (currentUrl.hostname !== 'localhost') {

// } else {
//     document.cookie='user_id=2f22463a-dcd6-4885-a95a-652676d8d88c; Max-Age=1000000000; Path=/; SameSite=None'
// }


console.log(document.cookie)
try {
    await userStore.getUserId()
        .then(res => console.log(res))
        .catch(err => console.error(err))
    await userStore.getTask()
        .then(res => console.log(res))
} catch(err) {
    //
}

</script>

<template>
    <BaseLayout>
        <RouterView />
    </BaseLayout>
</template>