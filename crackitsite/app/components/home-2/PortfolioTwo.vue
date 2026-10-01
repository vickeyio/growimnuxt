<template>
  <section id="portfolio" class="portfolio-two">
    <div class="portfolio-two__bg" style="background-image: url(/assets/images/shapes/portfolio-2-bg.png);"></div>
    <div class="portfolio-two__shape-one" style="background-image: url(/assets/images/shapes/portfolio-2-shape-1.png);"></div>
    <div class="container">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline">our complete projects</h6>
        <h3 class="sec-title__title">Digital Agency<br> <span>Complete</span> Projects</h3>
      </div>
    </div>
    <ClientOnly>
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :centered-slides="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :navigation="true"
        :breakpoints="{
          575: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.4 },
          992: { slidesPerView: 1.6 },
          1200: { slidesPerView: 2 },
          1600: { slidesPerView: 2.4 }
        }"
        class="portfolio-two__swiper"
      >
        <SwiperSlide v-for="(item, index) in items" :key="index">
          <div class="portfolio-two__item">
            <img :src="item.image" alt="crackit" />
            <div class="portfolio-two__item__content">
              <h3 class="portfolio-two__item__title">
                <a href="#portfolio">{{ item.title }}</a>
              </h3>
              <h5 class="portfolio-two__item__cate">{{ item.category }}</h5>
              <div class="portfolio-two__item__btn">
                <a href="#portfolio"><i class="flaticon-up-right-arrow"></i></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay, Navigation as SwiperNavigation } from 'swiper/modules'

const items = [
  { title: 'Generation Of Wealth', category: 'Marketing', image: '/assets/images/portfolio/portfolio-2-1.jpg' },
  { title: 'Generation Of Wealth', category: 'Marketing', image: '/assets/images/portfolio/portfolio-2-2.jpg' },
  { title: 'Generation Of Wealth', category: 'Marketing', image: '/assets/images/portfolio/portfolio-2-3.jpg' },
  { title: 'Generation Of Wealth', category: 'Marketing', image: '/assets/images/portfolio/portfolio-2-4.jpg' },
  { title: 'Generation Of Wealth', category: 'Marketing', image: '/assets/images/portfolio/portfolio-2-5.jpg' }
]
</script>
