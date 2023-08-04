<template>
    <div>
        <div class="-mx-4 flex flex-wrap items-center justify-between mb-[100px]">
            <div v-if="isPositionImg" class="w-full px-4 lg:w-1/2">
               <div class="flex flex-row justify-center align-middle h-full">
                   <img
                       alt="about image"
                       src="@/assets/images/about/about-card-agencias.svg"
                   />
               </div>
            </div>
            <div v-else class="order-first w-full px-4 lg:order-last lg:w-1/2">

                <div class="flex flex-row justify-center align-middle h-full">
                    <img
                        alt="about image"
                        src="@/assets/images/about/about-card.svg"
                    />
                </div>

            </div>
            <div class="w-full px-4 lg:w-1/2">
                <div
                    class="wow fadeInUp lg:ml-auto lg:max-w-[510px]"
                    data-wow-delay=".3s"
                >
          <span
              class="mb-4 block text-lg font-medium text-primary md:text-[22px]"
          >
              {{ smallTitle }}
          </span>
                    <h2
                        class="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight"
                    >
                        {{ bigTitle }}
                    </h2>
                    <p
                        class="mb-[30px] text-base leading-relaxed text-body"
                    >
                        {{ textCard }}
                    </p>
                    <div v-if="isActionCard">
                        <div class="mb-[30px] flex items-center">
                            <div
                                class="mr-[12px] flex h-[60px] max-w-[60px] w-full items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
                            >
                                01
                            </div>
                            <div>
                                <h5
                                    class="text-xl font-medium text-black dark:text-white"
                                >
                                    {{ firstList }}
                                </h5>
                            </div>
                        </div>

                        <div class="mb-[30px] flex items-center">
                            <div
                                class="mr-[12px] flex h-[60px] max-w-[60px] w-full items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
                            >
                                02
                            </div>
                            <div>
                                <h5
                                    class="text-xl font-medium text-black dark:text-white"
                                >
                                    {{ secondList }}
                                </h5>
                            </div>
                        </div>

                        <div class="mb-[30px] flex items-center">
                            <div
                                class="mr-[12px] flex h-[60px] max-w-[60px] w-full items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
                            >
                                03
                            </div>
                            <div>
                                <h5
                                    class="text-xl font-medium text-black dark:text-white"
                                >
                                    {{ thirdList }}
                                </h5>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div
                                class="mr-[12px] flex h-[60px] max-w-[60px] w-full items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
                            >
                                04
                            </div>
                            <div>
                                <h5
                                    class="text-xl font-medium text-black dark:text-white"
                                >
                                    {{ fourthList }}
                                </h5>
                        <!-- <p class="text-base text-body">
                                Ut ultricies lacus non fermentum
                                ultrices.
                            </p>-->
                            </div>
                        </div>

                    </div>
                    <div v-else>
                        <a
                            class="inline-block rounded-md bg-primary py-[10px] px-8 text-base font-medium text-white hover:bg-opacity-90"
                            href="javascript:void(0)"
                        >
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        positionImg: {
            type: String,
            required: true,
        },
        smallTitle: {
            type: String,
            default: null,
        },
        bigTitle: {
            type: String,
            required: true,
        },
        textCard: {
            type: String,
            required: true,
        },
        actionCard: {
            type: String,
            default: 'list',
        },
        firstList: {
            type: String,
            default: null,
        },
        secondList: {
            type: String,
            default: null,
        },
        thirdList: {
            type: String,
            default: null,
        },
        fourthList: {
            type: String,
            default: null,
        },
    },
    computed: {
        isPositionImg() {
            switch (this.positionImg) {
                case 'left':
                    return true
                case 'right':
                    return false
                default:
                    return true
            }
        },
        isActionCard() {
            switch (this.actionCard) {
                case 'list':
                    return true
                case 'button':
                    return false
                default:
                    return true
            }
        }
    }
}
</script>
