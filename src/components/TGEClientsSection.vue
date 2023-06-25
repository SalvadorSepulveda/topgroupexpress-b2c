<template>
    <TGESection
        :anchor="anchor"
        :paddingTop="70"
        :paddingBottom="50"
        :zIndex="10"
        backgroundColor="#F8FAFB"
        darkBackgroundColor="#15182B"
        relative
    >
        <div
            class="wow fadeInUp container overflow-hidden lg:max-w-[1200px]"
            data-wow-delay=".2s"
        >
            <div class="-mx-4 flex flex-wrap items-center justify-center">
                <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                    <div class="mb-5 text-center">
                        <a
                            href="javascript:void(0)"
                            class="block"
                        >
                            <img
                                src="@/assets/images/clients/client-01.svg"
                                alt="client"
                                class="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                            />
                        </a>
                    </div>
                </div>

                <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                    <div class="mb-5 text-center">
                        <a
                            href="javascript:void(0)"
                            class="block"
                        >
                            <img
                                src="@/assets/images/clients/client-02.svg"
                                alt="client"
                                class="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                            />
                        </a>
                    </div>
                </div>

                <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                    <div class="mb-5 text-center">
                        <a
                            href="javascript:void(0)"
                            class="block"
                        >
                            <img
                                src="@/assets/images/clients/client-03.svg"
                                alt="client"
                                class="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                            />
                        </a>
                    </div>
                </div>

                <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                    <div class="mb-5 text-center">
                        <a
                            href="javascript:void(0)"
                            class="block"
                        >
                            <img
                                src="@/assets/images/clients/client-04.svg"
                                alt="client"
                                class="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                            />
                        </a>
                    </div>
                </div>

                <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                    <div class="mb-5 text-center">
                        <a
                            href="javascript:void(0)"
                            class="block"
                        >
                            <img
                                src="@/assets/images/clients/client-05.svg"
                                alt="client"
                                class="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                            />
                        </a>
                    </div>
                </div>

                <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                    <div class="mb-5 text-center">
                        <a
                            href="javascript:void(0)"
                            class="block"
                        >
                            <img
                                src="@/assets/images/clients/client-06.svg"
                                alt="client"
                                class="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </TGESection>
</template>

<script>
import TGESection from './TGESection.vue'

export default {
    name: 'TGEClientsSection',
    components: {
        TGESection,
    },
    props: {
        anchor: {
            type: String,
            required: true,
        },
    },
}
</script>
