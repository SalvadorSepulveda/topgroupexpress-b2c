<template>
	<div class="w-full px-6 lg:w-1/2 h-full">
		<div class="my-[25px] rounded-lg bg-white py-9 px-7 shadow-card dark:bg-dark dark:shadow-card-dark sm:px-9 lg:px-7 xl:px-9 min-h-[16rem] flex flex-col justify-between duration-300">
			<div class="mb-5 border-b border-stroke dark:border-stroke-dark duration-300">
				<p class="pb-9 text-base text-body">
					<i>"{{ text }}"</i>
				</p>
			</div>
			<div class="items-center justify-between sm:flex lg:block xl:flex">
				<div class="mb-4 flex items-center sm:mb-0 lg:mb-4 xl:mb-0">
					<div class="mr-4 h-[56px] w-full max-w-[56px] rounded-full">
						<slot></slot>
					</div>
					<div>
						<h5 class="text-base font-medium text-black dark:text-white duration-300">
							{{ title }}
						</h5>
						<p class="text-sm text-body">
							{{ subtitle }}
						</p>
					</div>
				</div>
				<div class="flex items-center space-x-3 sm:justify-end lg:justify-start xl:justify-end">
					<p class="text-base font-medium text-black dark:text-white duration-300">
						{{ rate.toFixed(1) }}
					</p>
					<div class="flex items-center space-x-[6px]">
						<div v-for="i in rate" :key="i">
							<NuxtImg loading="lazy" format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/star.png" class="h-[20px]" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		rate: {
			type: Number,
			default: 0,
		},
	},
};
</script>
