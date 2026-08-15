<template>
  <section class="main-banner-two py-5 text-center position-relative overflow-hidden">
    <div class="main-banner-two__bg" style="background-image: url(/assets/images/backgrounds/main-banner-bg-2.jpg);"></div>
    <div class="main-banner-two__shape-one" style="background-image: url(/assets/images/shapes/banner-2-shape-1.png);"></div>
    <div class="main-banner-two__shape-two" style="background-image: url(/assets/images/shapes/banner-2-shape-2.png);"></div>
    <div class="main-banner-two__shape-three" style="background-image: url(/assets/images/shapes/banner-2-shape-3.png);"></div>
    <div class="main-banner-two__shape-four" style="background-image: url(/assets/images/shapes/banner-2-shape-4.png);"></div>

    <div class="container position-relative">
      <div class="main-banner-two__content py-4">
        <!-- Hero Visual Element with Video Lightbox -->
        <div class="main-banner-two__name position-relative d-inline-block mb-4">
          <img src="/assets/images/shapes/banner-2-name.png" alt="Growim" class="img-fluid" />
          <div class="main-banner-two__name__video position-absolute top-50 start-50 translate-middle">
            <a
              href="#"
              class="video-popup btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
              style="width: 70px; height: 70px;"
              @click.prevent="openVideo('https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1')"
            >
              <i class="fa fa-play text-white fa-lg"></i>
            </a>
          </div>
        </div>

        <h2 class="main-banner-two__title display-5 font-weight-bold text-uppercase mb-3">
          We Are A Creative <span class="text-primary">Agency</span>
        </h2>
        <p class="main-banner-two__text lead text-muted max-w-700 mx-auto mb-4">
          Driving scalable revenue for visionary brands through creative strategy, high-speed engineering, and precision search visibility.
        </p>

        <div class="main-banner-two__btn d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4">
          <div class="main-banner-two__btn__clients d-flex align-items-center gap-2 p-2 bg-white rounded shadow-sm">
            <img src="/assets/images/resources/client-1-1.png" alt="Client" class="rounded-circle" width="32" />
            <img src="/assets/images/resources/client-1-2.png" alt="Client" class="rounded-circle" width="32" />
            <img src="/assets/images/resources/client-1-3.png" alt="Client" class="rounded-circle" width="32" />
            <span class="small font-weight-bold text-dark">1.5k Happy Clients</span>
          </div>
          <NuxtLink class="growim-btn" to="/services">
            <span class="growim-btn__text">Discover More</span>
            <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <ModalVideo
      :is-open="isVideoOpen"
      :video-url="videoUrl"
      @close="isVideoOpen = false"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ModalVideo from '~/components/ui/ModalVideo.vue'

const isVideoOpen = ref(false)
const videoUrl = ref('')

const openVideo = (url: string) => {
  videoUrl.value = url
  isVideoOpen.value = true
}
</script>
