<template>
  <footer class="main-footer main-footer--home-five">
    <div class="main-footer__bg" style="background-image: url(/assets/images/shapes/footer-bg-1-1.png);"></div>
    <div class="main-footer__shape" style="background-image: url(/assets/images/shapes/footer-1-shape-1.png);"></div>
    <!-- /.main-footer__bg -->
    <div class="main-footer__top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-xl-5">
            <div class="footer-widget footer-widget--about">
              <NuxtLink to="/" class="footer-widget__logo">
                <img src="/assets/images/logo-light.png" width="160" alt="Crackit" />
              </NuxtLink>
              <p class="footer-widget__text">
                Empowering businesses with innovative technology solutions for growth, visibility, and long-term impact.
              </p>
            </div><!-- /.footer-widget -->
          </div><!-- /.col-md-6 -->

          <div class="col-md-6 col-xl-3">
            <div class="footer-widget footer-widget--links">
              <h2 class="footer-widget__title">Explore</h2><!-- /.footer-widget__title -->
              <ul class="list-unstyled footer-widget__links">
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/services">Services</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
              </ul><!-- /.list-unstyled footer-widget__links -->
            </div><!-- /.footer-widget -->
          </div><!-- /.col-md-6 -->

          <div class="col-md-6 col-xl-4">
            <div class="footer-widget footer-widget--contact">
              <h2 class="footer-widget__title">Contact us</h2><!-- /.footer-widget__title -->
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
            <li><NuxtLink to="/contact">All rights reserved</NuxtLink></li>
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

.main-footer__top {
  padding-top: 90px;
  padding-bottom: 20px;
}

.main-footer__top .row {
  align-items: flex-start;
}

.footer-widget {
  height: 100%;
}

.footer-widget--links,
.footer-widget--contact {
  padding-top: 8px;
}

.footer-widget__text {
  margin-bottom: 0;
}

.footer-widget__title {
  margin-bottom: 30px;
}

.footer-widget__title::after,
.footer-widget__title::before {
  bottom: -18px;
}

.footer-widget__links,
.footer-widget__info {
  margin-top: 0;
  margin-bottom: 0;
}

.footer-widget__links li,
.footer-widget__info li {
  margin-bottom: 16px;
}

.footer-widget__links li:last-child,
.footer-widget__info li:last-child {
  margin-bottom: 0;
}

.main-footer__bottom__inner {
  padding: 16px 0;
}

@media (min-width: 1200px) {
  .footer-widget--links {
    margin-right: 0;
    padding-left: 18px;
  }

  .footer-widget--contact {
    padding-left: 30px;
  }
}

@media (max-width: 767px) {
  .main-footer__top {
    padding-top: 60px;
  }
}
</style>
