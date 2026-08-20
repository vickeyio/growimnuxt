<template>
  <div>
    <div id="home"><HeroSliderTwo /></div>
    <div id="about"><AboutTwo /></div>
    <div id="services"><ServiceTwo /></div>
    <div id="why-choose"><WhyChooseTwo /></div>
    <div id="portfolio"><PortfolioTwo /></div>
    <div id="pricing"><PricingTwo /></div>
    <div id="cta"><CtaOne /></div>
    <div id="team"><TeamTwo /></div>
    <div id="testimonials"><TestimonialsTwo /></div>
    <div id="blog"><BlogTwo /></div>
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
  title: 'Home Two One Page || Growim'
})
</script>
