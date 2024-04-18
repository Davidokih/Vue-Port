<template>
    <div class="w-full flex flex-col items-center">
        <div class="flex flex-col">
            <div class="w-full flex justify-start items-center py-[20px]">
                <Title :no=' no ' :name=' name ' />
            </div>
            <div class="flex items-start justify-center gap-[50px] tablet:flex-col tablet:items-center">
                <div
                    class="w-[100%] flex flex-col items-start justify-start gap-[10px] text-[18px] text-[#8892b0] font-sans font-medium">
                    <div>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest
                        in web development started back in 2012 when I decided to try editing custom Tumblr themes —
                        turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</div>

                    <div>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a
                        start-up, a huge corporation, and a student-led design studio. My main focus these days is
                        building accessible, inclusive products and digital experiences at Upstatement for a variety of
                        clients.</div>

                    <div>I also recently launched a course that covers everything you need to build a web app with the
                        Spotify API using Node & React.</div>

                    <div>Here are a few technologies I’ve been working with recently:</div>
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
import { ref } from 'vue';
import Title from '../components/Title.vue';
const no = ref('01.');
const name = ref('About Me');
</script>