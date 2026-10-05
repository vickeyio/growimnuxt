<template>
  <section id="services" class="service-two">
    <div class="service-two__bg" style="background-image: url(/assets/images/shapes/service-2-shape-bg.png);"></div>
    <h5 class="service-two__title">SERVICES</h5>
    <div class="service-two__slide-text">
      <ul class="service-two__slide-text__list list-unstyled">
        <li>SOFTWARE DEVELOPMENT</li>
        <li>MOBILE APPS</li>
        <li>CLOUD & DEVOPS</li>
        <li>IT CONSULTING</li>
        <li>SOFTWARE DEVELOPMENT</li>
        <li>MOBILE APPS</li>
        <li>CLOUD & DEVOPS</li>
        <li>IT CONSULTING</li>
        <li>SOFTWARE DEVELOPMENT</li>
        <li>MOBILE APPS</li>
        <li>CLOUD & DEVOPS</li>
        <li>IT CONSULTING</li>
      </ul>
    </div>
    <div class="container">
      <div class="row gutter-y-30">
        <div
          v-for="(service, index) in featuredServices"
          :key="service.id"
          :class="index === 0 || index === 3 ? 'col-lg-8' : 'col-lg-4'"
        >
          <div
            class="service-two__item"
            :class="{ 'service-two__item--no-image': index !== 0 && index !== 3 }"
          >
            <div class="service-two__item__content">
              <h3 class="service-two__item__title">
                <NuxtLink :to="`/services/${service.slug}`">{{ service.title }}</NuxtLink>
              </h3>
              <p class="service-two__item__text">
                {{ service.shortDescription }}
              </p>
              <NuxtLink class="service-two__item__rm" :to="`/services/${service.slug}`">
                <i class="flaticon-up-right-arrow"></i>
              </NuxtLink>
              <div class="service-two__item__number"></div>
            </div>
            <div v-if="index === 0 || index === 3" class="service-two__item__image">
              <img :src="index === 0 ? '/assets/images/resources/service-2-1.jpg' : '/assets/images/resources/service-2-4.jpg'" :alt="service.title" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="service-two__bottom"
        style="background-image: url(/assets/images/backgrounds/service-two-bottom-bg.jpg);"
      >
        <div class="service-two__bottom__clients">
          <img src="/assets/images/resources/client-1-1.png" alt="crackit" />
          <img src="/assets/images/resources/client-1-2.png" alt="crackit" />
          <img src="/assets/images/resources/client-1-3.png" alt="crackit" />
          <img src="/assets/images/resources/client-1-4.png" alt="crackit" />
          <span>Trusted by Coastal Businesses</span>
        </div>
        <NuxtLink class="growim-btn" to="/services">
          <span class="growim-btn__text">view all service</span>
          <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getServices } = useServices()
const { data: servicesResponse } = await getServices({ limit: 4 })
const featuredServices = computed(() => servicesResponse.value?.data || [])
</script>

<style scoped>
/* Tint orange/yellow backgrounds to blue to match tech startup theme */
.service-two__bg,
.service-two__bottom {
  filter: hue-rotate(190deg) saturate(1.2);
}
</style>
