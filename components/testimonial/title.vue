<template>
	<h3 class="mb-4 text-xl text-center font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]" >
		{{ text }}
	</h3>
</template>

<script>
export default {
	name: "title",
	props: {
		text: {
			type: String,
			required: true
		}
	}
}
</script>