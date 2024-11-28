<script lang="ts" setup>
import { EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
const onSlideChange = () => {
  console.log('slide change')
}
const onSwiper = () => {
  console.log('swiper')
}

const list = [
  {
    title: 'BANNER 1',
    image: 'https://picsum.photos/1920/1080?random=1',
  },
  {
    title: 'BANNER 2',
    image: 'https://picsum.photos/1920/1080?random=2',
  },
  {
    title: 'BANNER 3',
    image: 'https://picsum.photos/1920/1080?random=3',
  },
]
</script>

<template>
  <Swiper
    class="h-full"
    effect="fade"
    :slides-per-view="1"
    :space-between="0"
    :modules="[EffectFade]"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <SwiperSlide v-for="(item, index) in list" :key="index">
      <div :class="`w-full h-full flex justify-center items-center bg-[url('${item.image}')]`">
        <h2 class="px-[20px] text-[40px] sm:(px-[36px] text-[72px]) font-bold bg-white">
          {{ item.title }}
        </h2>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped></style>
