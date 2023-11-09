<template>
    <TGESection
        :anchor="anchor"
        :paddingBottom="50"
        :paddingTop="50"
        :zIndex="10"
        backgroundColor="#F8FAFB"
        darkBackgroundColor="#15182B"
        relative
    >
        <div
            class="wow fadeInUp container overflow-hidden lg:max-w-[1200px]"
            data-wow-delay=".2s"
        >
            <div class="-mx-4 flex flex-wrap items-center justify-center">
                <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                    <div class="mb-5 text-center">
                        <a
                            class="block"
                            href="javascript:void(0)"
                        >
                            <img
                                alt="client"
                                class="mx-auto max-h-[150px] opacity-[65%] grayscale hover:opacity-100 hover:grayscale-0"
                                src="@/assets/images/clients/trave_compositor.png"
                            />
                        </a>
                    </div>
                </div>

                <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                    <div class="mb-5 text-center">
                        <a
                            class="block"
                            href="javascript:void(0)"
                        >
                            <img
                                alt="client"
                                class="mx-auto max-h-[150px] opacity-[65%] grayscale hover:opacity-100 hover:grayscale-0"
                                src="@/assets/images/clients/zafiro_tours.png"
                            />
                        </a>
                    </div>
                </div>

                <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                    <div class="mb-5 text-center">
                        <a
                            class="block"
                            href="javascript:void(0)"
                        >
                            <img
                                alt="client"
                                class="mx-auto max-h-[110px] opacity-[65%] grayscale hover:opacity-100 hover:grayscale-0"
                                src="@/assets/images/clients/airmet.png"
                            />
                        </a>
                    </div>
                </div>

                <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                    <div class="mb-5 text-center">
                        <a
                            class="block"
                            href="javascript:void(0)"
                        >
                            <img
                                alt="client"
                                class="mx-auto max-w-[150px] opacity-[65%] grayscale hover:opacity-100 hover:grayscale-0"
                                src="@/assets/images/clients/elcorteingles.png"
                            />
                        </a>
                    </div>
                </div>

                <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                    <div class="mb-5 text-center">
                        <a
                            class="block"
                            href="javascript:void(0)"
                        >
                            <img
                                alt="client"
                                class="mx-auto max-w-[150px] opacity-[65%] grayscale hover:opacity-100 hover:grayscale-0"
                                src="@/assets/images/clients/kaytrip.png"
                            />
                        </a>
                    </div>
                </div>

				<div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
					<div class="mb-5 text-center">
						<a
							class="block"
							href="javascript:void(0)"
						>
							<img
								alt="client"
								class="mx-auto max-w-[150px] opacity-[65%] grayscale hover:opacity-100 hover:grayscale-0"
								src="@/assets/images/clients/tbo.png"
							/>
						</a>
					</div>
				</div>

				<div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
					<div class="mb-5 text-center">
						<a
							class="block"
							href="javascript:void(0)"
						>
							<img
								alt="client"
								class="mx-auto max-h-[100px] opacity-[65%] grayscale hover:opacity-100 hover:grayscale-0"
								src="@/assets/images/clients/didatravel.png"
							/>
						</a>
					</div>
				</div>

				<div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
					<div class="mb-5 text-center">
						<a
							class="block"
							href="javascript:void(0)"
						>
							<img
								alt="client"
								class="mx-auto max-h-[100px] opacity-[65%] grayscale hover:opacity-100 hover:grayscale-0"
								src="@/assets/images/clients/envol_espace.png"
							/>
						</a>
					</div>
				</div>
            </div>
        </div>
    </TGESection>
</template>

<script>
import TGESection from './TGESection.vue'

export default {
    name: 'TGEClientsSection',
    components: {
        TGESection,
    },
    props: {
        anchor: {
            type: String,
            required: true,
        },
    },
}
</script>
