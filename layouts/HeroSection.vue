<template>
	<section id="home" class="pt-[165px]">
		<div class="container lg:max-w-[1305px] lg:px-10">
			<div class="-mx-4 flex flex-wrap items-center">
				<div class="w-full px-4 lg:w-7/12">
					<div
						class="mb-12 lg:mb-0 lg:max-w-[570px]"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
					>
						<h1 class="mb-6 text-3xl font-bold leading-tight text-black dark:text-white duration-300 sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px]">
							<span v-if="$i18n.locale === 'cn'">
								<FancyText>{{ $t('title1')}}</FancyText>
								{{ $t('title2')}}
								<FancyText>{{ $t('title3')}}</FancyText>
								{{ $t('title4')}}
							</span>
							<span v-else>
								{{ $t('title1')}}
								<FancyText>{{ $t('title2')}}</FancyText>
								{{ $t('title3')}}
								<FancyText>{{ $t('title4')}}</FancyText>
							</span>
						</h1>
						<p class="mb-10 max-w-[475px] text-base leading-relaxed text-body" data-aos="fade-up" data-aos-easing="ease-in-out">
							{{ $t('subtitle') }}
						</p>
						<div class="flex flex-wrap items-center" data-aos="fade-up" data-aos-easing="ease-in-out">
							<VideoButton :title="$t('titleVideo')" :description="$t('descriptionVideo')" :url="urlByLocale" />
						</div>
					</div>
				</div>
				<div class="w-full px-4 lg:w-5/12" data-aos="fade-up" data-aos-easing="ease-in-out">
					<div class="relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0">
						<NuxtImg src="https://cdn.topgroups.travel/websites/assets/images/hero-screen.png" class="mx-auto max-w-[360px] max-h-[550px] w-full" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	computed: {
		urlByLocale() {
			switch (this.$i18n.locale) {
				case 'cn':
					return 'https://www.youtube.com/watch?v=00xfTKjnLFw'
				case 'en':
					return 'https://www.youtube.com/watch?v=kLI3v6quZqU'
				case 'es':
					return 'https://www.youtube.com/watch?v=iv0BfTlx9uU'
				default:
					return 'https://www.youtube.com/watch?v=kLI3v6quZqU'
			}
		}
	}
}
</script>