<script setup>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <main>
    <router-view></router-view>
  </main>
  <FooterComponent></FooterComponent>
</template>

<style scoped></style>
