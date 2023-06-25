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
                'padding-top': `${this.paddingTop}px!important`,
                'z-index': this.zIndex,
            }
        },
    },
}
</script>
