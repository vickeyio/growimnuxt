<template>
  <section class="why-choose-two">
    <div class="why-choose-two__shape-one" style="background-image: url(/assets/images/shapes/why-choose-2-shape-1.png);"></div>
    <div class="why-choose-two__shape-two" style="background-image: url(/assets/images/shapes/why-choose-2-shape-2.png);"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6 d-flex align-items-center">
          <div class="why-choose-two__content">
            <div class="sec-title text-left">
              <h6 class="sec-title__tagline">SCALE YOUR INFRASTRUCTURE</h6>
              <h3 class="sec-title__title">Advanced Tech <span>Solutions</span> & Architecture</h3>
            </div>
            <p class="why-choose-two__content__text">
              Stop wrestling with legacy systems and manual deployments. We build scalable, modern cloud architectures
              and high-performance applications so your team can focus on growth.
            </p>
            <ul class="why-choose-two__list">
              <li>
                <div class="why-choose-two__list__icon">
                  <img src="/assets/images/shapes/about-1-icon-1.png" alt="crackit" />
                </div>
                <div class="why-choose-two__list__content">
                  <h3 class="why-choose-two__list__number">94%</h3>
                  <p class="why-choose-two__list__text">SMS Services</p>
                </div>
              </li>
              <li>
                <div class="why-choose-two__list__icon">
                  <img src="/assets/images/shapes/about-1-icon-2.png" alt="crackit" />
                </div>
                <div class="why-choose-two__list__content">
                  <h3 class="why-choose-two__list__number">65%</h3>
                  <p class="why-choose-two__list__text">Digital Solutions</p>
                </div>
              </li>
            </ul>
            <a class="growim-btn" href="#contact">
              <span class="growim-btn__text">get started</span>
              <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
            </a>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="why-choose-two__image">
            <div class="why-choose-two__image__shape-three" style="background-image: url(/assets/images/shapes/why-choose-2-shape-3.png);"></div>
            <div class="why-choose-two__image__shape-four" style="background-image: url(/assets/images/shapes/why-choose-2-shape-4.png);"></div>
            <div class="why-choose-two__image__circle" style="background-image: url(/assets/images/shapes/circle-logo.png);">
              <img src="/assets/images/shapes/circle-text.png" alt="crackit" />
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="why-choose-two__image__one">
                  <img src="/assets/images/resources/whysus.jpeg" alt="crackit" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="why-choose-two__image__two">
                  <img src="/assets/images/resources/whysus2.jpeg" alt="crackit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tint orange/yellow shapes to blue to match tech startup theme */
.why-choose-two__shape-one,
.why-choose-two__shape-two,
.why-choose-two__image__shape-three,
.why-choose-two__image__shape-four,
.why-choose-two__image__circle {
  filter: hue-rotate(190deg) saturate(1.2);
}
</style>
