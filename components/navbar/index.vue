<template>
	<nav class="w-full fixed top-0 border-stroke dark:border-stroke-dark z-50" :class="navbarStyles">
		<div class="container max-w-[1400px] py-3 flex items-center justify-between">
			<!-- Navbar logo -->
			<navbar-logo href="/" src="https://cdn.topgroups.travel/websites/assets/images/logo.png" alt="logo" :width="150" />

			<!-- Regular navigation links visible on xl and larger screens -->
			<ul class="gap-8 hidden xl:flex">
				<navbar-link
					v-for="link in links"
					:key="link.label"
					:label="$t(link.label)"
					:route="link.route"
				/>
			</ul>

			<!-- Right section for color switcher, external links, language switcher, and burger button -->
			<div class="flex items-center gap-4">
				<navbar-color-switcher />
				<NuxtLink
					target="_blank"
					to="https://hoteliers.topgroupexpress.com/"
					class="hidden py-[10px] px-6 text-base font-medium hover:text-primary dark:text-white dark:hover:text-primary sm:inline-block whitespace-nowrap"
				>
					{{ $t('appHoteliers') }}
				</NuxtLink>
				<NuxtLink
					target="_blank"
					to="https://hoteliers.topgroupexpress.com/"
					class="hidden rounded-md bg-primary py-[10px] px-[30px] text-base font-medium text-white hover:bg-opacity-90 sm:inline-block whitespace-nowrap"
				>
					{{ $t('appAgencies') }}
				</NuxtLink>
				<navbar-lang-switcher />
				<navbar-burger-button class="block xl:hidden" @click="toggleMenu" />
			</div>

			<!-- Full-screen mobile menu that appears when burger button is clicked -->
			<div class="absolute w-screen h-screen overflow-hidden xl:hidden inset-0 bg-white dark:bg-black bg-opacity-90 backdrop-blur-sm dark:bg-opacity-90 z-40 flex flex-col items-center justify-center " v-if="menuOpen">
				<generic-icon name="cross" width="45" @click="closeMenu" class="absolute top-10 right-10 text-[#181C31] hover:text-primary dark:text-white dark:hover:text-primary cursor-pointer"/>
				<ul class="text-center">
					<li v-for="link in links" :key="link.label" class="mb-8">
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
			{ label: 'feature', route: '#features' },
			{ label: 'contact', route: '#contact' },
			{ label: 'webinars', route: '/webinars' },
			{ label: 'downloads', route: '/downloads' },
		],
	}),
	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen;
		},
		closeMenu() {
			this.menuOpen = false;
		}
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
