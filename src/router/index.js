import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('../components/Resume.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../components/Portfolio.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('../components/Services.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../components/Contacts.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
