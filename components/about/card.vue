<template>
	<div :style="{ 'flex-direction': left ? 'row-reverse' : 'row' }" class="-mx-4 flex flex-wrap items-center justify-between">
		<div class="w-full px-4 lg:w-1/2">
			<div class="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0">
				<NuxtImg format="webp,png,jpg" :src="image" class="mx-auto w-[300px] h-[600px]" :alt="alt"/>
				<generic-icon name="stars" class="absolute top-0 right-5 -z-10" />
				<div class="absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-1">
					<generic-icon name="waves" class="absolute left-5 -top-12 -z-10" />
					<div class="absolute top-0 left-0 h-full w-full bg-texture" />
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
				<p class="mb-[30px] text-base leading-relaxed text-bodywhite dark:text-body duration-300" >
					{{ description }}
				</p>
				<div
					class="mb-[30px] flex items-center"
					v-for="(item, index) in list"
					:key="index"
				>
					<div class="mr-[22px] flex min-h-[60px] min-w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white duration-300">
						{{ index + 1 }}
					</div>
					<span class="text-xl font-medium text-black dark:text-white duration-300">
						{{ item }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "aboutCard",
	props: {
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
		},
		image: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		}
	}
}
</script>