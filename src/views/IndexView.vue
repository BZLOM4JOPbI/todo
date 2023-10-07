<script setup lang="ts">
import ContainerLayout from '../components/layout/ContainerLayout.vue'
import TaskBase from '@/components/task/TaskBase.vue'
import ModalCreate from '@/components/modal/CreateModal.vue'
import ButtonBase from '@/components/base/ButtonBase.vue'

import { ref, } from 'vue'


const isModalOpen = ref<boolean>(false)
const handleModalOpen = () => isModalOpen.value = true
const handleModalClose = () => isModalOpen.value = false
</script>
<template>
    <ContainerLayout
        :max-width="1200"
    >
        <ul class="index">
            <ButtonBase 
                :height="60"
                :title="'Create'"
                @click="handleModalOpen"
            />
            <TaskBase />
            <TaskBase />
            <TaskBase />
            <TaskBase />
            <TaskBase />
            <TaskBase />
            <TaskBase />
            <TaskBase />
            <TaskBase />
            <TaskBase />
        </ul>
    </ContainerLayout>
    <ModalCreate 
        :is-open="isModalOpen"
        @close="handleModalClose"
    />
</template>
<style scoped lang="sass">
.index
    padding-block: 50px
    display: flex
    flex-direction: column
    gap: 30px
    align-items: stretch
</style>