<script setup>
const emit = defineEmits(['orderInfo'])
</script>

<template>
  <div class="bg-brand_dark w-full h-full px-[50px] py-[40px]">
    <div class="head text-xl text-brand_light mb-[30px] grid grid-cols-3">
      <p class="price">Price</p>
      <p class="amount">Amount</p>
      <p class="time">Time</p>
    </div>
    <div class="list w-full h-full">
      <ul class="order-list w-full h-full overflow-y-scroll">
        <li class="order h-[30px] grid grid-cols-3 text-white relative">
          <p class="price col-span-1 text-buy">43.2</p>
          <p class="amount col-span-1">43.2</p>
          <p class="time col-span-1">43.2</p>
          <i class="fa-solid fa-angles-right absolute top-0 right-5 text-beauty_yellow text-lg cursor-pointer w-10 h-10"
            @click="emit('orderInfo')"></i>
        </li>
      </ul>
    </div>
  </div>
</template>