<script setup>
import Button from '@/components/Button.vue';
import { ref } from 'vue';
const title = ref('Message Me');
const padding = ref('py-4 px-5');
</script>

<template>
    <div class="flex items-center justify-center">
        <div>
            <div class='font-mono text-[22px] text-button'>04. Contact Me</div>
        </div>
        <Button :title=" title " :padding=" padding " />
    </div>
</template>