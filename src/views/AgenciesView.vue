<template>
    <main>
        <TGEAboutSectionAgencies anchor="about"/>
        <TGEWorkProcessSectionAgencies anchor="work-process"/>
        <TGEScreensSectionAgencies anchor="screens"/>
        <TGEDownloadsSectionAgencies anchor="downloads"/>
    </main>
</template>

<script>
import TGEAboutSectionAgencies from '@/components/TGEAboutSectionAgencies.vue'
import TGEWorkProcessSectionAgencies from '@/components/TGEWorkProcessSectionAgencies.vue'
import TGEScreensSectionAgencies from '@/components/TGEScreensSectionAgencies.vue'
import TGEDownloadsSectionAgencies from '@/components/TGEDownloadsSectionAgencies.vue'

export default {
    name: 'AgenciesView',
    components: {
		TGEAboutSectionAgencies,
		TGEWorkProcessSectionAgencies,
        TGEScreensSectionAgencies,
        TGEDownloadsSectionAgencies,
    },
		props: {
			type: {
				type: String,
				required: false
			}
		}
}
</script>
