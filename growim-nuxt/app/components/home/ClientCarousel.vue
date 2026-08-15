<template>
  <div class="client-carousel">
    <div class="container">
      <h5 class="client-carousel__title">Trusted Partners</h5>
      <ClientOnly>
        <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="2"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :breakpoints="{
            500: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            992: { slidesPerView: 5, spaceBetween: 40 },
            1200: { slidesPerView: 6, spaceBetween: 45 }
          }"
          class="client-carousel__swiper"
        >
          <SwiperSlide v-for="(brand, i) in brandSlides" :key="i">
            <div class="client-carousel__one__item text-center">
              <img :src="brand" alt="Partner brand" class="img-fluid" />
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay } from 'swiper/modules'

const brands = [
  '/assets/images/resources/brand-1-1.png',
  '/assets/images/resources/brand-1-2.png',
  '/assets/images/resources/brand-1-3.png',
  '/assets/images/resources/brand-1-4.png',
  '/assets/images/resources/brand-1-5.png',
  '/assets/images/resources/brand-1-6.png',
  '/assets/images/resources/brand-1-7.png',
  '/assets/images/resources/brand-1-8.png'
]

// Double slides for seamless Swiper infinite looping across wide viewports
const brandSlides = computed(() => [...brands, ...brands])
</script>
