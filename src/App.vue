<script setup>
import Header from './components/Header/Header.vue'
import Counter from './components/Counter.vue'
import InputsTypes from './components/InputsTypes.vue';
  import FetchData from './components/FetchData.vue'
import './assets/App.css'
import { ref } from 'vue';

const count = ref(0)
const dummyData = [
  {id:1,name:'David',age:22},
  {id:2,name:'Precious',age:24},
  {id:1,name:'Blessing',age:23},
  {id:1,name:'Vicktor',age:23},
  {id:1,name:'Clinton',age:23}
]

const objectProps = {
  dummyData: dummyData,
  count: count.value
}
</script>

<template>
  <Header/>
  <Counter v-bind="objectProps"/>
  <InputsTypes />
  <FetchData />
</template>

<style scoped>

</style>
