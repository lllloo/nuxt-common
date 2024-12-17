<script lang="ts" setup></script>

<template>
  <div class="layout-line-wrap">
    <div
      :class="{
        'layout-line': true,
      }"
    ></div>
  </div>
</template>
<style lang="scss" scoped>
.layout-line-wrap {
  & + .layout-line-wrap {
    .layout-line {
      width: 1px;
    }
  }
}
.layout-line {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 0;
  background-color: hsl(var(--border));
}
</style>
