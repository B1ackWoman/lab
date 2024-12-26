<script setup>

import { inject } from 'vue';


const { closeAll } = inject('app')
</script>

<template>
  <div @click="closeAll" class="fixed bg-black opacity-70 z-10 h-full w-full"></div>
</template>
