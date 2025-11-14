<script setup lang="ts">
import { RouterLink}   from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import Maps from "@/components/Maps.vue";
</script>

<template>
  <Navbar/>
  <Hero
      title="Hubungi Kami"
      paragraph-text="Coba pengalaman yang luar biasa."

  />
  <Maps/>
  <Footer/>
</template>

<style scoped>

</style>