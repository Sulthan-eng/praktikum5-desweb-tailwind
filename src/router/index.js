import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import ContactPage from "@/pages/ContactPage.vue";

const routes = [
    {
        path: '/',
        name: HomePage,
        component: HomePage,
    },
    {
        path: '/contact',
        name: ContactPage,
        component: ContactPage,
    },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
