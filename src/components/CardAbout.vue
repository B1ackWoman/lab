<script setup>

defineProps({
  title: String,
  content: String,
  w: String,
  h: String,
  l: String,
  t: String,
  dg: Number,

})

</script>

<template>
  <div class="relative border rounded-md px-5 py-5">
    <h3 class="text-3xl font-extrabold mb-3">{{ title }}</h3>
    <span class="text-slate-500">{{ content }}</span>
    <div :class="['absolute']" :style="{backgroundColor: 'rgba(5, 150, 105, 0.3)', transform: 'rotate(' + dg + 'deg)', width: w + 'px', height: h + 'px', left: l + 'px', top: t + 'px'}"></div>
  </div>
</template>
