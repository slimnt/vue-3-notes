import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from './pages/aboutPage'
import HomePage from './pages/homePage'
import NotFoundPage from './pages/notFoundPage.vue'

const routerHistory = createWebHistory()

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFoundPage,
    },
  ],
})

export default routers
