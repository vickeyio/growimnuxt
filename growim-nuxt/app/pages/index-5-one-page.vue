<template>
  <div>
    <div id="home"><BannerFive /></div>
    <div id="clients"><ClientCarousel /></div>
    <div id="services"><ServiceFive /></div>
    <div id="counter"><CounterTwo /></div>
    <div id="portfolio"><PortfolioFive /></div>
    <div id="about"><AboutFive /></div>
    <div id="team"><TeamFour /></div>
    <div id="why-choose"><WhyChooseFour /></div>
    <div id="pricing"><PricingThree /></div>
    <div id="testimonials"><TestimonialsFive /></div>
    <div id="faq"><FaqTwo /></div>
    <div id="blog"><BlogFive /></div>
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
  title: 'Home Five One Page || Growim'
})
</script>
