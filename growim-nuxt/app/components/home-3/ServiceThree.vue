<template>
  <section class="service-three py-5 position-relative">
    <div class="service-three__shape-one" style="background-image: url(/assets/images/shapes/about-1-shape-1.png);"></div>
    <div class="service-three__shape-two" style="background-image: url(/assets/images/shapes/about-1-shape-2.png);"></div>
    <div class="sec-title text-center mb-5">
      <h6 class="sec-title__tagline">OUR SERVICES</h6>
      <h3 class="sec-title__title">Explore All Our Presentation<br /> Digital Services</h3>
    </div>

    <div class="container">
      <div class="row gutter-y-30">
        <div
          v-for="(service, idx) in services"
          :key="idx"
          class="col-lg-4 col-md-6"
        >
          <div class="service-three__item p-4 bg-light rounded text-center h-100 shadow-sm">
            <div class="service-three__item__image mb-3">
              <img :src="service.icon" :alt="service.title" height="60" />
            </div>
            <h4 class="service-three__item__title font-weight-bold mb-2">
              <NuxtLink :to="`/services/${service.slug}`" class="text-dark">{{ service.title }}</NuxtLink>
            </h4>
            <p class="service-three__item__text text-muted mb-0">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: '/assets/images/shapes/service-3-1.png',
    title: 'Brand Design & Identity',
    slug: 'digital-marketing',
    desc: 'Distinctive visual identities engineered to resonate with modern digital audiences.'
  },
  {
    icon: '/assets/images/shapes/service-3-2.png',
    title: 'Video Search Optimization',
    slug: 'seo-optimized',
    desc: 'High-intent multimedia optimization maximizing organic visibility across search algorithms.'
  },
  {
    icon: '/assets/images/shapes/service-3-3.png',
    title: 'Keyword Research & Scaling',
    slug: 'digital-marketing',
    desc: 'Deep market analysis identifying lucrative high-converting customer query streams.'
  }
]
</script>
