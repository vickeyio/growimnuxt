<template>
  <div>
    <div id="home"><HeroSlider /></div>
    <div id="clients"><ClientCarousel /></div>
    <div id="features"><FeatureGrid /></div>
    <div id="about"><AboutSection /></div>
    <div id="services"><ServiceCards /></div>
    <div id="why-choose"><WhyChooseUs /></div>
    <div id="portfolio"><PortfolioShowcase /></div>
    <div id="pricing"><PricingTable /></div>
    <div id="team"><TeamSection /></div>
    <div id="testimonials"><TestimonialSlider /></div>
    <TextMarquee />
    <div id="blog"><BlogHighlights /></div>
    <div id="contact"><CtaBanner /></div>
  </div>
</template>

<script setup lang="ts">
import HeroSlider from '~/components/home/HeroSlider.vue'
import ClientCarousel from '~/components/home/ClientCarousel.vue'
import FeatureGrid from '~/components/home/FeatureGrid.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import ServiceCards from '~/components/home/ServiceCards.vue'
import WhyChooseUs from '~/components/home/WhyChooseUs.vue'
import PortfolioShowcase from '~/components/home/PortfolioShowcase.vue'
import PricingTable from '~/components/home/PricingTable.vue'
import TeamSection from '~/components/home/TeamSection.vue'
import TestimonialSlider from '~/components/home/TestimonialSlider.vue'
import TextMarquee from '~/components/home/TextMarquee.vue'
import BlogHighlights from '~/components/home/BlogHighlights.vue'
import CtaBanner from '~/components/home/CtaBanner.vue'

useHead({
  title: 'Growim || One Page Digital Agency'
})
</script>
