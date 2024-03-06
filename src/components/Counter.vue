<template>
    <div>
        <div>Count: {{ count }}</div>
        <button @click="count++">Add</button>

        <input :value="text" @input="onInput"/>
        <input v-model="text"/>
        <div>{{ text }}</div>

        <div :key="dummyData.id" v-for="(dummyData, index) in dummyData">
            <div><div class="Avatar">{{ dummyData.name.charAt(0)}}</div>{{ dummyData.name }} {{ index }}</div>
            <div>{{ dummyData.age }} {{ name }}</div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
// import { defineProps } from 'vue';

const text = ref('')
const onInput = (e) => {
    text.value = e.target.value
}

const props = defineProps({
    count: {
        type: Number,
        required: true
    },
    dummyData: {
        type: Array,
        required: true
    }
})


</script>
<style scoped>
    
</style>