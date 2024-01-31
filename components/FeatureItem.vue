<template>
	<div class="w-full px-4 md:w-1/2 lg:w-1/3">
		<div class="group mx-auto mb-[60px] max-w-[310px] text-center" >
			<div class="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary duration-300" >
				<component :is="icon" />
			</div>
			<h3 class="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px] duration-300" >
				{{ title }}
			</h3>
			<p class="text-base text-body duration-300">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script>
import IconApp from '@/components/Icon/App.vue'
import IconLayers from '@/components/Icon/Layers.vue'
import IconLayout from '@/components/Icon/Layout.vue'
import IconSpeed from '@/components/Icon/Speed.vue'
import IconSliders from '@/components/Icon/Sliders.vue'
import IconReload from '@/components/Icon/Reload.vue'

export default {
	components: {
		IconApp,
		IconLayers,
		IconLayout,
		IconSpeed,
		IconSliders,
		IconReload
	},
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: true
		}
	}
}
</script>