import { defineStore } from "pinia";
import { ref } from "vue";
import { watch } from "vue";
export const useStore = defineStore("main", () => {
  const cookieProduced = ref(0);
  const multiplierBonus = ref(1);
  const multiplierCheck2 = ref(false);
  const multiplierCheck3 = ref(false);
  const multiplierCheck5 = ref(false);
  const multiplierCheck10 = ref(false);
  const averageCookie = ref(0);
  const displayAverageCookie = ref(0);
  watch(averageCookie, (newAverageCookie) => {
    displayAverageCookie.value = newAverageCookie * 60;
  });

  watch(multiplierBonus, (newMultiplier) => {
    averageCookie.value = averageCookie.value * newMultiplier;
  });

  function cookieMultiplier(multiplier) {
    multiplierBonus.value = multiplier;
    switch (multiplier) {
      case 2:
        multiplierCheck2.value = true;
        cookieProduced.value -= 100;
        break;
      case 3:
        multiplierCheck3.value = true;
        cookieProduced.value -= 500;
        break;
      case 5:
        multiplierCheck5.value = true;
        cookieProduced.value -= 2000;
        break;
      case 10:
        multiplierCheck10.value = true;
        cookieProduced.value -= 10000;
        break;
    }
  }
  function cookieIncrement() {
    cookieProduced.value += 1 * multiplierBonus.value;
  }
  return {
    cookieProduced,
    cookieMultiplier,
    cookieIncrement,
    multiplierBonus,
    multiplierCheck2,
    multiplierCheck3,
    multiplierCheck5,
    multiplierCheck10,
    averageCookie,
    displayAverageCookie,
  };
});
