<script setup>

import { inject } from 'vue';
import AboutUs from '../components/AboutUs.vue';
import CreateApp from '../components/CreateApp.vue'

const { modelApp, model } = inject('app')

const openApp = () => {
  modelApp.value = !modelApp.value
  model.value = !model.value
  document.body.style.overflow = 'hidden'
}
</script>

<template>
  <CreateApp />
  <div class="flex h-min py-20 px-24">
    <div class="z">
      <span class="font-extrabold text-9xl" style="font-size: 13rem;">lab.</span>
      <div @click="openApp" class="group flex gap-5 items-center cursor-pointer border w-[200px] justify-center py-1 pr-3 rounded-xl">
        <img class="w-10 h-9 group-hover:translate-x-3 duration-300" src="/public/images/arrow-right.svg" alt="">
        <span class="font-bold text-xl">Create app</span>
      </div>
      <div class="w-min pt-40">
        <div class="rotate-90 scale-y-[1.4]">
          <span class="text-9xl font-black leading-[-1px] " style="font-family: Squada One; font-size: 10rem; 	letter-spacing: -10px; ">001</span>
        </div>
      </div>
    </div>
    <div class="pl-10">
      <div class="flex relative justify-center">

        <div class="flex flex-col absolute top-0 left-0">
          <span class="font-black text-slate-700 text-2xl">LABORANT</span>
          <div class="flex gap-[100px]">
            <div class="leading-4 flex font-bold flex-col">
              <span>design that inspires</span>
              <span>technologies that make it easier</span>
              <span>the results are impressive</span>
            </div>
            <div class="flex items-center justify-center w-14 h-14 rounded-md right-10 top-4"  style="	background-color: rgba(5, 150, 105, 0.3);">
            </div>
          </div>
        </div>
        <div class="absolute flex flex-col right-0 top-2 rotate-90 text-2xl font-extrabold">
          <span>CREATE APP</span>
          <span>WANT BE</span>
          <span>LOWER</span>
        </div>
        <div class="absolute flex items-end border-0 rounded-xl w-full h-[330px] bottom-14 " style="	background-color: rgba(5, 150, 105, 0.3);">
          <div class="flex group items-center justify-center cursor-pointer w-14 h-14 bg-black rounded-md">
            <img class="w-10 h-9 duration-100 group-hover:translate-x-1" src="/public/images/rgb-arrow.svg" alt="">
          </div>
        </div>
        <img class="w-[52%]" src="/public/images/iam.jpg" alt="">
      </div>
    </div>
  </div>
  <div class="flex flex-col px-20 pt-20">
    <AboutUs />
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Squada+One&display=swap');

</style>
