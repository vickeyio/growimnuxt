<template>
  <footer class="main-footer">
    <div
      class="main-footer__bg"
      style="background-image: url(/assets/images/shapes/footer-bg-1-1.png);"
    ></div>
    <div
      class="main-footer__shape"
      style="background-image: url(/assets/images/shapes/footer-1-shape-1.png);"
    ></div>
    <!-- /.main-footer__bg -->
    <div class="main-footer__top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xl-4">
            <div class="footer-widget footer-widget--about">
              <NuxtLink to="/" class="footer-widget__logo">
                <img src="/assets/images/logo-light.png" width="160" alt="Growim Nuxt Template" />
              </NuxtLink>
              <p class="footer-widget__text">
                Growim is an award-winning creative digital marketing agency dedicated to scaling brands with high-performance SEO, modern design, and cutting-edge web technologies.
              </p>
              <NuxtLink class="growim-btn growim-btn--white" to="/contact">
                <span class="growim-btn__text">Contact Us</span>
                <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
              </NuxtLink>
              <div class="footer-widget__social">
                <p class="footer-widget__social__text">Follow on</p>
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
              <!-- /.footer-widget__social -->
            </div>
            <!-- /.footer-widget -->
          </div>
          <!-- /.col-md-6 -->
          <div class="col-md-6 col-xl-2">
            <div class="footer-widget">
              <h2 class="footer-widget__title">Quick Links</h2>
              <ul class="list-unstyled footer-widget__links">
                <li><NuxtLink to="/about">Growim About</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                <li><NuxtLink to="/blog">Blog & News</NuxtLink></li>
                <li><NuxtLink to="/faq">FAQs</NuxtLink></li>
                <li><NuxtLink to="/products">Shop Catalog</NuxtLink></li>
              </ul>
            </div>
            <!-- /.footer-widget -->
          </div>
          <!-- /.col-md-6 -->
          <div class="col-md-6 col-xl-2">
            <div class="footer-widget footer-widget--links">
              <h2 class="footer-widget__title">Our Services</h2>
              <ul class="list-unstyled footer-widget__links">
                <li><NuxtLink to="/services/digital-marketing">Digital Marketing</NuxtLink></li>
                <li><NuxtLink to="/services/web-development">Web Development</NuxtLink></li>
                <li><NuxtLink to="/services/seo-optimized">SEO Optimized</NuxtLink></li>
                <li><NuxtLink to="/services/app-development">App Development</NuxtLink></li>
                <li><NuxtLink to="/services/email-marketing">Email Marketing</NuxtLink></li>
              </ul>
            </div>
            <!-- /.footer-widget -->
          </div>
          <!-- /.col-md-6 -->
          <div class="col-md-6 col-xl-4">
            <div class="footer-widget footer-widget--contact">
              <h2 class="footer-widget__title">Contact Us</h2>
              <ul class="list-unstyled footer-widget__info">
                <li>
                  <i class="flaticon-pin"></i>
                  Gregory Cartwright, 4059 Carling Avenue, Ugglebarnby YO22 3NJ
                </li>
                <li>
                  <i class="flaticon-phone"></i>
                  <a href="tel:+61086660112">+6108-666-0112</a>
                </li>
                <li>
                  <i class="flaticon-email"></i>
                  <a href="mailto:info@growim.com">info@growim.com</a>
                </li>
              </ul>
            </div>
            <!-- /.footer-widget -->
          </div>
          <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.main-footer__top -->
    <div class="main-footer__bottom">
      <div class="container">
        <div class="main-footer__bottom__inner">
          <p class="main-footer__copyright">
            &copy; Copyright {{ currentYear }} by Growim Nuxt Application.
          </p>
          <ul class="main-footer__bottom__menu">
            <li><NuxtLink to="/faq">Terms & Conditions</NuxtLink></li>
            <li><NuxtLink to="/contact">Privacy Policy</NuxtLink></li>
          </ul>
        </div>
        <!-- /.main-footer__inner -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.main-footer__bottom -->
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
