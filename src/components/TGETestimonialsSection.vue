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
        <div class="flex justify-center align-middle my-6">
            <h3
                class="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]"
            >
                Hoteleros
            </h3>
        </div>
        <div class="container overflow-hidden lg:max-w-[1160px]">
            <div class=" flex flex-wrap">
                <template
                    v-for="item in testimonialsHotels"
                    :key="item"
                >
                    <TGETestimonialsCard
                        :title="item.title"
                        :subtitle="item.subtitle"
                        :text="item.text"
                        :rate="5"
                    >
                        <img alt="author" class="h-full w-full object-cover object-center rounded-full" :src="item.src" />
                    </TGETestimonialsCard>
                </template>
            </div>
        </div>
        <div class="flex justify-center align-middle my-6">
            <h3
                class="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]"
            >
                Agencias
            </h3>
        </div>
        <div class="container overflow-hidden lg:max-w-[1160px]">
            <div class=" flex flex-wrap">
                <template
                    v-for="item in testimonialsAgencies"
                    :key="item"
                >
                    <TGETestimonialsCard
                        :title="item.title"
                        :subtitle="item.subtitle"
                        :text="item.text"
                        :rate="5"
                    >
                        <img alt="author" class="h-full w-full object-cover object-center rounded-full" :src="item.src" />
                    </TGETestimonialsCard>
                </template>
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
    data: () => ({
        testimonialsHotels: [
            {
                title: 'Juan Rodríguez - Grupo Bluebay Hoteles',
                subtitle: 'Dpto de Grupos',
                text: 'Muy innovador, a seguir vendiendo!',
                rate: 5,
                src: 'https://www.topgroupexpress.com/wp-content/uploads/2019/02/bluebay-hoteles.jpg',
            },
            {
                title: 'Fernando Corzo - Grupo Abades',
                subtitle: 'Director Comercial',
                text: 'Necesario, útil, sorprendente, lo mejor hasta el momento para cotizar grupos.',
                rate: 5,
                src: 'https://www.topgroupexpress.com/wp-content/uploads/2019/02/grupo-abades.jpg',
            },
            {
                title: 'José Ramón Urzay - Hotel Alanda Marbella',
                subtitle: 'Director Comercial',
                text: 'Enhorabuena por vuestra nueva herramienta para los hoteleros, es muy profesional y muy fácil de manejar.',
                rate: 5,
                src: 'https://www.topgroupexpress.com/wp-content/uploads/2019/02/ALANDA-HOTEL.jpg',
            },
            {
                title: 'Juan Graciliano - Barceló Hoteles',
                subtitle: 'Cluster zona sur',
                text: 'En constante desarrollo, adapntándose a nuestras necesidades.',
                rate: 5,
                src: 'https://www.topgroupexpress.com/wp-content/uploads/2019/02/barcelo-hoteles.jpg',
            }
        ],
        testimonialsAgencies: [
            {
                title: 'Grupo Cybas',
                subtitle: 'Cyberagencias',
                text: 'Herramienta necesaria, único especialista en consolidación de reservas de hoteles para grupos',
                rate: 5,
                src: 'https://www.topgroupexpress.com/wp-content/uploads/2019/02/ciberagencias.jpg',
            },
            {
                title: 'Kayyuan',
                subtitle: 'Turist department',
                text: 'Útil, único, rápido, lo que esperamos de un proveedor brillante',
                rate: 5,
                src: 'https://www.topgroupexpress.com/wp-content/uploads/2019/02/KAYTRIP.jpg',
            },
            {
                title: 'Portimar',
                subtitle: 'Spain Departmentl',
                text: 'Llegamos más lejos, complementamos oferta, aportamos cotizaciones rápidas y en todos los destinos a nuestros clientes',
                rate: 5,
                src: 'https://www.topgroupexpress.com/wp-content/uploads/2019/02/CHILLIsauce.jpg',
            },
            {
                title: 'Chilli Sauce UK',
                subtitle: 'Groups Department',
                text: 'Aumentamos nuestras ventas en un 40% gracias a Top Group Express',
                rate: 5,
                src: 'https://www.topgroupexpress.com/wp-content/uploads/2019/02/CHILLIsauce.jpg',
            }
        ]
    }),
    props: {
        anchor: {
            type: String,
            required: true,
        },
    },
}
</script>
