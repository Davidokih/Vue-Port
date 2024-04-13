<template>
    <div class='flex items-center justify-start w-full m-subSpace'>
        <div class='flex items-end justify-start w-[80%] gap-[10px]'>
            <div class='font-mono text-[22px] text-button'>{{ props.no }}</div>
            <div
                class='font-sans text-subClamp font-semibold text-primary w-full after:block after:relative after:bottom-5 after:h-[1px] after:w-[300px] after:ml-44 after:bg-[#233554] tablet:after:w-[70%] tablet:after:ml-40 mobile:after:ml-[125px] radio:after:hidden'>
                {{ props.name }}
            </div>
        </div>
        <!-- <hr class='w-full border-[#233554]' /> -->
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