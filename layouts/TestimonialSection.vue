<template>
	<section id="testimonials" class="py-20 relative z-10" >
		<SectionTitle :title="$t('titleClients')" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
			{{ $t('descriptionClients') }}
		</SectionTitle>
		<div class="flex justify-center align-middle my-6" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
			<h3 class="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]" >
				{{ $t('hotelier')}}
			</h3>
		</div>
		<div class="container overflow-hidden lg:max-w-[1160px]" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
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
						data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300"
					>
						<img alt="author" class="h-full w-full object-cover object-center rounded-full bg-white" :src="item.src" />
					</TestimonialCard>
				</template>
			</div>
		</div>
		<div class="flex justify-center align-middle my-6">
			<h3 class="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
				{{ $t('agency') }}
			</h3>
		</div>
		<div class="container overflow-hidden lg:max-w-[1160px]" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
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
						data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300"
					>
						<img alt="author" class="h-full w-full object-cover object-center rounded-full bg-white" :src="item.src" />
					</TestimonialCard>
				</template>
			</div>
		</div>
		<!-- Graphics -->
		<div class="absolute top-8 left-0 -z-10 hidden md:block" >
			<svg
				width="622"
				height="1236"
				viewBox="0 0 622 1236"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g opacity="0.2" filter="url(#filter0_f_26_85)">
					<circle
						cx="4"
						cy="618"
						r="368"
						fill="url(#paint0_linear_26_85)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_26_85"
						x="-614"
						y="0"
						width="1236"
						height="1236"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="125"
							result="effect1_foregroundBlur_26_85"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_26_85"
						x1="-364"
						y1="250"
						x2="506.12"
						y2="754.835"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FF8FE8" />
						<stop offset="1" stop-color="#FFC960" />
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div class="absolute right-0 bottom-3 -z-10">
			<svg
				width="602"
				height="1154"
				viewBox="0 0 602 1154"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g opacity="0.25" filter="url(#filter0_f_26_84)">
					<circle
						cx="577"
						cy="577"
						r="317"
						fill="url(#paint0_linear_26_84)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_26_84"
						x="0"
						y="0"
						width="1154"
						height="1154"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="130"
							result="effect1_foregroundBlur_26_84"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_26_84"
						x1="183.787"
						y1="894"
						x2="970.173"
						y2="346.491"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#8EA5FE" />
						<stop offset="0.541667" stop-color="#BEB3FD" />
						<stop offset="1" stop-color="#90D1FF" />
					</linearGradient>
				</defs>
			</svg>
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
