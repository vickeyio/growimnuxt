<template>
  <div>
    <BannerFour />
    <ClientCarousel />
    <AboutFour />
    <CounterOne />
    <ServiceFour />
    <WorkProcessTwo />
    <WhyChooseThree />
    <PortfolioFour />
    <TestimonialsFour />
    <FaqOne />
    <BlogFour />
    <ContactOne />
  </div>
</template>

<script setup lang="ts">
import BannerFour from '~/components/home-4/BannerFour.vue'
import ClientCarousel from '~/components/home/ClientCarousel.vue'
import AboutFour from '~/components/home-4/AboutFour.vue'
import CounterOne from '~/components/home-4/CounterOne.vue'
import ServiceFour from '~/components/home-4/ServiceFour.vue'
import WorkProcessTwo from '~/components/home-4/WorkProcessTwo.vue'
import WhyChooseThree from '~/components/home-4/WhyChooseThree.vue'
import PortfolioFour from '~/components/home-4/PortfolioFour.vue'
import TestimonialsFour from '~/components/home-4/TestimonialsFour.vue'
import FaqOne from '~/components/home-4/FaqOne.vue'
import BlogFour from '~/components/home-4/BlogFour.vue'
import ContactOne from '~/components/home-4/ContactOne.vue'

useHead({
  title: 'Home Four || Growim Creative Technology Agency',
  meta: [
    { name: 'description', content: 'Growim Home 04 - High tech digital agency, counter stats, 4-step work process, and FAQs.' }
  ]
})
</script>
