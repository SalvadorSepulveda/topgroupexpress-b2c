<template>
    <footer>
        <div class="mt-[3rem] bg-[#F8FAFB] pt-[1rem] pb-[1rem] dark:bg-[#15182A]">
            <div class="container max-w-[1390px]">
                <div class="grid gap-[1rem] items-center 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
					<a
						href="index.html"
						class="max-w-[200px]"
					>
						<img
							alt="logo"
							class="w-[200px]"
							src="@/assets/images/logo/logo.svg"
						/>
					</a>
					<img class="w-full" src="https://cdn.topgroups.travel/websites/assets/images/footer.jpg" alt="footer-img">
                </div>
            </div>
        </div>

        <div
            class="wow fadeInUp bg-primary py-7 dark:bg-black"
            data-wow-delay=".2s"
        >
            <div class="container max-w-[1390px]">
                <div class="-mx-3 flex flex-wrap">
                    <div class="order-last w-full px-3 lg:order-first lg:w-1/3">
                        <p
                            class="mt-4 text-center text-base text-white lg:mt-0 lg:text-left"
                        >
                            &copy; 2023 Top Group Express. All rights reserved
                        </p>
                    </div>

                    <div class="w-full px-3 md:w-1/2 lg:w-1/3">
                        <div
                            class="mb-4 flex items-center justify-center space-x-5 md:mb-0 md:justify-start lg:justify-center"
                        >
                            <a
                                v-for="link in social"
                                :key="link.icon"
                                :href="link.url"
                                aria-label="social icon"
                                class="text-white opacity-70 hover:opacity-100"
                                name="social icon"
                                target="_blank"
                            >
                                <TGEIcon :name="link.icon"/>
                            </a>
                        </div>
                    </div>

                    <div class="w-full px-3 md:w-1/2 lg:w-1/3">
                        <div
                            class="flex items-center justify-center space-x-4 sm:space-x-8 md:justify-end lg:justify-end"
                        >
                            <router-link class="text-base text-white" to="/privacy-policy">
								Privacy Policy
							</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data: () => ({
        social: [
            {
                icon: 'facebook',
                url: 'https://www.facebook.com/topgroupexpress',
            },
            {
                icon: 'twitter',
                url: 'https://twitter.com/topgroupexpress',
            },
            {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/company/top-group-express',
            },
        ],
    }),
}
</script>
