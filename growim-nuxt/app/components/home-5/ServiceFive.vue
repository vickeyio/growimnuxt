<template>
  <section class="service-five py-5 position-relative">
    <div class="container mb-4">
      <div class="sec-title text-left">
        <h6 class="sec-title__tagline">OUR BEST SERVICES</h6>
        <h3 class="sec-title__title">We Solve IT Problems<br /> With Modern Technology</h3>
      </div>
    </div>

    <div class="container">
      <div class="row gutter-y-30">
        <div
          v-for="(service, idx) in services"
          :key="idx"
          class="col-md-6 col-lg-3"
        >
          <div class="service-five__item p-4 bg-light rounded shadow-sm h-100 position-relative">
            <div class="service-five__item__icon mb-3">
              <i :class="service.icon" class="text-primary fa-2x"></i>
            </div>
            <h4 class="service-five__item__title font-weight-bold mb-2">
              <NuxtLink :to="`/services/${service.slug}`" class="text-dark">{{ service.title }}</NuxtLink>
            </h4>
            <p class="service-five__item__text text-muted small mb-3">{{ service.desc }}</p>
            <NuxtLink :to="`/services/${service.slug}`" class="text-primary font-weight-bold text-decoration-none small">
              Read More &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { icon: 'flaticon-database', title: 'Database Security', slug: 'web-development', desc: 'Enterprise data resilience, encryption, and automated disaster recovery.' },
  { icon: 'flaticon-consulting', title: 'IT Consultancy', slug: 'digital-marketing', desc: 'High-level cloud engineering, infrastructure scaling, and agile sprints.' },
  { icon: 'flaticon-code', title: 'Fullstack App Dev', slug: 'web-development', desc: 'Nuxt 4 and Vue 3 frontend architectures connected to modern headless APIs.' },
  { icon: 'flaticon-design', title: 'UX/UI Product Design', slug: 'seo-optimized', desc: 'Conversion-optimized interfaces designed for high engagement.' }
]
</script>
