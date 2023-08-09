<template>
    <main>
        <TGEHeroSection
            anchor="home"
            videoURL="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
        >
            <template v-slot:title>
                {{ $t('title1')}}
                <TGEFancyText>{{ $t('title2')}}</TGEFancyText>
                {{ $t('title3')}}
                <TGEFancyText>{{ $t('title4')}}</TGEFancyText>
                .
            </template>

            <template v-slot:description>
                {{ $t('subtitle') }}
            </template>

            <template v-slot:picture>
                <img
                    alt="hero image"
                    class="mx-auto max-w-full"
                    src="@/assets/images/hero/hero-light.png"
                />
            </template>
        </TGEHeroSection>

        <TGEFeaturesSection
            :features="[
                {
                    title: $t('featureApps'),
                    description: $t('appsDescription'),
                    icon: 'apps',
                },
                {
                    title: $t('featurePrices'),
                    description: $t('pricesDescription'),
                    icon: 'layers',
                },
                {
                    title: $t('featureDashboard'),
                    description: $t('dashboardDescription'),
                    icon: 'layout',
                },
                {
                    title: $t('featureAgility'),
                    description: $t('agilityDescription'),
                    icon: 'speed',
                },
                {
                    title: $t('featureReservations'),
                    description: $t('reservationsDescription'),
                    icon: 'sliders',
                },
                {
                    title: $t('featureUpdates'),
                    description: $t('updatesDescription'),
                    icon: 'reload',
                },
            ]"
            anchor="features"
            :description="$t('featureDescription')"
            :title="$t('featureTitle')"
        />

        <TGEAboutSection anchor="about" />
        <TGEWorkProcessSection anchor="work-process" />
        <TGEScreensSection anchor="screens" />
        <TGETestimonialsSection anchor="testimonials" />
        <TGEFrequentAnswersSection anchor="faq" />
        <TGEBlogSection anchor="blog" />
        <TGEClientsSection anchor="clients" />
        <TGEContactSection anchor="contact" />
    </main>
</template>

<script>
const pageLink = document.querySelectorAll('.menu-scroll')

pageLink.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            offsetTop: 1 - 60,
        })
    })
})

// section menu active
function onScroll(event) {
    const sections = document.querySelectorAll('.menu-scroll')
    const scrollPos =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop

    for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i]
        const val = currLink.getAttribute('href')
        const refElement = document.querySelector(
            val.startsWith('/') ? val.substring(1) : val
        )
        const scrollTopMinus = scrollPos + 73
        if (
            (refElement?.offsetTop || 0) <= scrollTopMinus &&
            (refElement?.offsetTop || 0) + (refElement?.offsetHeight || 0) >
                scrollTopMinus
        ) {
            document.querySelector('.menu-scroll').classList.remove('active')
            currLink.classList.add('active')
        } else {
            currLink.classList.remove('active')
        }
    }
}

window.document.addEventListener('scroll', onScroll)

function initAcc(elem, option) {
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem + ' .faq-btn')) return
        else {
            if (!e.target.parentElement.classList.contains('active')) {
                if (option == true) {
                    var elementList = document.querySelectorAll(elem + ' .faq')
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active')
                    })
                }
                e.target.parentElement.classList.add('active')
            } else {
                e.target.parentElement.classList.remove('active')
            }
        }
    })
}

//activate accordion function
initAcc('.faqs', true)
// EndSection - Home JS
import '@/assets/main.css'
import 'glightbox/dist/css/glightbox.min.css'
import '@/assets/css/animate.css'

import TGEHeroSection from '@/components/TGEHeroSection.vue'
import TGEFancyText from '@/components/TGEFancyText.vue'

import TGEFeaturesSection from '@/components/TGEFeaturesSection.vue'
import TGEAboutSection from '@/components/TGEAboutSection.vue'
import TGEWorkProcessSection from '@/components/TGEWorkProcessSection.vue'
import TGEScreensSection from '@/components/TGEScreensSection.vue'
import TGETestimonialsSection from '@/components/TGETestimonialsSection.vue'
import TGEFrequentAnswersSection from '@/components/TGEFrequentAnswersSection.vue'
import TGEBlogSection from '@/components/TGEBlogSection.vue'
import TGEClientsSection from '@/components/TGEClientsSection.vue'
import TGEContactSection from '@/components/TGEContactSection.vue'

export default {
    name: 'HomeView',
    components: {
        TGEHeroSection,
        TGEFancyText,
        TGEFeaturesSection,
        TGEAboutSection,
        TGEWorkProcessSection,
        TGEScreensSection,
        TGETestimonialsSection,
        TGEFrequentAnswersSection,
        TGEBlogSection,
        TGEClientsSection,
        TGEContactSection,
    },
}
</script>
