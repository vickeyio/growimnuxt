<template>
  <section class="about-three py-5 position-relative">
    <div class="about-three__bg" style="background-image: url(/assets/images/shapes/about-3-bg.png);"></div>
    <div class="container">
      <div class="row align-items-center gutter-y-40">
        <div class="col-xl-6">
          <div class="about-three__image-wrapper position-relative">
            <div class="about-three__image">
              <img src="/assets/images/resources/about-3-1.png" alt="Growim Presentation" class="img-fluid" />
            </div>
            <div class="about-three__image-wrapper__shape-two position-absolute bottom-0 end-0">
              <img src="/assets/images/resources/about-3-2.jpg" alt="Secondary" class="img-fluid rounded shadow" width="220" />
            </div>
            <div class="about-three__image-wrapper__rating position-absolute top-0 start-0 p-3 bg-white rounded shadow-sm">
              <div class="text-warning small mb-1"><i class="flaticon-star"></i> 5 Stars</div>
              <h6 class="mb-0 font-weight-bold">Read Our <NuxtLink to="/about" class="text-primary">Success Stories</NuxtLink></h6>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="about-three__content">
            <div class="sec-title text-left mb-4">
              <h6 class="sec-title__tagline">ABOUT US</h6>
              <h3 class="sec-title__title">We’re Strategic Digital Marketing Agency</h3>
            </div>
            <p class="about-three__content__text text-muted mb-4">
              In order to scale new customer acquisition and retention for enterprise brands, we work across the entire customer journey with precision analytics and iterative sprint execution.
            </p>
            <ul class="about-three__list list-unstyled mb-4">
              <li class="d-flex align-items-center gap-2 mb-2">
                <i class="flaticon-check-two text-primary"></i>
                <span>Deep audience intelligence & intent analysis</span>
              </li>
              <li class="d-flex align-items-center gap-2 mb-2">
                <i class="flaticon-check-two text-primary"></i>
                <span>Sub-second page load times with Nuxt 4 SSR</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="flaticon-check-two text-primary"></i>
                <span>Advanced multi-channel attribution modeling</span>
              </li>
            </ul>
            <NuxtLink class="growim-btn" to="/about">
              <span class="growim-btn__text">About Us</span>
              <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
