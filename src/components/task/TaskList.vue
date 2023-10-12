<script setup lang="ts">
import TaskBase from './TaskBase.vue'
import ButtonBase from '../base/ButtonBase.vue'
import TaskCreate from './TaskCreate.vue'

import { useUserStore, } from '@/stores/user'

import { ref, } from 'vue'

import promise from '@/utils/promise'
import instance from '@/utils/request'
import type { task, } from '@/types/task' 


const user = useUserStore()

await promise(2000)

// TODO create type for task
const tasks = ref<null | task[]>(null)
await instance({
    method: 'GET',
    url: `/task/get-tasks?user_id=${user.userId}`,
})
    .then(res => {
        console.log(res.data)
        tasks.value = res.data
    })
    .catch(err => {
        console.log(err)
        tasks.value = null
    })

const isCreation = ref<boolean>(false)
const handleCreate = () => isCreation.value = true
const handleCancelCreate = () => isCreation.value = false


const emits = defineEmits<{
    reloadComponent: [],
}> ()
const reload = () => emits('reloadComponent')
</script>
<template>
   <ul class="task-list">
        <ButtonBase 
            :height="60"
            :title="'Create'"
            @click="handleCreate"
        />
        <TaskCreate 
            v-if="isCreation"
            @close="handleCancelCreate"
            @reload="reload"
        />
        <TaskBase 
            v-for="task in tasks" 
            :key="task.task_id"
            :title="task.title"
            :description="task.description"
            :status="task.status"
            :task_id="task.task_id"
            @reload="reload"
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