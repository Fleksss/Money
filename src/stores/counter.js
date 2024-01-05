import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  function getBitcoinInfo(){
    fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd')
  .then((response) => response.json())
  .then((result) => console.log(result));
  };

  
})
