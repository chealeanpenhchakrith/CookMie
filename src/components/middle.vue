<template>
  <div class="flex flex-1 flex-col items-center">
    <Header class="mt-15" title="Cookie Industry" :icon="charIcon" />
    <div class="flex flex-row gap-2.5 mt-25">
      <div v-html="cookieIcon"></div>
      <h1>{{ store.cookieProduced }}</h1>
    </div>
    <div class="mt-10">
      <canvas
        ref="cookieCanvas"
        @click="onCanvasClick"
        width="500"
        height="500"
        style="cursor: pointer"
        aria-label="cookie"
      ></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "@/store";
import Header from "./Header.vue";

const store = useStore();

const charIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cookie-icon lucide-cookie"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>`;

const cookieIcon = `<svg xmlns"http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cookie-icon lucide-cookie"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>`;

// canvas ref and image setup
const cookieCanvas = ref(null);
const img = new Image();
img.src = "/src/assets/cookie.png";

onMounted(() => {
  const canvas = cookieCanvas.value;
  if (!canvas) return;
  // request a 2D context optimized for frequent readbacks (getImageData)
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  // draw image when ready
  if (img.complete) {
    drawImageToCanvas();
  } else {
    img.onload = drawImageToCanvas;
    img.onerror = () => {
      // fallback: if image can't load, clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }

  function drawImageToCanvas() {
    // ensure canvas pixel size matches attributes
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }
});

function onCanvasClick(e) {
  const canvas = cookieCanvas.value;
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = Math.floor((e.clientX - rect.left) * scaleX);
  const y = Math.floor((e.clientY - rect.top) * scaleY);
  // try to reuse a context optimized for readbacks; fall back if not supported
  let ctx = null;
  try {
    ctx =
      canvas.getContext("2d", { willReadFrequently: true }) ||
      canvas.getContext("2d");
  } catch (err) {
    // some browsers may throw for unknown options; fallback to default context
    ctx = canvas.getContext("2d");
  }
  try {
    const p = ctx.getImageData(x, y, 1, 1).data;
    const alpha = p[3]; // 0 - 255
    const threshold = 10; // tune if edges are semi-transparent
    if (alpha > threshold) {
      store.cookieIncrement();
    }
  } catch (err) {
    store.cookieIncrement();
  }
}
</script>
