<template>
	<section id="clients" class="py-5 bg-[#F8FAFB] dark:bg-[#15182B] duration-300" >
		<div class="container overflow-hidden lg:max-w-[1200px]" >
			<div class="flex flex-wrap items-center justify-center">
				<clients-item v-for="(client, index) in clients" :key="index" :name="client.name" :image="client.image" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "clients",
	data: () => ({
		clients: [
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