<template>
    <div class="flex pt-[40px] ">
        <div class="flex flex-col items-center justify-start">
            <div class="w-full flex justify-start items-center py-[20px]">
                <Title :no=' no ' :name=' name ' />
            </div>
            <div class="">
                <div class="py-8 px-7 bg-cardColor flex flex-col justify-between items-start">
                    <div class="mb-8">
                        <div> hello</div>
                        <div></div>
                    </div>
                    <div class="text-navClamp text-[#ccd6f6] font-semibold mb-3"><a
                            href="https://cross-africa.vercel.app" class="">Cross
                            Africa</a></div>
                    <div class="text-textClamp">
                        Building a custom multisite compatible WordPress plugin to build global search with Algolia
                    </div>
                    <div>
                        <ul class="m-skillSpace list-none flex text-cardSkill text-[12px]">
                            <li class="mr-1">ReactJs</li>
                            <li class="mr-1">NodeJs</li>
                            <li class="mr-1">React-Query</li>
                            <li class="mr-1">Mongodb</li>
                        </ul>
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