<template>
    <div class='flex items-center justify-start w-full gap-[10px]'>
        <div class='flex items-end justify-start gap-[10px]'>
            <div class='font-mono text-[22px] text-button'>{{ props.no }}</div>
            <div class='font-sans font-bold text-[#ccd6f6]'>{{ props.name }}</div>
        </div>
        <hr class='w-[200px] border-[#233554]' />
    </div>
</template>

<script setup>
const props = defineProps({
    no: {
        type: String,
    },
    name: {
        type: String
    }
});
</script>