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
          <li><NuxtLink to="/about" @click="closeMobileNav">About</NuxtLink></li>
          <li><NuxtLink to="/services" @click="closeMobileNav">Services</NuxtLink></li>
          <li><NuxtLink to="/portfolio" @click="closeMobileNav">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/contact" @click="closeMobileNav">Contact</NuxtLink></li>
        </ul>
      </div>
      <ul class="mobile-nav__contact list-unstyled">
        <li>
          <i class="fa fa-envelope"></i>
          <a :href="`mailto:${info?.email || 'info@crackit.co.ke'}`">{{ info?.email || 'info@crackit.co.ke' }}</a>
        </li>
        <li>
          <i class="fa fa-phone-alt"></i>
          <a :href="`tel:${info?.phoneClean || info?.phone || '+254708365365'}`">{{ info?.phone || '+254-708-365-365' }}</a>
        </li>
      </ul>
      <div class="mobile-nav__social">
        <a :href="info?.socialLinks?.facebook || 'https://facebook.com'" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
        <a :href="info?.socialLinks?.twitter || 'https://twitter.com'" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a>
        <a :href="info?.socialLinks?.linkedin || 'https://linkedin.com'" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
        <a v-if="info?.socialLinks?.youtube" :href="info.socialLinks.youtube" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNavigation } from '~/composables/useNavigation'

const { isMobileNavOpen, closeMobileNav } = useNavigation()
const { getContactInfo } = useContact()
const { data: contactResponse } = await getContactInfo()
const info = computed(() => contactResponse.value?.data)
</script>
