<template>
	<div class="flex flex-col gap-4 items-center p-2 rounded-lg relative " :style="{backgroundColor: open ? 'rgba(220,220,220,0.3)' : 'transparent'}">
		<NuxtImg format="webp,avif,jpeg" :src="`/flags/${$i18n.locale}.svg`" class="cursor-pointer min-w-[30px] min-h-[30px]" @click="toggle()"/>
		<div class="flex flex-col gap-4 absolute top-12 p-2 rounded-lg bg-[rgba(220,220,220,0.3)]" :style="{display: open ? 'flex' : 'none'}">
			<div v-for="locale in availableLocales" :key="locale.code" class="cursor-pointer w-8 h-8" @click="$i18n.setLocale(locale.code)">
				<NuxtImg format="webp,avif,jpeg" :src="`/flags/${locale.code}.svg`" class="min-w-8 min-h-8" @click="toggle()" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: () => ({
		open: false
	}),
	computed: {
		availableLocales () {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		}
	},
	methods: {
		toggle() {
			this.open = !this.open
		}
	}
}
</script>