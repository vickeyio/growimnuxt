<template>
  <section class="testimonials-two">
    <div class="testimonials-two__bg" style="background-image: url(/assets/images/shapes/testimonials-bg-2.png);"></div>
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-lg-5">
          <div class="testimonials-two__content">
            <div class="testimonials-two__clients">
              <img src="/assets/images/resources/client-1-1.png" alt="crackit" />
              <img src="/assets/images/resources/client-1-2.png" alt="crackit" />
              <img src="/assets/images/resources/client-1-3.png" alt="crackit" />
              <img src="/assets/images/resources/client-1-4.png" alt="crackit" />
              <span>1.5k Happy Clients</span>
            </div>
            <div class="testimonials-two__nav">
              <a href="#" class="testimonials-two__nav__prev" @click.prevent><i class="flaticon-left-arrows"></i></a>
              <a href="#" class="testimonials-two__nav__next" @click.prevent><i class="flaticon-right-arrows"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <ClientOnly>
            <Swiper
              :modules="[SwiperAutoplay, SwiperNavigation]"
              :slides-per-view="1"
              :loop="true"
              :autoplay="{ delay: 5000, disableOnInteraction: false }"
              :navigation="{
                prevEl: '.testimonials-two__nav__prev',
                nextEl: '.testimonials-two__nav__next'
              }"
            >
              <SwiperSlide v-for="item in testimonials" :key="item.id">
                <div class="testimonials-two__item">
                  <div class="testimonials-two__item__quote">
                    <img src="/assets/images/shapes/quote-image-2.png" alt="" />
                  </div>
                  <div class="testimonials-two__item__content">
                    {{ item.quote }}
                  </div>
                  <div class="testimonials-two__item__author">
                    <img :src="item.avatar" alt="crackit" />
                    <h3 class="testimonials-two__item__name">{{ item.name }}</h3>
                    <p class="testimonials-two__item__designation">{{ item.role }}</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay, Navigation as SwiperNavigation } from 'swiper/modules'

const { getTestimonials } = useTestimonials()
const { data: testimonialsResponse } = await getTestimonials()
const testimonials = computed(() => testimonialsResponse.value?.data || [])
</script>
