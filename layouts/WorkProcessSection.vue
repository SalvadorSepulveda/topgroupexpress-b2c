<template>
	<section id="work-process wow fadeIn" class="relative z-10 pt-[110px]">
		<SectionTitle :title="$t('titleWorkSection')">
			{{ $t('descriptionWorkSection') }}
		</SectionTitle>

		<div class="container max-w-[1390px]">
			<div class="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-card dark:bg-dark dark:shadow-card-dark md:pb-1 lg:pt-20 lg:pb-5 xl:px-10 duration-300">
				<div class="-mx-4 flex flex-wrap justify-center">
					<WorkProcessItem v-for="item in items" :key="item.title" :title="$t(item.title)" :description="$t(item.description)" :icon="item.icon" />
				</div>
			</div>
		</div>

		<!-- Graphics -->
		<div class="absolute -top-28 -left-24 -z-10 hidden md:block" >
			<NuxtImg  loading="lazy" src="https://cdn.topgroups.travel/websites/assets/images/purple-shadow-left.png" class="w-[622px] h-[1236px]" />
		</div>
		<div class="absolute -right-24 top-20 -z-10">
			<NuxtImg loading="lazy" src="https://cdn.topgroups.travel/websites/assets/images/orange-shadow-right.png" class="w-[622px] h-[1236px]" />
		</div>
	</section>
</template>

<script setup>

const items = [
	{
		title: 'installTitle',
		description: 'installDescription',
		icon: 'IconDownload',
	},
	{
		title: 'registerTitle',
		description: 'registerDescription',
		icon: 'IconUser',
	},
	{
		title: 'accessCodeTitle',
		description: 'accessCodeDescription',
		icon: 'IconHeartHands',
	},
]

</script>