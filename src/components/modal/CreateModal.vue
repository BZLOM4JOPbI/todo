<script setup lang="ts">
import imgCloseUrl from '@/assets/img/xmark.svg'

import { ref, } from 'vue'

import TextareaForm from '@/components/form/TextareaForm.vue'
import ButtonBase from '../base/ButtonBase.vue'


defineProps<{
    isOpen: boolean
}>()
defineEmits<{
    close: [],
}>()

const taskTitle = ref('')

</script>
<template>
    <section 
        class="modal"
        v-if="isOpen"
    >
        <h2 class="modal__title">
            New task
            <div 
                class="modal__close"
                :style="`background-image: url(${imgCloseUrl})`"
                @click="$emit('close')"
                title="close"
            ></div>
        </h2>
        <form 
            class="modal__inner"
            @submit.prevent
        >
            <TextareaForm 
                v-model="taskTitle"
                :label="'Task name'"
            />
            <ButtonBase 
                :height="40"
                :title="'Add task'"
            />
        </form>
    </section>
</template>
<style scoped lang="sass">
.modal
    position: fixed
    background-color: $white
    max-width: 500px
    width: 100%
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    padding: 30px
    box-shadow: 0px 0px 5px rgb(0 0 0 / 0.3)
    border-radius: $radius
.modal__inner
    display: flex
    flex-direction: column
    gap: 15px
    align-items: stretch
.modal__close
    position: absolute
    top: 50%
    transform: translateY(-50%)
    right: 0
    width: 20px
    height: 20px
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    cursor: pointer
.modal__title
    font-size: $font-size-l
    line-height: 1.3
    position: relative
    margin-bottom: 40px
</style>