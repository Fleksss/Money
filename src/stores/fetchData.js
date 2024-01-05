import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {fetchBitcoin} from "../api/stock" 

export const usefetchDataStore = defineStore('Coins', () => {

  async function getBitcoinInfo() {
    await fetch('https://api.coinranking.com/v2/coins')
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        
        return result
      });
  };

  const Coin = computed(() => {return fetchCoin()})

  return {getBitcoinInfo}
})