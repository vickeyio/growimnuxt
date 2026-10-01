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
            <li class="megamenu megamenu-clickable megamenu-clickable--toggler">
              <a href="#" @click.prevent="toggleDemoMenu">Demos</a>
              <ul :class="{ 'megamenu-clickable--active': isDemoMenuOpen }">
                <li>
                  <div class="megamenu-popup">
                    <a href="#" class="megamenu-clickable--close" @click.prevent="closeDemoMenu">
                      <span class="icon-close"></span>
                    </a>
                    <div class="megamenu-popup__content">
                      <div class="demo-one">
                        <div class="container">
                          <div class="row">
                            <div v-for="demo in homeDemos" :key="demo.title" class="col-md-6 col-lg-4">
                              <div class="demo-one__card">
                                <div class="demo-one__image">
                                  <img :src="demo.image" :alt="demo.title" />
                                  <div class="demo-one__btns">
                                    <NuxtLink to="/" class="growim-btn demo-one__btn" @click="closeDemoMenu">
                                      <span class="growim-btn__text">Home Page</span>
                                    </NuxtLink>
                                  </div>
                                </div>
                                <div class="demo-one__content">
                                  <h3 class="demo-one__title">
                                    <NuxtLink to="/" @click="closeDemoMenu">{{ demo.title }}</NuxtLink>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li><a href="#about">About</a></li>
            <li class="dropdown">
              <a href="#">Pages</a>
              <ul>
                <li class="dropdown">
                  <a href="#">Portfolio Page</a>
                  <ul class="sub-menu">
                    <li><a href="#portfolio">Our Portfolio</a></li>
                    <li><a href="#portfolio">Portfolio Details</a></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Team Page</a>
                  <ul class="sub-menu">
                    <li><a href="#team">Our Team</a></li>
                    <li><a href="#team">Team Details</a></li>
                  </ul>
                </li>
                <li><a href="#pricing">FAQs</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#services">Services</a>
              <ul>
                <li><a href="#services">Service Page</a></li>
                <li><a href="#services">Service Details</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#">Shop</a>
              <ul class="sub-menu">
                <li><a href="#pricing">Products Page</a></li>
                <li><a href="#pricing">Product details</a></li>
                <li><a href="#contact">Cart</a></li>
                <li><a href="#contact">Checkout</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#blog">News</a>
              <ul class="sub-menu">
                <li><a href="#blog">Blog Grid</a></li>
                <li><a href="#blog">Blog Standar</a></li>
                <li><a href="#blog">Blog Details</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
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
          <a href="#pricing" class="main-header__cart">
            <i class="flaticon-cart" aria-hidden="true"></i>
            <span class="sr-only">Cart</span>
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
