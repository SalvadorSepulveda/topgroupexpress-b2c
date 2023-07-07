<template>
    <TGESection
        :anchor="anchor"
        :paddingTop="110"
        :zIndex="10"
        relative
    >
        <TGESectionTitle :title="title">
            {{ description }}
        </TGESectionTitle>

        <div class="container max-w-[1390px]">
            <div
                class="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-card dark:bg-dark dark:shadow-card-dark md:pb-1 lg:pt-20 lg:pb-5 xl:px-10"
            >
                <div class="-mx-4 flex flex-wrap">
                    <TGEFeaturesSectionItem
                        v-for="feature in features"
                        :key="feature.title"
                        :description="feature.description"
                        :icon="feature.icon"
                        :title="feature.title"
                    />
                </div>
            </div>
        </div>
    </TGESection>
</template>

<script>
import TGESection from './TGESection.vue'
import TGESectionTitle from './TGESectionTitle.vue'
import TGEFeaturesSectionItem from './TGEFeaturesSectionItem.vue'

export default {
    name: 'TGEFeaturesSection',
    components: {
        TGESection,
        TGESectionTitle,
        TGEFeaturesSectionItem,
    },
    props: {
        anchor: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        features: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
