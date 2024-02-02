<template>
	<label
		aria-label="themeSwitcher"
		class="inline-flex cursor-pointer items-center"
		for="themeSwitcher"
		name="themeSwitcher"
	>
		<input
			id="themeSwitcher"
			class="sr-only"
			name="themeSwitcher"
			type="checkbox"
			@click="toggle"
		/>
		<span
			v-if="theme === 'dark'"
			class="block img-hover"
		>
			<NuxtImg format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/moon-white.png" class="min-w-5 min-h-5 img-block" />
			<NuxtImg format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/moon-primary.png" class="min-w-5 min-h-5 img-hidden" />
        </span>
		<span
			v-else
			class="block img-hover"
		>
			<NuxtImg format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/sun-dark.png" class="min-w-5 min-h-5 img-block" />
			<NuxtImg format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/sun-primary.png" class="min-w-5 min-h-5 img-hidden" />

        </span>
	</label>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useThemeStore } from '@/stores/theme'

export default {
	computed: {
		...mapState(useThemeStore, ['theme']),
	},
	methods: {
		...mapActions(useThemeStore, ['toggle', 'initialize']),
	},
	mounted() {
		this.initialize()
	}
}
</script>

<style scoped>
.img-block {
	display: block;
}

.img-hidden {
	display: none;
}

.img-hover:hover .img-block {
	display: none;
}

.img-hover:hover .img-hidden {
	display: block;
}

</style>