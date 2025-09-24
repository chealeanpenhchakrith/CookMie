import { defineStore } from "pinia";
import { ref } from "vue";
export const useStore = defineStore("main", () => {
  const cookieProduced = ref(10000);
  const multiplierBonus = ref(1);
  function cookieMultiplier(multiplier) {
    multiplierBonus.value = multiplier;
    switch (multiplier) {
      case 2:
        cookieProduced.value -= 100;
        break;
      case 3:
        cookieProduced.value -= 500;
        break;
      case 5:
        cookieProduced.value -= 2000;
        break;
      case 10:
        cookieProduced.value -= 10000;
        break;
    }
  }
  function cookieIncrement() {
    cookieProduced.value += 1 * multiplierBonus.value;
  }
  return { cookieProduced, cookieMultiplier, cookieIncrement, multiplierBonus };
});
