<script lang="ts" setup></script>
<template>
  <div
    class="w-full p-[60px] rounded-[10px] overflow-hidden bg-white shadow-[0_3px_10px_#3333331A] break-words"
  >
    <LineTitle class="text-4xl/snug mb-12" title="登入" />

    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-lg/6 font-medium text-gray-900">帳號</label>
        <div class="mt-2.5">
          <Input id="email" type="email" name="email" autocomplete="email" />
        </div>
      </div>

      <div>
        <label for="password" class="block text-lg/6 font-medium text-gray-900">密碼</label>
        <div class="mt-2.5">
          <Input id="password" type="password" name="password" autocomplete="current-password" />
        </div>
      </div>

      <div>
        <hr class="my-12" />
      </div>

      <div>
        <button
          type="submit"
          class="flex text-lg/7 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          登入
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
