import {defineStore} from 'pinia'

export const useScrollStore = defineStore('scroll', {
    state: () => ({
        position: 0,
    }),
    getters: {
        threshold(state) {
            return state.position + 73
        },
    },
    actions: {
        initialize() {
            window.document.addEventListener('scroll', () => {
                this.position =
                    window.scrollY ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop
            })
        },
    },
})
