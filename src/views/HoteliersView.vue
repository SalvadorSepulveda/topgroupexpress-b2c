<template>
    <main>
        <TGEAboutSection anchor="about"/>
        <TGEWorkProcessSection anchor="work-process"/>
        <TGEScreensSection anchor="screens"/>
        <TGEDownloadsSection anchor="downloads"/>
        <TGETestimonialsSection anchor="testimonials"/>
        <TGEFrequentAnswersSection anchor="faq"/>
    </main>
</template>

<script>
import TGEAboutSection from '@/components/TGEAboutSection.vue'
import TGEWorkProcessSection from '@/components/TGEWorkProcessSection.vue'
import TGEScreensSection from '@/components/TGEScreensSection.vue'
import TGEDownloadsSection from '@/components/TGEDownloadsSection.vue'
import TGETestimonialsSection from '@/components/TGETestimonialsSection.vue'
import TGEFrequentAnswersSection from '@/components/TGEFrequentAnswersSection.vue'

export default {
    name: 'HoteliersView',
    components: {
        TGEAboutSection,
        TGEWorkProcessSection,
        TGEScreensSection,
        TGEDownloadsSection,
        TGETestimonialsSection,
        TGEFrequentAnswersSection,
    },
}
</script>
