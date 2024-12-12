<template>
  <div>
    <div class="relative p-8 border-b">
      <section class="h-dvh flex-1">
        <img
          class="w-full h-full object-cover object-center"
          src="https://picsum.photos/1920/1080?random=1"
          alt=""
        />
      </section>
      <AppLine :count="1" />
    </div>
    <div class="relative p-8">
      <div class="grid grid-cols-2 gap-8">
        <section class="h-dvh flex-1">
          <img
            class="w-full h-full object-cover object-center"
            src="https://picsum.photos/1920/1080?random=2"
            alt=""
          />
        </section>
        <section class="h-dvh flex-1">
          <img
            class="w-full h-full object-cover object-center"
            src="https://picsum.photos/1920/1080?random=3"
            alt=""
          />
        </section>
      </div>
      <AppLine :count="2" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
