<script setup lang="ts">
import ContainerLayout from '../components/layout/ContainerLayout.vue'
import TaskList from '@/components/task/TaskList.vue'
import SkeletonBase from '@/components/base/SkeletonBase.vue'



</script>
<template>
    <ContainerLayout
        :max-width="1200"
    >
        <article class="index">
            <Suspense>
                <TaskList />
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