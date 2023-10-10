<script setup lang="ts">
import ButtonTask from './ButtonTask.vue'
import TextareaForm from '../form/TextareaForm.vue'
import BackgroundBase from '../base/BackgroundBase.vue'

import imgXmarkUrl from '@/assets/img/xmark.svg'
import imgCheckhUrl from '@/assets/img/check.svg'

import { ref, } from 'vue'

import instance from '@/utils/request'

import { useUserStore, } from '@/stores/user'


const emits = defineEmits<{
    close: [],
    reload: [],
}>()

const userId = useUserStore().userId
const title = ref('')

const handleCreateAccept = async () => {
    await instance({
        method: 'POST',
        url: `/task/create-task?user_id=${userId}`,
        data: {
            'title' : title.value,
            'description': 'sukablyadnahui',
        },
    })
        .then(res => {
            console.log(res)
            // emit('close')
        })
        .catch(err => console.error(err))

    emits('reload')
}
</script>
<template>
    <li class="task">
        <div class="task__inner">
            <ButtonTask 
                :img-url="imgXmarkUrl"
                :title="'cancel'"
                @click="$emit('close')"
            />
            <div class="task__input">
                <TextareaForm 
                    v-model="title"
                />
            </div>
            <ButtonTask
                :img-url="imgCheckhUrl"
                :title="'add'"
                @click="handleCreateAccept"
            />
        </div>
    </li>
    <BackgroundBase />
</template>
<style scoped lang="sass">
.task
    box-shadow: 0px 0px 5px rgb(0 0 0 / 0.2)
    border-radius: $radius
    padding: 10px
    z-index: 2
    background-color: $white
.task__inner
    display: flex
    align-items: center
    gap: 10px

.task__input
    flex-grow: 1
    display: flex
    align-items: stretch
    flex-direction: column
    justify-content: center
</style>