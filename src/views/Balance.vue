<template>
  <div class="absolute top-0 left-0 w-screen h-screen backdrop-brightness-50 flex justify-center items-center"
    @click="emit('fundWallet')">
    <div class="popup w-[800px] h-[500px] bg-brand_dark rounded-2xl text-white p-10 relative" @click.stop>
      <h2 class="text-4xl">Fund Your Wallet</h2>
      <p class="my-[70px] text-brand_light">How much money do you want?</p>
      <div class="form w-full flex justify-center">
        <input v-model="money" type="number" class="w-[400px] h-[70px] rounded-2xl bg-brand_light py-4 px-5 outline-none">
      </div>
      <div class="btn w-full flex justify-center mt-10">
        <button class="btn w-[300px] h-[70px] rounded-2xl bg-beauty_yellow py-4 px-5" @click="buyMoney">Buy</button>
      </div>
      <i class="fas fa-times absolute top-5 right-0 w-10 h-10 cursor-pointer" @click="emit('fundWallet')"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useWalletStore } from "../stores/walletStore"

const store = useWalletStore()

const money = ref(null)

const emit = defineEmits(['fundWallet'])

function buyMoney() {
  store.balance += money.value
  emit('fundWallet')
};
</script>
