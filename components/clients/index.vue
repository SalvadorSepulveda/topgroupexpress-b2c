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
				"image": "https://cdn.t3s.es/website/clients/airmet.webp",
			},
			{
				"name": "Didatravel",
				"image": "https://cdn.t3s.es/website/clients/dida-travel.webp",
			},
			{
				"name": "Viajes El Corte Inglés",
				"image": "https://cdn.t3s.es/website/clients/viajes-el-corte-ingles.webp",
			},
			{
				"name": "Envol Espace",
				"image": "https://cdn.t3s.es/website/clients/envol-espace.webp",
			},
			{
				"name": "Exa Travel",
				"image": "https://cdn.t3s.es/website/clients/exa-travel.webp",
			},
			{
				"name": "Kaytrip",
				"image": "https://cdn.t3s.es/website/clients/kaytrip.webp",
			},
			{
				"name": "TBO",
				"image": "https://cdn.t3s.es/website/clients/tbo.webp",
			},
			{
				"name": "Travel Compositor",
				"image": "https://cdn.t3s.es/website/clients/travel-compositor.webp",
			},
			{
				"name": "Zafiro Tours",
				"image": "https://cdn.t3s.es/website/clients/zafiro-tours.webp",
			}
		]
	}),
}
</script>