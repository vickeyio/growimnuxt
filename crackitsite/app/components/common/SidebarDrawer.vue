<template>
  <aside class="sidebar-one" :class="{ active: isSidebarOpen }">
    <div class="sidebar-one__overlay" @click="closeSidebar"></div>
    <div class="sidebar-one__content">
      <div class="sidebar-one__close" @click="closeSidebar">
        <i class="flaticon-close"></i>
      </div>
      <div class="sidebar-one__logo">
        <NuxtLink to="/" aria-label="logo image" @click="closeSidebar">
          <img src="/assets/images/logo-2-light.png" alt="Crackit" width="160" />
        </NuxtLink>
      </div>
      <p class="sidebar-one__text">
        Mauris ut enim sit amet lacus ornare ullamcor. Praesent placerat nequ
        puru rhoncu tincidunt odio ultrices. Sed feugiat feugiat felis.
      </p>
      <h4 class="sidebar-one__title">Contact Info:</h4>
      <ul class="sidebar-one__info">
        <li>
          <span class="fas fa-map-marker-alt"></span>
          85 Ketch Harbour RoadBensalem, PA 19020
        </li>
        <li>
          <span class="fas fa-envelope"></span>
          <a href="mailto:needhelp@company.com">needhelp@company.com</a>
        </li>
        <li>
          <span class="fas fa-phone-alt"></span>
          <a href="tel:09969569535">099 695 695 35</a>
        </li>
      </ul>
      <div class="sidebar-one__social">
        <a href="https://facebook.com" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://youtube.com" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
      </div>
      <h4 class="sidebar-one__title">Newsletter:</h4>
      <form class="sidebar-one__newsletter mc-form" @submit.prevent="handleSubscribe">
        <input v-model="email" type="text" name="EMAIL" placeholder="Email address" />
        <button type="submit" class="flaticon-paper-plan">
          <span class="sr-only">submit</span>
        </button>
      </form>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNavigation } from '~/composables/useNavigation'

const { isSidebarOpen, closeSidebar } = useNavigation()
const email = ref('')

const handleSubscribe = () => {
  email.value = ''
  closeSidebar()
}
</script>
