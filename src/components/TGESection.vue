<template>
    <section
        :id="anchor"
        :class="classes"
        :style="styles"
    >
        <slot></slot>
    </section>
</template>

<script>
import {mapState} from 'pinia'
import {useThemeStore} from '@/stores'

export default {
    props: {
        anchor: {
            type: String,
            required: true,
        },
        paddingTop: {
            type: Number,
            required: true,
        },
        paddingBottom: {
            type: Number,
            default: undefined,
        },
        zIndex: {
            type: Number,
            default: undefined,
        },
        backgroundColor: {
            type: String,
            default: undefined,
        },
        darkBackgroundColor: {
            type: String,
            default: undefined,
        },
        relative: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapState(useThemeStore, ['theme']),
        classes() {
            let result = []
            if (this.relative) {
                result.push('relative')
            }
            result.push()

            return result
        },
        styles() {
            return {
                'padding-top': `${this.paddingTop}px`,
                'padding-bottom': `${this.paddingBottom}px`,
                'background-color':
                    this.theme === 'dark'
                        ? this.darkBackgroundColor
                        : this.backgroundColor,
                'z-index': this.zIndex,
            }
        },
    },
}
</script>
