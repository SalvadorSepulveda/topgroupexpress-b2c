<template>
	<div class="flex flex-col relative font-medium dark:text-white text-sm duration-300 text- w-[160px]">
		<button class="cursor-pointer flex justify-between p-1 rounded-lg items-center border border-transparent gap-2 w-full hover:bg-[#F8F9FF] dark:hover:bg-dark" @click="toggle">
			<span class="flex items-center gap-2">
				<generic-icon width="28" :name="$i18n.locale" alt="'flag-' + $i18n.locale" />
				{{ currentLanguageName }}
			</span>
			<generic-icon v-if="!open" width="20" name="chevronDown" alt="chevronDown" />
			<generic-icon v-else width="20" name="chevronUp" alt="chevronUp" />
		</button>
		<div v-if="open" class="z-50 bg-white dark:bg-black absolute flex flex-col top-11 shadow rounded-lg w-full border border-stroke dark:border-stroke-dark overflow-hidden">
			<button
				class="cursor-pointer flex p-1 items-center gap-2 hover:bg-[#F8F9FF] dark:hover:bg-dark last-of-type:border-none border-b border-stroke dark:border-stroke-dark"
				v-for="locale in availableLocales" :key="locale.code" @click="setLanguage(locale)"
			>
				<generic-icon width="28" :name="locale.code" alt="'flag-' + locale.code" /> {{ locale.name }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "navbarLangSwitcher",
	data: () => ({
		open: false
	}),
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		},
		currentLanguageName() {
			const currentLocale = this.$i18n.locales.find(locale => locale.code === this.$i18n.locale);
			return currentLocale ? currentLocale.name : '';
		}
	},
	methods: {
		toggle() {
			this.open = !this.open;
		},
		setLanguage(locale) {
			this.$i18n.setLocale(locale.code);
			this.toggle();
		}
	}
}
</script>
