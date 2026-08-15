<template>
  <div class="mobile-nav__wrapper" :class="{ expanded: isMobileNavOpen }">
    <div class="mobile-nav__overlay mobile-nav__toggler" @click="closeMobileNav"></div>
    <!-- /.mobile-nav__overlay -->
    <div class="mobile-nav__content">
      <span class="mobile-nav__close mobile-nav__toggler" @click="closeMobileNav">
        <i class="fa fa-times"></i>
      </span>

      <div class="logo-box">
        <NuxtLink to="/" aria-label="logo image" @click="closeMobileNav">
          <img src="/assets/images/logo-light.png" width="155" alt="Growim" />
        </NuxtLink>
      </div>
      <!-- /.logo-box -->
      <div class="mobile-nav__container">
        <ul class="main-menu__list">
          <!-- Home -->
          <li class="dropdown" :class="{ expanded: openMenus.home }">
            <a href="#" @click.prevent="toggleMenu('home')">
              Home
              <button aria-label="dropdown toggler" :class="{ expanded: openMenus.home }">
                <i class="fa fa-angle-down"></i>
              </button>
            </a>
            <ul v-show="openMenus.home">
              <li><NuxtLink to="/" @click="closeMobileNav">Home Page 01</NuxtLink></li>
              <li><NuxtLink to="/about" @click="closeMobileNav">About Us</NuxtLink></li>
            </ul>
          </li>

          <!-- Pages -->
          <li class="dropdown" :class="{ expanded: openMenus.pages }">
            <a href="#" @click.prevent="toggleMenu('pages')">
              Pages
              <button aria-label="dropdown toggler" :class="{ expanded: openMenus.pages }">
                <i class="fa fa-angle-down"></i>
              </button>
            </a>
            <ul v-show="openMenus.pages">
              <li><NuxtLink to="/portfolio" @click="closeMobileNav">Our Portfolio</NuxtLink></li>
              <li><NuxtLink to="/portfolio/web-development" @click="closeMobileNav">Portfolio Details</NuxtLink></li>
              <li><NuxtLink to="/team" @click="closeMobileNav">Our Team</NuxtLink></li>
              <li><NuxtLink to="/team/sarah-albert" @click="closeMobileNav">Team Details</NuxtLink></li>
              <li><NuxtLink to="/faq" @click="closeMobileNav">FAQs</NuxtLink></li>
            </ul>
          </li>

          <!-- Services -->
          <li class="dropdown" :class="{ expanded: openMenus.services }">
            <a href="#" @click.prevent="toggleMenu('services')">
              Services
              <button aria-label="dropdown toggler" :class="{ expanded: openMenus.services }">
                <i class="fa fa-angle-down"></i>
              </button>
            </a>
            <ul v-show="openMenus.services">
              <li><NuxtLink to="/services" @click="closeMobileNav">Service Page</NuxtLink></li>
              <li><NuxtLink to="/services/digital-marketing" @click="closeMobileNav">Service Details</NuxtLink></li>
            </ul>
          </li>

          <!-- Shop -->
          <li class="dropdown" :class="{ expanded: openMenus.shop }">
            <a href="#" @click.prevent="toggleMenu('shop')">
              Shop
              <button aria-label="dropdown toggler" :class="{ expanded: openMenus.shop }">
                <i class="fa fa-angle-down"></i>
              </button>
            </a>
            <ul v-show="openMenus.shop">
              <li><NuxtLink to="/products" @click="closeMobileNav">Products Page</NuxtLink></li>
              <li><NuxtLink to="/products/1" @click="closeMobileNav">Product Details</NuxtLink></li>
              <li><NuxtLink to="/cart" @click="closeMobileNav">Cart</NuxtLink></li>
              <li><NuxtLink to="/checkout" @click="closeMobileNav">Checkout</NuxtLink></li>
            </ul>
          </li>

          <!-- News / Blog -->
          <li class="dropdown" :class="{ expanded: openMenus.blog }">
            <a href="#" @click.prevent="toggleMenu('blog')">
              News
              <button aria-label="dropdown toggler" :class="{ expanded: openMenus.blog }">
                <i class="fa fa-angle-down"></i>
              </button>
            </a>
            <ul v-show="openMenus.blog">
              <li><NuxtLink to="/blog" @click="closeMobileNav">Blog Grid</NuxtLink></li>
              <li><NuxtLink to="/blog/creative-strategy" @click="closeMobileNav">Blog Details</NuxtLink></li>
            </ul>
          </li>

          <!-- Contact -->
          <li>
            <NuxtLink to="/contact" @click="closeMobileNav">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <!-- /.mobile-nav__container -->

      <ul class="mobile-nav__contact list-unstyled">
        <li>
          <i class="fa fa-envelope"></i>
          <a href="mailto:needhelp@growim.com">needhelp@growim.com</a>
        </li>
        <li>
          <i class="fa fa-phone-alt"></i>
          <a href="tel:666-888-0000">666 888 0000</a>
        </li>
      </ul>
      <!-- /.mobile-nav__contact -->
      <div class="mobile-nav__social">
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
      <!-- /.mobile-nav__social -->
    </div>
    <!-- /.mobile-nav__content -->
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useNavigation } from '~/composables/useNavigation'

const { isMobileNavOpen, closeMobileNav } = useNavigation()

const openMenus = reactive<Record<string, boolean>>({
  home: false,
  pages: false,
  services: false,
  shop: false,
  blog: false
})

const toggleMenu = (key: string) => {
  openMenus[key] = !openMenus[key]
}
</script>
