<template>
    <TGESection
        :anchor="anchor"
        :paddingTop="110"
        :paddingBottom="110"
        :zIndex="10"
        backgroundColor="#F8FAFB"
        darkBackgroundColor="#15182B"
        relative
    >
        <TGESectionTitle title="Frequently Asked Questions">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
        </TGESectionTitle>

        <div class="container">
            <div
                class="faqs wow fadeInUp mx-auto w-full max-w-[785px] rounded-lg bg-white px-6 py-[6px] shadow-card dark:bg-black dark:shadow-card-dark"
                data-wow-delay=".3s"
            >
                <div
                    class="faq border-b border-stroke last-of-type:border-none dark:border-stroke-dark"
                >
                    <button
                        class="faq-btn relative flex w-full justify-between py-6 px-[18px] text-left text-base font-medium text-black dark:text-white sm:px-[26px] sm:text-lg"
                    >
                        Lorem ipsum dolor sit amet, consectetur.
                    </button>
                    <div
                        class="faq-content h-auto overflow-hidden border-t border-stroke px-[18px] dark:border-stroke-dark sm:px-[26px]"
                    >
                        <p class="text-base text-body">
                            We provide digital experience services to startups
                            and small businesses. We help our clients succeed by
                            creating brand identities, digital experiences.
                            Praesent vel nibh a tellus dictum gravida sed tempor
                            nunc.
                        </p>
                    </div>
                </div>

                <div
                    class="faq border-b border-stroke last-of-type:border-none dark:border-stroke-dark"
                >
                    <button
                        class="faq-btn relative flex w-full justify-between py-6 px-[18px] text-left text-base font-medium text-black dark:text-white sm:px-[26px] sm:text-lg"
                    >
                        Lorem ipsum dolor sit amet, consectetur.
                    </button>
                    <div
                        class="faq-content h-auto overflow-hidden border-t border-stroke px-[18px] dark:border-stroke-dark sm:px-[26px]"
                    >
                        <p class="text-base text-body">
                            We provide digital experience services to startups
                            and small businesses. We help our clients succeed by
                            creating brand identities, digital experiences.
                            Praesent vel nibh a tellus dictum gravida sed tempor
                            nunc.
                        </p>
                    </div>
                </div>

                <div
                    class="faq border-b border-stroke last-of-type:border-none dark:border-stroke-dark"
                >
                    <button
                        class="faq-btn relative flex w-full justify-between py-6 px-[18px] text-left text-base font-medium text-black dark:text-white sm:px-[26px] sm:text-lg"
                    >
                        Lorem ipsum dolor sit amet, consectetur.
                    </button>
                    <div
                        class="faq-content h-auto overflow-hidden border-t border-stroke px-[18px] dark:border-stroke-dark sm:px-[26px]"
                    >
                        <p class="text-base text-body">
                            We provide digital experience services to startups
                            and small businesses. We help our clients succeed by
                            creating brand identities, digital experiences.
                            Praesent vel nibh a tellus dictum gravida sed tempor
                            nunc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </TGESection>
</template>

<script>
import TGESection from './TGESection.vue'
import TGESectionTitle from './TGESectionTitle.vue'

export default {
    name: 'TGEFrequentAnswersSection',
    components: {
        TGESection,
        TGESectionTitle,
    },
    props: {
        anchor: {
            type: String,
            required: true,
        },
    },
}
</script>
