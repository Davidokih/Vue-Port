<template>
    <div class="flex justify-center items-center w-full py-7">
        <div class="flex w-[90%] justify-between">
            <h1>Title</h1>
            <div class="flex justify-between items-center transition-all gap-6 font-bold tablet:hidden">
                <div class="cursor-pointer hover:text-button"><span class="text-button mr-1">01.</span>
                    <span>About</span>
                </div>
                <div class="cursor-pointer hover:text-button"><span class="text-button mr-1">02.</span>
                    <span>Experience</span>
                </div>
                <div class="cursor-pointer hover:text-button"><span class="text-button mr-1">03.</span>
                    <span>Projects</span>
                </div>
                <div class="cursor-pointer hover:text-button"><span class="text-button mr-1">04.</span>
                    <span>Contact</span>
                </div>
                <Button :title=" title " :padding=" padding " />
            </div>
            <font-awesome-icon icon="fa-solid fa-bars" size="2xl" class="cursor-pointer hidden tablet:block"
                @click=" state = !state" />
            <div class="fixed right-0 hidden tablet:flex items-center justify-center top-0 h-dvh bg-[#112240] transition-all duration-700 delay-500 w-[75vw] min-w-96 z-50"
                :class=" state ? 'visible translate-x-[0vw]' : 'translate-x-[100vw] invisible' ">
                <div class="flex items-center justify-center flex-col">
                    <div class="absolute top-5 right-5 cursor-pointer" @click=" state = !state"><font-awesome-icon
                            icon="fa-solid fa-xmark" size="2xl" /></div>
                    <div class="m-spaces text-center leading-loose text-navClamp font-bold">
                        <!-- <div class="text-button">01.</div> -->
                        <div class="m-spaces hover:text-button cursor-pointer">About</div>
                        <div class="m-spaces hover:text-button cursor-pointer">Experience</div>
                        <div class="m-spaces hover:text-button cursor-pointer">Projects</div>
                        <div class="m-spaces hover:text-button cursor-pointer">Contact</div>
                        <div class="mt-20">
                            <Button :title=" title " :padding=" padding2 " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '../components/Button.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const title = ref('Resume');
const padding = ref('py-2 px-5');
const padding2 = ref('py-2 px-14');
library.add(faBars, faXmark);


const state = ref(false);

</script>
