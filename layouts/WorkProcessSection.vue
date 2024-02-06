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
		<div class="absolute -top-28 left-0 -z-10 hidden md:block" >
			<svg
				width="632"
				height="1179"
				viewBox="0 0 632 1179"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g opacity="0.25" filter="url(#filter0_f_38_24)">
					<circle
						cx="42.5"
						cy="589.5"
						r="329.5"
						fill="url(#paint0_linear_38_24)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_38_24"
						x="-547"
						y="0"
						width="1179"
						height="1179"
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
							result="effect1_foregroundBlur_38_24"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_38_24"
						x1="-366.218"
						y1="919"
						x2="451.176"
						y2="349.901"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#8EA5FE" />
						<stop offset="0.541667" stop-color="#BEB3FD" />
						<stop offset="1" stop-color="#90D1FF" />
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div class="absolute right-0 top-20 -z-10">
			<svg
				width="637"
				height="1277"
				viewBox="0 0 637 1277"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g opacity="0.2" filter="url(#filter0_f_38_23)">
					<circle
						cx="638.5"
						cy="638.5"
						r="388.5"
						fill="url(#paint0_linear_38_23)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_38_23"
						x="0"
						y="0"
						width="1277"
						height="1277"
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
							result="effect1_foregroundBlur_38_23"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_38_23"
						x1="250"
						y1="250"
						x2="1168.59"
						y2="782.957"
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