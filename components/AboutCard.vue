<template>
	<div class="-mx-4 flex flex-wrap items-center justify-between">
		<div class="w-full px-4 lg:w-1/2" v-if="left === true && right === false">
			<div class="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0">
				<slot />
				<div class="absolute top-0 right-5 -z-10">
					<NuxtImg loading="lazy" format="webp,avif,jpeg" src="icons/stars.svg" class="w-14" />
				</div>
				<div class="absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-1">
					<div class="absolute left-5 -top-12 -z-10">
						<NuxtImg loading="lazy" format="webp,avif,jpeg" src="icons/waves.svg" class="w-14" />
					</div>
					<div
						class="absolute top-0 left-0 h-full w-full bg-texture"
					></div>
				</div>
			</div>
		</div>
		<div class="w-full px-4 lg:w-1/2">
			<div class="lg:ml-auto lg:max-w-[510px]" >
				<span class="mb-4 block text-lg font-medium text-primary md:text-[22px]">
					{{ smalltitle }}
				</span>
				<h2 class="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight duration-300">
					{{ bigtitle }}
				</h2>
				<p class="mb-[30px] text-base leading-relaxed text-body">
					{{ description }}
				</p>
				<div
					class="mb-[30px] flex items-center"
					v-for="(item, index) in list"
					:key="index">
					<div class="mr-[22px] flex min-h-[60px] min-w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white duration-300">
						{{ index + 1 }}
					</div>
					<h5 class="text-xl font-medium text-black dark:text-white duration-300">
						{{ item }}
					</h5>
				</div>
			</div>
		</div>
		<div class="order-first w-full px-4 lg:order-last lg:w-1/2" v-if="left === false && right === true">
			<div class="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mr-0 lg:mb-0" >
				<slot />
				<div class="absolute top-0 left-0 -z-10">
					<NuxtImg loading="lazy" format="webp,avif,jpeg" src="icons/stars.svg" class="w-14" />
				</div>
				<div class="absolute bottom-0 right-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-2">
					<div class="absolute right-5 -top-12 -z-10">
						<NuxtImg loading="lazy" format="webp,avif,jpeg" src="icons/waves.svg" class="w-14" />
					</div>
					<div class="absolute top-0 left-0 h-full w-full bg-texture"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

const props = defineProps({
	smalltitle: {
		type: String,
		required: true
	},
	bigtitle: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	left: {
		type: Boolean,
		default: false
	},
	right: {
		type: Boolean,
		default: false
	},
	list: {
		type: Array,
		default: []
	}
})
</script>