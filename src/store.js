import { defineStore } from "pinia";
import { ref } from "vue";
export const useStore = defineStore("main", () => {
  const cookieProduced = ref(0);
  return { cookieProduced };
});
