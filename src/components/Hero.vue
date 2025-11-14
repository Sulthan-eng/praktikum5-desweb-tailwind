<script setup>
import {RouterLink} from "vue-router";
const props = defineProps({
  title: {
    type: String,
    default: "Welcome to Sulthan Feast"
  },
  subtitle: {
    type: String,
    default:'text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl'
  },
  paragraph: {
    type: String,
    default:'mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8'
  },
  background: {
    type: String,
    default: "bg-gray-800"
  },
  paragraphText: {
    type: String,
    default: "Nikmati cita rasa autentik Timur Tengah di Sulthan Feast, tempat di mana kelezatan rempah dan aroma khas berpadu dalam setiap sajian."
  },
  showButton: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div :class="background">
    <div class="relative isolate px-6 pt-14 lg:px-8">

      <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75">
        </div>
      </div>

      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">

          <h1 :class="subtitle">{{ title }}</h1>
          <p :class="paragraph">{{ paragraphText }}</p>

          <div v-if="showButton" class="mt-10 flex items-center justify-center gap-x-6">
            <RouterLink to="/contact" class="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">
              Contact Us
            </RouterLink>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
