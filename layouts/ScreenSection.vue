<template>
	<section id="screens" class="relative z-20 pt-[210px] pb-[100px]">
		<SectionTitle :title="$t('titleScreens')">
			{{ $t('descriptionScreens') }}
		</SectionTitle>
		<div class="container">
			<div class="mx-auto max-w-[1000px]">
				<!-- Swiper -->
				<div class="swiper mySwiper relative z-20">
					<div class="absolute top-0 left-0 right-0 z-50 mx-auto w-full md:w-1/3 h-[520px] xs:h-[550px] md:h-[450px] lg:h-[550px]" >
						<NuxtImg loading="lazy" format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/mobile-frame.png" class="mx-auto max-w-full h-full" />
					</div>
					<div class="swiper-wrapper py-2">
						<div class="swiper-slide">
							<div class="mx-auto w-full max-w-[252px] xs:max-w-[265px]" >
								<NuxtImg loading="lazy" format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/screen-1-light.png" class="mx-auto max-w-full w-full" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="mx-auto w-full max-w-[252px] xs:max-w-[265px]" >
								<NuxtImg loading="lazy" format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/screen-2-light.png" class="mx-auto max-w-full w-full" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="mx-auto w-full max-w-[252px] xs:max-w-[265px]" >
								<NuxtImg loading="lazy" format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/screen-3-light.png" class="mx-auto max-w-full w-full" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="mx-auto w-full max-w-[252px] xs:max-w-[265px]" >
								<NuxtImg loading="lazy" format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/screen-2-light.png" class="mx-auto max-w-full w-full" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="mx-auto w-full max-w-[252px] xs:max-w-[265px]" >
								<NuxtImg loading="lazy" format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/screen-1-light.png" class="mx-auto max-w-full w-full" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="mx-auto w-full max-w-[252px] xs:max-w-[265px]" >
								<NuxtImg loading="lazy" format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/screen-3-light.png" class="mx-auto max-w-full w-full" />
							</div>
						</div>
					</div>
					<div class="flex items-center justify-center space-x-4 pt-20" >
						<button
							class="swiper-button-style"
							@click="previousSlide"
						>
							<svg
								fill="none"
								height="20"
								viewBox="0 0 20 20"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_46_342)">
									<path
										d="M6.52334 10.8334L10.9933 15.3034L9.81501 16.4817L3.33334 10L9.815 3.51836L10.9933 4.69669L6.52334 9.16669L16.6667 9.16669L16.6667 10.8334L6.52334 10.8334Z"
										fill="currentColor"
									/>
								</g>
								<defs>
									<clipPath id="clip0_46_342">
										<rect
											fill="white"
											height="20"
											transform="translate(20 20) rotate(180)"
											width="20"
										/>
									</clipPath>
								</defs>
							</svg>
						</button>
						<button
							class="swiper-button-style"
							@click="nextSlide"
						>
							<svg
								fill="none"
								height="20"
								viewBox="0 0 20 20"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_46_337)">
									<path
										d="M13.4767 9.16664L9.00667 4.69664L10.185 3.51831L16.6667 9.99998L10.185 16.4816L9.00667 15.3033L13.4767 10.8333H3.33334V9.16664H13.4767Z"
										fill="currentColor"
									/>
								</g>
								<defs>
									<clipPath id="clip0_46_337">
										<rect
											fill="white"
											height="20"
											width="20"
										/>
									</clipPath>
								</defs>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Graphics -->
		<div class="absolute left-0 top-40 -z-10">
			<NuxtImg loading="lazy" format="webp,avif,jpeg" src="https://cdn.topgroups.travel/websites/assets/images/circle-gradient-left.png" class="w-[95px] h-[190px]" />
		</div>
	</section>
</template>

<script>
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
	data: () => ({
		swiper: null,
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
