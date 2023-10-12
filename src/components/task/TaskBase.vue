<script setup lang="ts">
import ButtonTask from './ButtonTask.vue'
import imgPenUrl from '@/assets/img/pen.svg'
import imgTrashUrl from '@/assets/img/trash.svg'

import type { task, } from '@/types/task' 
import instance from '@/utils/request'

import { useUserStore, } from '@/stores/user'


const user = useUserStore()
const deleteTask = async (task_id: number) => {
    return instance({
        method: 'DELETE',
        url: `/task/delete-task?user_id=${user.userId}&task_id=${task_id}`,
    })
}
const handleDelete = async (task_id: number) => {
    await deleteTask(task_id)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err)
        })
    emits('reload')
}
const handleEdit = () => {
    emits('reload')
}

defineProps<task>()
const emits = defineEmits<{
    reload: [],
}>()


</script>
<template>
    <li class="task">
        <div class="task__inner">
            <ButtonTask 
                :img-url="imgPenUrl"
                :title="'edit'"
                @click="handleEdit"
            />
            <div class="task__title">
                {{ title }}
            </div>
            <ButtonTask
                :img-url="imgTrashUrl"
                :title="'delete'"
                @click="handleDelete(task_id)"
            />
        </div>
    </li>
</template>
<style scoped lang="sass">
.task
    box-shadow: 0px 0px 5px rgb(0 0 0 / 0.2)
    border-radius: $radius
    padding: 10px
.task__inner
    display: flex
    align-items: center
    gap: 10px

.task__title
    flex-grow: 1
</style>