<template>
    <button
        class='border-[1px] border-solid border-button font-mono rounded text-button hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'
        :class=" props.padding ">{{ props.title }}</button>
</template>

<script setup>
// import { defineProps } from 'vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    padding: {
        type: String
    }
});
</script>