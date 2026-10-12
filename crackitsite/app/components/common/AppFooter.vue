<template>
  <footer class="main-footer main-footer--home-five">
    <div class="main-footer__bg" style="background-image: url(/assets/images/shapes/footer-bg-1-1.png);"></div>
    <div class="main-footer__shape" style="background-image: url(/assets/images/shapes/footer-1-shape-1.png);"></div>
    <!-- /.main-footer__bg -->
    <div class="main-footer__top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xl-4">
            <div class="footer-widget footer-widget--about">
              <NuxtLink to="/" class="footer-widget__logo">
                <img src="/assets/images/logo-light.png" width="160" alt="Crackit" />
              </NuxtLink>
              <p class="footer-widget__text">
                Empowering businesses with innovative technology solutions. We craft websites, apps, and strategies that drive growth and deliver results. 
              </p>
              <NuxtLink class="growim-btn growim-btn--white" to="/contact">
                <span class="growim-btn__text">Contact Us</span>
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
              </div><!-- /.footer-widget__social -->
            </div><!-- /.footer-widget -->
          </div><!-- /.col-md-6 -->
          <div class="col-md-6 col-xl-2">
            <div class="footer-widget">
              <h2 class="footer-widget__title">Quick Link</h2><!-- /.footer-widget__title -->
              <ul class="list-unstyled footer-widget__links">
                <li><NuxtLink to="/about">Growim About</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                <li><a href="#blog">Blog &amp; News</a></li>
                <li><a href="#pricing">FAQ'S</a></li>
                <li><NuxtLink to="/contact">Login / Register</NuxtLink></li>
              </ul><!-- /.list-unstyled footer-widget__links -->
            </div><!-- /.footer-widget -->
          </div><!-- /.col-md-6 -->
          <div class="col-md-6 col-xl-2">
            <div class="footer-widget footer-widget--links">
              <h2 class="footer-widget__title">our services</h2><!-- /.footer-widget__title -->
              <ul class="list-unstyled footer-widget__links">
                <li><NuxtLink to="/services">digital marketing</NuxtLink></li>
                <li><NuxtLink to="/services">web development</NuxtLink></li>
                <li><NuxtLink to="/services">SEO optimized</NuxtLink></li>
                <li><NuxtLink to="/services">App Development</NuxtLink></li>
                <li><NuxtLink to="/services">Email Marketing</NuxtLink></li>
              </ul><!-- /.list-unstyled footer-widget__links -->
            </div><!-- /.footer-widget -->
          </div><!-- /.col-md-6 -->
          <div class="col-md-6 col-xl-4">
            <div class="footer-widget footer-widget--contact">
              <h2 class="footer-widget__title">contact us</h2><!-- /.footer-widget__title -->
              <ul class="list-unstyled footer-widget__info">
                <li><i class="flaticon-pin"></i>Moi Avenue, Mombasa, Kenya</li>
                <li><i class="flaticon-phone"></i><a href="tel:+254708365365">+254-708-365-365</a></li>
                <li><i class="flaticon-email"></i><a href="mailto:info@crackit.co.ke">info@crackit.co.ke</a></li>
              </ul><!-- /.list-unstyled -->
            </div><!-- /.footer-widget -->
          </div><!-- /.col-md-6 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </div><!-- /.main-footer__top -->
    <div class="main-footer__bottom">
      <div class="container">
        <div class="main-footer__bottom__inner">
          <p class="main-footer__copyright">
            &copy; Copyright {{ year }} by Crackit.
          </p>
          <ul class="main-footer__bottom__menu">
            <li><NuxtLink to="/contact">Terms &amp; Conditions</NuxtLink></li>
            <li><NuxtLink to="/contact">Privacy Policy</NuxtLink></li>
          </ul>
        </div><!-- /.main-footer__inner -->
      </div><!-- /.container -->
    </div><!-- /.main-footer__bottom -->
  </footer><!-- /.main-footer -->
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
/* Tint orange/yellow background shapes to blue to match tech startup theme */
.main-footer__bg {
  filter: hue-rotate(190deg) saturate(1.2);
}

.main-footer__shape {
  filter: hue-rotate(190deg) saturate(1.2);
}
</style>
