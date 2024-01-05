<script setup>
import { ref } from 'vue';
import { useWalletStore } from "../stores/walletStore"

const store = useWalletStore()

const emit = defineEmits(['openBalance'])

let price = ref(null)
let amount = ref(null)
let total = ref(price.value * amount.value)

let buy = () => {
  console.log(price.value * amount.value);
  console.log(total.value);
}
let sell = () => { }
</script>

<template>
  <div class="bg-brand_medium text-white border border-brand_light w-full h-full">
    <div class="form w-full h-1/3 flex flex-wrap justify-center items-center my-[80px]">

      <div class="inputwrap w-full max-h-96 text-center mb-5">
        <input v-model="price" type="number" class="w-1/2 h-full rounded-2xl bg-brand_light py-4 px-5 outline-none"
          placeholder="Price">
      </div>

      <div class="inputwrap w-full max-h-96 text-center mb-5">
        <input v-model="amount" type="number" class="w-1/2 h-full rounded-2xl bg-brand_light py-4 px-5 outline-none"
          placeholder="Amount">
      </div>

      <div class="inputwrap w-full max-h-96 text-center">
        <input v-model="total" type="number" class="w-1/2 h-full rounded-2xl bg-brand_light py-4 px-5 outline-none"
          placeholder="Total">
      </div>

    </div>
    <div class="btn-wrap w-full h-12 flex justify-center gap-10 items-start">
      <button class="btn w-1/5 h-full bg-buy rounded-2xl" @click="buy">Buy</button>
      <button class="btn w-1/5 h-full bg-sell rounded-2xl" @click="sell">Sell</button>
    </div>
    <div class="balance w-full pt-10 flex justify-center items-center">
      <p class="text-brand_light">Balance:</p>
      <p class=" pl-10 pr-5">{{ store.balance }} USDT</p>
      <button class="plus w-[40px] h-[40px] bg-beauty_yellow rounded-full text-3xl"
        @click="emit('openBalance')">+</button>
    </div>
  </div>
</template>