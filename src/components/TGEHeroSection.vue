<template>
    <TGESection
        :anchor="anchor"
        :paddingTop="165"
    >
        <div class="container lg:max-w-[1305px] lg:px-10">
            <div class="-mx-4 flex flex-wrap items-center">
                <div class="w-full px-4 lg:w-7/12">
                    <div
                        class="wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]"
                        data-wow-delay=".2s"
                    >
                        <h1
                            class="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px]"
                        >
                            <slot name="title"/>
                        </h1>
                        <p
                            class="mb-10 max-w-[475px] text-base leading-relaxed text-body"
                        >
                            <slot name="description"/>
                        </p>

                        <div class="flex flex-wrap items-center">
                            <TGEVideoButton
                                :url="videoURL"
                                :title="$t('titleVideo')"
                                :description="$t('descriptionVideo')"
                            />
                        </div>
                    </div>
                </div>

                <div class="w-full px-4 lg:w-5/12">
                    <div
                        class="wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0"
                        data-wow-delay=".3s"
                    >
                        <slot name="picture"/>
                    </div>
                </div>
            </div>
        </div>
    </TGESection>
</template>

<script>
import TGESection from './TGESection.vue'
import TGEVideoButton from './TGEVideoButton.vue'
export default {
    name: 'TGEHeroSection',
    components: {
        TGESection,
        TGEVideoButton,
    },
    props: {
        anchor: {
            type: String,
            required: true,
        },
        videoURL: {
            type: String,
            required: true,
        },
    },
}
</script>
