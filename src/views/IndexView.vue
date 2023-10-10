<script setup lang="ts">
import ContainerLayout from '../components/layout/ContainerLayout.vue'
import TaskList from '@/components/task/TaskList.vue'
import SkeletonBase from '@/components/base/SkeletonBase.vue'

import { ref, } from 'vue'


const listReloader = ref<number>(0)
const reloadTaskList = () => {
    listReloader.value++
    console.log(listReloader.value)
}
</script>
<template>
    <ContainerLayout
        :max-width="1200"
    >
        <article class="index">
            <Suspense :key="listReloader">
                <TaskList
                    @reload-component="reloadTaskList"
                />
                <template #fallback>
                    <SkeletonBase />
                </template>
            </Suspense>
        </article>
    </ContainerLayout>
</template>
<style scoped lang="sass">
.index
    padding-block: $view-padding
</style>