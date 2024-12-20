<script lang="ts" setup>
// 定義畫布和星星數組的引用
const canvas = ref<HTMLCanvasElement | null>(null)
let stars: { x: number; y: number; z: number; o: string }[] = []

// 初始化星星的位置和透明度
const initializeStars = () => {
  if (!canvas.value) return
  stars = []
  for (let i = 0; i < 1024; i++) {
    stars.push({
      x: Math.random() * canvas.value.width, // 隨機 x 座標
      y: Math.random() * canvas.value.height, // 隨機 y 座標
      z: Math.random() * canvas.value.width, // 隨機 z 座標
      o: '0.' + Math.floor(99 * Math.random()) + 1, // 隨機透明度
    })
  }
}

// 移動星星的位置
const moveStars = () => {
  stars.forEach((star) => {
    star.z-- // 減少 z 座標，模擬星星向前移動
    if (star.z <= 0) {
      if (!canvas.value) return
      star.z = canvas.value.width // 如果 z 座標小於等於 0，重置 z 座標
    }
  })
}

// 繪製星星
const drawStars = () => {
  if (!canvas.value) return
  const context = canvas.value.getContext('2d')
  if (!context) return
  const centerX = canvas.value.width / 2
  const centerY = canvas.value.height / 2
  const maxDepth = canvas.value.width

  // 如果畫布大小與窗口大小不一致，重置畫布大小並初始化星星
  if (canvas.value.width !== window.innerWidth || canvas.value.height !== window.innerHeight) {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
    initializeStars()
  }

  // 填充畫布背景
  context.fillStyle = 'rgba(0,0,0,1)'
  context.fillRect(0, 0, canvas.value.width, canvas.value.height)

  // 設置星星的顏色
  context.fillStyle = 'rgba(209, 255, 255, 100)'

  // 繪製每顆星星
  stars.forEach((star) => {
    const x = (star.x - centerX) * (maxDepth / star.z) + centerX
    const y = (star.y - centerY) * (maxDepth / star.z) + centerY
    const radius = maxDepth / star.z
    context.beginPath()
    context.arc(x, y, radius / 2, 0, 2 * Math.PI)
    context.fillStyle = `rgba(209, 255, 255, ${star.o})`
    context.fill()
  })
}

// 初始化畫布和星星
const init = () => {
  initializeStars()
  const animate = () => {
    moveStars()
    drawStars()
    requestAnimationFrame(animate)
  }
  animate()
}

// 當組件掛載時初始化
onMounted(() => {
  init()
})
</script>

<template>
  <div class="relative">
    <canvas id="space" ref="canvas" class="w-full h-[calc(100vh-130px)]"></canvas>
    <h2
      :class="[
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] px-5 text-white text-5xl/tight font-bold bg-white/9 backdrop-blur',
        'sm:px-9 sm:text-7xl/tight',
      ]"
    >
      STAR
    </h2>
  </div>
</template>

<style scoped>
canvas {
  display: block;
}
</style>
