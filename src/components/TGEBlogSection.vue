<template>
    <TGESection
        :anchor="anchor"
        :paddingBotton="60"
        :paddingTop="110"
        relative
    >
        <TGESectionTitle :title="$t('titleBlog')">
            {{ $t('descriptionBlog') }}
        </TGESectionTitle>

        <div class="container overflow-hidden lg:max-w-[1250px]">
            <div
                class="-mx-4 flex flex-wrap justify-center md:-mx-7 lg:-mx-5 xl:-mx-[35px]"
            >
                <TGEBlogCard
                    :title="'Esto es una prueba de titulo'"
                    :subtitle="'Esto es una prueba de subtitulo'"
                    :autor="'Salvador Sepúlveda Millán'"
                    :date="'01/01/2022'"
                />
                <TGEBlogCard
                    :title="'Esto es una prueba de titulo'"
                    :subtitle="'Esto es una prueba de subtitulo'"
                    :autor="'Idertator'"
                    :date="'01/01/2022'"
                />
                <TGEBlogCard
                    :title="'Esto es una prueba de titulo'"
                    :subtitle="'Esto es una prueba de subtitulo'"
                    :autor="'Rocío Plaza'"
                    :date="'01/01/2022'"
                />
            </div>
        </div>
    </TGESection>
</template>

<script>
import TGESection from './TGESection.vue'
import TGESectionTitle from './TGESectionTitle.vue'
import TGEBlogCard from './TGEBlogCard.vue';

export default {
    name: 'TGEBlogSection',
    components: {
        TGESection,
        TGESectionTitle,
        TGEBlogCard
    },
    props: {
        anchor: {
            type: String,
            required: true,
        },
    },
}
</script>
