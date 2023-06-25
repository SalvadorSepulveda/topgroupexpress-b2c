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
        boxed: {
            type: Boolean,
            default: false,
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

            if (this.boxed) {
                result.push('z-10')
            }

            result.push()

            return result
        },
        styles() {
            return {
                'padding-top': `${this.paddingTop}px!important`,
            }
        },
    },
}
</script>
