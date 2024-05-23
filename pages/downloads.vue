<template>
	<div class="container max-w-[1390px] flex flex-col gap-16">
		<div class="w-full flex justify-center mt-10 text-center" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
			<FancyText class="text-primary text-6xl font-bold">Instale nuestras apps</FancyText>
		</div>
		<div class="rounded-2xl bg-white flex flex-row-reverse p-10 shadow-card dark:bg-dark dark:shadow-card-dark duration-300" data-aos="fade-up" data-aos-easing="ease-in-out">
			<div class="flex items-center justify-center w-1/2">
				<NuxtImg width="500" src="https://cdn.topgroups.travel/websites/assets/images/agencies.png" />
			</div>
			<div class="flex flex-col justify-around w-1/2">
				<div>
					<span class="mb-4 block text-lg font-medium text-primary md:text-[22px]" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
					Aplicación de agencias
				</span>
					<h2 class="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[35px] md:leading-tight duration-300" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr
					</h2>
					<p class="text-base text-bodydark dark:text-body duration-300" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
					</p>
				</div>
				<div class="flex gap-10">
					<DownloadButton small-text="Get in on" text="Google Play" icon="https://cdn.topgroups.travel/websites/assets/images/playstore.png" />
					<DownloadButton small-text="Download on the" text="App Store" icon="https://cdn.topgroups.travel/websites/assets/images/appstore.png" />
					<DownloadButton text="Direct Download" icon="https://cdn.topgroups.travel/websites/assets/images/download.png"/>
				</div>
			</div>
		</div>
		<div class="rounded-2xl bg-white flex flex-row p-10 shadow-card dark:bg-dark dark:shadow-card-dark duration-300" data-aos="fade-up" data-aos-easing="ease-in-out">
			<div class="flex items-center justify-center w-1/2">
				<NuxtImg width="500" src="https://cdn.topgroups.travel/websites/assets/images/hoteliers.png" />
			</div>
			<div class="flex flex-col justify-around w-1/2">
				<div>
					<span class="mb-4 block text-lg font-medium text-primary md:text-[22px]" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
					Aplicación de Hoteleros
				</span>
					<h2 class="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[35px] md:leading-tight duration-300" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr
					</h2>
					<p class="text-base text-bodydark dark:text-body duration-300" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
					</p>
				</div>
				<div class="flex gap-10">
					<DownloadButton small-text="Get in on" text="Google Play" icon="https://cdn.topgroups.travel/websites/assets/images/playstore.png" />
					<DownloadButton small-text="Download on the" text="App Store" icon="https://cdn.topgroups.travel/websites/assets/images/appstore.png" />
					<DownloadButton text="Direct Download" icon="https://cdn.topgroups.travel/websites/assets/images/download.png"/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'download'
}
</script>