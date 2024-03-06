<template>
    <h1>Input Types</h1>
    <input v-model="text" placeholder="Edit Me"/>

    <div style="white-space: pre-line;">Result: {{ text }}</div>

    <input type="checkbox" id="checkbox" v-model="checked" true-value="Yes" false-value="No"/>
    <label for="checkbox">{{ checked }}</label>

    <h2>Select Value</h2>
    <div>{{ selected }}</div>
    <select v-model="selected">
        <option v-for="option in options" :value="option.value">
            {{ option.text }}
        </option>
    </select>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const text = ref('')
const checked = ref(false)
const selected = ref('')
const options = ref([
    {text: 'One', value: 'A'},
    {text: 'Two', value: 'B'},
    {text: 'Three', value: 'C'},
])
onMounted(() => {
    console.log('the computed mount');
})
</script>