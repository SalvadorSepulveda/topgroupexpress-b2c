<template>
	<div
		:class="navbarClasses"
		class="navbar absolute top-0 left-0 z-50 w-full border-stroke bg-white duration-300 dark:border-stroke-dark dark:bg-black"
	>
		<div class="container relative max-w-[1400px]">
			<div class="flex items-center justify-between">
				<div class="block py-4 lg:py-0">
					<NuxtLink :to="'/' + $i18n.locale" class="block max-w-[145px] sm:max-w-[180px]">
						<NuxtImg format="webp,avif,jpeg" src="/logo.svg"  />
					</NuxtLink>
				</div>
				<button
					class="absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden"
					@click="toggleMenu()"
				>
            		<span class="block h-[2px] w-7 bg-black dark:bg-white"></span>
					<span class="block h-[2px] w-7 bg-black dark:bg-white"></span>
					<span class="block h-[2px] w-7 bg-black dark:bg-white"></span>
				</button>
				<div class="menu-wrapper relative justify-between lg:flex" :class="openMenu ? 'block' : 'hidden'">
					<button
						class="fixed top-10 right-10 z-[9999] flex h-10 w-10 flex-col items-center justify-center font-bold lg:hidden"
						@click="toggleMenu()"
					>
              			<span class="block h-[2px] w-7 rotate-45 bg-black dark:bg-white"></span>
						<span class="-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black dark:bg-white"></span>
					</button>
					<nav class="fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 text-center backdrop-blur-sm dark:bg-black dark:bg-opacity-95 lg:static lg:h-auto lg:w-max lg:bg-transparent lg:backdrop-blur-none lg:dark:bg-transparent" >
						<ul class="items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10">
							<li class="menu-item" v-for="item in items" :key="item.label" @click="toggleMenu()">
								<NuxtLink :to="'/' + $i18n.locale + item.route"
									class="menu-scroll inline-flex items-center text-3xl py-2 font-medium text-black hover:text-primary duration-300 dark:text-white dark:hover:text-primary lg:py-7 lg:text-base"
								>
									{{ $t(item.label) }}
								</NuxtLink>
							</li>
						</ul>
					</nav>
				</div>
				<div class="mr-[60px] flex items-center justify-end lg:mr-0">
					<ColorModeSwitcher />
					<NuxtLink
						target="_blank"
						to="https://hoteliers.topgroupexpress.com/"
						class="hidden py-[10px] px-6 text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary sm:inline-block whitespace-nowrap"
					>
						{{  $t('appHoteliers') }}
					</NuxtLink>
					<NuxtLink
						target="_blank"
						to="https://agencies.topgroupexpress.com/"
						class="hidden rounded-md bg-primary py-[10px] px-[30px] text-base font-medium text-white hover:bg-opacity-90 sm:inline-block whitespace-nowrap"
					>
						{{  $t('appAgencies') }}
					</NuxtLink>
					<SelectLanguage class="ml-5" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
export default {
	data: () => ({
		openMenu : false,
		items : [
			{ label: 'feature', route: '#features' },
			{ label: 'faq', route: '#faq' },
			{ label: 'contact', route: '#contact' },
			/*
			{ label: 'downloads', route: '/downloads' },
			{ label: 'agency', route: '/agencie' },
			{ label: 'hotelier', route: '/hotelier' },
			{ label: 'webinars', route: '/webinars' },
			{ label: 'blog', route: '/blog' }
			*/
		]
	}),
	computed: {
		...mapState(useScrollStore, {
			scrollY: 'position',
		}),
		navbarClasses() {
			if (this.scrollY >= 80) {
				return 'sticky-navbar'
			}
			return undefined
		},
	},
	methods: {
		...mapActions(useScrollStore, ['initialize']),
		toggleMenu() {
			this.openMenu = !this.openMenu
		}
	},
	mounted() {
		this.initialize()
	}
}
</script>