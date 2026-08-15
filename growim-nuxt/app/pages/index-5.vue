<template>
  <div>
    <BannerFive />
    <ClientCarousel />
    <ServiceFive />
    <CounterTwo />
    <PortfolioFive />
    <AboutFive />
    <TeamFour />
    <WhyChooseFour />
    <PricingThree />
    <TestimonialsFive />
    <FaqTwo />
    <BlogFive />
  </div>
</template>

<script setup lang="ts">
import BannerFive from '~/components/home-5/BannerFive.vue'
import ClientCarousel from '~/components/home/ClientCarousel.vue'
import ServiceFive from '~/components/home-5/ServiceFive.vue'
import CounterTwo from '~/components/home-5/CounterTwo.vue'
import PortfolioFive from '~/components/home-5/PortfolioFive.vue'
import AboutFive from '~/components/home-5/AboutFive.vue'
import TeamFour from '~/components/home-5/TeamFour.vue'
import WhyChooseFour from '~/components/home-5/WhyChooseFour.vue'
import PricingThree from '~/components/home-5/PricingThree.vue'
import TestimonialsFive from '~/components/home-5/TestimonialsFive.vue'
import FaqTwo from '~/components/home-5/FaqTwo.vue'
import BlogFive from '~/components/home-5/BlogFive.vue'

useHead({
  title: 'Home Five || Growim Enterprise Digital & Tech Agency',
  meta: [
    { name: 'description', content: 'Growim Home 05 - IT consultancy, AI product design, 25+ years experience, and transparent pricing packages.' }
  ]
})
</script>
