<template>
  <div>
    <Breadcrumb title="About Us" :breadcrumbs="[{ label: 'About Us' }]" />

    <!-- About Agency Section -->
    <AboutSection />

    <!-- Fun Fact Statistics -->
    <section class="counter-one py-5 bg-dark text-white text-center">
      <div class="container">
        <div class="row gy-4">
          <div v-for="(stat, index) in stats" :key="index" class="col-6 col-md-3">
            <div class="counter-one__item">
              <h2 class="display-4 font-weight-bold text-white mb-2">{{ stat.count }}</h2>
              <p class="text-white-50 text-uppercase mb-0" style="letter-spacing: 1px;">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <WhyChooseUs />

    <!-- Team Members -->
    <TeamSection />

    <!-- Testimonials -->
    <TestimonialSlider />

    <!-- Partners Carousel -->
    <ClientCarousel />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import WhyChooseUs from '~/components/home/WhyChooseUs.vue'
import TeamSection from '~/components/home/TeamSection.vue'
import TestimonialSlider from '~/components/home/TestimonialSlider.vue'
import ClientCarousel from '~/components/home/ClientCarousel.vue'

useHead({
  title: 'About Us || Growim Digital Marketing Agency',
  meta: [
    {
      name: 'description',
      content: 'Learn about Growim, our history, mission, leadership team, and track record.'
    }
  ]
})

const stats = [
  { count: '12K+', label: 'Projects Completed' },
  { count: '98%', label: 'Client Satisfaction' },
  { count: '45+', label: 'Global Awards' },
  { count: '150+', label: 'Digital Experts' }
]
</script>
