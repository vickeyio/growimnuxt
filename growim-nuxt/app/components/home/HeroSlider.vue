<template>
  <section class="main-slider-one">
    <ClientOnly>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectFade, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        :effect="'fade'"
        :autoplay="{ delay: 6000, disableOnInteraction: false }"
        :speed="1000"
        :navigation="{
          prevEl: '.main-slider-one__nav-prev',
          nextEl: '.main-slider-one__nav-next'
        }"
        class="main-slider-one__swiper"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="main-slider-one__item">
            <div
              class="main-slider-one__bg"
              :style="{ backgroundImage: `url(${slide.bg})` }"
            ></div>
            <div
              class="main-slider-one__shape-one"
              style="background-image: url(/assets/images/shapes/slider-1-shape-1.png);"
            ></div>
            <div class="main-slider-one__shape-two">
              <img src="/assets/images/shapes/slider-1-shape-2.png" alt="growim" />
            </div>
            <div class="main-slider-one__shape-three">
              <img src="/assets/images/shapes/slider-1-shape-3.png" alt="growim" />
            </div>
            <div class="main-slider-one__shape-four">
              <img src="/assets/images/shapes/slider-1-shape-4.png" alt="growim" />
            </div>
            <div class="main-slider-one__shape-five">
              <img src="/assets/images/shapes/slider-1-shape-5.png" alt="growim" />
            </div>
            <div class="main-slider-one__shape-six">
              <img src="/assets/images/shapes/slider-1-shape-6.png" alt="growim" />
            </div>
            <div class="main-slider-one__shape-seven">
              <img src="/assets/images/shapes/slider-1-shape-7.png" alt="growim" />
            </div>

            <!-- Traffic Report Badge -->
            <div class="main-slider-one__report">
              <p class="main-slider-one__report__text">monthly traffic</p>
              <h5 class="main-slider-one__report__number">
                {{ slide.traffic }} <span>{{ slide.trafficChange }}</span>
              </h5>
            </div>

            <!-- Main Content -->
            <div class="main-slider-one__content">
              <h5 class="main-slider-one__sub-title">{{ slide.subTitle }}</h5>
              <h2 class="main-slider-one__title">{{ slide.title }}</h2>
              <p class="main-slider-one__text" v-html="slide.description"></p>
              <div class="main-slider-one__btn">
                <NuxtLink class="growim-btn growim-btn--white" :to="slide.buttonLink">
                  <span class="growim-btn__text">{{ slide.buttonText }}</span>
                  <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
                </NuxtLink>
              </div>

              <!-- Video Popup Trigger -->
              <a
                href="#"
                class="video-popup"
                @click.prevent="openVideo(slide.videoUrl)"
              >
                <img src="/assets/images/shapes/slider-1-shape-video.png" alt="growim" />
                <span class="video-popup__icon">
                  <i class="fa fa-play"></i>
                  <span class="ripple"></span>
                </span>
                play reel
              </a>
            </div>
          </div>
        </SwiperSlide>

        <!-- Custom Navigation Arrows -->
        <div class="main-slider-one__nav position-absolute d-flex gap-2" style="bottom: 40px; right: 80px; z-index: 20;">
          <button class="main-slider-one__nav-prev btn btn-dark rounded-circle" style="width: 48px; height: 48px;" aria-label="Previous Slide">
            <i class="flaticon-left-angle"></i>
          </button>
          <button class="main-slider-one__nav-next btn btn-dark rounded-circle" style="width: 48px; height: 48px;" aria-label="Next Slide">
            <i class="flaticon-right-angle"></i>
          </button>
        </div>
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
    bg: '/assets/images/backgrounds/slider-1-1.png',
    traffic: '220,342.76',
    trafficChange: '+3.4%',
    subTitle: 'go for advertising',
    title: 'Think Digital',
    description: 'We scale high-growth brands through data-driven digital marketing,<br> creative storytelling, and next-generation engineering.',
    buttonText: 'view services',
    buttonLink: '/services',
    videoUrl: 'https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1'
  },
  {
    bg: '/assets/images/backgrounds/slider-1-1.png',
    traffic: '584,120.90',
    trafficChange: '+8.2%',
    subTitle: 'digital growth partner',
    title: 'Creative Agency',
    description: 'Empowering enterprise brands with conversion-focused design,<br> advanced SEO strategies, and world-class web applications.',
    buttonText: 'view services',
    buttonLink: '/services',
    videoUrl: 'https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1'
  },
  {
    bg: '/assets/images/backgrounds/slider-1-1.png',
    traffic: '412,890.15',
    trafficChange: '+5.6%',
    subTitle: 'results driven',
    title: 'Market Leaders',
    description: 'Accelerate user acquisition with multi-channel search performance<br> and high-impact digital campaign execution.',
    buttonText: 'view services',
    buttonLink: '/services',
    videoUrl: 'https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1'
  },
  {
    bg: '/assets/images/backgrounds/slider-1-1.png',
    traffic: '690,440.00',
    trafficChange: '+12.1%',
    subTitle: 'full stack engineering',
    title: 'Scale Velocity',
    description: 'Modern Nuxt 4 architectures designed for speed, flexibility,<br> and high conversion rates.',
    buttonText: 'view services',
    buttonLink: '/services',
    videoUrl: 'https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1'
  }
]
</script>

<style scoped>
.main-slider-one__swiper {
  width: 100%;
  position: relative;
}
</style>
