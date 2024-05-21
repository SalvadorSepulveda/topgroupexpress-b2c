import {defineStore} from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: 'light',
    }),
    actions: {
        initialize() {
            this.theme = localStorage.getItem('theme') || 'light'

            if (this.theme === 'dark') {
                document.documentElement.classList.add('dark')
            }
        },
        toggle() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', this.theme)

            if (this.theme === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        },
    },
})
