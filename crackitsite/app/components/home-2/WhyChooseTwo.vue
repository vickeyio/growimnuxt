<template>
  <section class="why-choose-two">
    <div class="why-choose-two__shape-one" style="background-image: url(/assets/images/shapes/why-choose-2-shape-1.png);"></div>
    <div class="why-choose-two__shape-two" style="background-image: url(/assets/images/shapes/why-choose-2-shape-2.png);"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6 d-flex align-items-center">
          <div class="why-choose-two__content">
            <div class="sec-title text-left">
              <h6 class="sec-title__tagline">{{ whyChoose?.tagline }}</h6>
              <h3 class="sec-title__title" v-html="whyChoose?.title"></h3>
            </div>
            <p class="why-choose-two__content__text">
              {{ whyChoose?.body }}
            </p>
            <ul class="why-choose-two__list">
              <li v-for="(stat, i) in whyChoose?.stats" :key="i">
                <div class="why-choose-two__list__icon">
                  <img :src="i === 0 ? '/assets/images/shapes/about-1-icon-1.png' : '/assets/images/shapes/about-1-icon-2.png'" alt="crackit" />
                </div>
                <div class="why-choose-two__list__content">
                  <h3 class="why-choose-two__list__number">{{ stat.value }}</h3>
                  <p class="why-choose-two__list__text">{{ stat.label }}</p>
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
            <div class="why-choose-two__image__circle">
              <!-- Single SVG: spinning text ring + stationary center logo -->
              <svg class="circle-text-svg" viewBox="0 0 118 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path id="circlePath" d="M 59,59 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
                  <clipPath id="logoClip">
                    <circle cx="59" cy="59" r="28" />
                  </clipPath>
                </defs>
                <!-- Spinning text -->
                <text font-size="8.5" font-weight="600" letter-spacing="2.8" fill="currentColor" font-family="'Inter', 'Outfit', sans-serif">
                  <textPath href="#circlePath" startOffset="0%">CRACKIT TECH SOLUTIONS ✦ CRACKIT TECH SOLUTIONS ✦</textPath>
                </text>
                <!-- Center logo: counter-rotates to stay stationary -->
                <image
                  class="circle-logo-img"
                  href="/assets/images/shapes/circle-logo.png"
                  x="33" y="33"
                  width="52" height="52"
                  clip-path="url(#logoClip)"
                  preserveAspectRatio="xMidYMid meet"
                />
              </svg>
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

<script setup lang="ts">
const { getAbout } = useAbout()
const { data: aboutResponse } = await getAbout()
const whyChoose = computed(() => aboutResponse.value?.data?.whyChoose)
</script>

<style scoped>
/* Tint orange/yellow shapes to blue to match tech startup theme */
.why-choose-two__shape-one,
.why-choose-two__shape-two,
.why-choose-two__image__shape-three,
.why-choose-two__image__shape-four {
  filter: hue-rotate(190deg) saturate(1.2);
}

/* Override circle container */
.why-choose-two__image__circle {
  background-image: none !important;
  background-color: #fff;
  border: 1.5px solid rgba(0, 91, 187, 0.12);
  box-shadow: 0 4px 24px rgba(0, 91, 187, 0.1);
  color: #1a3c6e;
}

/* Entire SVG spins (text ring) */
.circle-text-svg {
  width: 118px;
  height: 118px;
  animation: rotated 12s linear infinite;
  display: block;
}

/* Center logo counter-rotates to stay stationary */
.circle-logo-img {
  transform-origin: 59px 59px;
  animation: rotated 12s linear infinite reverse;
}
</style>
