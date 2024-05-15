<script setup>
import Button from '@/components/Button.vue';
import { ref } from 'vue';
const title = ref('Click To Say Hello');
const padding = ref('py-4 px-5');
</script>

<template>
    <div class="flex items-center justify-center flex-col mt-8">
        <div>
            <div class='font-mono text-[22px] text-button'>04. Contact Me</div>
        </div>

        <div class="text-center text-textClamp my-6">Hello there! I'm thrilled to have you visit my portfolio. Whether
            you're
            interested
            in discussing a
            potential project, sharing ideas, or just want to connect, I'd love to hear from you. Please feel free
            to reach out using the contact form below or connect with me on LinkedIn.</div>
        <a href="mailto:davidyolemeokih@gmail.com"><Button :title=" title " :padding=" padding " /></a>

        <div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>