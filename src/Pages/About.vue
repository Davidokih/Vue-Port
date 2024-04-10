<template>
    <div class="w-full flex flex-col items-center justify-center">
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

                    <div>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a
                        start-up, a huge corporation, and a student-led design studio. My main focus these days is
                        building accessible, inclusive products and digital experiences at Upstatement for a variety of
                        clients.</div>

                    <div>I also recently launched a course that covers everything you need to build a web app with the
                        Spotify API using Node & React.</div>

                    <div>Here are a few technologies I’ve been working with recently:</div>

                    <!-- <div class="flex justify-start items-start gap-[50px] ml-[20px]">
                        <ul class="text-[16px] text-[#8892b0] font-sans flex flex-col gap-[10px] list-none">
                            <li
                                class="relative before:content-['▹'] before:absolute before:text-sm before:text-button before:left-[-20px] before:top-1">
                                JavaScript</li>
                            <li
                                class="relative before:content-['▹'] before:absolute before:text-sm before:text-button before:left-[-20px] before:top-1">
                                ReactJs</li>
                            <li
                                class="relative before:content-['▹'] before:absolute before:text-sm before:text-button before:left-[-20px] before:top-1">
                                NodeJs</li>
                            <li
                                class="relative before:content-['▹'] before:absolute before:text-sm before:text-button before:left-[-20px] before:top-1">
                                MongoDB</li>
                        </ul>
                        <ul class="list-none text-[16px] text-[#8892b0] font-sans flex flex-col gap-[10px]">
                            <li
                                class="relative before:content-['▹'] before:absolute before:text-sm before:text-button before:left-[-20px] before:top-1">
                                TypeScript</li>
                            <li
                                class="relative before:content-['▹'] before:absolute before:text-sm before:text-button before:left-[-20px] before:top-1">
                                TailwindCss</li>
                            <li
                                class="relative before:content-['▹'] before:absolute before:text-sm before:text-button before:left-[-20px] before:top-1">
                                VueJs</li>
                            <li
                                class="relative before:content-['▹'] before:absolute before:text-sm before:text-button before:left-[-20px] before:top-1">
                                ExpressJs</li>
                        </ul>
                    </div> -->
                </div>
                <div class="w-[90%] radio:w-[100%] relativ flex items-center justify-center">
                    <div
                        class="w-[300px] h-[300px] border-2 border-white rounded translate-x-[15px] translate-y-[15px] hover:translate-x-[20px] hover:translate-y-[20px] hover:duration-300 absolute mobile:w-[200px] mobile:h-[200px]">
                    </div>
                    <img class="w-[300px] h-[300px] bg-white rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 object-contain mobile:w-[200px] mobile:h-[200px]"
                        src="" alt="" />
                    <div
                        class="w-[300px] h-[300px] bg-[#0A192F] rounded absolute opacity-50 hover:opacity-5 mobile:w-[200px] mobile:h-[200px]">
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