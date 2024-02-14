import { createRouter, createWebHistory } from 'vue-router'
import QrCodeView from '../views/QrCodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'qrcode',
      component: QrCodeView
    }
  ]
})

export default router
