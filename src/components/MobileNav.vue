<template>
    <div
        class="hidden tablet:flex items-center justify-center fixed bottom-0 h-14 bg-[#112240] w-full z-40 text-navClamp">
        <div class="flex justify-between items-center w-[90%]">
            <div class=" hover:text-button cursor-pointer"><font-awesome-icon icon="fa-solid fa-user-tie" /></div>
            <div class=" hover:text-button cursor-pointer"><font-awesome-icon icon="fa-solid fa-user-tie" /></div>
            <div class=" hover:text-button cursor-pointer"><font-awesome-icon icon="fa-solid fa-laptop-code" /></div>
            <div class=" hover:text-button cursor-pointer">Icon4</div>
            <div class=" hover:text-button cursor-pointer">Icon5</div>
        </div>
    </div>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserTie, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

library.add(faUserTie, faLaptopCode);
</script>