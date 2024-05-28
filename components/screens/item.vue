<template>
	<div class="swiper-slide">
		<div class="mx-auto w-full max-w-[252px] xs:max-w-[265px]">
			<NuxtImg loading="lazy" format="png" :src="src" class="mx-auto max-w-full w-full" alt="screen-1-light" />
		</div>
	</div>
</template>

<script>
export default {
	name: "screensItem",
	props: {
		src: {
			type: String,
			default: ""
		}
	}
}
</script>