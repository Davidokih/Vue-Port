<script setup>
import Button from '@/components/Button.vue';
import { ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faWhatsapp, faGithub, faLinkedin);
const title = ref('Click To Say Hello');
const padding = ref('py-4 px-5');
</script>

<template>
    <div class="flex items-center justify-center flex-col mt-10">
        <div>
            <div class='font-mono text-[22px] text-button'>04. Contact Me</div>
        </div>

        <div class="text-center text-textClamp my-6">Hello there! I'm thrilled to have you visit my portfolio. Whether
            you're
            interested
            in discussing a
            potential project, sharing ideas, or just want to connect, I'd love to hear from you. Please feel free
            to reach out using the contact form below or connect with me on LinkedIn.</div>
        <a href="mailto:davidyolemeokih@gmail.com" class="mt-5"><Button :title=" title " :padding=" padding " /></a>

        <div class="mt-20 mb-7 flex flex-col items-center justify-center">
            <div class="mb-3">
                <a href="https://wa.me/+2349162822742" class="m-3"><font-awesome-icon icon="fa-brands fa-whatsapp"
                        size="xl" /></a>
                <a href="https://github.com/Davidokih" class="m-3"><font-awesome-icon icon="fa-brands fa-github"
                        size="xl" /></a>
                <a href="https://www.linkedin.com/in/david-okih/" class="m-3"><font-awesome-icon
                        icon="fa-brands fa-linkedin" size="xl" /></a>
            </div>
            <div class="text-textClamp">© 2024. All right reserved</div>
        </div>
    </div>
</template>