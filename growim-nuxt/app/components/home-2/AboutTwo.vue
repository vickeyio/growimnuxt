<template>
  <section class="about-two">
    <div class="about-two__shape-one" style="background-image: url(/assets/images/shapes/about-2-shape-1.png);"></div>
    <div class="about-two__shape-two" style="background-image: url(/assets/images/shapes/about-2-shape-2.png);"></div>
    <div class="about-two__shape-three" style="background-image: url(/assets/images/shapes/about-2-shape-3.png);"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="about-two__image-wrapper">
            <div class="about-two__image">
              <img src="/assets/images/resources/about-2-1.jpg" alt="Growim Agency" class="img-fluid rounded" />
            </div>
            <div class="about-two__image-wrapper__shape-one" style="background-image: url(/assets/images/shapes/about-2-shape-4.png);"></div>
            <div class="about-two__image-wrapper__shape-two" style="background-image: url(/assets/images/shapes/about-2-shape-5.png);"></div>
            <div class="about-two__experiance count-box">
              <div class="about-two__experiance__border"></div>
              <div class="about-two__experiance__inner">
                <div class="about-two__experiance__years">
                  <span class="count-text">25</span>+
                </div>
                <p class="about-two__experiance__text">years of experience</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center">
          <div class="about-two__content">
            <div class="sec-title text-left">
              <h6 class="sec-title__tagline">About Us</h6>
              <h3 class="sec-title__title">We’re Strategic Digital <span>Marketing</span> Agency</h3>
            </div>
            <p class="about-two__content__text text-muted">
              In order to scale new customer acquisition and retention for e-commerce and SaaS brands, we work across the entire customer journey with measurable impact.
            </p>
            <ul class="about-two__list list-unstyled d-flex gap-4 my-4">
              <li>
                <h3 class="about-two__list__number text-primary font-weight-bold">200+</h3>
                <p class="about-two__list__text mb-0">Successful marketing<br /> campaigns</p>
              </li>
              <li>
                <h3 class="about-two__list__number text-primary font-weight-bold">75%</h3>
                <p class="about-two__list__text mb-0">Average increase in<br /> website traffic</p>
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
