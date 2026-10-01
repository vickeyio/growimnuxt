<template>
  <div class="mobile-nav__wrapper" :class="{ expanded: isMobileNavOpen }">
    <div class="mobile-nav__overlay mobile-nav__toggler" @click="closeMobileNav"></div>
    <div class="mobile-nav__content">
      <span class="mobile-nav__close mobile-nav__toggler" @click="closeMobileNav">
        <i class="fa fa-times"></i>
      </span>
      <div class="logo-box">
        <NuxtLink to="/" aria-label="logo image" @click="closeMobileNav">
          <img src="/assets/images/logo-light.png" width="155" alt="Crackit" />
        </NuxtLink>
      </div>
      <div class="mobile-nav__container">
        <ul class="main-menu__list">
          <li><NuxtLink to="/" @click="closeMobileNav">Home</NuxtLink></li>
          <li><a href="#about" @click="closeMobileNav">About</a></li>
          <li><a href="#services" @click="closeMobileNav">Services</a></li>
          <li><a href="#portfolio" @click="closeMobileNav">Portfolio</a></li>
          <li><a href="#team" @click="closeMobileNav">Team</a></li>
          <li><a href="#blog" @click="closeMobileNav">News</a></li>
          <li><a href="#contact" @click="closeMobileNav">Contact</a></li>
        </ul>
      </div>
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
      <div class="mobile-nav__social">
        <a href="https://facebook.com" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://youtube.com" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavigation } from '~/composables/useNavigation'

const { isMobileNavOpen, closeMobileNav } = useNavigation()
</script>
