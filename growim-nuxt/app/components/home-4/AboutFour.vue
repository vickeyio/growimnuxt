<template>
  <section class="about-four py-5 position-relative">
    <div class="about-four__bg" style="background-image: url(/assets/images/shapes/about-4-bg.png);"></div>
    <div class="container">
      <div class="row gutter-y-40 align-items-center">
        <div class="col-lg-6">
          <div class="about-four__content">
            <div class="sec-title text-left mb-3">
              <h6 class="sec-title__tagline">ABOUT US</h6>
              <h3 class="sec-title__title">We’re Strategic Digital Marketing Agency</h3>
            </div>
            <p class="about-four__content__text text-muted mb-4">
              In order to scale new customer acquisition and retention for e-commerce and SaaS companies, we build tailored multi-channel strategies.
            </p>
            <div class="about-four__image position-relative rounded overflow-hidden shadow-sm">
              <img src="/assets/images/resources/about-4-1.jpg" alt="Growim Strategy" class="img-fluid w-100" />
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="about-four__content about-four__content--right">
            <div class="about-four__image mb-4 position-relative rounded overflow-hidden shadow-sm">
              <img src="/assets/images/resources/about-4-2.jpg" alt="Growim Team" class="img-fluid w-100" />
            </div>
            <ul class="about-four__content__list list-unstyled mb-4">
              <li class="d-flex align-items-center gap-2 mb-2"><i class="flaticon-check-two text-primary"></i>Various data analysis options</li>
              <li class="d-flex align-items-center gap-2 mb-2"><i class="flaticon-check-two text-primary"></i>Advanced algorithmic marketing modeling</li>
              <li class="d-flex align-items-center gap-2"><i class="flaticon-check-two text-primary"></i>Sub-second Core Web Vitals optimization</li>
            </ul>
            <NuxtLink to="/about" class="growim-btn">
              <span class="growim-btn__text">More About Us</span>
              <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
