<template>
    <div
        class="faq border-b border-stroke last-of-type:border-none dark:border-stroke-dark"
    >
        <button
            class="faq-btn relative flex w-full justify-between py-6 px-[18px] text-left text-base font-medium text-black dark:text-white sm:px-[26px] sm:text-lg"
        >
            {{ title }}
        </button>
        <div
            class="faq-content h-auto overflow-hidden border-t border-stroke px-[18px] dark:border-stroke-dark sm:px-[26px]"
        >
            <p class="text-base text-body">
                <slot>

                </slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    }
}

</script>

<style scoped>

</style>