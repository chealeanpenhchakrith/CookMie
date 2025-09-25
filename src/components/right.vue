<template>
  <div class="flex flex-1 flex-col items-center">
    <Header class="mt-15" title="Boost" :icon="charIcon" />
    <div class="flex flex-row mt-20 gap-6.5 mb-20">
      <button class="border-2" @click="toggle">Machines</button>
      <button class="border-2" @click="toggle">Multiplier</button>
    </div>
    <div v-if="machinesTab" class="flex flex-col gap-7">
      <Machines
        @click="store.cookieProduced >= 10 ? cursorBonus() : null"
        :class="
          store.cookieProduced >= 10
            ? 'bg-green-500'
            : 'bg-red-600 cursor-not-allowed'
        "
        title="Cursor"
        bonus="1"
        cost="10"
        possession="0"
      />
      <Machines
        @click="store.cookieProduced >= 30 ? grandmaBonus() : null"
        :class="
          store.cookieProduced >= 30
            ? 'bg-green-500'
            : 'bg-red-600 cursor-not-allowed'
        "
        title="Grandma"
        bonus="5"
        cost="30"
        possession="0"
      />
      <Machines
        @click="store.cookieProduced >= 100 ? ovenBonus() : null"
        :class="
          store.cookieProduced >= 100
            ? 'bg-green-500'
            : 'bg-red-600 cursor-not-allowed'
        "
        title="Oven"
        bonus="10"
        cost="100"
        possession="0"
      />
      <Machines
        @click="store.cookieProduced >= 200 ? farmBonus() : null"
        :class="
          store.cookieProduced >= 200
            ? 'bg-green-500'
            : 'bg-red-600 cursor-not-allowed'
        "
        title="Farm"
        bonus="25"
        cost="200"
        possession="0"
      />
      <Machines
        @click="store.cookieProduced >= 500 ? factoryBonus() : null"
        :class="
          store.cookieProduced >= 500
            ? 'bg-green-500'
            : 'bg-red-600 cursor-not-allowed'
        "
        title="Factory"
        bonus="50"
        cost="500"
        possession="0"
      />
    </div>
    <div v-else class="flex flex-col gap-7">
      <Multiplier
        v-if="!store.multiplierCheck2"
        @click="store.cookieProduced >= 100 ? store.cookieMultiplier(2) : null"
        :class="
          store.cookieProduced >= 100
            ? 'bg-green-500'
            : 'bg-red-600 cursor-not-allowed'
        "
        multiplier="2"
        cost="100"
        possession="0"
      />
      <Multiplier
        v-if="!store.multiplierCheck3"
        @click="store.cookieProduced >= 500 ? store.cookieMultiplier(3) : null"
        :class="
          store.cookieProduced >= 500
            ? 'bg-green-500'
            : 'bg-red-600 cursor-not-allowed'
        "
        multiplier="3"
        cost="500"
        possession="0"
      />
      <Multiplier
        v-if="!store.multiplierCheck5"
        @click="store.cookieProduced >= 2000 ? store.cookieMultiplier(5) : null"
        :class="
          store.cookieProduced >= 2000
            ? 'bg-green-500'
            : 'bg-red-600 cursor-not-allowed'
        "
        multiplier="5"
        cost="2000"
        possession="0"
      />
      <Multiplier
        v-if="!store.multiplierCheck10"
        @click="
          store.cookieProduced >= 10000 ? store.cookieMultiplier(10) : null
        "
        :class="
          store.cookieProduced >= 10000
            ? 'bg-green-500'
            : 'bg-red-600 cursor-not-allowed'
        "
        multiplier="10"
        cost="10 000"
        possession="0"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import Machines from "./Machines.vue";
import Multiplier from "./Multiplier.vue";
import { useStore } from "@/store";

const store = useStore();
const machinesTab = ref(true);

const charIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`;

function toggle() {
  machinesTab.value = !machinesTab.value;
}

function cursorBonus() {
  store.averageCookie += 1;
  store.cookieProduced -= 10;
  setInterval(() => {
    store.cookieProduced += 1 * store.multiplierBonus;
    store.totalCookieProduced += 1 * store.multiplierBonus;
  }, 1000);
}

function grandmaBonus() {
  store.averageCookie += 5;
  store.cookieProduced -= 30;
  setInterval(() => {
    store.cookieProduced += 5 * store.multiplierBonus;
    store.totalCookieProduced += 5 * store.multiplierBonus;
  }, 1000);
}

function ovenBonus() {
  store.averageCookie += 10;
  store.cookieProduced -= 100;
  setInterval(() => {
    store.cookieProduced += 10 * store.multiplierBonus;
    store.totalCookieProduced += 10 * store.multiplierBonus;
  }, 1000);
}

function farmBonus() {
  store.averageCookie += 25;
  store.cookieProduced -= 200;
  setInterval(() => {
    store.cookieProduced += 25 * store.multiplierBonus;
    store.totalCookieProduced += 25 * store.multiplierBonus;
  }, 1000);
}

function factoryBonus() {
  store.averageCookie += 50;
  store.cookieProduced -= 500;
  setInterval(() => {
    store.cookieProduced += 50 * store.multiplierBonus;
    store.totalCookieProduced += 50 * store.multiplierBonus;
  }, 1000);
}
</script>
