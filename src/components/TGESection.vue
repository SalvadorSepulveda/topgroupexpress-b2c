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
        relative: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
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
                'z-index': this.zIndex,
            }
        },
    },
}
</script>
