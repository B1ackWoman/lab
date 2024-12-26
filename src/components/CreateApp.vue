<script setup>
import { inject } from 'vue'

const { modelApp, closeAll } = inject('app')
</script>

<template>
  <transition>
    <div
      class="fixed z-20 px-10 py-10 bg-white border rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]"
      v-show="modelApp"
    >
      <div class="flex relative flex-col gap-10 ">
        <div @click="closeAll" class="group absolute flex justify-end -right-4 -top-6 w-10 h-10">
          <div class="absolute rotate-45 w-1 h-5 border-0 rounded-xl bg-black group-hover:scale-125 duration-100"></div>
          <div class="absolute -rotate-45 w-1 h-5 border-0 rounded-xl bg-black group-hover:scale-125 duration-100"></div>
        </div>
        <div
          class="absolute w-[155px] h-[100px] border-0 rounded-xl"
          style="background-color: rgba(5, 150, 105, 0.3)"
        ></div>
        <div>
          <h2 class="text-3xl font-black">ENTER TO NAME OF PROJECT</h2>
        </div>
        <div class="flex flex-col gap-5">
          <input
            class="px-4 border py-3 rounded-xl text-xl focus:outline-none"
            placeholder="Name..."
            type="text"
          />
          <button
            class="w-full py-3 border-0 text-xl bg-black rounded-xl font-bold"
            style="color: white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) scale(0.5);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(-50%) scale(1);
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.08s ease, opacity 0.1s ease-out;
}
</style>
