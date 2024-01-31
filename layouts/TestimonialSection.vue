<template>
	<section id="testimonials" class="py-20 relative z-10" >
		<SectionTitle :title="$t('titleClients')">
			{{ $t('descriptionClients') }}
		</SectionTitle>
		<div class="flex justify-center align-middle my-6">
			<h3 class="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]" >
				{{ $t('hotelier')}}
			</h3>
		</div>
		<div class="container overflow-hidden lg:max-w-[1160px]">
			<div class=" flex flex-wrap">
				<template
					v-for="item in testimonialsHotels"
					:key="item"
				>
					<TestimonialCard
						:title="item.title"
						:subtitle="item.subtitle"
						:text="item.text"
						:rate="5"
					>
						<img alt="author" class="h-full w-full object-cover object-center rounded-full bg-white" :src="item.src" />
					</TestimonialCard>
				</template>
			</div>
		</div>
		<div class="flex justify-center align-middle my-6">
			<h3 class="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]" >
				{{ $t('agency') }}
			</h3>
		</div>
		<div class="container overflow-hidden lg:max-w-[1160px]">
			<div class=" flex flex-wrap">
				<template
					v-for="item in testimonialsAgencies"
					:key="item"
				>
					<TestimonialCard
						:title="item.title"
						:subtitle="item.subtitle"
						:text="item.text"
						:rate="5"
					>
						<img alt="author" class="h-full w-full object-cover object-center rounded-full bg-white" :src="item.src" />
					</TestimonialCard>
				</template>
			</div>
		</div>
		<!-- Graphics -->
		<div class="absolute top-8 left-0 -z-10 hidden md:block" >
			<NuxtImg  loading="lazy" src="graphics/orange-shadow-left.svg" class="w-[622px] h-[1236px]" />
		</div>
		<div class="absolute right-0 bottom-3 -z-10">
			<NuxtImg loading="lazy" src="graphics/purple-shadow-right.svg" class="w-[622px] h-[1236px]" />
		</div>
	</section>
</template>

<script>

export default {
	data: () => ({
		testimonialsHotels: [
			{
				title: 'Juan Rodríguez - Grupo Bluebay Hoteles',
				subtitle: 'Dpto de Grupos',
				text: 'Muy innovador, a seguir vendiendo!',
				rate: 5,
				src: 'https://cdn.topgroups.travel/websites/assets/clients/bluebay.png',
			},
			{
				title: 'Fernando Corzo - Grupo Abades',
				subtitle: 'Director Comercial',
				text: 'Necesario, útil, sorprendente, lo mejor hasta el momento para cotizar grupos.',
				rate: 5,
				src: 'https://cdn.topgroups.travel/websites/assets/clients/abades.png',
			},
			{
				title: 'Jordi - Hotel Catalonia Verdi',
				subtitle: 'Director',
				text: 'Enganchadísimo, mientras más rápido cotizo, más vendo!',
				rate: 5,
				src: 'https://cdn.topgroups.travel/websites/assets/clients/catalonia.png',
			},
			{
				title: 'Juan Graciliano - Barceló Hoteles',
				subtitle: 'Cluster zona sur',
				text: 'En constante desarrollo, adapntándose a nuestras necesidades.',
				rate: 5,
				src: 'https://cdn.topgroups.travel/websites/assets/clients/barcelo.png',
			}
		],
		testimonialsAgencies: [
			{
				title: 'Grupo Cybas',
				subtitle: 'Cyberagencias',
				text: 'Herramienta necesaria, único especialista en consolidación de reservas de hoteles para grupos',
				rate: 5,
				src: 'https://cdn.topgroupexpress.com/websites/assets/clients/logocybas.jpg',
			},
			{
				title: 'Kayuan',
				subtitle: 'Turist department',
				text: 'Útil, único, rápido, lo que esperamos de un proveedor brillante',
				rate: 5,
				src: 'https://cdn.topgroups.travel/websites/assets/clients/kaytrip.png',
			},
			{
				title: 'El Corte Inglés León',
				subtitle: 'María del Mar',
				text: 'Esto es una maravilla...',
				rate: 5,
				src: 'https://cdn.topgroups.travel/websites/assets/clients/elcorteingles.png',
			},
			{
				title: 'Destinarium Viajes',
				subtitle: 'Ángel',
				text: 'Siempre con Top, a cualquier destino. Reservas garantizadas.',
				rate: 5,
				src: 'https://cdn.topgroups.travel/websites/assets/clients/destinatariumviajes.png',
			},
			{
				title: 'TBO',
				subtitle: 'Catherine',
				text: 'A new world of product with Top Group Express',
				rate: 5,
				src: 'https://cdn.topgroups.travel/websites/assets/clients/tbo.png',
			},
			{
				title: 'Mogu',
				subtitle: 'Sara',
				text: 'step one, eficaces, el complemento perfecto totalmente adaptado',
				rate: 5,
				src: 'https://cdn.topgroups.travel/websites/assets/clients/mogu.png',
			}
		]
	}),
}
</script>
