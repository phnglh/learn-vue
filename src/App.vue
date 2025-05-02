<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
<main class="container">
    <RouterView />
</main>
<footer>
    <div class="wrapper">
      <p>Copyright &copy; 2023</p>
      <p>All rights reserved</p>
    </div>
</footer>
</template>

