<script setup lang="ts">
import ContainerLayout from '../components/layout/ContainerLayout.vue'
import ModalCreate from '@/components/modal/CreateModal.vue'
import TaskList from '@/components/task/TaskList.vue'

import { ref, } from 'vue'


const isModalOpen = ref<boolean>(false)
const handleModalOpen = () => isModalOpen.value = true
const handleModalClose = () => isModalOpen.value = false
</script>
<template>
    <ContainerLayout
        :max-width="1200"
    >
        <article class="index">
            <TaskList />
        </article>
    </ContainerLayout>
    <ModalCreate 
        :is-open="isModalOpen"
        @close="handleModalClose"
    />
</template>
