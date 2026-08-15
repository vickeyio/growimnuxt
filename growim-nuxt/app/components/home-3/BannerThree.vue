<template>
  <section class="main-banner-one position-relative overflow-hidden py-5">
    <div class="main-banner-one__bg" style="background-image: url(/assets/images/shapes/main-banner-bg-1.png);"></div>
    <div class="main-banner-one__shape-one" style="background-image: url(/assets/images/shapes/banner-1-shape-1.png);"></div>
    <div class="main-banner-one__shape-two" style="background-image: url(/assets/images/shapes/banner-1-shape-2.png);"></div>
    <div class="main-banner-one__shape-three" style="background-image: url(/assets/images/shapes/banner-1-shape-3.png);"></div>
    <div class="main-banner-one__shape-four" style="background-image: url(/assets/images/shapes/banner-1-shape-4.png);"></div>
    <div class="main-banner-one__shape-five" style="background-image: url(/assets/images/shapes/banner-1-shape-5.png);"></div>

    <div class="container-fluid px-lg-5">
      <div class="row align-items-center">
        <div class="col-xl-6">
          <div class="main-banner-one__content p-lg-4">
            <h5 class="main-banner-one__sub-title text-primary text-uppercase font-weight-bold mb-2">
              Digital MARKETING AGENCY
            </h5>
            <h1 class="main-banner-one__title display-4 font-weight-bold mb-4">
              We’re The Top <br />Agency In <br />Town
            </h1>
            <div class="main-banner-one__btn d-flex align-items-center gap-4">
              <NuxtLink class="growim-btn" to="/services">
                <span class="growim-btn__text">View Services</span>
                <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
              </NuxtLink>
              <a
                href="#"
                class="video-popup d-inline-flex align-items-center gap-2 text-dark font-weight-bold"
                @click.prevent="openVideo('https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1')"
              >
                <span class="btn btn-primary btn-sm rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                  <i class="fa fa-play text-white"></i>
                </span>
                Play Reel
              </a>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="main-banner-one__image position-relative mt-5 mt-xl-0">
            <div class="main-banner-one__image__bg" style="background-image: url(/assets/images/shapes/banner-image-bg.png);"></div>
            <img src="/assets/images/resources/banner-image-1.png" alt="Growim Digital" class="img-fluid" />

            <!-- Floating Client Stats Badges -->
            <div class="main-banner-one__image__clients position-absolute top-0 start-0 p-3 bg-white rounded shadow-sm d-flex align-items-center gap-2">
              <img src="/assets/images/resources/client-1-1.png" alt="Client" class="rounded-circle" width="30" />
              <img src="/assets/images/resources/client-1-2.png" alt="Client" class="rounded-circle" width="30" />
              <img src="/assets/images/resources/client-1-3.png" alt="Client" class="rounded-circle" width="30" />
              <span class="small font-weight-bold">1.5k Happy Clients</span>
            </div>

            <div class="main-banner-one__image__report position-absolute bottom-0 start-0 p-3 bg-dark text-white rounded shadow">
              <p class="small text-white-50 mb-0">Monthly Traffic</p>
              <h5 class="font-weight-bold mb-0 text-white">220,342.76 <span class="text-success small">+3.4%</span></h5>
            </div>
          </div>
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
