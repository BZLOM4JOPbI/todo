<script setup lang="ts">
import { computed, onMounted, ref, } from 'vue'


const resize = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
}
const textarea = ref(null)

onMounted(() => {
    if (textarea.value) {
        resize(textarea.value)
    }
})

const props = defineProps<{
    modelValue: string,
    label: string,
}>()
const emit = defineEmits<{
    'update:modelValue':  [ value: string, ],
}>()

const value = computed<string>({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
        if (textarea.value) {
            resize(textarea.value)
        }
    },
})
</script>
<template>
    <label class="label">{{ label }}</label>
    <textarea 
        ref="textarea"
        v-model="value"
        class="textarea" 
        rows="1"
        placeholder="Enter here"
    ></textarea>
</template>
<style scoped lang="sass">
.label
    font-size: $font-size-m
.textarea
    padding: 10px
    border: 1px solid $black
    resize: none
    overflow-y: hidden
    border-radius: $radius
</style>