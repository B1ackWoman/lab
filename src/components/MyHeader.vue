<template>
  <div class="h-[100px] w-full py-4 px-5">
    <div class="flex items-center justify-between">
      <div class="flex gap-20 items-center">
        <router-link to="/">
          <div class="flex gap-2">
            <div class="bg-black w-2 h-7 border-0 rounded-2xl" style="transform: rotate(30deg);"></div>
            <div class="bg-black w-2 h-7 border-0 rounded-2xl" style="transform: rotate(30deg);"></div>
          </div>
        </router-link>
        <div class="flex gap-4">
          <span class="font-black hover:opacity-80 cursor-pointer">ABOUT</span>
          <router-link to="MyApp">
            <span class="font-black hover:opacity-80 cursor-pointer">MY APP</span>
          </router-link>
        </div>
      </div>
        <div>
          <span class="font-black text-3xl">+1</span>
        </div>
    </div>
  </div>
</template>
