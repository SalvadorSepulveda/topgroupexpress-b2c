import { createApp } from 'vue';
import { pinia } from './stores';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import setupIcons from './components/icons';
import setupFlag from './components/flags';
import axios from 'axios'
import VueAxios from 'vue-axios'

async function createAppWithI18n() {
    // Obtén el idioma del navegador
    const browserLanguage = navigator.language.split('-')[0];

    // Idiomas compatibles con la pagina web
    const supportedLanguages = ['en', 'es', 'fr', 'cn'];

    // Establece el idioma por defecto si no hay idioma compatible
    const defaultLanguage = supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en';

    // Configura Vue I18n
    const i18n = createI18n({
        legacy: false,
        locale: defaultLanguage,
        messages: {
            en: (await import('./locales/en.js')).default,
            es: (await import('./locales/es.js')).default,
            fr: (await import('./locales/fr.js')).default,
            cn: (await import('./locales/cn.js')).default,
        },
    });

    // Redirige a la ruta correspondiente al idioma del navegador
    if (defaultLanguage !== browserLanguage) {
        const newPath = `/${defaultLanguage}`;
        window.location.href = newPath;
        return;  // Evita que la aplicación se inicie si hay una redirección
    }

    // Crea la aplicación Vue
    const app = createApp(App);

    // Usa Pinia para la gestión del estado
    app.use(pinia);

    // Configura Axios con VueAxios
    app.use(VueAxios, axios);
    app.config.globalProperties.$axios = axios;

    // Usa Vue Router
    app.use(router);

    // Usa Vue I18n
    app.use(i18n);

    // Configura los iconos
    setupIcons(app);

    // Configura las banderas
    setupFlag(app);

    // Monta la aplicación en el elemento con id 'app'
    app.mount('#app');
}

createAppWithI18n();
