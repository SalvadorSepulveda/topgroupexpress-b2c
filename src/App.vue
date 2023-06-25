<template>
    <AppNavBar />

    <RouterView />

    <AppBackToTopButton v-if="scrollY > 50" />
    <AppFooter />
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useScrollStore, useThemeStore } from '@/stores'

import { RouterView } from 'vue-router'
import AppNavBar from '@/components/AppNavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppBackToTopButton from '@/components/AppBackToTopButton.vue'

export default {
    components: {
        RouterView,
        AppNavBar,
        AppFooter,
        AppBackToTopButton,
    },
    computed: {
        ...mapState(useScrollStore, {
            scrollY: 'position',
        }),
    },
    methods: {
        ...mapActions(useThemeStore, {
            initializeTheme: 'initialize',
        }),
        ...mapActions(useScrollStore, {
            initializeScroll: 'initialize',
        }),
    },
    created() {
        this.initializeTheme()
        this.initializeScroll()
    },
}
</script>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
