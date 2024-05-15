<template>
    <div class="flex pt-[50px] ">
        <div class="flex flex-col items-center justify-start">
            <div class="w-full flex justify-start items-center py-[20px]">
                <Title :no=' no ' :name=' name ' />
            </div>
            <div class="flex items-center justify-between flex-wrap">
                <div class="flex items-center justify-center flex-col m-8 mobile:m-5">
                    <img src="../assets/Logo/js.png" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">JScript</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8 mobile:m-5">
                    <img src="../assets/Logo/typescript.png" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">TScript</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8 mobile:m-5">
                    <img src="../assets/Logo/python.png" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">Python</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8 mobile:m-5">
                    <img src="../assets/Logo/vue.svg" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">Vue.JS</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8 mobile:m-5">
                    <img src="../assets/Logo/atom.png" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">React.JS</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8 mobile:m-5">
                    <img src="../assets/Logo/icons8-node.js-96.png" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">Node.JS</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8">
                    <img src="../assets/Logo/tailwind.svg" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">Tailwind</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8">
                    <img src="../assets/Logo/redux.svg" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">Redux</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8">
                    <img src="../assets/Logo/express.svg" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">Express</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8">
                    <img src="../assets/Logo/mongodb.svg" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">Mongodb</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8">
                    <img src="../assets/Logo/postman.svg" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">Postman</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8">
                    <img src="../assets/Logo/aws.svg" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">AWS</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8">
                    <img src="../assets/Logo/github.svg" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">GitHub</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8">
                    <img src="../assets/Logo/git.svg" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">Git</div>
                </div>
                <div class="flex items-center justify-center flex-col m-8">
                    <img src="../assets/Logo/jwt.svg" alt="loading..." class="h-12 w-12" />
                    <div class="text-navClamp font-medium mt-5">JWT</div>
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