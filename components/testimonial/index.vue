<template>
	<section id="testimonials" class="py-20 relative z-10" >
		<generic-title :title="$t('titleClients')" :subtitle="$t('descriptionClients')" />
		<h3 class="mb-4 text-xl text-center font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]" >
			{{ $t('hotelier') }}
		</h3>
		<div class="container overflow-hidden lg:max-w-[1160px] flex flex-wrap" >
			<testimonial-card
				v-for="item in testimonialsHotels"
				:key="item"
				:title="item.title"
				:subtitle="item.subtitle"
				:text="item.text"
				:image="item.src"
				:rate="5"
			/>
		</div>
		<h3 class="mb-4 text-xl text-center font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]" >
			{{ $t('agency') }}
		</h3>
		<div class="container overflow-hidden lg:max-w-[1160px] flex flex-wrap">
			<testimonial-card
				v-for="item in testimonialsAgencies"
				:key="item"
				:title="item.title"
				:subtitle="item.subtitle"
				:text="item.text"
				:image="item.src"
				:rate="5"
			/>
		</div>
		<generic-icon name="shadowLeft" class="absolute top-8 left-0 -z-10 hidden md:block" />
		<generic-icon name="shadowRight" class="absolute bottom-3 right-0 -z-10" />
	</section>
</template>

<script>
export default {
	name: "testimonial",
	data: () => ({
		testimonialsHotels: [
			{
				title: 'Juan Rodríguez - Grupo Bluebay Hoteles',
				subtitle: 'Dpto de Grupos',
				text: 'Muy innovador, a seguir vendiendo!',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/bluebay.webp',
			},
			{
				title: 'Fernando Corzo - Grupo Abades',
				subtitle: 'Director Comercial',
				text: 'Necesario, útil, sorprendente, lo mejor hasta el momento para cotizar grupos.',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/abades.webp',
			},
			{
				title: 'Jordi - Hotel Catalonia Verdi',
				subtitle: 'Director',
				text: 'Enganchadísimo, mientras más rápido cotizo, más vendo!',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/catalonia-verdi.webp',
			},
			{
				title: 'Jesus Graciliano - Barceló Hoteles',
				subtitle: 'Cluster zona sur',
				text: 'En constante desarrollo, adapntándose a nuestras necesidades.',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/barcelo.webp',
			}
		],
		testimonialsAgencies: [
			{
				title: 'Grupo Cybas',
				subtitle: 'Cyberagencias',
				text: 'Herramienta necesaria, único especialista en consolidación de reservas de hoteles para grupos',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/cybas.webp',
			},
			{
				title: 'Kayuan',
				subtitle: 'Turist department',
				text: 'Útil, único, rápido, lo que esperamos de un proveedor brillante',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/kaytrip.webp',
			},
			{
				title: 'El Corte Inglés León',
				subtitle: 'María del Mar',
				text: 'Esto es una maravilla...',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/el-corte-ingles.webp',
			},
			{
				title: 'Destinarium Viajes',
				subtitle: 'Ángel',
				text: 'Siempre con Top, a cualquier destino. Reservas garantizadas.',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/destinatarium-viajes.webp',
			},
			{
				title: 'TBO',
				subtitle: 'Catherine',
				text: 'A new world of product with Top Group Express',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/tbo.webp',
			},
			{
				title: 'Mogu',
				subtitle: 'Sara',
				text: 'step one, eficaces, el complemento perfecto totalmente adaptado',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/mogu.webp',
			}
		]
	}),
}
</script>
