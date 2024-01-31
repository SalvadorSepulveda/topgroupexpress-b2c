<template>
	<a
		class="glightbox mb-6 inline-flex items-center py-4 text-black hover:text-primary dark:text-white duration-300 dark:hover:text-primary cursor-pointer"
		@click="showVideo"
	>
        <span
			class="mr-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-current"
			@click="showVideo"
		>
            <svg
				fill="none"
				height="16"
				viewBox="0 0 14 16"
				width="14"
				xmlns="http://www.w3.org/2000/svg"
			>
                <path
					d="M13.5 7.06367C14.1667 7.44857 14.1667 8.41082 13.5 8.79572L1.5 15.7239C0.833334 16.1088 -3.3649e-08 15.6277 0 14.8579L6.05683e-07 1.00149C6.39332e-07 0.231693 0.833334 -0.249434 1.5 0.135466L13.5 7.06367Z"
					fill="currentColor"
				/>
            </svg>
        </span>
		<span class="text-base font-medium">
            <span class="block text-sm">{{ title }}</span>
            {{ description }}
        </span>
	</a>
</template>

<script>
import 'glightbox/dist/css/glightbox.min.css';
let GLightbox;
export default {
	props: {
		url: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		} ,
		source: {
			type: String,
			default: 'youtube',
		},
	},
	async mounted() {
		if (process.client) {
			GLightbox = (await import('glightbox')).default;
		}
	},
	methods: {
		showVideo() {
			if (process.client) {
				GLightbox({
					href: this.url,
					type: 'video',
					source: this.source,
					width: 900,
					autoplayVideos: true,
				});
			}
		},
	},
}
</script>
