<template>
    <TGESection
        :anchor="anchor"
        :paddingTop="100"
        :paddingBottom="110"
    >
        <TGESectionTitle title="Let's Stay Connected">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
        </TGESectionTitle>

        <div class="container">
            <div
                class="wow fadeInUp mx-auto w-full max-w-[925px] rounded-lg bg-[#F8FAFB] px-8 py-10 shadow-card dark:bg-[#15182B] dark:shadow-card-dark sm:px-10"
                data-wow-delay=".3s"
            >
                <form>
                    <div class="-mx-[22px] flex flex-wrap">
                        <div class="w-full px-[22px] md:w-1/2">
                            <div class="mb-8">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name"
                                    class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                                />
                            </div>
                        </div>

                        <div class="w-full px-[22px] md:w-1/2">
                            <div class="mb-8">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    placeholder="Comapy (optioanl)"
                                    class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                                />
                            </div>
                        </div>

                        <div class="w-full px-[22px] md:w-1/2">
                            <div class="mb-8">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Your email"
                                    class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                                />
                            </div>
                        </div>

                        <div class="w-full px-[22px] md:w-1/2">
                            <div class="mb-8">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter your Phone Number"
                                    class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                                />
                            </div>
                        </div>

                        <div class="w-full px-[22px]">
                            <div class="mb-8">
                                <textarea
                                    rows="6"
                                    name="message"
                                    id="message"
                                    placeholder="Tell us about yourself"
                                    class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                                ></textarea>
                            </div>
                        </div>

                        <div class="w-full px-[22px]">
                            <div class="text-center">
                                <p class="mb-5 text-center text-base text-body">
                                    By clicking contact us button, you agree our
                                    terms and policy,
                                </p>
                                <button
                                    type="submit"
                                    class="inline-block rounded-md bg-primary py-[14px] px-11 text-base font-medium text-white hover:bg-opacity-90"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </TGESection>
</template>

<script>
import TGESection from './TGESection.vue'
import TGESectionTitle from './TGESectionTitle.vue'

export default {
    name: 'TGEContactsSection',
    components: {
        TGESection,
        TGESectionTitle,
    },
    props: {
        anchor: {
            type: String,
            required: true,
        },
    },
}
</script>
