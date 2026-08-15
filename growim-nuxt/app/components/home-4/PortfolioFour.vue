<template>
  <section class="portfolio-four py-5">
    <div class="container mb-4">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline">LATEST WORK</h6>
        <h3 class="sec-title__title">Showcasing Our Engineering & Design</h3>
      </div>
    </div>

    <div class="container">
      <div class="row gutter-y-30">
        <div
          v-for="(item, pIdx) in portfolio"
          :key="pIdx"
          class="col-md-6 col-lg-3"
        >
          <div class="card border-0 shadow-sm rounded overflow-hidden h-100">
            <img :src="item.image" :alt="item.title" class="card-img-top" />
            <div class="card-body p-3">
              <span class="badge bg-light text-primary mb-1">{{ item.category }}</span>
              <h5 class="card-title font-weight-bold mb-0">
                <NuxtLink :to="`/portfolio/${item.slug}`" class="text-dark">{{ item.title }}</NuxtLink>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const portfolio = [
  { title: 'App Development System', category: 'Technology', slug: 'app-development', image: '/assets/images/portfolio/portfolio-4-1.jpg' },
  { title: 'SaaS Platform Modernization', category: 'Engineering', slug: 'saas-platform', image: '/assets/images/portfolio/portfolio-4-2.jpg' },
  { title: 'Brand Identity Design', category: 'Branding', slug: 'brand-identity', image: '/assets/images/portfolio/portfolio-4-3.jpg' },
  { title: 'Omnichannel Growth Sprint', category: 'Marketing', slug: 'growth-sprint', image: '/assets/images/portfolio/portfolio-4-4.jpg' }
]
</script>
