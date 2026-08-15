<template>
  <section class="main-slider-two">
    <ClientOnly>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectFade, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        :effect="'fade'"
        :autoplay="{ delay: 6000, disableOnInteraction: false }"
        :speed="1000"
        :navigation="{
          prevEl: '.main-slider-two__nav-prev',
          nextEl: '.main-slider-two__nav-next'
        }"
        class="main-slider-two__swiper"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="main-slider-two__item">
            <div class="main-slider-two__bg">
              <img :src="slide.bg" alt="growim" />
              <img :src="slide.bg" alt="growim" />
            </div>
            <div
              class="main-slider-two__shape-one"
              style="background-image: url(/assets/images/shapes/slider-2-shape-1.png);"
            ></div>
            <div
              class="main-slider-two__shape-two"
              style="background-image: url(/assets/images/shapes/slider-2-shape-2.png);"
            ></div>

            <div class="main-slider-two__content">
              <h2 class="main-slider-two__title" v-html="slide.title"></h2>
              <p class="main-slider-two__text" v-html="slide.text"></p>
              <div class="main-slider-two__btn">
                <NuxtLink class="growim-btn growim-btn--white" :to="slide.buttonLink">
                  <span class="growim-btn__text">{{ slide.buttonText }}</span>
                  <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
                </NuxtLink>
              </div>
            </div>

            <div class="container position-relative">
              <a
                href="#"
                class="video-popup"
                @click.prevent="openVideo(slide.videoUrl)"
              >
                <span class="ripple"></span>
                <i class="fa fa-play"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>

    <ModalVideo
      :is-open="isVideoOpen"
      :video-url="currentVideoUrl"
      @close="isVideoOpen = false"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay, EffectFade as SwiperEffectFade, Navigation as SwiperNavigation } from 'swiper/modules'
import ModalVideo from '~/components/ui/ModalVideo.vue'

const isVideoOpen = ref(false)
const currentVideoUrl = ref('')

const openVideo = (url: string) => {
  currentVideoUrl.value = url
  isVideoOpen.value = true
}

const slides = [
  {
    bg: '/assets/images/backgrounds/slider-2-1.jpg',
    title: '<span>Digital</span> <br>Marketing <br>Expert',
    text: 'Transforming customer acquisition and scaling digital brands<br> with high-converting marketing campaigns and modern development.',
    buttonText: 'View Services',
    buttonLink: '/services',
    videoUrl: 'https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1'
  },
  {
    bg: '/assets/images/backgrounds/slider-2-1.jpg',
    title: '<span>Creative</span> <br>Design & <br>Branding',
    text: 'Crafting memorable visual identities and immersive product design<br> that set industry standards and accelerate conversion.',
    buttonText: 'Explore Work',
    buttonLink: '/portfolio',
    videoUrl: 'https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1'
  },
  {
    bg: '/assets/images/backgrounds/slider-2-1.jpg',
    title: '<span>Growth</span> <br>Engineered <br>For Scale',
    text: 'Enterprise-grade search dominance, data analytics,<br> and high-performance Nuxt web applications.',
    buttonText: 'Get In Touch',
    buttonLink: '/contact',
    videoUrl: 'https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1'
  },
  {
    bg: '/assets/images/backgrounds/slider-2-1.jpg',
    title: '<span>Modern</span> <br>Technology <br>Agency',
    text: 'From strategy to deployment, we engineer digital products<br> that drive sustainable long-term revenue.',
    buttonText: 'View Services',
    buttonLink: '/services',
    videoUrl: 'https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1'
  }
]
</script>
