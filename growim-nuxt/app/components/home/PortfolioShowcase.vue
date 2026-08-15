<template>
  <section class="portfolio-one">
    <div
      class="portfolio-one__shape-one"
      style="background-image: url(/assets/images/shapes/portfolio-1-shape-1.png);"
    ></div>
    <div
      class="portfolio-one__shape-two"
      style="background-image: url(/assets/images/shapes/portfolio-1-shape-2.png);"
    ></div>
    <div
      class="portfolio-one__shape-three"
      style="background-image: url(/assets/images/shapes/portfolio-1-shape-3.png);"
    ></div>
    <div
      class="portfolio-one__shape-four"
      style="background-image: url(/assets/images/shapes/portfolio-1-shape-4.png);"
    ></div>
    <div
      class="portfolio-one__shape-five"
      style="background-image: url(/assets/images/shapes/portfolio-1-shape-5.png);"
    ></div>
    <div
      class="portfolio-one__shape-six"
      style="background-image: url(/assets/images/shapes/portfolio-1-shape-6.png);"
    ></div>
    <h5 class="portfolio-one__title">Latest Work</h5>

    <!-- Slide Text Marquee -->
    <div class="portfolio-one__slide-text">
      <ul class="portfolio-one__slide-text__list list-unstyled">
        <li>BRANDING</li>
        <li>MARKETING</li>
        <li>DEVELOPMENT</li>
        <li>Marketing Agency</li>
        <li>BRANDING</li>
        <li>MARKETING</li>
        <li>DEVELOPMENT</li>
        <li>Marketing Agency</li>
        <li>BRANDING</li>
        <li>MARKETING</li>
      </ul>
    </div>

    <div class="container">
      <div
        v-for="(item, index) in portfolioItems"
        :key="index"
        class="portfolio-one__item hover-item"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <div class="portfolio-one__item__content">
          <h3 class="portfolio-one__item__title">{{ item.title }}</h3>
          <h5 class="portfolio-one__item__cate">{{ item.category }}</h5>
          <p class="portfolio-one__item__text">{{ item.description }}</p>
        </div>
        <!-- /.portfolio-one__item__content -->
        <div class="portfolio-one__item__btn">
          <NuxtLink class="growim-btn growim-btn--white" :to="item.link">
            <span class="growim-btn__text">View Portfolio</span>
            <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
          </NuxtLink>
        </div>
        <!-- Hover Image Box -->
        <div class="hover-item__box" :class="{ 'd-block': hoveredIndex === index }">
          <img :src="item.image" :alt="item.title" class="hover-item__box-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hoveredIndex = ref<number | null>(null)

const portfolioItems = [
  {
    title: 'Generation Of Wealth',
    category: 'Marketing',
    description: 'Transforming consumer banking touchpoints into high-converting digital customer journeys.',
    image: '/assets/images/portfolio/portfolio-1-1.jpg',
    link: '/portfolio/web-development'
  },
  {
    title: 'Creative Digital Campaign',
    category: 'Branding',
    description: 'Re-imagining omnichannel brand identity with 3D product visuals and bespoke animations.',
    image: '/assets/images/portfolio/portfolio-1-2.jpg',
    link: '/portfolio/web-development'
  },
  {
    title: 'Best Content Creation',
    category: 'Agency',
    description: 'End-to-end content production driving 300% search organic traffic acceleration.',
    image: '/assets/images/portfolio/portfolio-1-3.jpg',
    link: '/portfolio/web-development'
  }
]
</script>
