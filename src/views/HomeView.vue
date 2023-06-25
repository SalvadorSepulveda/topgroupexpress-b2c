<template>
    <main>
        <TGEHeroSection
            anchor="home"
            videoURL="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
        >
            <template v-slot:title>
                Central de
                <TGEFancyText>reservas de hoteles</TGEFancyText>
                para <TGEFancyText>grupos</TGEFancyText>.
            </template>

            <template v-slot:description>
                Servicio exclusivo para profesionales
            </template>

            <template v-slot:picture>
                <img
                    src="@/assets/images/hero/hero-light.png"
                    alt="hero image"
                    class="mx-auto max-w-full"
                />
            </template>
        </TGEHeroSection>

        <TGEFeaturesSection
            anchor="features"
            title="¿Qué ofrecemos?"
            description="Motor de reserva de grupos con disponibilidad real y procesos completamente automatizados."
            :features="[
                {
                    title: 'Apps Móviles y Web',
                    description:
                        'Reserve grupos desde su PC, teléfono o tablet',
                    icon: 'apps',
                },
                {
                    title: 'Precios Competitivos',
                    description:
                        'Cotizaciones negociadas directamente con el hotel',
                    icon: 'layers',
                },
                {
                    title: 'Dashboard Único',
                    description: 'Todos tus grupos en el mismo lugar',
                    icon: 'layout',
                },
                {
                    title: 'Agilidad',
                    description: 'Cotizaciones en menos de 12 horas',
                    icon: 'speed',
                },
                {
                    title: 'Reservas a Medida',
                    description: 'Control preciso de sus grupos',
                    icon: 'sliders',
                },
                {
                    title: 'Actualizaciones',
                    description: 'Notificaciones y alertas en tiempo real',
                    icon: 'reload',
                },
            ]"
        />

        <TGEAboutSection anchor="about" />
        <TGEWorkProcessSection anchor="work-process" />
        <TGEPricingSection anchor="pricing" />
        <TGEScreensSection anchor="screens" />
        <TGEDownloadsSection anchor="downloads" />
        <TGETestimonialsSection anchor="testimonials" />
        <TGEFrequentAnswersSection anchor="faq" />
        <TGEBlogSection anchor="blog" />
        <TGEClientsSection anchor="clients" />
        <TGEContactSection anchor="contact" />
    </main>
</template>

<script>
// StartSection - Home JS

/*
let togglePlan = document.querySelector('#togglePlan')

document.querySelector('.monthly').addEventListener('click', () => {
    togglePlan.checked = true
})
document.querySelector('.yearly').addEventListener('click', () => {
    togglePlan.checked = false
})
*/

// ==== for menu scroll
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
        const refElement = document.querySelector(val)
        const scrollTopMinus = scrollPos + 73
        if (
            refElement.offsetTop <= scrollTopMinus &&
            refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
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
import 'swiper/css'
import 'swiper/css/pagination'
import '@/assets/css/animate.css'

import Swiper, { Navigation } from 'swiper'
import WOW from 'wowjs'

window.wow = new WOW.WOW({
    live: false,
})

window.wow.init({
    offset: 50,
})

// Testimonial
const testimonial = new Swiper('.mySwiper', {
    // configure Swiper to use modules
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
        // when window width is >= 640px
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
})

;(function () {
    'use strict'

    /* ========  mobile menu  start ========= */

    /*
    const menuWrapper = document.querySelector('.menu-wrapper')
    const body = document.querySelector('body')

    document.querySelector('.navbarOpen').addEventListener('click', () => {
        menuWrapper.classList.remove('hidden')
        body.classList.add('overflow-hidden')
    })
    document.querySelector('.navbarClose').addEventListener('click', () => {
        menuWrapper.classList.add('hidden')
        body.classList.remove('overflow-hidden')
    })
    /*

    // === close navbar-collapse when a  clicked
    document.querySelectorAll('.navbar li:not(.submenu-item) a').forEach((e) =>
        e.addEventListener('click', () => {
            menuWrapper.classList.add('hidden')
            body.classList.remove('overflow-hidden')
        })
    )

    // === Sub-menu
    const submenuItems = document.querySelectorAll('.submenu-item')
    submenuItems.forEach((el) => {
        el.querySelector('a').addEventListener('click', () => {
            el.querySelector('a').classList.toggle('active')
            el.querySelector('.submenu').classList.toggle('hidden')
        })
    })

    /* ========  mobile menu end ========= */
})()

import TGEHeroSection from '@/components/TGEHeroSection.vue'
import TGEFancyText from '@/components/TGEFancyText.vue'

import TGEFeaturesSection from '@/components/TGEFeaturesSection.vue'
import TGEAboutSection from '@/components/TGEAboutSection.vue'
import TGEWorkProcessSection from '@/components/TGEWorkProcessSection.vue'
import TGEPricingSection from '@/components/TGEPricingSection.vue'
import TGEScreensSection from '@/components/TGEScreensSection.vue'
import TGEDownloadsSection from '@/components/TGEDownloadsSection.vue'
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
        TGEPricingSection,
        TGEScreensSection,
        TGEDownloadsSection,
        TGETestimonialsSection,
        TGEFrequentAnswersSection,
        TGEBlogSection,
        TGEClientsSection,
        TGEContactSection,
    },
}
</script>
