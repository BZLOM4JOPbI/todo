<script setup lang="ts">
import PlaceholderTask from '../task/PlaceholderTask.vue'


</script>
<template>
    <div 
        class="loading"
    >
        <PlaceholderTask 
            v-for="n in 3"
            :key="n"
            :height="60"
        />
    </div>
</template>
<style scoped lang="sass">
.loading
    display: flex
    flex-direction: column
    gap: 30px
    align-items: stretch
</style>