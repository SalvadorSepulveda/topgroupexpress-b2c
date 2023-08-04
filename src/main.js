import { createApp } from 'vue';
import { pinia } from './stores';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import setupIcons from './components/icons';
import setupFlag from './components/flags';

async function createAppWithI18n() {
    const i18n = createI18n({
        legacy: false,
        locale: 'es',
        messages: {
            en: (await import('./locales/en.js')).default,
            es: (await import('./locales/es.js')).default,
            fr: (await import('./locales/fr.js')).default,
            cn: (await import('./locales/cn.js')).default,
        },
    });

    const app = createApp(App);
    app.use(pinia);
    app.use(router);
    app.use(i18n);
    setupIcons(app);
    setupFlag(app);
    app.mount('#app');
}

createAppWithI18n();