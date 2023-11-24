<template>
    <TGESection
        :anchor="anchor"
        :paddingTop="110"
        :zIndex="10"
        relative
    >
        <TGEDownloadCard
            :text="'Prueba de texto'"
            :textDownButtonGrey="'Prueba boton'"
            :textDownButtonOrange="'Prueba boton'"
            :textUpButtonGrey="'Prueba boton'"
            :textUpButtonOrange="'Prueba boton'"
            :title="'Prueba de titulo'"
        />
    </TGESection>
</template>

<script>
import TGEDownloadCard from '@/components/TGEDownloadCard.vue'
import TGESection from './TGESection.vue'

export default {
    name: 'TGEDownloadsSectionAgencies',
    components: {
        TGEDownloadCard,
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
