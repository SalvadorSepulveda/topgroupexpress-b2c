// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Top Group Express',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
            ],
            meta: [
                {
                    name: 'description',
                    content: 'Book a hotel for a group of more than 7 people online in just a few clicks right now!'
                },
            ]
        },
    },
    css: [
        '~/assets/css/main.css',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@pinia/nuxt', '@nuxtjs/i18n', "@nuxt/image", 'nuxt-swiper', '@nuxtjs/seo', 'nuxt-og-image'],
    pinia: {
        storesDirs: ['./stores/**']
    },
    i18n: {
        locales: [
            { code: 'en', iso: 'en-US', file: 'en.js' },
            { code: 'es', iso: 'es-ES', file: 'es.js' },
            { code: 'cn', iso: 'zh-CN', file: 'cn.js' },
            { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
        ],
        langDir: 'locales/',
        defaultLocale: 'en',
        strategy: "prefix_and_default",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
            alwaysRedirect: true
        }
    },
    site: {
        url: process.env.NUXT_PUBLIC_SITE_URL,
    },
    nitro: {
        prerender: {
          autoSubfolderIndex: false
        }
      }
})
