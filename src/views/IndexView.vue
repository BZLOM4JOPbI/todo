<script setup lang="ts">
import ContainerLayout from '../components/layout/ContainerLayout.vue'
import TaskBase from '@/components/task/TaskBase.vue'


</script>
<template>
    <ContainerLayout
        :max-width="1200"
    >
        <section class="index">
            <TaskBase />
            <TaskBase />
            <TaskBase />
            <TaskBase />
            <TaskBase />
        </section>
    </ContainerLayout>
</template>
<style scoped lang="sass">
.index
    padding-block: 50px
    display: flex
    flex-direction: column
    gap: 30px
    align-items: stretch
</style>