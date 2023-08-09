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
        <TGESectionTitle :title="$t('frequentAnswerTitle')">
            {{ $t('frequentAnswerDescription')}}
        </TGESectionTitle>

        <div class="container">
            <div
                class="faqs wow fadeInUp mx-auto w-full max-w-[785px] rounded-lg bg-white px-6 py-[6px] shadow-card dark:bg-black dark:shadow-card-dark"
                data-wow-delay=".3s"
            >

                <TGEFrequentAnswersCard :title="$t('question1')">
                    {{ $t('answer1') }}
                </TGEFrequentAnswersCard>

                <TGEFrequentAnswersCard :title="$t('question2')">
                    {{ $t('answer2') }}
                    <br><br>
                    {{ $t('question2_1') }}
                    <br><br>
                    {{ $t('answer2_1') }}
                    <br><br>
                    {{ $t('question2_2') }}
                    <br><br>
                    {{ $t('answer2_2') }}
                </TGEFrequentAnswersCard>

                <TGEFrequentAnswersCard :title="$t('question3')">
                    {{ $t('answer3')  }}
                    <br><br>
                    {{ $t('question3_1') }}
                    <br><br>
                    {{ $t('answer3_1') }}
                    <br><br>
                    {{ $t('question3_2') }}
                    <br><br>
                    {{ $t('answer3_2') }}
                    <br><br>
                    {{ $t('information1') }}
                    <br>
                    {{ $t('information2') }}
                    <br>
                    {{ $t('information3') }}
                    <br><br>
                    {{ $t('answer3_3') }}
                </TGEFrequentAnswersCard>

                <TGEFrequentAnswersCard :title="$t('question4')">
                    {{ $t('answer4') }}
                </TGEFrequentAnswersCard>

                <TGEFrequentAnswersCard :title="$t('question5')">
                    {{ $t('answer5') }}
                    <a href="https://agencies.topgroupexpress.com/" class="text-primary">{{ $t('answer5TextLink')}}</a>
                    {{ $t('answer5_1') }}
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
