<template>
	<div class="container">
		<div
			class="mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
		>
			<h2
				class="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight"
			>
				{{ title }}
			</h2>
			<p class="text-base text-bodywhite dark:text-body duration-300">
				<slot></slot>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
	},
}
</script>
