<script setup lang="ts">
import TaskBase from './TaskBase.vue'
import ButtonBase from '../base/ButtonBase.vue'

import { useUserStore, } from '@/stores/user'


const user = useUserStore()

</script>
<template>
   <ul class="task-list">
        <template v-if="user.isAuth">
            <ButtonBase 
                :height="60"
                :title="'Create'"
            />
            <TaskBase 
                v-for="n in 5" 
                :key="n"
            />
        </template>
        <template v-else>
            Loading...
        </template>
   </ul> 
</template>
<style scoped lang="sass">
.task-list
    padding-block: 50px
    display: flex
    flex-direction: column
    gap: 30px
    align-items: stretch
</style>