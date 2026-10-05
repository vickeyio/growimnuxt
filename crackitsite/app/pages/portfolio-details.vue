<template>
  <div>
    <section class="page-header page-header--details">
      <div class="page-header__bg"></div>
      <div class="container">
        <h2 class="page-header__title">{{ item?.title || 'Generation Of Wealth' }}</h2>
        <ul class="growim-breadcrumb list-unstyled">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><span>Portfolio Details</span></li>
          <li><span>{{ item?.title || 'Generation Of Wealth' }}</span></li>
        </ul>
      </div>
    </section>

    <section v-if="item" class="portfolio-details">
      <div class="container">
        <div class="portfolio-details__image">
          <img :src="item.detailImage || item.image" :alt="item.title" />
        </div>

        <div class="row">
          <div class="col-lg-8">
            <div class="portfolio-details__content">
              <h3 class="portfolio-details__title">Digital Agency</h3>
              <p class="portfolio-details__text">{{ item.overview }}</p>
              <p v-if="item.overviewSecondary" class="portfolio-details__text">
                {{ item.overviewSecondary }}
              </p>

              <h3 class="portfolio-details__title">Project Goals</h3>
              <p class="portfolio-details__text">{{ item.goalsText || item.overview }}</p>

              <ul v-if="item.goalsBullets?.length" class="portfolio-details__list">
                <li v-for="(bullet, bIdx) in item.goalsBullets" :key="bIdx">
                  <i class="flaticon-check-two"></i>
                  {{ bullet }}
                </li>
              </ul>

              <div v-if="item.galleryImages?.length" class="row mb gutter-y-30">
                <div
                  v-for="(gImg, gIdx) in item.galleryImages"
                  :key="gIdx"
                  class="col-md-6"
                >
                  <div class="portfolio-details__content__image">
                    <img :src="gImg" :alt="item.title" />
                  </div>
                </div>
              </div>

              <p v-if="item.conclusionText" class="portfolio-details__text">
                {{ item.conclusionText }}
              </p>

              <div class="portfolio-details__pagination">
                <NuxtLink class="portfolio-details__pagination__item" to="/portfolio">
                  <img src="/assets/images/portfolio/pagination-prev.jpg" alt="growim" />
                  Previous
                </NuxtLink>
                <NuxtLink class="portfolio-details__pagination__item" to="/portfolio">
                  Next
                  <img src="/assets/images/portfolio/pagination-next.jpg" alt="growim" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-details__info">
              <h3 class="portfolio-details__info__title">Project Information</h3>
              <ul class="portfolio-details__info__list">
                <li v-if="item.client"><span>Client:</span>{{ item.client }}</li>
                <li v-if="item.category"><span>Category:</span>{{ item.category }}</li>
                <li v-if="item.startDate"><span>Start Date:</span>{{ item.startDate }}</li>
                <li v-if="item.endDate"><span>End Date:</span>{{ item.endDate }}</li>
                <li v-if="item.budget"><span>project budget:</span>{{ item.budget }}</li>
              </ul>

              <div class="portfolio-details__info__social">
                <span class="portfolio-details__info__social__title">Follow on</span>
                <a href="https://facebook.com" target="_blank" rel="noopener">
                  <i class="fab fa-facebook-f" aria-hidden="true"></i>
                  <span class="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener">
                  <i class="fab fa-twitter" aria-hidden="true"></i>
                  <span class="sr-only">Twitter</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener">
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                  <span class="sr-only">Instagram</span>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener">
                  <i class="fab fa-youtube" aria-hidden="true"></i>
                  <span class="sr-only">Youtube</span>
                </a>
              </div>
            </div>

            <div
              class="portfolio-details__contact text-center"
              style="background-image: url(/assets/images/portfolio/portfolio-details-contact-bg.jpg);"
            >
              <div class="portfolio-details__contact__icon">
                <i class="flaticon-phone"></i>
              </div>
              <p class="portfolio-details__contact__number">
                <span>Need Help? Call Here</span>
                <a href="tel:+2085550112">+208-555-0112</a>
              </p>
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
const { getPortfolioItemBySlug } = usePortfolio()
const { data: itemResponse } = await getPortfolioItemBySlug('generation-of-wealth-1')
const item = computed(() => itemResponse.value?.data)
</script>

<style scoped>
</style>
