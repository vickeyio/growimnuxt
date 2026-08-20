<template>
  <div>
    <BannerThree />
    <ClientCarousel />
    <ServiceThree />
    <AboutThree />
    <TeamThree />
    <VideoOne />
    <PortfolioThree />
    <WorkProcessOne />
    <TestimonialsThree />
    <BlogThree />
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
  title: 'Home Three || Growim Presentation Digital Agency',
  meta: [
    { name: 'description', content: 'Growim Home 03 - Creative presentation agency, team showcases, video reel, and agile work process.' }
  ]
})
</script>
