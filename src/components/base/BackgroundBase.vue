<template>
    <div 
        class="background"
        @scroll.prevent
        @touchmove.prevent
        @wheel.prevent
    ></div>
</template>
<style lang="sass">
.background
    position: fixed
    inset: 0
    background-color: rgb(0 0 0 / 0.2)
    overflow-y: hidden

body
    overflow-y: hidden
</style>