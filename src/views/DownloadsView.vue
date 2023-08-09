<template>
    <main>
        <TGESection
            :anchor="anchor"
            :paddingTop="150"
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
                :right="true"
            />
        </TGESection>
        <TGESection
            :anchor="anchor"
            :paddingTop="50"
            :paddingBottom="50"
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
                :right="false"
            />
        </TGESection>
    </main>
</template>

<script>
import TGEDownloadsSection from '@/components/TGEDownloadsSection.vue'
import TGEDownloadCard from "@/components/TGEDownloadCard.vue";
import TGESection from "@/components/TGESection.vue";

export default {
    name: 'DownloadsView',
    components: {
        TGESection,
        TGEDownloadCard,
        TGEDownloadsSection,
    },
}
</script>
