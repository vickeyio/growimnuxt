<template>
  <div>
    <HeroSliderTwo />
    <AboutTwo />
    <ServiceTwo />
    <WhyChooseTwo />
    <PortfolioTwo />
    <PricingTwo />
    <CtaOne />
    <TeamTwo />
    <TestimonialsTwo />
    <BlogTwo />
  </div>
</template>

<script setup lang="ts">
import HeroSliderTwo from '~/components/home-2/HeroSliderTwo.vue'
import AboutTwo from '~/components/home-2/AboutTwo.vue'
import ServiceTwo from '~/components/home-2/ServiceTwo.vue'
import WhyChooseTwo from '~/components/home-2/WhyChooseTwo.vue'
import PortfolioTwo from '~/components/home-2/PortfolioTwo.vue'
import PricingTwo from '~/components/home-2/PricingTwo.vue'
import CtaOne from '~/components/home-2/CtaOne.vue'
import TeamTwo from '~/components/home-2/TeamTwo.vue'
import TestimonialsTwo from '~/components/home-2/TestimonialsTwo.vue'
import BlogTwo from '~/components/home-2/BlogTwo.vue'

useHead({
  title: 'Home Two || Growim Creative Digital Agency',
  meta: [
    { name: 'description', content: 'Growim Home 02 - Digital marketing expert, creative branding, and scalable growth architecture.' }
  ]
})
</script>
