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
              <img src="/assets/images/resources/tech-workspace.jpg" alt="tech workspace" />
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
              <h6 class="sec-title__tagline">{{ about?.tagline }}</h6>
              <h3 class="sec-title__title">{{ about?.title }}</h3>
            </div>
            <p class="about-two__content__text">
              {{ about?.body }}
            </p>
            <ul class="about-two__list">
              <li v-for="stat in about?.stats" :key="stat.label">
                <h3 class="about-two__list__number">{{ stat.value }}</h3>
                <p class="about-two__list__text">{{ stat.label }}</p>
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

const { getAbout } = useAbout()
const { data: aboutResponse } = await getAbout()
const about = computed(() => aboutResponse.value?.data)

const animatedYears = ref(0)
const targetYears = computed(() => about.value?.yearsOfExperience ?? 5)
let animationFrame: number | null = null

const animateCount = () => {
  const duration = 1500
  const startTime = performance.now()

  const updateCount = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    animatedYears.value = Math.floor(progress * targetYears.value)

    if (progress < 1) {
      animationFrame = requestAnimationFrame(updateCount)
    } else {
      animatedYears.value = targetYears.value
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

<style scoped>
/* Tint orange/yellow shapes to blue to match tech startup theme */
.about-two__shape-one,
.about-two__shape-two,
.about-two__shape-three,
.about-two__image-wrapper__shape-one,
.about-two__image-wrapper__shape-two {
  filter: hue-rotate(190deg) saturate(1.2);
}
</style>
