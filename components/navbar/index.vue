<template>
	<nav class="w-full fixed top-0 border-stroke dark:border-stroke-dark duration-300 z-50" :class="navbarStyles">
		<div class="container max-w-[1400px] py-3 flex items-center justify-between">
			<!-- Navbar logo -->
			<navbar-logo :href="'/' + $i18n.locale" src="https://cdn.topgroups.travel/websites/assets/images/logo.png" alt="logo" :width="150" />

			<!-- Regular navigation links visible on xl and larger screens -->
			<ul class="gap-8 hidden xl:flex">
				<navbar-link
					v-for="link in links"
					:key="link.label"
					:label="$t(link.label)"
					:route="'/' + $i18n.locale + link.route"
				/>
			</ul>

			<!-- Right section for color switcher, external links, language switcher, and burger button -->
			<div class="flex items-center gap-4">
				<navbar-color-switcher />
				<NuxtLink
					target="_blank"
					to="https://hoteliers.topgroupexpress.com/"
					class="hidden py-[10px] px-6 text-base font-medium hover:text-primary dark:text-white dark:hover:text-primary xl:inline-block whitespace-nowrap"
				>
					{{ $t('appHoteliers') }}
				</NuxtLink>
				<NuxtLink
					target="_blank"
					:to="urlAgencies"
					class="hidden rounded-md bg-primary py-[10px] px-[30px] text-base font-medium text-white hover:bg-opacity-90 xl:inline-block whitespace-nowrap"
				>
					{{ $t('appAgencies') }}
				</NuxtLink>
				<navbar-lang-switcher />
				<navbar-burger-button class="block xl:hidden" @click="toggleMenu" />
			</div>

			<!-- Full-screen mobile menu that appears when burger button is clicked -->
			<div class="absolute w-screen h-screen overflow-hidden xl:hidden inset-0 bg-white dark:bg-black bg-opacity-90 backdrop-blur-sm dark:bg-opacity-90 z-40 flex flex-col items-center justify-center " v-if="menuOpen">
				<generic-icon name="cross" width="45" @click="closeMenu" class="absolute top-3 right-3 text-[#181C31] hover:text-primary dark:text-white dark:hover:text-primary cursor-pointer"/>
				<ul class="flex flex-col gap-4 items-center">
					<NuxtLink
						target="_blank"
						:to="urlAgencies"
						class="rounded-md bg-primary py-[10px] px-[30px] text-2xl font-medium text-white dark:text-white text-gray-800 text-nowrap"
					>
						{{ $t('appAgencies') }}
					</NuxtLink>
					<NuxtLink
						target="_blank"
						to="https://hoteliers.topgroupexpress.com/"
						class="pb-10 text-2xl font-medium dark:text-white text-gray-800 text-nowrap"
					>
						{{ $t('appHoteliers') }}
					</NuxtLink>
					<li v-for="link in links" :key="link.label">
						<NuxtLink :to="link.route" class="text-2xl font-medium dark:text-white text-gray-800" @click="closeMenu">
							{{ $t(link.label) }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import {useScroll} from "~/composables/scroll.js";

export default {
	name: "navbar",
	data: () => ({
		menuOpen: false,
		links: [
			{ label: 'contact', route: '#contact' },
			{ label: 'webinars', route: '/webinars' },
			{ label: 'downloads', route: '/downloads' },
		],
		urlAgencies: undefined
	}),
	computed: {
		domainSuffix() {
			const hostname = window.location.hostname;
			if (hostname.includes('topgroupexpress.com')) {
				return 'topgroupexpress.com';
			} else if (hostname.includes('topgroups.travel')) {
				return 'topgroups.travel';
			}
			return 'topgroupexpress.com';
		},
	},
	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen;
		},
		closeMenu() {
			this.menuOpen = false;
		}
	},
	mounted() {
		this.urlAgencies = 'https://agencies.' + this.domainSuffix
	},
	setup() {
		const {position, initialize, scrollToTop} = useScroll();
		onMounted(initialize);
		const navbarStyles = computed(() => position.value > 65 ? 'sticky-navbar' : '');
		return {
			navbarStyles,
			scrollToTop
		}
	}
}
</script>