<template>
    <div class='flex items-center justify-start w-full gap-[10px]'>
        <div class='flex items-end justify-start gap-[10px]'>
            <div class='font-mono text-[22px] text-button'>{{ props.no }}</div>
            <div class='font-sans text-[28px] font-bold text-primary'>{{ props.name }}</div>
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