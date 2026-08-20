<template>
  <aside class="sidebar-one" :class="{ active: isSidebarOpen }">
    <div class="sidebar-one__overlay" @click="closeSidebar"></div>
    <div class="sidebar-one__content">
      <div class="sidebar-one__close" @click="closeSidebar">
        <i class="flaticon-close"></i>
      </div>
      <div class="sidebar-one__logo">
        <NuxtLink to="/" aria-label="logo image" @click="closeSidebar">
          <img src="/assets/images/logo-2-light.png" alt="growim" width="160" />
        </NuxtLink>
      </div>
      <p class="sidebar-one__text">
        Growim is a creative digital marketing agency dedicated to scaling brands with high-performance SEO, modern design, and cutting-edge web technologies.
      </p>
      <h4 class="sidebar-one__title">Contact Info:</h4>
      <ul class="sidebar-one__info">
        <li>
          <span class="fas fa-map-marker-alt"></span>
          85 Ketch Harbour Road, Bensalem, PA 19020
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
      <h4 class="sidebar-one__title">Newsletter:</h4>
      <form class="sidebar-one__newsletter mc-form" @submit.prevent="handleSubscribe">
        <input v-model="email" type="email" name="EMAIL" placeholder="Email address" required />
        <button type="submit" class="flaticon-paper-plan">
          <span class="sr-only">submit</span>
        </button>
      </form>
      <p v-if="subscribed" class="mt-2 text-success small">Thank you for subscribing!</p>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNavigation } from '~/composables/useNavigation'

const { isSidebarOpen, closeSidebar } = useNavigation()
const email = ref('')
const subscribed = ref(false)

const handleSubscribe = () => {
  if (email.value) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => {
      subscribed.value = false
    }, 4000)
  }
}
</script>
