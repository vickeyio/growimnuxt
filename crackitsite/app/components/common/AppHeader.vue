<template>
  <div>
    <!-- Main in-page Header -->
    <header class="main-header main-header--two">
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

    <!-- Sticky Cloned Header -->
    <header
      class="main-header main-header--two sticky-header--cloned"
      :class="{ active: isSticky }"
      :aria-hidden="!isSticky"
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
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useNavigation } from '~/composables/useNavigation'

const { isDemoMenuOpen, openMobileNav, openSearch, openSidebar } = useNavigation()
const isSticky = ref(false)

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isSticky.value = window.scrollY > 130
  }
}

watch(isDemoMenuOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.classList.toggle('megamenu-popup-active', open)
  }
})

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (typeof document !== 'undefined') {
    document.body.classList.remove('megamenu-popup-active')
  }
})
</script>
