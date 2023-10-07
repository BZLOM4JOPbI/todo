<script setup lang="ts">
import ButtonTask from './ButtonTask.vue'
import imgPenUrl from '@/assets/img/pen.svg'
import imgTrashUrl from '@/assets/img/trash.svg'


const handleDelete = () => {
    console.log('click')
}
</script>
<template>
    <li class="task">
        <div class="task__inner">
            <ButtonTask 
                :img-url="imgPenUrl"
                :title="'edit'"
                @click="handleDelete"
            />
            <div class="task__title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum natus mollitia error reiciendis sed, provident
            </div>
            <ButtonTask
                :img-url="imgTrashUrl"
                :title="'delete'"
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