<template>
    <h1>Input Types</h1>
    <input v-model=" text " placeholder="Edit Me" />

    <div style="white-space: pre-line;">Result: {{ text }}</div>

    <h2>Select Value</h2>
    <div>{{ selected }}</div>
    <select v-model=" selected ">
        <option v-for=" option  in  options " :value=" option.value ">
            {{ option.text }}
        </option>
    </select>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const text = ref('');
const selected = ref('');
const options = ref([
    { text: 'One', value: 'A' },
    { text: 'Two', value: 'B' },
    { text: 'Three', value: 'C' },
]);
onMounted(() => {
    console.log('the computed mount');
});
</script>