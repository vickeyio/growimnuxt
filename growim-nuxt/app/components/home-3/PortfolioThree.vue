<template>
  <section class="portfolio-three py-5">
    <div class="container mb-4">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline">LATEST WORK</h6>
        <h3 class="sec-title__title">Explore Our Digital Transformations</h3>
      </div>
    </div>

    <div class="container">
      <div class="row gutter-y-30">
        <div
          v-for="(item, index) in portfolioList"
          :key="index"
          class="col-md-6 col-lg-3"
        >
          <div class="portfolio-three__item rounded overflow-hidden shadow-sm position-relative">
            <img :src="item.image" :alt="item.title" class="img-fluid w-100" />
            <div class="portfolio-three__item__content p-3 bg-white">
              <span class="small text-primary font-weight-bold">{{ item.category }}</span>
              <h5 class="portfolio-three__item__title font-weight-bold mb-0 mt-1">
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
const portfolioList = [
  { title: 'Mobile App Architecture', category: 'Technology', slug: 'mobile-app', image: '/assets/images/portfolio/portfolio-3-1.jpg' },
  { title: 'Cloud Data Platform', category: 'Infrastructure', slug: 'cloud-platform', image: '/assets/images/portfolio/portfolio-3-2.jpg' },
  { title: 'Brand Identity Suite', category: 'Creative', slug: 'brand-suite', image: '/assets/images/portfolio/portfolio-3-3.jpg' },
  { title: 'Search Dominance Project', category: 'Marketing', slug: 'search-dominance', image: '/assets/images/portfolio/portfolio-3-4.jpg' }
]
</script>
