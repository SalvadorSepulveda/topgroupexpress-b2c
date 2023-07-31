<template>
    <div class="w-full px-6 lg:w-1/2">
        <div class="wow fadeInUp mb-[50px] rounded-lg bg-white py-9 px-7 shadow-card dark:bg-dark dark:shadow-card-dark sm:px-9 lg:px-7 xl:px-9" data-wow-delay=".2s">
            <div class="mb-5 border-b border-stroke dark:border-stroke-dark">
                <p class="pb-9 text-base text-body">
                    {{ text }}
                </p>
            </div>
            <div class="items-center justify-between sm:flex lg:block xl:flex">
                <div class="mb-4 flex items-center sm:mb-0 lg:mb-4 xl:mb-0">
                    <div class="mr-4 h-[56px] w-full max-w-[56px] rounded-full">
                       <slot></slot>
                    </div>
                    <div>
                        <h5 class="text-base font-medium text-black dark:text-white">
                            {{ title }}
                        </h5>
                        <p class="text-sm text-body">
                            {{ subtitle }}
                        </p>
                    </div>
                </div>
                <div class="flex items-center space-x-3 sm:justify-end lg:justify-start xl:justify-end">
                    <p class="text-base font-medium text-black dark:text-white">
                        {{ this.rate.toFixed(1) }}
                    </p>
                    <div class="flex items-center space-x-[6px]">
                        <TGETestimonialsRate :rate="rate" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TGETestimonialsRate from '@/components/TGETestimonialsRate.vue';

export default {
    components: {
        TGETestimonialsRate,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },
    },
};
</script>
