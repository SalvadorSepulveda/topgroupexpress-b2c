<template>
    <main>
        <TGEDownloadsSection anchor="agencies" />
        <TGEDownloadsSection anchor="hoteliers" />
    </main>
</template>

<script>
import TGEDownloadsSection from '@/components/TGEDownloadsSection.vue'

export default {
    name: 'DownloadsView',
    components: {
        TGEDownloadsSection,
    },
}
</script>
