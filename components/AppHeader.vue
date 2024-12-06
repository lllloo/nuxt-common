<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
</script>
<template>
  <header
    class="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
  >
    <nav
      class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
    >
      <a href="#" class="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Icon name="ic:baseline-battery-charging-20" class="text-2xl" />
        <span class="sr-only">Acme Inc</span>
      </a>
      <a href="#" class="text-foreground transition-colors hover:text-foreground"> Dashboard </a>
      <a href="#" class="text-muted-foreground transition-colors hover:text-foreground"> Orders </a>
      <a href="#" class="text-muted-foreground transition-colors hover:text-foreground">
        Products
      </a>
      <a href="#" class="text-muted-foreground transition-colors hover:text-foreground">
        Customers
      </a>
      <a href="#" class="text-muted-foreground transition-colors hover:text-foreground">
        Analytics
      </a>
    </nav>
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="#" class="flex items-center gap-2 text-lg font-semibold">
            <Icon name="ic:baseline-battery-charging-20" class="text-2xl" />
            <span class="sr-only">Acme Inc</span>
          </a>
          <a href="#" class="hover:text-foreground"> Dashboard </a>
          <a href="#" class="text-muted-foreground hover:text-foreground"> Orders </a>
          <a href="#" class="text-muted-foreground hover:text-foreground"> Products </a>
          <a href="#" class="text-muted-foreground hover:text-foreground"> Customers </a>
          <a href="#" class="text-muted-foreground hover:text-foreground"> Analytics </a>
        </nav>
      </SheetContent>
    </Sheet>
    <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <div class="ml-auto flex-1 sm:flex-initial"></div>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="secondary" size="icon" class="rounded-full">
            <Icon name="ic:round-person" class="text-base" />
            <span class="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
</template>
