<template>
  <section class="video-one py-5 position-relative">
    <div class="video-one__bg" style="background-image: url(/assets/images/shapes/video-bg-1-1.png);"></div>
    <div class="container">
      <div class="row align-items-center mb-4">
        <div class="col-xl-6">
          <div class="sec-title text-left mb-0">
            <h6 class="sec-title__tagline">DIGITAL AGENCY</h6>
            <h3 class="sec-title__title">Let’s Tell Your Brand Strategy Experiences</h3>
          </div>
        </div>
        <div class="col-xl-6 mt-4 mt-xl-0">
          <ul class="video-one__counter list-unstyled d-flex justify-content-between text-center">
            <li>
              <h3 class="font-weight-bold text-primary display-6 mb-0">20.5K</h3>
              <p class="text-muted small mb-0">Projects Done</p>
            </li>
            <li>
              <h3 class="font-weight-bold text-primary display-6 mb-0">100.5K</h3>
              <p class="text-muted small mb-0">Happy Clients</p>
            </li>
            <li>
              <h3 class="font-weight-bold text-primary display-6 mb-0">150+</h3>
              <p class="text-muted small mb-0">Team Experts</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Video Banner Box -->
      <div class="video-one__wrapper position-relative rounded overflow-hidden shadow mt-4 text-center">
        <img src="/assets/images/backgrounds/video-bg-1-1.jpg" alt="Video presentation" class="img-fluid w-100" />
        <a
          href="#"
          class="video-popup position-absolute top-50 start-50 translate-middle btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
          style="width: 80px; height: 80px;"
          @click.prevent="openVideo('https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1')"
        >
          <i class="fa fa-play text-white fa-2x"></i>
        </a>
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
