<template>
	<div
		class="relative z-10 mx-auto w-full max-w-[500px] pt-8 flex justify-center"
	>
		<NuxtImg
			width="350"
		  	:src="src"
		  	alt="hero image"
		/>
		<div
			class="max-auto absolute top-0 left-0 right-0 -z-10 aspect-square w-full rounded-full bg-gradient-1 hidden xs:block"
		>
			<div class="absolute top-5 right-0">
				<generic-icon name="stars" width="65" />
			</div>
			<div class="absolute bottom-10 left-0">
				<generic-icon name="weaves" width="65" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "heroImage",
	props: {
		src: {
			type: String,
			required: true
		}
	}
}
</script>

<!--  -->