<template>
	<section id="features" class="relative z-10 pt-[110px]">
		<SectionTitle :title="$t('featureTitle')">
			{{ $t('featureDescription') }}
		</SectionTitle>

		<div class="container max-w-[1390px]">
			<div class="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-card dark:bg-dark dark:shadow-card-dark md:pb-1 lg:pt-20 lg:pb-5 xl:px-10 duration-300" >
				<div class="-mx-4 flex flex-wrap">
					<FeatureItem v-for="feature in features" :key="feature.title" :title="$t(feature.title)" :description="$t(feature.description)" :icon="feature.icon" />
				</div>
			</div>
		</div>

		<!-- Graphics -->
		<div class="absolute top-0 right-0 -z-10">
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
		<div class="absolute left-0 -bottom-1/2 -z-10 hidden md:block">
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
	</section>
</template>

<script setup>

const features = [
	{
		title: 'featureApps',
		description: 'appsDescription',
		icon: 'IconApp',
	},
	{
		title: 'featurePrices',
		description: 'pricesDescription',
		icon: 'IconLayers',
	},
	{
		title: 'featureDashboard',
		description: 'dashboardDescription',
		icon: 'IconLayout',
	},
	{
		title: 'featureAgility',
		description: 'agilityDescription',
		icon: 'IconSpeed',
	},
	{
		title: 'featureReservations',
		description: 'reservationsDescription',
		icon: 'IconSliders',
	},
	{
		title: 'featureUpdates',
		description: 'updatesDescription',
		icon: 'IconReload',
	},
];

</script>