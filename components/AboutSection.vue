<template>
	<section id="about" class="relative pt-[150px]" >
		<div class="container lg:max-w-[1120px]">
			<AboutCard
				:smalltitle="$t('smallTitleAgencies')"
				:bigtitle="$t('bigTitleAgencies')"
				:description="$t('descriptionAgencies')"
				:list="[$t('oneListAgencies'), $t('twoListAgencies'), $t('threeListAgencies'), $t('fourListAgencies')]"
				left
			>
				<NuxtImg format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/mok.png" class="mx-auto w-[300px] h-[600px]" alt="screenagency"/>
			</AboutCard>
			<AboutCard
				class="pt-32"
				:smalltitle="$t('smallTitleHoteliers')"
				:bigtitle="$t('bigTitleHoteliers')"
				:description="$t('descriptionHoteliers')"
				:list="[$t('oneListHoteliers'), $t('twoListHoteliers'), $t('threeListHoteliers'), $t('fourListHoteliers')]"
				right
			>
				<NuxtImg format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/mok.png" class="mx-auto w-[300px] h-[600px]"  alt="screen-hotelier"/>
			</AboutCard>
		</div>
		<div class="absolute right-0 top-36 -z-10">
			<svg
				width="95"
				height="190"
				viewBox="0 0 95 190"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="95"
					cy="95"
					r="77"
					stroke="url(#paint0_linear_47_27)"
					stroke-width="36"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_47_27"
						x1="0"
						y1="0"
						x2="224.623"
						y2="130.324"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#EA621F" />
						<stop offset="1" stop-color="#ffddb4" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	</section>
</template>
<script setup lang="ts">
import AboutCard from "~/components/AboutCard.vue";
</script>