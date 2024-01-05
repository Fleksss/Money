<template>
  <div class="bg-brand_dark w-full h-full pl-[50px] py-[40px]">
    <div class="head text-xl text-brand_light mb-[30px] grid grid-cols-3">
      <p class="price">Price</p>
      <p class="amount">Amount</p>
      <p class="time">Total</p>
    </div>
    <div class="list w-full h-full">
      <ul class="sell h-2/5">
        <li class="order h-[30px] grid grid-cols-3 text-white relative bg-sell bg-opacity-25 place-content-center pl-2">
          <p class="price col-span-1 text-sell">43.2</p>
          <p class="amount col-span-1">43.2</p>
          <p class="time col-span-1">43.2</p>
        </li>
      </ul>
      <div class="board-top w-full h-[60px] flex justify-around items-center py-4">
        <p class=" text-lg text-buy">4254.54792 <span><i class="fas fa-arrow-up"></i></span></p>
        <p class="text-brand_light">Spread: <span class="text-white">0.1%</span></p>
      </div>
      <ul class="buy h-2/5">
        <li class="order h-[30px] grid grid-cols-3 text-white relative bg-buy bg-opacity-25 place-content-center pl-2">
          <p class="price col-span-1 text-buy">43.2</p>
          <p class="amount col-span-1">43.2</p>
          <p class="time col-span-1">43.2</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>
