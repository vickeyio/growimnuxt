<template>
  <div>
    <div id="home"><BannerThree /></div>
    <div id="clients"><ClientCarousel /></div>
    <div id="services"><ServiceThree /></div>
    <div id="about"><AboutThree /></div>
    <div id="team"><TeamThree /></div>
    <div id="video"><VideoOne /></div>
    <div id="portfolio"><PortfolioThree /></div>
    <div id="process"><WorkProcessOne /></div>
    <div id="testimonials"><TestimonialsThree /></div>
    <div id="blog"><BlogThree /></div>
  </div>
</template>

<script setup lang="ts">
import BannerThree from '~/components/home-3/BannerThree.vue'
import ClientCarousel from '~/components/home/ClientCarousel.vue'
import ServiceThree from '~/components/home-3/ServiceThree.vue'
import AboutThree from '~/components/home-3/AboutThree.vue'
import TeamThree from '~/components/home-3/TeamThree.vue'
import VideoOne from '~/components/home-3/VideoOne.vue'
import PortfolioThree from '~/components/home-3/PortfolioThree.vue'
import WorkProcessOne from '~/components/home-3/WorkProcessOne.vue'
import TestimonialsThree from '~/components/home-3/TestimonialsThree.vue'
import BlogThree from '~/components/home-3/BlogThree.vue'

useHead({
  title: 'Home Three One Page || Growim'
})
</script>
