<template>
  <div>
    <section class="page-header">
      <div class="page-header__bg"></div>
      <div class="container">
        <h2 class="page-header__title">Our Portfolio</h2>
        <ul class="growim-breadcrumb list-unstyled">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><span>Our Portfolio</span></li>
        </ul>
      </div>
    </section>

    <section class="portfolio-six">
      <div class="container">
        <div class="row gutter-y-30 masonry-layout">
          <div
            v-for="item in portfolioItems"
            :key="item.id"
            class="col-lg-6"
          >
            <div class="portfolio-six__item">
              <img :src="item.image" :alt="item.title" />
              <div class="portfolio-six__item__content">
                <h3 class="portfolio-six__item__title">
                  <NuxtLink :to="`/portfolio/${item.slug}`">{{ item.title }}</NuxtLink>
                </h3>
                <h5 class="portfolio-six__item__cate">{{ item.category }}</h5>
                <div class="portfolio-six__item__btn">
                  <NuxtLink :to="`/portfolio/${item.slug}`">
                    <i class="flaticon-up-right-arrow"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mail-section mail-section--inner">
      <div class="container">
        <div class="mail-section__inner wow fadeInUp">
          <div class="mail-section__shape-one" style="background-image: url(/assets/images/shapes/mail-shape-1.png);"></div>
          <div class="mail-section__shape-two" style="background-image: url(/assets/images/shapes/mail-shape-2.png);"></div>
          <div class="mail-section__shape-three" style="background-image: url(/assets/images/shapes/mail-shape-3.png);"></div>
          <div class="mail-section__shape-four" style="background-image: url(/assets/images/shapes/mail-shape-4.png);"></div>
          <div class="row">
            <div class="col-lg-5 col-xl-6">
              <div class="mail-section__image">
                <img src="/assets/images/resources/mail-1-1.png" alt="Growim" />
              </div>
            </div>
            <div class="col-lg-7 col-xl-6">
              <div class="mail-section__form">
                <h3 class="mail-section__form__title">Subscribe To Our Newsletter!</h3>
                <form action="#" class="mc-form" @submit.prevent>
                  <input type="text" name="EMAIL" placeholder="Enter Email Address" />
                  <button type="submit" class="flaticon-paper-plan">
                    <span class="sr-only">submit</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { getPortfolioItems } = usePortfolio()
const { data: portfolioResponse } = await getPortfolioItems()
const portfolioItems = computed(() => portfolioResponse.value?.data || [])
</script>

<style scoped>
</style>
