<template>
    <TGESection
        :anchor="anchor"
        :paddingTop="150"
        relative
    >
        <div class="container lg:max-w-[1120px]">
            <TGEAboutCard
                :actionCard="'list'"
                :bigTitle="'Track Your Audience Activities'"
                :positionImg="'left'"
                :smallTitle="'Track Audience Activities'"
                :textCard="' Schedule your posts for times when your audience is most active. Choose from our best-time predictions, or create your own publishing schedule.'"
            />
            <TGEAboutCard
                :actionCard="'list'"
                :bigTitle="'Esto es una prueba de titulo grande'"
                :positionImg="'right'"
                :smallTitle="'Esto es una prueba'"
                :textCard="'Schedule your posts for times when your audience is most active. Choose from our best-time predictions, or create your own publishing schedule.'"
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
