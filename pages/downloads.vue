<template>
	<div class="container max-w-[1390px] pt-14 flex flex-col gap-20">
		<div class="w-full flex justify-center mt-10 text-center">
			<generic-fancy-text class="text-primary text-6xl font-bold">Instale nuestras apps</generic-fancy-text>
		</div>
		<div class="rounded-2xl bg-white flex flex-col xl:flex-row-reverse p-10 shadow-card dark:bg-dark dark:shadow-card-dark duration-300">
			<div class="flex items-center justify-center xl:w-1/2">
				<NuxtImg width="500" src="https://cdn.topgroups.travel/websites/assets/images/agencies.png" />
			</div>
			<div class="flex flex-col justify-around xl:w-1/2">
				<div>
					<span class="mb-4 block text-lg font-medium text-primary md:text-[22px]">
					Aplicación de agencias
				</span>
					<h2 class="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[35px] md:leading-tight duration-300">
						El primer motor de reservas online de Hoteles para grupos
					</h2>
					<p class="text-base text-bodydark dark:text-body duration-300">
						Si eres agente de viajes, no olvides descargar nuestra app, con ella podrás tener un control óptimo de tus peticiones, nuevas cotizaciones, estados de las mismas entre muchas otras funciones
					</p>
				</div>
				<div class="flex gap-2 justify-center flex-wrap pt-5">
					<DownloadButton small-text="Get in on" text="Google Play" icon="https://cdn.topgroups.travel/websites/assets/images/playstore.png" />
					<DownloadButton small-text="Download on the" text="App Store" icon="https://cdn.topgroups.travel/websites/assets/images/appstore.png" />
					<DownloadButton text="Direct Download" icon="https://cdn.topgroups.travel/websites/assets/images/download.png"/>
				</div>
			</div>
		</div>
		<div class="rounded-2xl bg-white flex flex-col xl:flex-row p-10 shadow-card dark:bg-dark dark:shadow-card-dark duration-300">
			<div class="flex items-center justify-center xl:w-1/2">
				<NuxtImg width="500" src="https://cdn.topgroups.travel/websites/assets/images/hoteliers.png" />
			</div>
			<div class="flex flex-col justify-around xl:w-1/2">
				<div>
					<span class="mb-4 block text-lg font-medium text-primary md:text-[22px]">
					Aplicación de Hoteleros
				</span>
					<h2 class="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[35px] md:leading-tight duration-300">
						Cotiza grupos de una manera más rápida y fácil
					</h2>
					<p class="text-base text-bodydark dark:text-body duration-300">
						Si eres hoteleros no olvides descargar nuestra app, así podrás controlar con mayor facilidad las peticiones, podrás cargar las tarifas con mayor rapidez y saber en todo momento el estado en el que se encuentran
					</p>
				</div>
				<div class="flex gap-2 justify-center flex-wrap pt-5">
					<DownloadButton small-text="Get in on" text="Google Play" icon="https://cdn.topgroups.travel/websites/assets/images/playstore.png" />
					<DownloadButton small-text="Download on the" text="App Store" icon="https://cdn.topgroups.travel/websites/assets/images/appstore.png" />
					<DownloadButton text="Direct Download" icon="https://cdn.topgroups.travel/websites/assets/images/download.png"/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'download'
}
</script>