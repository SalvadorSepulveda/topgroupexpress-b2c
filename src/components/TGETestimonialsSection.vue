<template>
    <TGESection
        :anchor="anchor"
        :paddingBottom="60"
        :paddingTop="110"
        :zIndex="10"
        relative
    >
        <TGESectionTitle :title="$t('titleClients')">
           {{ $t('descriptionClients') }}
        </TGESectionTitle>

        <div class="container overflow-hidden lg:max-w-[1160px]">
            <div class="-mx-6 flex flex-wrap">
                <TGETestimonialsCard
                    :title="'Cristiano Ronaldo'"
                    :subtitle="'Mejor jugador de la historia'"
                    :text="'Prueba de texto completo'"
                    :rate="5"
                >
                    <img alt="author" class="h-full w-full object-cover object-center rounded-full" src="https://assets-es.imgfoot.com/media/cache/1200x1200/cristiano-ronaldo-al-nassr.jpg" />
                </TGETestimonialsCard>
                <TGETestimonialsCard
                    :title="'Vinicius JR'"
                    :subtitle="'Mejor delantero brasileño'"
                    :text="'Prueba de texto completo'"
                    :rate="5"
                >
                    <img alt="author" class="h-full w-full object-cover object-center rounded-full" src="https://b.fssta.com/uploads/application/soccer/headshots/53004.vresize.350.350.medium.20.png" />
                </TGETestimonialsCard>
                <TGETestimonialsCard
                    :title="'Mbappe'"
                    :subtitle="'Mejor delantero actual'"
                    :text="'Prueba de texto completo'"
                    :rate="5"
                >
                    <img alt="author" class="h-full w-full object-cover object-center rounded-full" src="https://estaticos-cdn.epe.es/clip/d8af798c-c929-4e54-a9d8-7e5afd2b996f_alta-libre-aspect-ratio_default_0.jpg" />
                </TGETestimonialsCard>
                <TGETestimonialsCard
                    :title="'Bellingham'"
                    :subtitle="'Mejor centrocampista joven'"
                    :text="'Prueba de texto completo'"
                    :rate="5"
                >
                    <img alt="author" class="h-full w-full object-cover object-center rounded-full" src="https://imagenes.20minutos.es/files/image_654_369/uploads/imagenes/2023/07/04/jude-bellingham.jpeg" />
                </TGETestimonialsCard>
            </div>
        </div>
    </TGESection>
</template>

<script>
import TGESection from './TGESection.vue'
import TGESectionTitle from './TGESectionTitle.vue'
import TGETestimonialsCard from "@/components/TGETestimonialsCard.vue";

export default {
    name: 'TGETestimonialsSection',
    components: {
        TGESection,
        TGESectionTitle,
        TGETestimonialsCard
    },
    props: {
        anchor: {
            type: String,
            required: true,
        },
    },
}
</script>
