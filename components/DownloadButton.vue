<template>
	<NuxtLink
		target="_blank"
		to="#"
		class="rounded-md bg-primary py-2 px-4 text-base font-medium text-white hover:bg-opacity-90 flex items-center gap-3 w-fit max-h-[48px] whitespace-nowrap"
	>
		<NuxtImg v-if="icon" format="webp,avif,jpeg" :src="icon" class="w-[40px] border-r border-white pr-3" :alt="icon" />
		<div class="flex flex-col">
			<span v-if="smallText" class="uppercase text-[10px] leading-tight">
				{{ smallText }}
			</span>
			<span class="font-semibold leading-tight">
				{{ text }}
			</span>
		</div>
	</NuxtLink>
</template>

<script>
export default {
	name: "DownloadButton",
	props: {
		smallText: {
			type: String,
			required: false
		},
		text: {
			type: String,
			required: false
		},
		icon: {
			type: String,
			required: false
		}

	}
}
</script>