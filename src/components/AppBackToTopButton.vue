<template>
    <a
        class="back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md duration-300 ease-in-out hover:bg-opacity-80"
        href="javascript:void(0)"
        style="display: flex"
        @click="backToTop"
    >
        <span
            class="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"
        ></span>
    </a>
</template>

<script>
export default {
    name: 'BackToTopButton',
    methods: {
        backToTop() {
            window.scrollTo({
                top: 0,
            })
        },
    },
}
</script>
