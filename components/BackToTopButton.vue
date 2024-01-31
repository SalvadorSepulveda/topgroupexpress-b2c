<template>
	<button
		:class="buttonClasses"
		class="back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md duration-300 ease-in-out hover:bg-opacity-80"
		style="display: flex"
		@click="backToTop"
	>
        <span class="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white" ></span>
	</button>
</template>

<script>
import {mapActions, mapState} from "pinia";
import {useScrollStore} from "~/stores/index.js";

export default {
	computed: {
		...mapState(useScrollStore, {
			scrollY: 'position',
		}),
		buttonClasses() {
			if (this.scrollY < 80) {
				return 'opacity-0 cursor-default'
			}
			return 'opacity-100'
		}
	},
	methods: {
		backToTop() {
			if (this.scrollY > 80) {
				window.scrollTo({
					top: 0,
				})
			}
		},
		...mapActions(useScrollStore, {
			initializeScroll: 'initialize',
		}),
	},
}
</script>
