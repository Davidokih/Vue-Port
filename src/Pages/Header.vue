<template>
    <div class="flex justify-between items-center py-7">
        <h1>Title</h1>
        <div class="flex justify-between items-center transition-all gap-6 font-bold tablet:hidden">
            <div class="cursor-pointer hover:text-button"><span class="text-button mr-1">01.</span> <span>About</span>
            </div>
            <div class="cursor-pointer hover:text-button"><span class="text-button mr-1">02.</span>
                <span>Experience</span>
            </div>
            <div class="cursor-pointer hover:text-button"><span class="text-button mr-1">03.</span>
                <span>Projects</span>
            </div>
            <div class="cursor-pointer hover:text-button"><span class="text-button mr-1">04.</span> <span>Contact</span>
            </div>
            <Button :title=" title " :padding=" padding " />
        </div>
        <div class="hidden tablet:block">Menu</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '../components/Button.vue';
const title = ref('Resume');
const padding = ref('py-2 px-5');
</script>