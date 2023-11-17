<template>
    <TGESection
        :anchor="anchor"
        :paddingTop="100"
    >
        <TGESectionTitle :title="$t('formTitle')">
            {{ $t('formDescription') }}
        </TGESectionTitle>

        <div class="container">
            <div
                class="wow fadeInUp mx-auto w-full max-w-[925px] rounded-lg bg-[#F8FAFB] px-8 py-10 shadow-card dark:bg-[#15182B] dark:shadow-card-dark sm:px-10"
                data-wow-delay=".3s"
            >
				<div class="-mx-[22px] flex flex-wrap">
					<div class="w-full px-[22px] md:w-1/2">
						<div class="mb-8">
							<input
								id="name"
								class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
								name="name"
								placeholder="Enter your name"
								type="text"
								v-model="name"
							/>
						</div>
					</div>

					<div class="w-full px-[22px] md:w-1/2">
						<div class="mb-8">
							<input
								id="company"
								class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
								name="company"
								placeholder="Company (optional)"
								type="text"
								v-model="company"
							/>
						</div>
					</div>

					<div class="w-full px-[22px] md:w-1/2">
						<div class="mb-8">
							<input
								id="email"
								class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
								name="email"
								placeholder="Enter Your email"
								type="email"
								v-model="email"
							/>
						</div>
					</div>

					<div class="w-full px-[22px] md:w-1/2">
						<div class="mb-8">
							<input
								id="phone"
								class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
								name="phone"
								placeholder="Enter your Phone Number"
								type="text"
								v-model="phone_number"
							/>
						</div>
					</div>

					<div class="w-full px-[22px]">
						<div class="mb-8">
							<textarea
								id="message"
								class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
								name="message"
								placeholder="Tell us about yourself"
								rows="6"
								v-model="message"
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
								class="inline-block rounded-md bg-primary py-[14px] px-11 text-base font-medium text-white hover:bg-opacity-90"
								@click="onSubmitFormClicked"
							>
								Contact Us
							</button>
						</div>
					</div>
				</div>
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
	data: () => ({
		name: '',
		company: '',
		email: '',
		phone_number: '',
		message: '',
	}),
    props: {
        anchor: {
            type: String,
            required: true,
        },
    },
	/* TODO: Cambiar URL cuando el dominio cambie a topgroupexpress.com*/
	methods: {
		async onSubmitFormClicked(){
			this.axios.post('https://backend.topgroups.travel/api/ext/website/contact/send', {
				name: this.name,
				company: this.company,
				email: this.email,
				phone_number: this.phone_number,
				message: this.message,
				domain: 'website.topgroups.travel',
				url: 'https://website.topgroups.travel/',
				source: 'home',
			}).then((response) => {
				console.log(response)
			})
			.catch((error) => {
				console.log(error)
			})
		},
	}
}
</script>
