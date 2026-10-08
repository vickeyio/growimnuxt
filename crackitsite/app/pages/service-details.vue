<template>
  <div>
    <section class="page-header page-header--details">
      <div class="page-header__bg"></div>
      <div class="container">
        <h2 class="page-header__title">{{ currentService?.title || 'Keyword Research' }}</h2>
        <ul class="growim-breadcrumb list-unstyled">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><span>Service Details</span></li>
          <li><span>{{ currentService?.title || 'Keyword Research' }}</span></li>
        </ul>
      </div>
    </section>

    <section class="service-details">
      <div class="container">
        <div class="row gutter-y-60">
          <div class="col-md-12 col-lg-4">
            <div class="service-sidebar">
              <div class="service-sidebar__single">
                <h3 class="service-sidebar__title">All Services</h3>
                <ul class="list-unstyled service-sidebar__nav">
                  <li
                    v-for="item in allServices"
                    :key="item.id"
                    :class="{ current: item.slug === currentService?.slug }"
                  >
                    <NuxtLink :to="`/services/${item.slug}`">{{ item.title }}</NuxtLink>
                  </li>
                </ul>
              </div>

              <div class="service-sidebar__single">
                <h3 class="service-sidebar__title">Opening Hours</h3>
                <ul class="list-unstyled service-sidebar__info">
                  <li><i class="flaticon-time"></i>Mon - Sat: 10.00 AM - 4.00 PM</li>
                  <li><i class="flaticon-time"></i>Sun: 09.00 AM - 4.00 PM</li>
                  <li><i class="flaticon-time"></i>Friday: Closed</li>
                </ul>
                <NuxtLink class="service-sidebar__btn" to="/contact">
                  Appointment Now <i class="flaticon-long-arrow-right"></i>
                </NuxtLink>
              </div>

              <div
                class="service-sidebar__single service-sidebar__contact text-center"
                style="background-image: url(/assets/images/portfolio/portfolio-details-contact-bg.jpg);"
              >
                <div class="service-sidebar__contact__icon">
                  <i class="flaticon-phone"></i>
                </div>
                <p class="service-sidebar__contact__number">
                  <span>Need Help? Call Here</span>
                  <a href="tel:+2085550112">+208-555-0112</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-12 col-lg-8">
            <div v-if="currentService" class="service-details__content">
              <div class="service-details__thumbnail">
                <img :src="currentService.thumbnailImage || currentService.image" :alt="currentService.title" />
              </div>

              <h3 class="service-details__title">Digital Services</h3>
              <p class="service-details__text">{{ currentService.fullDescription }}</p>
              <p v-if="currentService.fullDescriptionSecondary" class="service-details__text">
                {{ currentService.fullDescriptionSecondary }}
              </p>

              <h3 class="service-details__title">What We Provide</h3>
              <p class="service-details__text">{{ currentService.fullDescription }}</p>

              <div v-if="currentService.whatWeProvide?.length" class="row mb gutter-y-30">
                <div
                  v-for="(provideItem, idx) in currentService.whatWeProvide"
                  :key="idx"
                  class="col-md-6"
                >
                  <div class="service-three__item">
                    <div class="service-three__item__image">
                      <img :src="provideItem.icon" :alt="provideItem.title" />
                    </div>
                    <h3 class="service-three__item__title" v-html="provideItem.title"></h3>
                    <p class="service-three__item__text">{{ provideItem.description }}</p>
                  </div>
                </div>
              </div>

              <h3 class="service-details__title">The Challange</h3>
              <p class="service-details__text">{{ currentService.challengeText || currentService.fullDescription }}</p>

              <ul v-if="currentService.challengeBullets?.length" class="service-details__list">
                <li v-for="(bullet, bIdx) in currentService.challengeBullets" :key="bIdx">
                  <i class="flaticon-check-two"></i>
                  {{ bullet }}
                </li>
              </ul>

              <div v-if="currentService.faqs?.length" class="faq-one__accordion growim-accrodion">
                <div
                  v-for="(faq, fIdx) in currentService.faqs"
                  :key="fIdx"
                  class="accrodion"
                  :class="{ active: activeFaqIndex === fIdx }"
                >
                  <div class="accrodion-title" @click="toggleFaq(fIdx)">
                    <h4>
                      {{ faq.question }}
                      <span class="accrodion-title__icon"></span>
                    </h4>
                  </div>
                  <div v-show="activeFaqIndex === fIdx" class="accrodion-content">
                    <div class="inner">
                      <p>{{ faq.answer }}</p>
                    </div>
                  </div>
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
                <img src="/assets/images/resources/mailman.png" alt="Growim" />
              </div>
            </div>
            <div class="col-lg-7 col-xl-6">
              <div class="mail-section__form">
                <h3 class="mail-section__form__title">Schedule A Consultation</h3>
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
const { getServices, getServiceBySlug } = useServices()
const { data: allServicesResponse } = await getServices()
const allServices = computed(() => allServicesResponse.value?.data || [])

const { data: defaultServiceResponse } = await getServiceBySlug('link-building-optimization')
const currentService = computed(() => defaultServiceResponse.value?.data || allServices.value[0])

const activeFaqIndex = ref(1)
const toggleFaq = (index: number) => {
  activeFaqIndex.value = activeFaqIndex.value === index ? -1 : index
}
</script>

<style scoped>
</style>
