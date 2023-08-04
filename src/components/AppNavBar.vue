<template>
    <header
        :class="navbarClasses"
        class="navbar absolute top-0 left-0 z-50 w-full border-stroke bg-white duration-300 dark:border-stroke-dark dark:bg-black"
    >
        <div class="container relative max-w-[1400px]">
            <div class="flex items-center justify-between">
                <div class="block py-4 lg:py-0">
                    <MainLogo />
                </div>
                <button
                    aria-label="navbarOpen"
                    class="navbarOpen absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden"
                    name="navbarOpen"
                >
                    <span
                        class="block h-[2px] w-7 bg-black dark:bg-white"
                    ></span>
                    <span
                        class="block h-[2px] w-7 bg-black dark:bg-white"
                    ></span>
                    <span
                        class="block h-[2px] w-7 bg-black dark:bg-white"
                    ></span>
                </button>

                <div
                    class="menu-wrapper relative hidden justify-between lg:flex"
                >
                    <button
                        aria-label="navbarClose"
                        class="navbarClose fixed top-10 right-10 z-[9999] flex h-10 w-10 flex-col items-center justify-center font-bold lg:hidden"
                        name="navbarClose"
                    >
                        <span
                            class="block h-[2px] w-7 rotate-45 bg-black dark:bg-white"
                        ></span>
                        <span
                            class="-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black dark:bg-white"
                        ></span>
                    </button>

                    <nav
                        class="fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 text-center backdrop-blur-sm dark:bg-black dark:bg-opacity-95 lg:static lg:h-auto lg:w-max lg:bg-transparent lg:backdrop-blur-none lg:dark:bg-transparent"
                    >
                        <ul
                            class="items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10"
                        >
                            <li
                                v-for="item in items"
                                :key="item.label"
                                class="menu-item"
                            >
                                <router-link
                                    :to="item.route"
                                    class="menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary lg:py-7"
                                >
                                    {{ $t (item.label) }}
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="mr-[60px] flex items-center justify-end lg:mr-0">
                    <ColorModeSwitcher />
                    <a
                        class="hidden py-[10px] px-6 text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary sm:inline-block"
                        href="https://hoteliers.topgroupexpress.com/"
                    >
                        {{ $t('hotelier') }}
                    </a>

                    <a
                        class="hidden rounded-md bg-primary py-[10px] px-[30px] text-base font-medium text-white hover:bg-opacity-90 sm:inline-block"
                        href="https://agencies.topgroupexpress.com/"
                    >
                        <span>{{ $t('signUp') }}</span>
                    </a>
                    <SelectLanguage
                        class="menu-wrapper relative hidden justify-between lg:flex"
                    />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from 'pinia'
import { useScrollStore } from '@/stores'

import MainLogo from './MainLogo.vue'
import ColorModeSwitcher from './ColorModeSwitcher.vue'
import SelectLanguage from './SelectLanguage.vue'

export default {
    components: {
        MainLogo,
        ColorModeSwitcher,
        SelectLanguage,
    },
    data: () => ({
        items: [
            {
                label: 'offer',
                route: {
                    name: 'home',
                    hash: '#features',
                },
            },
            {
                label: 'agency',
                route: '/agencies',
            },
            {
                label: 'hotelier',
                route: '/hoteliers',
            },
            {
                label: 'downloads',
                route: '/downloads',
            },
            {
                label: 'blog',
                route: '/blog',
            },
            {
                label: 'contact',
                route: {
                    name: 'home',
                    hash: '#contact',
                },
            },
        ],
    }),
    computed: {
        ...mapState(useScrollStore, {
            scrollY: 'position',
        }),
        navbarClasses() {
            if (this.scrollY >= 100) {
                return 'sticky-navbar'
            }
            return undefined
        },
    },
}
</script>
