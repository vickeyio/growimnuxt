<template>
  <div>
    <!-- Hero Slider with Swiper -->
    <HeroSlider />

    <!-- Trusted Brand Partners Carousel -->
    <ClientCarousel />

    <!-- Feature Trust Metrics -->
    <FeatureGrid />

    <!-- About Agency Story & Metrics -->
    <AboutSection />

    <!-- Interactive Tabbed Services -->
    <ServiceCards />

    <!-- Why Choose Us with Progress Bars -->
    <WhyChooseUs />

    <!-- Latest Work / Portfolio Showcase -->
    <PortfolioShowcase />

    <!-- Pricing Packages -->
    <PricingTable />

    <!-- Team Members Slider -->
    <TeamSection />

    <!-- Testimonials Slider -->
    <TestimonialSlider />

    <!-- Recent Blog Articles -->
    <BlogHighlights />

    <!-- Newsletter CTA Banner -->
    <CtaBanner />
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
import BlogHighlights from '~/components/home/BlogHighlights.vue'
import CtaBanner from '~/components/home/CtaBanner.vue'

useHead({
  title: 'Home One || Growim || Digital Marketing & Web Agency',
  meta: [
    {
      name: 'description',
      content: 'Growim is the premier creative digital marketing, SEO, and web development agency.'
    }
  ]
})
</script>
