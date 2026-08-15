<template>
  <section class="portfolio-two py-5">
    <div class="portfolio-two__bg" style="background-image: url(/assets/images/shapes/portfolio-2-bg.png);"></div>
    <div class="portfolio-two__shape-one" style="background-image: url(/assets/images/shapes/portfolio-2-shape-1.png);"></div>
    <div class="container mb-4">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline">Our Complete Projects</h6>
        <h3 class="sec-title__title">Digital Agency<br /> <span>Complete</span> Projects</h3>
      </div>
    </div>

    <div class="container-fluid px-lg-5">
      <ClientOnly>
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :breakpoints="{
            576: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
            1400: { slidesPerView: 4, spaceBetween: 30 }
          }"
        >
          <SwiperSlide v-for="(item, index) in allSlides" :key="index">
            <div class="portfolio-two__item position-relative rounded overflow-hidden shadow-sm">
              <img :src="item.image" :alt="item.title" class="img-fluid w-100" />
              <div class="portfolio-two__item__content">
                <h3 class="portfolio-two__item__title">
                  <NuxtLink :to="`/portfolio/${item.slug}`">{{ item.title }}</NuxtLink>
                </h3>
                <h5 class="portfolio-two__item__cate">{{ item.category }}</h5>
                <div class="portfolio-two__item__btn">
                  <NuxtLink :to="`/portfolio/${item.slug}`">
                    <i class="flaticon-up-right-arrow"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay, Navigation as SwiperNavigation } from 'swiper/modules'

const portfolioItems = [
  {
    title: 'Generation Of Wealth',
    category: 'Marketing',
    slug: 'generation-of-wealth',
    image: '/assets/images/portfolio/portfolio-2-1.jpg'
  },
  {
    title: 'Cloud Infrastructure Redesign',
    category: 'Development',
    slug: 'cloud-infrastructure',
    image: '/assets/images/portfolio/portfolio-2-2.jpg'
  },
  {
    title: 'Brand Visual Overhaul',
    category: 'Branding',
    slug: 'brand-visual-overhaul',
    image: '/assets/images/portfolio/portfolio-2-3.jpg'
  },
  {
    title: 'Search Ranking Accelerator',
    category: 'SEO',
    slug: 'search-ranking-accelerator',
    image: '/assets/images/portfolio/portfolio-2-4.jpg'
  },
  {
    title: 'Enterprise Fintech Portal',
    category: 'Development',
    slug: 'fintech-portal',
    image: '/assets/images/portfolio/portfolio-2-5.jpg'
  }
]

const allSlides = computed(() => [...portfolioItems, ...portfolioItems])
</script>
