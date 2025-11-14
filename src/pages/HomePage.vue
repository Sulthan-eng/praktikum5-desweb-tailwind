<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Overview from "@/components/Overview.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navbar />
  <Hero
      background="bg-gray-950"
      title="Welcome to Sulthan Feast"
      :show-button="true"
      paragraph-text="Nikmati cita rasa autentik Timur Tengah di Sulthan Feast, tempat di mana kelezatan rempah dan aroma khas berpadu dalam setiap sajian. Rasakan nuansa hangat, nikmati hidangan istimewa, dan biarkan setiap gigitan membawa Anda ke jantung budaya Timur Tengah."
  />
  <Overview />
  <Footer />
</template>
