import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/agencies',
            name: 'agencies',
            component: () => import('../views/AgenciesView.vue'),
        },
        {
            path: '/hoteliers',
            name: 'hoteliers',
            component: () => import('../views/HoteliersView.vue'),
        },
        {
            path: '/downloads',
            name: 'downloads',
            component: () => import('../views/DownloadsView.vue'),
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('../views/BlogView.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return { el: to.hash }
        }
        return { x: 0, y: 0 }
    },
})

export default router
