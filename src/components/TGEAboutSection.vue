<template>
    <TGESection
        :anchor="anchor"
        :paddingTop="150"
        relative
    >
        <div class="container lg:max-w-[1120px]">
            <TGEAboutCard
                :actionCard="'list'"
                :bigTitle="$t('bigTitleAgencies')"
                :positionImg="'left'"
                :smallTitle="$t('smallTitleAgencies')"
                :textCard="$t('descriptionAgencies')"
                :firstList="$t('oneListAgencies')"
                :secondList="$t('twoListAgencies')"
                :thirdList="$t('threeListAgencies')"
                :fourthList="$t('fourListAgencies')"
            />
            <TGEAboutCard
                :actionCard="'list'"
                :bigTitle="$t('bigTitleHoteliers')"
                :positionImg="'right'"
                :smallTitle="$t('smallTitleHoteliers')"
                :textCard="$t('descriptionHoteliers')"
                :firstList="$t('oneListHoteliers')"
                :secondList="$t('twoListHoteliers')"
                :thirdList="$t('threeListHoteliers')"
                :fourthList="$t('fourListHoteliers')"
            />
        </div>
    </TGESection>
</template>

<script>
import TGESection from './TGESection.vue'
import TGEAboutCard from "./TGEAboutCard.vue";

export default {
    name: 'TGEAboutSection',
    components: {
        TGESection,
        TGEAboutCard,
    },
    props: {
        anchor: {
            type: String,
            required: true,
        },
    },
}
</script>
