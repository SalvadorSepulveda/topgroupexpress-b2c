<template>
	<HeroSection />
	<OfferSection />
	<AboutSection />
	<WorkProcessSection />
	<ScreenSection />
	<ClientsSection />
	<TestimonialSection />
	<FAQSection />
	<ContactSection />
	<BackToTopButton />
</template>

<script setup>
	import HeroSection from "~/layouts/HeroSection.vue";
	import OfferSection from "~/layouts/FeatureSection.vue";
	import AboutSection from "~/layouts/AboutSection.vue";
	import WorkProcessSection from "~/layouts/WorkProcessSection.vue";
	import ScreenSection from "~/layouts/ScreenSection.vue";
	import ClientsSection from "~/layouts/ClientsSection.vue";
	import TestimonialSection from "~/layouts/TestimonialSection.vue";
	import ContactSection from "~/layouts/ContactSection.vue";
	import FAQSection from "~/layouts/FAQSection.vue";

	useHead({
		title: 'Top Group Express',
		htmlAttrs: { lang: 'en-US' },
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: 'https://cdn.topgroups.travel/websites/assets/images/favicon.png' },
		],
		meta: [
			{
				name: 'description',
				content: 'Book a hotel for a group of more than 7 people online in just a few clicks right now!'
			},
			{
				property: 'og:title',
				content: 'Top Group Express',
			},
			{
				property: 'og:description',
				content: 'Book a hotel for a group of more than 7 people online in just a few clicks right now!'
			},
			{
				property: 'og:image',
				content: '/og-img.png'
			},
			{
				property: 'og:url',
				content: 'https://topgroupexpress.com/'
			},
			{
				name: 'twitter:title',
				content: 'Top Group Express',
			},
			{
				name: 'twitter:description',
				content: 'Book a hotel for a group of more than 7 people online in just a few clicks right now!'
			},
			{
				name: 'twitter:image',
				content: 'https://cdn.topgroups.travel/websites/assets/images/og-img.png'
			},
			{
				name: 'twitter:card',
				content: 'summary_large_image'
			}
		],
	})
</script>