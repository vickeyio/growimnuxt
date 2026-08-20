<template>
  <div>
    <div id="home"><BannerFour /></div>
    <div id="clients"><ClientCarousel /></div>
    <div id="about"><AboutFour /></div>
    <div id="counter"><CounterOne /></div>
    <div id="services"><ServiceFour /></div>
    <div id="process"><WorkProcessTwo /></div>
    <div id="why-choose"><WhyChooseThree /></div>
    <div id="portfolio"><PortfolioFour /></div>
    <div id="testimonials"><TestimonialsFour /></div>
    <div id="faq"><FaqOne /></div>
    <div id="blog"><BlogFour /></div>
    <div id="contact"><ContactOne /></div>
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
  title: 'Home Four One Page || Growim'
})
</script>
