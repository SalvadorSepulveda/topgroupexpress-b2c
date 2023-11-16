<template>
    <TGESection
        :anchor="anchor"
        :paddingBottom="50"
        :paddingTop="50"
        :zIndex="10"
        backgroundColor="#F8FAFB"
        darkBackgroundColor="#15182B"
        relative
    >
        <div
            class="wow fadeInUp container overflow-hidden lg:max-w-[1200px]"
            data-wow-delay=".2s"
        >
            <div class="-mx-4 flex flex-wrap items-center justify-center">
				<div v-for="(client, index) in clients" :key="index" class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
					<div class="mb-5 text-center">
						<a
							class="block"
							href="javascript:void(0)"
						>
							<img
								:alt="client.name"
								class="mx-auto max-w-[130px] opacity-[65%] grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
								:src="client.image"
							/>
						</a>
					</div>
				</div>
            </div>
        </div>
    </TGESection>
</template>

<script>
import TGESection from './TGESection.vue'

export default {
    name: 'TGEClientsSection',
    components: {
        TGESection,
    },
	data: () => ({
		clients : [
			{
				"name": "Airmet",
				"image": "https://cdn.topgroups.travel/websites/assets/clients/airmet.png",
			},
			{
				"name": "Didatravel",
				"image": "https://cdn.topgroups.travel/websites/assets/clients/didatravel.png",
			},
			{
				"name": "Viajes El Corte Inglés",
				"image": "https://cdn.topgroups.travel/websites/assets/clients/elcorteingles.png",
			},
			{
				"name": "Envol Espace",
				"image": "https://cdn.topgroups.travel/websites/assets/clients/envol_espace.png",
			},
			{
				"name": "Exa Travel",
				"image": "https://cdn.topgroups.travel/websites/assets/clients/exatravel.png",
			},
			{
				"name": "Kaytrip",
				"image": "https://cdn.topgroups.travel/websites/assets/clients/kaytrip.png",
			},
			{
				"name": "TBO",
				"image": "https://cdn.topgroups.travel/websites/assets/clients/tbo.png",
			},
			{
				"name": "Travel Compositor",
				"image": "https://cdn.topgroups.travel/websites/assets/clients/travel_compositor.png",
			},
			{
				"name": "Zafiro Tours",
				"image": "https://cdn.topgroups.travel/websites/assets/clients/zafiro_tours.png",
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
