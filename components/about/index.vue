<template>
	<section id="about" class="relative pt-[150px]" >
		<div class="container lg:max-w-[1120px]">
			<about-card
				:smalltitle="$t('smallTitleAgencies')"
				:bigtitle="$t('bigTitleAgencies')"
				:description="$t('descriptionAgencies')"
				:list="[$t('oneListAgencies'), $t('twoListAgencies'), $t('threeListAgencies'), $t('fourListAgencies')]"
				left
			>
				<NuxtImg format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/mok.png" class="mx-auto w-[300px] h-[600px]" alt="screenagency"/>
			</about-card>
			<about-card
				class="pt-32"
				:smalltitle="$t('smallTitleHoteliers')"
				:bigtitle="$t('bigTitleHoteliers')"
				:description="$t('descriptionHoteliers')"
				:list="[$t('oneListHoteliers'), $t('twoListHoteliers'), $t('threeListHoteliers'), $t('fourListHoteliers')]"
				right
			>
				<NuxtImg format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/mok.png" class="mx-auto w-[300px] h-[600px]"  alt="screen-hotelier"/>
			</about-card>
		</div>
		<div class="absolute right-0 top-36 -z-10">
			<generic-icon name="circleRight" />
		</div>
	</section>
</template>
