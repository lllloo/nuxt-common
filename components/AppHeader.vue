<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const list = ref([
  {
    name: 'Index',
    url: '/',
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
  },
  {
    name: 'Banner',
    url: '/banner',
  },
  {
    name: 'Products',
    url: '/products',
  },
  {
    name: 'Customers',
    url: '/customers',
  },
  {
    name: 'Analytics',
    url: '/analytics',
  },
])
</script>
<template>
  <header class="sticky top-0 z-20">
    <div class="flex h-16 items-center gap-4 bg-background container border-x">
      <NuxtLink href="#" class="flex items-center gap-2 text-lg font-semibold md:text-base mr-auto">
        <Icon name="ic:baseline-battery-charging-20" class="text-2xl" />
        <span class="sr-only">Home</span>
      </NuxtLink>
      <nav
        class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <NuxtLink
          v-for="item in list"
          :key="item.name"
          :href="item.url"
          class="text-foreground transition-colors hover:text-foreground"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
      <Sheet>
        <SheetTrigger as-child>
          <Button variant="outline" size="icon" class="shrink-0 md:hidden">
            <Icon name="ic:menu" />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav class="grid gap-6 text-lg font-medium">
            <NuxtLink href="#" class="flex items-center gap-2 text-lg font-semibold">
              <Icon name="ic:baseline-battery-charging-20" class="text-2xl" />
              <span class="sr-only">Home</span>
            </NuxtLink>
            <NuxtLink
              v-for="item in list"
              :key="item.name"
              :href="item.url"
              class="hover:text-foreground"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>
