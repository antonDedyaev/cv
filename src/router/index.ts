import { createRouter, createWebHistory } from 'vue-router'
import PersonalView from '../views/PersonalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personal',
      component: PersonalView
    },
  ]
})

export default router
