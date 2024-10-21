<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container">
  <RouterView />
  </div>
</template>

<style scoped>
  .body{
    background-color: aliceblue;
  }
  .container{
    background-color: whitesmoke;/* is that greyish container*/ 
    box-shadow: drop-shadow(0 0 5px rgba(0, 0, 0, 0.8));
    min-height: 100vh;/*is the entire height of your window*/ 
  }
</style>