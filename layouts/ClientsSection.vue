<template>
	<section id="clients" class="py-5 bg-[#F8FAFB] dark:bg-[#15182B] duration-300" >
		<div class="container overflow-hidden lg:max-w-[1200px]" >
			<div class="-mx-4 flex flex-wrap items-center justify-center">
				<div v-for="(client, index) in clients" :key="index" class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
					<div class="mb-5 text-center">
						<NuxtImg
							loading="lazy"
							format="webp,avif,png"
							:alt="client.name"
							class="mx-auto max-w-[130px] opacity-[65%] grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
							:src="client.image"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
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
}
</script>