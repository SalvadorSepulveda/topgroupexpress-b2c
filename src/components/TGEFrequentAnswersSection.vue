<template>
    <TGESection
        :anchor="anchor"
        :paddingBottom="110"
        :paddingTop="110"
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

                <TGEFrequentAnswersCard :title="'Prueba de titulo'">
                    We provide digital experience services to startups
                    and small businesses. We help our clients succeed by
                    creating brand identities, digital experiences.
                    Praesent vel nibh a tellus dictum gravida sed tempor
                    nunc.
                </TGEFrequentAnswersCard>

                <TGEFrequentAnswersCard :title="'Prueba de titulo'">
                    We provide digital experience services to startups
                    and small businesses. We help our clients succeed by
                    creating brand identities, digital experiences.
                    Praesent vel nibh a tellus dictum gravida sed tempor
                    nunc.
                </TGEFrequentAnswersCard>

                <TGEFrequentAnswersCard :title="'Prueba de titulo'">
                    We provide digital experience services to startups
                    and small businesses. We help our clients succeed by
                    creating brand identities, digital experiences.
                    Praesent vel nibh a tellus dictum gravida sed tempaasdasdasdasdasssssssssssssssssor
                    nunc.
                </TGEFrequentAnswersCard>

            </div>
        </div>
    </TGESection>
</template>

<script>
import TGESection from './TGESection.vue'
import TGESectionTitle from './TGESectionTitle.vue'
import TGEFrequentAnswersCard from "@/components/TGEFrequentAnswersCard.vue";

export default {
    name: 'TGEFrequentAnswersSection',
    components: {
        TGEFrequentAnswersCard,
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
