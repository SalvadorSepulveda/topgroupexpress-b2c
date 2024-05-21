<template>
	<div class="w-full h-full">
		<div class="w-full flex justify-center pb-8 mt-10 text-center" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
			<FancyText class="text-primary text-6xl font-bold">Downloads</FancyText>
		</div>
		<DownloadButton />
		<NuxtImg width="600" src="https://cdn.topgroups.travel/websites/assets/images/agencies.png" />
		<NuxtImg width="600" src="https://cdn.topgroups.travel/websites/assets/images/hoteliers.png" />
	</div>
</template>

<script>
import DownloadButton from "~/components/DownloadButton.vue";

export default {
	name: "downloads",
	components: {DownloadButton}
}
</script>