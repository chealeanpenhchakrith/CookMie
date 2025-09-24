import { defineStore } from "pinia";
import { ref } from "vue";
export const useStore = defineStore("main", () => {
  const cookieProduced = ref(0);
  const multiplierBonus = ref(1);
  function cookieMultiplier(multiplier) {
    switch (multiplier) {
      case 2:
        cookieProduced.value -= 100;
      case 3:
        cookieProduced.value -= 500;
      case 5:
        cookieProduced.value -= 2000;
      case 10:
        cookieProduced.value -= 10000;
    }
    multiplierBonus.value = multiplier;
  }
  function cookieIncrement() {
    cookieProduced.value += 1 * multiplierBonus.value;
  }
  return { cookieProduced, cookieMultiplier, cookieIncrement, multiplierBonus };
});
