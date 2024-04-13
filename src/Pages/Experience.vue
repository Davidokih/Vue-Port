<template>
    <div class="flex pt-[50px] ">
        <div class="flex flex-col items-center justify-start">
            <div class="w-full flex justify-start items-center py-[20px]">
                <Title :no=' no ' :name=' name ' />
            </div>
            <div class="flex items-center justify-between flex-wrap">
                <div class="flex items-center justify-center flex-col">
                    <font-awesome-icon icon="fa-brands fa-react" size="2xl" style="color: #63E6BE;" />
                    <div>React.JS</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Title from '../components/Title.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faReact } from '@fortawesome/free-brands-svg-icons';
const no = ref('02.');
const name = ref('Experience');

library.add(faReact);
</script>