<template>
  <section class="main-slider-two">
    <div class="main-slider-two__carousel growim-owl__carousel--with-counter owl-carousel">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="item"
        :class="{ active: index === currentIndex }"
        :style="slideStyle(index)"
      >
        <div class="main-slider-two__item">
          <div class="main-slider-two__bg">
            <img :src="slide.bg" alt="crackit" />
            <img :src="slide.bg" alt="crackit" />
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
              <a class="growim-btn growim-btn--white" href="#services">
                <span class="growim-btn__text">View Services</span>
                <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
              </a>
            </div>
          </div>
          <div class="container">
            <a href="#" class="video-popup" @click.prevent="openVideo">
              <span class="ripple"></span>
              <i class="fa fa-play"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Owl-style navigation -->
      <div class="owl-nav">
        <button
          type="button"
          role="presentation"
          class="owl-prev"
          aria-label="Previous slide"
          @click="goPrev"
        >
          <span class="flaticon-flaticon-long-up"></span>
        </button>
        <button
          type="button"
          role="presentation"
          class="owl-next"
          aria-label="Next slide"
          @click="goNext"
        >
          <span class="flaticon-flaticon-long-down"></span>
        </button>
      </div>
      <!-- Owl-style counter -->
      <div class="growim-owl__carousel__counter">
        <span class="growim-owl__carousel__counter__current">{{ pad(currentIndex + 1) }}</span>
        <span class="growim-owl__carousel__counter__total">{{ pad(slides.length) }}</span>
      </div>
    </div>
    <div class="main-slider-two__social">
      <a href="https://facebook.com" target="_blank" rel="noopener">
        <i class="fab fa-facebook-f" aria-hidden="true"></i>
        <span class="sr-only">Facebook</span>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener">
        <i class="fab fa-twitter" aria-hidden="true"></i>
        <span class="sr-only">Twitter</span>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener">
        <i class="fab fa-linkedin-in" aria-hidden="true"></i>
        <span class="sr-only">Linkedin</span>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener">
        <i class="fab fa-youtube" aria-hidden="true"></i>
        <span class="sr-only">Youtube</span>
      </a>
    </div>
    <UiModalVideo :is-open="isVideoOpen" :video-url="videoUrl" @close="isVideoOpen = false" />
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import UiModalVideo from '~/components/ui/ModalVideo.vue'

const isVideoOpen = ref(false)
const videoUrl = 'https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1'
const currentIndex = ref(0)
const isTransitioning = ref(false)
let timer: ReturnType<typeof setInterval> | undefined

const openVideo = () => {
  isVideoOpen.value = true
}

const pad = (num: number) => String(num).padStart(2, '0')

const slides = [
  {
    bg: '/assets/images/backgrounds/slider-2-1.jpg',
    title: '<span>Digital</span> <br>Marketing <br>Expert',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority<br> have suffered alteration in some form, by injected humour, or randomised'
  },
  {
    bg: '/assets/images/backgrounds/slider-2-1.jpg',
    title: '<span>Digital</span> <br>Marketing <br>Expert',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority<br> have suffered alteration in some form, by injected humour, or randomised'
  },
  {
    bg: '/assets/images/backgrounds/slider-2-1.jpg',
    title: '<span>Digital</span> <br>Marketing <br>Expert',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority<br> have suffered alteration in some form, by injected humour, or randomised'
  }
]

/**
 * Inline style to stack slides on top of each other (like Owl Carousel fadeIn/fadeOut).
 * The active slide has opacity 1 and sits on top; others are invisible below.
 */
const slideStyle = (index: number) => {
  const isActive = index === currentIndex.value
  return {
    position: index === 0 ? 'relative' as const : 'absolute' as const,
    top: index === 0 ? undefined : '0',
    left: index === 0 ? undefined : '0',
    width: '100%',
    opacity: isActive ? '1' : '0',
    zIndex: isActive ? 2 : 0,
    transition: 'opacity 1000ms ease',
    pointerEvents: isActive ? 'auto' as const : 'none' as const
  }
}

const startAutoplay = () => {
  stopAutoplay()
  timer = setInterval(() => {
    goTo(currentIndex.value + 1)
  }, 7000)
}

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}

const goTo = (next: number) => {
  if (isTransitioning.value) return
  const wrapped = (next + slides.length) % slides.length
  if (wrapped === currentIndex.value) return

  isTransitioning.value = true
  currentIndex.value = wrapped
  startAutoplay()

  // Allow animations to complete before permitting next transition
  setTimeout(() => {
    isTransitioning.value = false
  }, 1000)
}

const goPrev = () => {
  goTo(currentIndex.value - 1)
}

const goNext = () => {
  goTo(currentIndex.value + 1)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
/*
 * Ensure the carousel wrapper is a stacking context for
 * absolutely-positioned (non-first) slides.
 * z-index: 0 confines the .item's z-index: 2 inside this container,
 * allowing the external .main-slider-two__social (z-index: 1) to sit on top.
 */
.main-slider-two__carousel {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

/* Ensure navigation buttons stay above the slides (which have z-index 2) */
:deep(.owl-nav button.owl-prev),
:deep(.owl-nav button.owl-next) {
  z-index: 3 !important;
}

/* Ensure counter stays above the slides */
.growim-owl__carousel__counter {
  z-index: 3;
}


</style>
