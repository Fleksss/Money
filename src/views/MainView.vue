<script setup>
import StockExchange from '../components/StockExchange.vue';
import Wallet from '../components/Wallet.vue';
import Orders from '../components/Orders.vue';
import Balance from './Balance.vue';
import OrderInfo from './OrderInfo.vue';
import { onMounted, ref } from 'vue';
import { usefetchDataStore } from "../stores/fetchData"

let isBalanceOpen = ref(false)
let isOrderInfoOpen = ref(false)

let store = usefetchDataStore()
let { getBitcoinInfo } = store

// function getBitcoinInfo() {
//   fetch('https://api.coinranking.com/v2/coins')
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };
let data
onMounted(async () => {
  data = await getBitcoinInfo()
  console.log(data);
})
</script>

<template>
  <div
    class="w-screen h-screen flex items-start relative overflow-y-hidden max-[1200px]:flex-wrap max-[1200px]:overflow-y-scroll">
    <StockExchange class="w-full h-full" />
    <Wallet @openBalance="isBalanceOpen = true" class="w-full h-full" />
    <Orders class="w-full h-full" @orderInfo="isOrderInfoOpen = true" />
    <Balance v-if="isBalanceOpen" @fundWallet="isBalanceOpen = false" />
    <OrderInfo v-if="isOrderInfoOpen" @closeOrderInfo="isOrderInfoOpen = false" />

  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #5E6673;
  border-radius: 15px;
}

::-webkit-scrollbar-thumb {
  background: #2B2F36;
  border-radius: 15px;
}

::-webkit-scrollbar-thumb:hover {
  background: #f0b90b
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

* {
  font-family: 'Poppins', sans-serif;
}
</style>