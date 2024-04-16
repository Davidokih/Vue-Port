<template>
    <div class="flex pt-[40px] ">
        <div class="flex flex-col items-center justify-start">
            <div class="w-full flex justify-start items-center py-[20px]">
                <Title :no=' no ' :name=' name ' />
            </div>
            <div class="flex items-start justify-center gap-[50px] tablet:flex-col tablet:items-center">
                <div
                    class="w-[100%] flex flex-col items-start justify-start gap-[10px] text-[18px] text-[#8892b0] font-sans font-medium">
                    <div>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest
                        in web development started back in 2012 when I decided to try editing custom Tumblr themes —
                        turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</div>
                </div>
                <div class="w-[90%] radio:w-[100%] relativ flex items-center justify-center">
                    <div
                        class="w-[300px] h-[300px] border-2 border-white rounded translate-x-[15px] translate-y-[15px] hover:translate-x-[20px] hover:translate-y-[20px] hover:duration-300 absolute mobile:w-[200px] mobile:h-[200px]">
                    </div>
                    <img class="w-[300px] h-[300px] bg-white rounded hover:translate-x-[-4px] hover:translate-y-[-4px]  hover:duration-300 object-cover mobile:w-[200px] mobile:h-[200px] z-30"
                        src="../assets/IMG_9519.JPG" alt="" />
                    <div
                        class="w-[300px] h-[300px] bg-[#0A192F] rounded absolute opacity-50 hover:opacity-5 mobile:w-[200px] mobile:h-[200px] z-40">
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '@/components/Title.vue';
import { ref } from 'vue';

const no = ref("03.");
const name = ref("Projects");
</script>