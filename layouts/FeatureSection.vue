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
		<div class="absolute top-0 -right-24 -z-10">
			<NuxtImg loading="lazy" src="https://cdn.topgroups.travel/websites/assets/images/purple-shadow-right.png" class="min-w-[622px] min-h-[1236px]" />
		</div>
		<div class="absolute -left-24 -bottom-1/2 -z-10 hidden md:block">
			<NuxtImg loading="lazy" src="https://cdn.topgroups.travel/websites/assets/images/orange-shadow-left.png" class="min-w-[622px] min-h-[1236px]" />
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