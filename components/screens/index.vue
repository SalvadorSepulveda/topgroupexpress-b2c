<template>
	<section id="screens" class="relative z-20 pt-[210px] pb-[100px]">
		<generic-title :title="$t('titleScreens')" :subtitle="$t('descriptionScreens')" />
		<div class="container mx-auto max-w-[1000px] swiper mySwiper relative z-20">
			<div class="absolute top-0 left-0 right-0 z-50 mx-auto w-full md:w-1/3 max-w-[295px] md:max-w-[240px] lg:max-w-[295px]">
				<NuxtImg loading="lazy" format="webp,png,jpg" src="https://cdn.t3s.es/website/screens/frame.webp" class="mx-auto w-full" alt="mobile-frame" />
			</div>
			<div class="swiper-wrapper py-2">
				<screens-item v-for="(screen, index) in screens" :key="index" :src="screen"/>
			</div>
			<div class="flex items-center justify-center space-x-4 pt-20">
				<button class="swiper-button-style" @click="previousSlide" aria-label="previuos image">
					<generic-icon name="arrowLeft" width="20"/>
				</button>
				<button class="swiper-button-style" @click="nextSlide" aria-label="next image">
					<generic-icon name="arrowRight" width="20"/>
				</button>
			</div>
		</div>
		<generic-icon name="circleLeft" class="absolute left-0 top-40 -z-10" />
	</section>
</template>

<script>
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
	name: 'Screens',
	data: () => ({
		swiper: null,
		screens: [
			'https://cdn.t3s.es/website/screens/hotelier1.webp',
			'https://cdn.t3s.es/website/screens/hotelier2.webp',
			'https://cdn.t3s.es/website/screens/hotelier3.webp',
			'https://cdn.t3s.es/website/screens/hotelier4.webp',
			'https://cdn.t3s.es/website/screens/hotelier1.webp',
			'https://cdn.t3s.es/website/screens/hotelier2.webp',
			'https://cdn.t3s.es/website/screens/hotelier3.webp',
			'https://cdn.t3s.es/website/screens/hotelier4.webp',
		]
	}),
	methods: {
		nextSlide() {
			this.swiper.slideNext()
		},
		previousSlide() {
			this.swiper.slidePrev()
		}
	},
	mounted() {
		this.swiper = new Swiper('.mySwiper', {
			modules: [Navigation],
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			loop: true,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},
		})
	},
}
</script>