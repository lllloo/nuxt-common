<template>
  <div class="layout-line no-line" style="--i: 0"></div>
  <div class="layout-line" style="--i: 1"></div>
  <div class="layout-line" style="--i: 2"></div>
  <div class="layout-line" style="--i: 3"></div>
</template>
<style lang="scss">
.layout-line {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 0;
  background-color: white;
  &:nth-child(n) {
    left: calc(var(--i) * 25%);
  }
  &:not(.no-line) {
    border-left: 1px solid hsl(var(--border));
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 1s;
  .layout-line {
    transition: width 1s;
  }
}
.page-enter-from,
.page-leave-to {
  .layout-line {
    width: 25%;
  }
}

.page-enter-to {
  .layout-line {
    &:nth-child(n) {
      border-left: 1px solid transparent;
      left: auto;
      right: calc(var(--i) * 25%);
    }
  }
}
</style>
