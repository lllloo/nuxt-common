<script lang="ts" setup></script>

<template>
  <div class="w-full px-4 py-2.5 rounded-[10px] bg-white shadow-[0_3px_10px_#3333331A] break-words">
    <div class="flex justify-between items-center mb-2.5">
      <div class="flex items-center min-w-0">
        <Icon name="ic:outline-account-circle" class="text-2xl text-gray-500 mr-1.5 flex-none" />
        <div class="min-w-0">
          <div class="text-sm line-clamp-1">Name</div>
          <div class="text-xs text-gray-500">2024 / 10 / 17</div>
        </div>
      </div>
      <div class="flex text-xs flex-none">
        <div class="flex items-center mr-2">
          <Icon name="ic:baseline-favorite" class="text-xl text-red-500 mr-1" />
          1
        </div>
        <div class="flex items-center">
          <Icon name="ic:outline-remove-red-eye" class="text-xl text-gray-500 mr-1" />
          1
        </div>
      </div>
    </div>
    <div class="mb-4 font-bold line-clamp-1">
      內文 內文 內文 內文 內文 內文 內文 內文 內文 內文 內文 內文 內文 內文 內文 內文
    </div>
    <hr class="my-2.5" />
    <div class="flex text-gray-500 text-xs leading-5">
      <div class="flex items-center flex-none mr-2 text-black">
        <Icon name="ic:outline-message" class="text-xl leading-none text-gray-500 mr-1" />
        5
      </div>
      <div class="mr-2 line-clamp-1">Name</div>
      <div class="mr-2 flex-none">2024 / 10 / 20</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
