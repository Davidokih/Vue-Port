<template>
    <h1>Hello world</h1>
    <input v-model="val" placeholder="write here" class="border-black border-solid border-2"/>
    <div>{{ val }}</div>
    <div v-for="data in data" :key="data.id">{{ data.title }}</div>
</template>

<script setup>
import { watch, ref, watchEffect } from 'vue';

const val = ref('')
const data = ref(null)

watch(val, async (newQuestion, oldQuestion) => {
    if (newQuestion.includes('?')) {
        const response = await fetch('https://fakestoreapi.com/products/1',{method: 'GET'})
    data.value = (await response.json())
    console.log(response.json());
   }
})
</script>, watch
