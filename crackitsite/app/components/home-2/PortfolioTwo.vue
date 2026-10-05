<template>
  <section id="portfolio" class="portfolio-two">
    <div class="portfolio-two__bg" style="background-image: url(/assets/images/shapes/portfolio-2-bg.png);"></div>
    <div class="portfolio-two__shape-one" style="background-image: url(/assets/images/shapes/portfolio-2-shape-1.png);"></div>
    <div class="container">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline">our complete projects</h6>
        <h3 class="sec-title__title">Tech Solutions<br> <span>Complete</span> Projects</h3>
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
            <img :src="item.sliderImage || item.image" alt="crackit" />
            <div class="portfolio-two__item__content">
              <h3 class="portfolio-two__item__title">
                <NuxtLink :to="`/portfolio/${item.slug}`">{{ item.title }}</NuxtLink>
              </h3>
              <h5 class="portfolio-two__item__cate">{{ item.category }}</h5>
              <div class="portfolio-two__item__btn">
                <NuxtLink :to="`/portfolio/${item.slug}`"><i class="flaticon-up-right-arrow"></i></NuxtLink>
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

const { getPortfolioItems } = usePortfolio()
const { data: response } = await getPortfolioItems()
const items = computed(() => response.value?.data || [])
</script>

<style scoped>
/* Tint orange/yellow background shapes to blue to match tech startup theme */
.portfolio-two__bg,
.portfolio-two__shape-one {
  filter: hue-rotate(190deg) saturate(1.2);
}
</style>
