<script setup>
import Header from './Pages/Header.vue';
import Counter from './components/Counter.vue';
import InputsTypes from './components/InputsTypes.vue';
import FetchData from './components/FetchData.vue';
import About from './Pages/About.vue';
import Hero from './Pages/Hero.vue';
import Experience from './Pages/Experience.vue';
import Projects from './Pages/Projects.vue';
import Contact from './Pages/Contact.vue';
import './assets/App.css';
import { ref } from 'vue';
import MobileNav from './components/MobileNav.vue';

const count = ref(0);
const dummyData = [
  { id: 1, name: 'David', age: 22 },
  { id: 2, name: 'Precious', age: 24 },
  { id: 1, name: 'Blessing', age: 23 },
  { id: 1, name: 'Vicktor', age: 23 },
  { id: 1, name: 'Clinton', age: 23 }
];

const objectProps = {
  dummyData: dummyData,
  count: count.value
};
</script>

<template>
  <div class="bg-secondary text-primary flex items-center justify-center font-family flex-col">
    <Header />
    <div class="w-[90%] max-w-[1200px]">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <!-- <Counter v-bind=" objectProps " />
      <InputsTypes />
      <FetchData /> -->
    </div>
    <!-- <MobileNav /> -->
  </div>
</template>
