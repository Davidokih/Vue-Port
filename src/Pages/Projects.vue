<template>
    <div class="flex pt-[50px]">
        <div class="flex flex-col w-full items-center justify-start">
            <div class="w-full flex justify-start items-center py-[20px]">
                <Title :no=' no ' :name=' name ' />
            </div>
            <div class="grid grid-cols-cardGrid gap-[15px] relative pc:grid-cols-mediaGrid w-full">
                <div class="py-8 px-7 bg-cardColor flex flex-col items-start rounded justify-between"
                    v-for="(data, index) in data" :key=" index ">
                    <div class="mb-9">
                        <div class="mb-8">
                            <font-awesome-icon :icon=" ['far', 'folder'] " size="xl"
                                class="text-subClamp text-[#63E6BE] font-normal" />
                            <!-- <div>hello</div> -->
                        </div>
                        <div class="text-navClamp text-[#ccd6f6] font-semibold mb-3"><a
                                :href=" data.url ">{{ data.title }}</a></div>
                        <div class="text-textClamp">
                            {{ data.description }}
                        </div>
                    </div>
                    <div>
                        <ul class="m-skillSpace list-none flex text-cardSkill text-[12px] grow flex-wrap">
                            <li class="mr-1 leading-7" v-for="(skillsData, index) in data.skills" :key=" index ">
                                {{ skillsData }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '@/components/Title.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { ref } from 'vue';
import projectData from "../Data/Projects.json";

library.add(faFolder);

const data = ref(projectData);
const no = ref("03.");
const name = ref("Projects");

// console.log(data);
</script>

<style scoped>
.project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    gap: 15px;
    position: relative;
}
</style>