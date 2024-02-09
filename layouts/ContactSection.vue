<template>
	<section id="contact" class="relative z-10 py-20"	>
		<SectionTitle :title="$t('formTitle')" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
			{{ $t('formDescription') }}
		</SectionTitle>

		<div class="container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
			<div class="mx-auto w-full max-w-[925px] rounded-lg bg-[#F8FAFB] px-8 py-10 shadow-card dark:bg-[#15182B] dark:shadow-card-dark sm:px-10 duration-300" >
				<div class="-mx-[22px] flex flex-wrap">
					<div class="w-full px-[22px] md:w-1/2">
						<div class="mb-8">
							<input
								id="name"
								class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary duration-300"
								name="name"
								:placeholder="$t('insertName')"
								type="text"
								v-model="name"
							/>
						</div>
					</div>

					<div class="w-full px-[22px] md:w-1/2">
						<div class="mb-8">
							<input
								id="company"
								class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary duration-300"
								name="company"
								:placeholder="$t('insertCompany')"
								type="text"
								v-model="company"
							/>
						</div>
					</div>

					<div class="w-full px-[22px] md:w-1/2">
						<div class="mb-8">
							<input
								id="email"
								class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary duration-300"
								name="email"
								:placeholder="$t('insertEmail')"
								type="email"
								v-model="email"
							/>
						</div>
					</div>

					<div class="w-full px-[22px] md:w-1/2">
						<div class="mb-8">
							<input
								id="phone"
								class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary duration-300"
								name="phone"
								:placeholder="$t('insertPhone')"
								type="text"
								v-model="phone_number"
							/>
						</div>
					</div>

					<div class="w-full px-[22px]">
						<div class="mb-8">
							<textarea
								id="message"
								class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary duration-300"
								name="message"
								:placeholder="$t('insertMessage')"
								rows="6"
								v-model="message"
							></textarea>
						</div>
					</div>

					<div class="w-full px-[22px]">
						<div class="text-center">
							<p class="mb-5 text-center text-base text-body">
								{{ $t('textAccept') }}
							</p>
							<button
								class="inline-block rounded-md bg-primary py-[14px] px-11 text-base font-medium text-white hover:bg-opacity-90"
								@click="onSubmitFormClicked"
							>
								{{ $t('buttonContact') }}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data: () => ({
		name: '',
		company: '',
		email: '',
		phone_number: '',
		message: '',
	}),
	methods: {
		async onSubmitFormClicked() {
			try {
				const response = await fetch('https://backend.topgroups.travel/api/ext/website/contact/send', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: this.name,
						company: this.company,
						email: this.email,
						phone_number: this.phone_number,
						message: this.message,
						domain: 'website.topgroups.travel',
						url: 'https://website.topgroups.travel/',
						source: 'home',
					}),
				});

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				console.log(data);
			} catch (error) {
				console.error('Hubo un problema con la petición Fetch:', error);
			}
		},
	}
}
</script>
