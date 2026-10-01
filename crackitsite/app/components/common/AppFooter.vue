<template>
  <footer class="main-footer-two" style="background-image: url(/assets/images/shapes/footer-bg-2-1.png);">
    <div class="main-footer-two__bg"></div>
    <div class="main-footer-two__shape" style="background-image: url(/assets/images/shapes/footer-2-shape-1.png);"></div>
    <div class="main-footer-two__top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xl-4">
            <div class="footer-widget footer-widget--about">
              <NuxtLink to="/" class="footer-widget__logo">
                <img src="/assets/images/logo-2-dark.png" width="160" alt="Crackit" />
              </NuxtLink>
              <div class="footer-widget__social">
                <p class="footer-widget__social__text">Follow on</p>
                <a href="https://facebook.com" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://youtube.com" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-2">
            <div class="footer-widget">
              <h2 class="footer-widget__title">Quick Link</h2>
              <ul class="list-unstyled footer-widget__links">
                <li><a href="#about">Growim About</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#blog">Blog & News</a></li>
                <li><a href="#pricing">FAQ’S</a></li>
                <li><a href="#contact">Login / Register</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-xl-2">
            <div class="footer-widget footer-widget--links">
              <h2 class="footer-widget__title">our services</h2>
              <ul class="list-unstyled footer-widget__links">
                <li><a href="#services">digital marketing</a></li>
                <li><a href="#services">web development</a></li>
                <li><a href="#services">SEO optimized</a></li>
                <li><a href="#services">App Development</a></li>
                <li><a href="#services">Email Marketing</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="footer-widget footer-widget--mailchimp">
              <h2 class="footer-widget__title">Subscribe Newsletter</h2>
              <form class="mc-form" @submit.prevent>
                <input v-model="email" type="text" name="EMAIL" placeholder="Enter Email Address" />
                <button type="submit" class="flaticon-paper-plan">
                  <span class="sr-only">submit</span>
                </button>
              </form>
              <div class="mc-form__response"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-footer-two__bottom">
      <div class="container">
        <div class="main-footer-two__bottom__inner">
          <p class="main-footer-two__copyright">
            &copy; Copyright {{ year }} by Crackit.
          </p>
          <ul class="main-footer-two__bottom__menu">
            <li><a href="#contact">Terms & Conditions</a></li>
            <li><a href="#contact">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const year = new Date().getFullYear()
</script>
