<template>
  <section class="service-four py-5">
    <div class="container mb-4">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline">OUR BEST SERVICES</h6>
        <h3 class="sec-title__title">We Provide Best Services</h3>
      </div>
    </div>

    <div class="container">
      <div class="row gutter-y-30">
        <div
          v-for="(service, sIdx) in services"
          :key="sIdx"
          class="col-md-6 col-lg-4"
        >
          <div class="card border-0 rounded overflow-hidden shadow-sm h-100">
            <img :src="service.image" :alt="service.title" class="card-img-top" />
            <div class="card-body p-4">
              <h4 class="card-title font-weight-bold mb-2">
                <NuxtLink :to="`/services/${service.slug}`" class="text-dark">{{ service.title }}</NuxtLink>
              </h4>
              <p class="card-text text-muted mb-3">{{ service.desc }}</p>
              <NuxtLink :to="`/services/${service.slug}`" class="btn btn-sm btn-outline-primary rounded-circle" style="width: 40px; height: 40px; line-height: 28px;">
                <i class="flaticon-up-right-arrow"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { image: '/assets/images/resources/service-4-1.jpg', title: 'UX/UI Product Design', slug: 'web-development', desc: 'Crafting user journeys and intuitive interfaces that reduce bounce and boost conversions.' },
  { image: '/assets/images/resources/service-4-2.jpg', title: 'Content & Inbound Funnel', slug: 'digital-marketing', desc: 'Authoritative copy and assets engineered to rank high and turn visitors into qualified leads.' },
  { image: '/assets/images/resources/service-4-3.jpg', title: 'Performance Search Marketing', slug: 'seo-optimized', desc: 'Comprehensive technical SEO, keyword dominance, and scalable paid customer acquisition.' }
]
</script>
