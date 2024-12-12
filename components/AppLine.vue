<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    count?: number
  }>(),
  {
    count: 4,
  },
)

const lines = computed(() => {
  return Array.from({ length: props.count }, (_, i) => i)
})
</script>

<template>
  <div
    v-for="i in lines"
    :key="i"
    :class="{
      'layout-line': true,
      'no-line': i === 0,
    }"
    :style="{
      '--count': count,
      '--i': i,
    }"
  ></div>
</template>
<style lang="scss" scoped>
.layout-line {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 0;
  background-color: white;
  &:nth-child(n) {
    left: calc(var(--i) * (100% / var(--count)));
  }
  &:not(.no-line) {
    border-left: 1px solid hsl(var(--border));
  }

  .page-enter-active &,
  .page-leave-active & {
    transition: width 0.75s;
  }

  .page-enter-from &,
  .page-leave-to & {
    width: calc(100% / var(--count));
  }

  .page-enter-to & {
    &:nth-child(n) {
      border-left: 1px solid transparent;
      left: auto;
      right: calc(var(--i) * (100% / var(--count)));
    }
  }
}
</style>
