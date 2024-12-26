<script setup>

import { provide, ref } from 'vue';
import BgBlack from './components/BgBlack.vue';
import MyHeader from './components/MyHeader.vue'


const model = ref(false)
const modelApp = ref(false)


const closeAll = () => {
  model.value = false
  modelApp.value = false

  document.body.style.overflow = ''
}

provide('app', {
  modelApp,
  model,
  closeAll,
})
</script>

<template>
  <div v-show="model">
    <BgBlack />
  </div>
  <MyHeader />
  <router-view></router-view>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Squada+One&display=swap');



</style>
