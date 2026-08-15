<template>
  <section class="portfolio-five py-5">
    <div class="container mb-4">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline">OUR SELECTED PROJECTS</h6>
        <h3 class="sec-title__title">Discover Our Selected<br /> AI & Tech Projects</h3>
      </div>
    </div>

    <div class="container">
      <div class="row gutter-y-30">
        <div
          v-for="(item, pIdx) in items"
          :key="pIdx"
          class="col-md-6 col-lg-3"
        >
          <div class="portfolio-five__item rounded overflow-hidden shadow-sm position-relative">
            <img :src="item.image" :alt="item.title" class="img-fluid w-100" />
            <div class="portfolio-five__item__content p-3 bg-white">
              <span class="small text-primary font-weight-bold">{{ item.category }}</span>
              <h5 class="portfolio-five__item__title font-weight-bold mb-0 mt-1">
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
const items = [
  { title: 'AI Product Design', category: 'Design', slug: 'ai-product-design', image: '/assets/images/portfolio/portfolio-5-1.jpg' },
  { title: 'Cloud Infrastructure', category: 'Technology', slug: 'cloud-infrastructure', image: '/assets/images/portfolio/portfolio-5-2.jpg' },
  { title: 'Generative Search Engine', category: 'AI Tools', slug: 'generative-search', image: '/assets/images/portfolio/portfolio-5-1.jpg' },
  { title: 'Enterprise Dashboard', category: 'Analytics', slug: 'enterprise-dashboard', image: '/assets/images/portfolio/portfolio-5-2.jpg' }
]
</script>
