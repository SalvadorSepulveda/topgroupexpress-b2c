// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:lang?',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/:lang?/agencies',
            name: 'agencies',
            component: () => import('../views/AgenciesView.vue'),
        },
        {
            path: '/:lang?/hoteliers',
            name: 'hoteliers',
            component: () => import('../views/HoteliersView.vue'),
        },
        {
            path: '/:lang?/privacy-policy',
            name: 'privacy-policy',
            component: () => import('../views/PrivacyPolicyView.vue'),
        },
        // Resto de las rutas...
        {
            path: '/:lang?/:pathMatch(.*)*',
            name: 'page-not-found',
            component: () => import('../views/PageNotFoundView.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { el: to.hash };
        }
        return { x: 0, y: 0 };
    },
});

export default router;
