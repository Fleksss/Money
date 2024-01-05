<script setup>
const emit = defineEmits(['closeOrderInfo'])
</script>

<template>
  <div class="absolute top-0 left-0 w-screen h-screen backdrop-brightness-50 flex justify-center items-center"
    @click="emit('closeOrderInfo')">
    <div
      class="popup w-[800px] h-[500px] bg-brand_dark rounded-2xl text-white p-10 flex flex-col justify-between relative"
      @click.stop>
      <p class="id text-4xl"><span class="text-brand_light">#</span>id</p>
      <div class="info w-full h-[100px]">
        <div class="w-[225px] h-full grid grid-cols-2 grid-rows-2">
          <p class="text-lg text-brand_light">Pair</p>
          <p class="text-lg text-brand_light">Date</p>
          <p class="text-2xl">pair</p>
          <p class="text-2xl">date</p>
        </div>
      </div>
      <div class="infoblock w-full h-[200px] bg-brand_light rounded-2xl py-10 px-5 grid grid-cols-4 grid-rows-2">
        <p class="text-lg text-brand_medium">Price</p>
        <p class="text-lg text-brand_medium">Amount</p>
        <p class="text-lg text-brand_medium">Total</p>
        <p class="text-lg text-brand_medium">Trigger Conditions</p>
        <p class="text-2xl">43.43</p>
        <p class="text-2xl">65.65</p>
        <p class="text-2xl">76.3</p>
        <p class="text-2xl">76.3</p>
      </div>
      <i class="fas fa-times absolute top-5 right-0 w-10 h-10 cursor-pointer" @click="emit('closeOrderInfo')"></i>
    </div>
  </div>
</template>