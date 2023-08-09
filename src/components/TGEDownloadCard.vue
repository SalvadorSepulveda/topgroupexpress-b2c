<template>
    <div class="container max-w-[1390px]">
        <div
            class="rounded-2xl bg-white shadow-card dark:bg-dark dark:shadow-card-dark sm:px-20"
        >
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4 lg:w-1/2" v-if="!right">
                    <div class="flex flex-row justify-center align-middle h-full">
                        <img
                            alt="about image"
                            src="@/assets/images/about/about-card.svg"
                        />
                    </div>
                </div>
                <div class="w-full self-center px-4 lg:w-1/2">
                    <div
                        class="wow fadeInUp mx-auto max-w-[530px] text-center lg:ml-0 lg:text-left"
                        data-wow-delay=".2s"
                    >
                        <h2
                            class="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[38px] md:leading-tight"
                        >
                            {{ title }}
                        </h2>
                        <p class="mb-10 text-base text-body">
                            {{ text }}
                        </p>
                        <div
                            class="-mx-[10px] flex flex-wrap items-center justify-center lg:justify-start"
                        >
                            <div class="inline-block px-[10px]">
                                <a
                                    class="mb-5 inline-flex items-center rounded-md bg-primary py-[10px] pl-4 pr-5 text-white hover:bg-opacity-90"
                                    href="javascript:void(0)"
                                >
                                <span v-if="icons" class="mr-[10px]">
                                    <svg
                                        fill="none"
                                        height="34"
                                        viewBox="0 0 34 34"
                                        width="34"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 28.9958V4.9125C4 4.07667 4.48167 3.34 5.19 3L19.1442 16.9542L5.19 30.9083C4.48167 30.5542 4 29.8317 4 28.9958ZM23.5642 21.3742L8.32083 30.1858L20.3483 18.1583L23.5642 21.3742ZM28.31 15.2683C28.7917 15.6508 29.1458 16.2458 29.1458 16.9542C29.1458 17.6625 28.8342 18.2292 28.3383 18.6258L25.0942 20.4958L21.5525 16.9542L25.0942 13.4125L28.31 15.2683ZM8.32083 3.7225L23.5642 12.5342L20.3483 15.75L8.32083 3.7225Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                    <span class="text-left">
                                <span
                                    class="block text-xs opacity-70"
                                >
                                    {{ textUpButtonOrange }}
                                </span>
                                <span
                                    class="block text-sm font-medium"
                                >
                                    {{ textDownButtonOrange }}
                                </span>
                                </span>
                                </a>
                            </div>
                            <div class="inline-block px-[10px]">
                                <a
                                    class="mb-5 inline-flex items-center rounded-md bg-black py-[10px] pl-4 pr-5 text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
                                    href="javascript:void(0)"
                                >
                                <span v-if="icons" class="mr-[10px]">
                                    <svg
                                        fill="none"
                                        height="34"
                                        viewBox="0 0 34 34"
                                        width="34"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M26.5058 27.625C25.33 29.3817 24.0833 31.0959 22.185 31.1242C20.2867 31.1667 19.6775 30.005 17.5242 30.005C15.3567 30.005 14.6908 31.0959 12.8917 31.1667C11.0358 31.2375 9.63333 29.2967 8.44333 27.5825C6.02083 24.0834 4.165 17.6375 6.65833 13.3025C7.89083 11.1492 10.1008 9.78921 12.495 9.74671C14.3083 9.71837 16.0367 10.9792 17.1558 10.9792C18.2608 10.9792 20.3575 9.46337 22.5533 9.69004C23.4742 9.73254 26.0525 10.0584 27.71 12.495C27.5825 12.58 24.6358 14.3084 24.6642 17.8925C24.7067 22.1709 28.4183 23.6017 28.4608 23.6159C28.4183 23.715 27.8658 25.6559 26.5058 27.625ZM18.4167 4.95837C19.4508 3.78254 21.165 2.89004 22.5817 2.83337C22.7658 4.49087 22.1 6.16254 21.1083 7.35254C20.1308 8.55671 18.5158 9.49171 16.9292 9.36421C16.7167 7.73504 17.51 6.03504 18.4167 4.95837Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                    <span class="text-left">
                                <span
                                    class="block text-xs opacity-70"
                                >
                                    {{ textUpButtonGrey }}
                                </span>
                                <span
                                    class="block text-sm font-medium"
                                >
                                    {{ textDownButtonGrey }}
                                </span>
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 lg:w-1/2" v-if="right">
                    <div class="flex flex-row justify-center align-middle h-full">
                        <img
                            alt="about image"
                            src="@/assets/images/about/about-card-agencias.svg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Graphics -->
    <div class="absolute right-0 -top-[250px] -z-10">
        <svg
            fill="none"
            height="1183"
            viewBox="0 0 610 1183"
            width="610"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                filter="url(#filter0_f_47_19)"
                opacity="0.2"
            >
                <circle
                    cx="591.5"
                    cy="591.5"
                    fill="url(#paint0_linear_47_19)"
                    r="341.5"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_47_19"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="1183"
                    width="1183"
                    x="0"
                    y="0"
                >
                    <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="shape"
                    />
                    <feGaussianBlur
                        result="effect1_foregroundBlur_47_19"
                        stdDeviation="125"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_47_19"
                    gradientUnits="userSpaceOnUse"
                    x1="250"
                    x2="1057.46"
                    y1="250"
                    y2="718.481"
                >
                    <stop stop-color="#FF8FE8"/>
                    <stop
                        offset="1"
                        stop-color="#FFC960"
                    />
                </linearGradient>
            </defs>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        textUpButtonOrange: {
            type: String,
            required: true,
        },
        textDownButtonOrange: {
            type: String,
            required: true,
        },
        textUpButtonGrey: {
            type: String,
            required: true,
        },
        textDownButtonGrey: {
            type: String,
            required: true,
        },
        icons: {
            type: Boolean,
            default: true,
        },
        right: {
            type: Boolean,
            default: true,
        }
    }
}
</script>
