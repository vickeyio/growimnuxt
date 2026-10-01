<template>
  <section id="about" class="about-two">
    <div class="about-two__shape-one" style="background-image: url(/assets/images/shapes/about-2-shape-1.png);"></div>
    <div class="about-two__shape-two" style="background-image: url(/assets/images/shapes/about-2-shape-2.png);"></div>
    <div class="about-two__shape-three" style="background-image: url(/assets/images/shapes/about-2-shape-3.png);"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="about-two__image-wrapper">
            <div class="about-two__image">
              <img src="/assets/images/resources/about-2-1.jpg" alt="crackit" />
            </div>
            <div class="about-two__image-wrapper__shape-one" style="background-image: url(/assets/images/shapes/about-2-shape-4.png);"></div>
            <div class="about-two__image-wrapper__shape-two" style="background-image: url(/assets/images/shapes/about-2-shape-5.png);"></div>
            <div class="about-two__experiance count-box">
              <div class="about-two__experiance__border"></div>
              <div class="about-two__experiance__inner">
                <div class="about-two__experiance__years">
                  <span class="count-text">{{ animatedYears }}</span>+
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
            <p class="about-two__content__text">
              In order to scale new customer acquisition and retention for e-commerce brands, we work across
              the entire customer journey. Our team has a successful track record of helping brands scale
            </p>
            <ul class="about-two__list">
              <li>
                <h3 class="about-two__list__number">200+</h3>
                <p class="about-two__list__text">Successful marketing<br> campaigns</p>
              </li>
              <li>
                <h3 class="about-two__list__number">75%</h3>
                <p class="about-two__list__text">Average increase in<br> website traffic</p>
              </li>
            </ul>
            <a class="growim-btn" href="#about">
              <span class="growim-btn__text">About Us</span>
              <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const animatedYears = ref(0)
const targetYears = 25
let animationFrame: number | null = null

const animateCount = () => {
  const duration = 1500
  const startTime = performance.now()
  
  const updateCount = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    animatedYears.value = Math.floor(progress * targetYears)
    
    if (progress < 1) {
      animationFrame = requestAnimationFrame(updateCount)
    } else {
      animatedYears.value = targetYears
    }
  }
  
  animationFrame = requestAnimationFrame(updateCount)
}

onMounted(() => {
  animateCount()
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>
