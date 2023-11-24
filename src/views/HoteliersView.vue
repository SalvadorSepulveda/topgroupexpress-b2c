<template>
    <main>
        <TGEAboutSectionHoteliers anchor="about"/>
        <TGEWorkProcessSectionHoteliers anchor="work-process"/>
        <TGEScreensSectionHoteliers anchor="screens"/>
        <TGEDownloadsSectionHoteliers anchor="downloads"/>
    </main>
</template>

<script>
import TGEAboutSectionHoteliers from '@/components/TGEAboutSectionHoteliers.vue'
import TGEWorkProcessSectionHoteliers from '@/components/TGEWorkProcessSectionHoteliers.vue'
import TGEScreensSectionHoteliers from '@/components/TGEScreensSectionHoteliers.vue'
import TGEDownloadsSectionHoteliers from '@/components/TGEDownloadsSectionHoteliers.vue'

export default {
    name: 'HoteliersView',
    components: {
        TGEAboutSectionHoteliers,
        TGEWorkProcessSectionHoteliers,
        TGEScreensSectionHoteliers,
        TGEDownloadsSectionHoteliers,
    },
}
</script>
