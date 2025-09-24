import { defineStore } from "pinia";
import { ref } from "vue";
export const useStore = defineStore("main", () => {
  const cookieProduced = ref(0);
  const multiplierBonus = ref(1);
  function cookieMultiplier(multiplier) {
    multiplierBonus.value = multiplier;
  }
  function cookieIncrement() {
    cookieProduced.value += 1 * multiplierBonus.value;
  }
  return { cookieProduced, cookieMultiplier, cookieIncrement, multiplierBonus };
});
