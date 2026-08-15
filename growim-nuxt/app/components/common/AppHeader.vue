<template>
  <header
    class="main-header sticky-header sticky-header--normal"
    :class="{ 'sticky-header--cloned': isSticky }"
  >
    <div class="container-fluid">
      <div class="main-header__inner">
        <div class="main-header__inner__bg"></div>

        <!-- Brand Logo -->
        <div class="main-header__logo">
          <NuxtLink to="/">
            <img
              src="/assets/images/logo-dark.png"
              alt="Growim Logo"
              width="160"
              height="40"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Main Menu Navigation -->
        <nav class="main-header__nav main-menu">
          <ul class="main-menu__list">
            <!-- Home Megamenu -->
            <li class="megamenu dropdown" :class="{ current: isHomeActive }">
              <NuxtLink to="/">Home</NuxtLink>
              <ul>
                <li>
                  <section class="home-showcase py-3">
                    <div class="container">
                      <div class="home-showcase__inner">
                        <div class="row g-3">
                          <div
                            v-for="(demo, dIndex) in homeDemos"
                            :key="dIndex"
                            class="col-6 col-md-4 col-lg"
                          >
                            <div class="demo-one__card text-center">
                              <div class="demo-one__image position-relative rounded overflow-hidden shadow-sm">
                                <img
                                  :src="demo.image"
                                  :alt="demo.title"
                                  class="img-fluid w-100"
                                />
                                <div class="demo-one__btns d-flex flex-column gap-1 p-2 position-absolute start-0 end-0 bottom-0 bg-dark bg-opacity-75">
                                  <NuxtLink :to="demo.multiLink" class="btn btn-sm btn-primary text-white py-1">
                                    Multi Page
                                  </NuxtLink>
                                  <NuxtLink :to="demo.oneLink" class="btn btn-sm btn-outline-light py-1">
                                    One Page
                                  </NuxtLink>
                                </div>
                              </div>
                              <div class="demo-one__content mt-2">
                                <h6 class="demo-one__title mb-0">
                                  <NuxtLink :to="demo.multiLink" class="text-dark font-weight-bold">
                                    {{ demo.title }}
                                  </NuxtLink>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </li>
              </ul>
            </li>

            <!-- About -->
            <li :class="{ current: isActive('/about') }">
              <NuxtLink to="/about">About</NuxtLink>
            </li>

            <!-- Pages -->
            <li
              class="dropdown"
              :class="{
                current:
                  isActive('/portfolio') ||
                  isActive('/team') ||
                  isActive('/faq')
              }"
            >
              <a href="#">Pages</a>
              <ul>
                <li class="dropdown">
                  <NuxtLink to="/portfolio">Our Portfolio</NuxtLink>
                  <ul>
                    <li><NuxtLink to="/portfolio">Portfolio Grid</NuxtLink></li>
                    <li><NuxtLink to="/portfolio/creative-strategy">Portfolio Details</NuxtLink></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <NuxtLink to="/team">Our Team</NuxtLink>
                  <ul>
                    <li><NuxtLink to="/team">Team Grid</NuxtLink></li>
                    <li><NuxtLink to="/team/sarah-albert">Team Details</NuxtLink></li>
                  </ul>
                </li>
                <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
              </ul>
            </li>

            <!-- Services -->
            <li class="dropdown" :class="{ current: isActive('/services') }">
              <NuxtLink to="/services">Services</NuxtLink>
              <ul>
                <li><NuxtLink to="/services">Services Grid</NuxtLink></li>
                <li><NuxtLink to="/services/digital-marketing">Digital Marketing</NuxtLink></li>
                <li><NuxtLink to="/services/web-development">Web Development</NuxtLink></li>
                <li><NuxtLink to="/services/seo-optimized">SEO Optimization</NuxtLink></li>
              </ul>
            </li>

            <!-- Shop -->
            <li
              class="dropdown"
              :class="{
                current:
                  isActive('/products') ||
                  isActive('/cart') ||
                  isActive('/checkout')
              }"
            >
              <NuxtLink to="/products">Shop</NuxtLink>
              <ul>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
                <li><NuxtLink to="/products/1">Product Details</NuxtLink></li>
                <li><NuxtLink to="/cart">Cart</NuxtLink></li>
                <li><NuxtLink to="/checkout">Checkout</NuxtLink></li>
              </ul>
            </li>

            <!-- Blog -->
            <li class="dropdown" :class="{ current: isActive('/blog') }">
              <NuxtLink to="/blog">Blog</NuxtLink>
              <ul>
                <li><NuxtLink to="/blog">Blog Grid</NuxtLink></li>
                <li><NuxtLink to="/blog/business-strategy">Blog Details</NuxtLink></li>
              </ul>
            </li>

            <!-- Contact -->
            <li :class="{ current: isActive('/contact') }">
              <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Right Header Action Triggers -->
        <div class="main-header__right">
          <!-- Search Overlay Trigger -->
          <a
            href="#"
            class="search-toggler main-header__search"
            aria-label="Open search popup"
            @click.prevent="openSearch"
          >
            <i class="flaticon-search"></i>
          </a>

          <!-- Cart Badge Trigger -->
          <NuxtLink to="/cart" class="main-header__cart" aria-label="View shopping cart">
            <i class="flaticon-cart"></i>
            <span class="main-header__cart__count">{{ cartCount }}</span>
          </NuxtLink>

          <!-- Sidebar Drawer Trigger -->
          <a
            href="#"
            class="main-header__sidebar-btn sidebar-btn__toggler"
            aria-label="Toggle sidebar drawer"
            @click.prevent="openSidebar"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>

          <!-- Contact Phone Widget -->
          <div class="main-header__right__contact d-none d-xl-flex">
            <div class="main-header__right__contact__icon">
              <i class="flaticon-phone"></i>
            </div>
            <div class="main-header__right__contact__content">
              <span>Need help? Talk to us</span>
              <a href="tel:+2085550112">+208-555-0112</a>
            </div>
          </div>

          <!-- Mobile Nav Hamburger Trigger -->
          <div
            class="mobile-nav__btn mobile-nav__toggler d-lg-none"
            aria-label="Toggle mobile menu"
            @click="openMobile"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useNavigation } from '~/composables/useNavigation'
import { useCart } from '~/composables/useCart'

const route = useRoute()
const { openMobile, openSearch, openSidebar } = useNavigation()
const { cartCount } = useCart()

const isSticky = ref(false)

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isSticky.value = window.scrollY > 130
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isActive = (path: string) => {
  return route.path === path || route.path.startsWith(path + '/')
}

const isHomeActive = computed(() => {
  return (
    route.path === '/' ||
    route.path.startsWith('/index-')
  )
})

const homeDemos = [
  {
    title: 'Home 01',
    image: '/assets/images/growim-landing/home-1.jpg',
    multiLink: '/',
    oneLink: '/index-one-page'
  },
  {
    title: 'Home 02',
    image: '/assets/images/growim-landing/home-2.jpg',
    multiLink: '/index-2',
    oneLink: '/index-2-one-page'
  },
  {
    title: 'Home 03',
    image: '/assets/images/growim-landing/home-3.jpg',
    multiLink: '/index-3',
    oneLink: '/index-3-one-page'
  },
  {
    title: 'Home 04',
    image: '/assets/images/growim-landing/home-4.jpg',
    multiLink: '/index-4',
    oneLink: '/index-4-one-page'
  },
  {
    title: 'Home 05',
    image: '/assets/images/growim-landing/home-1.jpg',
    multiLink: '/index-5',
    oneLink: '/index-5-one-page'
  }
]
</script>
