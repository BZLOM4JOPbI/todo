<script setup lang="ts">
import TaskBase from './TaskBase.vue'
import ButtonBase from '../base/ButtonBase.vue'
import TaskCreate from './TaskCreate.vue'

import { useUserStore, } from '@/stores/user'

import { ref, } from 'vue'

import promise from '@/utils/promise'


const user = useUserStore()

await promise(5000)

await user.getTask()
    .then(res => console.log(res))
    .catch(err => console.error(err))

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