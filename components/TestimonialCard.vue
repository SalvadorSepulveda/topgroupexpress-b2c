<template>
	<div class="w-full px-6 lg:w-1/2 h-full">
		<div class="my-[25px] rounded-lg bg-white py-9 px-7 shadow-card dark:bg-dark dark:shadow-card-dark sm:px-9 lg:px-7 xl:px-9 min-h-[16rem] flex flex-col justify-between duration-300">
			<div class="mb-5 border-b border-stroke dark:border-stroke-dark duration-300">
				<p class="pb-9 text-base text-bodywhite dark:text-body duration-300">
					<i>"{{ text }}"</i>
				</p>
			</div>
			<div class="items-center justify-between sm:flex lg:block xl:flex">
				<div class="mb-4 flex items-center sm:mb-0 lg:mb-4 xl:mb-0">
					<div class="mr-4 h-[56px] w-full max-w-[56px] rounded-full">
						<slot></slot>
					</div>
					<div>
						<h5 class="text-base font-medium text-black dark:text-white duration-300">
							{{ title }}
						</h5>
						<p class="text-sm text-bodywhite dark:text-body duration-300">
							{{ subtitle }}
						</p>
					</div>
				</div>
				<div class="flex items-center space-x-3 sm:justify-end lg:justify-start xl:justify-end">
					<p class="text-base font-medium text-black dark:text-white duration-300">
						{{ rate.toFixed(1) }}
					</p>
					<div class="flex items-center space-x-[6px]">
						<div v-for="i in rate" :key="i">
							<svg
								fill="none"
								height="20"
								viewBox="0 0 20 20"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_49_480)">
									<path
										d="M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z"
										fill="#EABF23"
									/>
								</g>
								<defs>
									<clipPath id="clip0_49_480">
										<rect
											fill="white"
											height="20"
											transform="translate(0 0.000488281)"
											width="20"
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</div>
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
		subtitle: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		rate: {
			type: Number,
			default: 0,
		},
	},
};
</script>
