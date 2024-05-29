<template>
	<section id="clients" class="pt-5 pb-2 bg-[#F8FAFB] dark:bg-[#15182B] duration-300" >
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
				"image": "https://cdn.t3s.es/website/airmet.webp",
			},
			{
				"name": "Didatravel",
				"image": "https://cdn.t3s.es/website/didaTravel.webp",
			},
			{
				"name": "Viajes El Corte Inglés",
				"image": "https://cdn.t3s.es/website/viajesCorteIngles.webp",
			},
			{
				"name": "Envol Espace",
				"image": "https://cdn.t3s.es/website/envolEspace.webp",
			},
			{
				"name": "Exa Travel",
				"image": "https://cdn.t3s.es/website/exaTravel.webp",
			},
			{
				"name": "Kaytrip",
				"image": "https://cdn.t3s.es/website/kaytrip.webp",
			},
			{
				"name": "TBO",
				"image": "https://cdn.t3s.es/website/tbo.webp",
			},
			{
				"name": "Travel Compositor",
				"image": "https://cdn.t3s.es/website/travelCompositor.webp",
			},
			{
				"name": "Zafiro Tours",
				"image": "https://cdn.t3s.es/website/zafiroTours.webp",
			}
		]
	}),
}
</script>