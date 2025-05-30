<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app flex flex-col min-h-screen">
    <header class="py-4 shadow">
      <div class="wrapper flex justify-center">
        <nav class="flex gap-4">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <main class="container flex-1 flex flex-col items-center justify-center py-8">
      <RouterView />
      <RouterView name="test" />
    </main>

    <footer class="py-4 text-center text-sm text-gray-500">
      <div class="wrapper">
        <p>&copy; 2023 All rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
