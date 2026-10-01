<template>
  <header
    class="main-header main-header--two sticky-header sticky-header--normal"
    :class="{ 'sticky-header--cloned': isSticky }"
  >
    <div class="container-fluid">
      <div class="main-header__inner">
        <div class="main-header__inner__bg"></div>
        <div class="main-header__logo">
          <NuxtLink to="/">
            <img src="/assets/images/logo-2-light.png" alt="Crackit" width="160" />
          </NuxtLink>
        </div>
        <nav class="main-header__nav main-menu">
          <ul class="main-menu__list">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/services">Services</NuxtLink></li>

            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </nav>
        <div class="main-header__right">
          <div class="mobile-nav__btn mobile-nav__toggler" @click="openMobileNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#" class="search-toggler main-header__search" @click.prevent="openSearch">
            <i class="flaticon-search" aria-hidden="true"></i>
            <span class="sr-only">Search</span>
          </a>
          <a href="#" class="main-header__toggler" @click.prevent="openSidebar">
            <span class="flaticon-menu"></span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useNavigation } from '~/composables/useNavigation'

const { isDemoMenuOpen, toggleDemoMenu, closeDemoMenu, openMobileNav, openSearch, openSidebar } = useNavigation()
const isSticky = ref(false)

const handleScroll = () => {
  isSticky.value = window.scrollY > 130
}

watch(isDemoMenuOpen, (open) => {
  document.body.classList.toggle('megamenu-popup-active', open)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.classList.remove('megamenu-popup-active')
})

const homeDemos = [
  { title: 'Home Page 01', image: '/assets/images/growim-landing/home-1.jpg' },
  { title: 'Home Page 02', image: '/assets/images/growim-landing/home-2.jpg' },
  { title: 'Home Page 03', image: '/assets/images/growim-landing/home-3.jpg' },
  { title: 'Home Page 04', image: '/assets/images/growim-landing/home-4.jpg' },
  { title: 'Home Page 05', image: '/assets/images/growim-landing/home-5.jpg' }
]
</script>
