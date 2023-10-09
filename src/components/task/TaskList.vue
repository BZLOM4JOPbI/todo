<script setup lang="ts">
import TaskBase from './TaskBase.vue'
import ButtonBase from '../base/ButtonBase.vue'

import { useUserStore, } from '@/stores/user'


const user = useUserStore()

await user.getTask()
    .then(res => console.log(res))
    .catch(err => console.error(err))

</script>
<template>
   <ul class="task-list">
        <ButtonBase 
            :height="60"
            :title="'Create'"
        />
        <TaskBase 
            v-for="n in 5" 
            :key="n"
        />
   </ul> 
</template>
<style scoped lang="sass">
.task-list
    display: flex
    flex-direction: column
    gap: 30px
    align-items: stretch
</style>