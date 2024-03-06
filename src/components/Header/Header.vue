<template>
    <div class="flex bg-yellow-400 justify-between items-center p-5 ">
        <h1>Title</h1>
        <div class="flex justify-between items-center w-60">
            <div class="cursor-pointer" @click="show = !show">Home</div>
            <div class="cursor-pointer">About</div>
            <div class="cursor-pointer">Projects</div>
            <div class="cursor-pointer">Contact</div>
        </div>
    </div>
         <div class="h-screen w-60 hidden mobile:block fixed transition-all duration-1000 ease-in-out bg-background text-white" :class="[show? 'left-0' : '-left-60']">
            <div class="cursor-pointer before:scale-x-0 before:origin-left before:hover:scale-x-95 before:bg-red-400 before:absolute before:z-50 before:h-1 before:w-full before:transition-all before:duration-1000 before:top-5">Home</div>
            <div class="nav cursor-pointer">About</div>
            <div class="nav cursor-pointer">Contact</div>
        </div>
</template>
<script setup>
import { ref } from 'vue';

const show = ref(false)
</script>