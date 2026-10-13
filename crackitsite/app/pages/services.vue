<template>
  <div>
<section class="page-header">

            <div class="page-header__bg"></div>

            <!-- /.page-header__bg -->

            <div class="container">

                <h2 class="page-header__title">Our Service</h2>

                <ul class="growim-breadcrumb list-unstyled">

                    <li><a href="/index">Home</a></li>

                    <li><span>Our Service</span></li>

                </ul><!-- /.thm-breadcrumb list-unstyled -->

            </div><!-- /.container -->

        </section><!-- /.page-header -->



        <!-- Service Start -->

        <section class="service-six">

            <div class="container">

                <div class="row gutter-y-30">

                    <div
                      v-for="service in services"
                      :key="service.id"
                      class="col-lg-4 col-md-6"
                    >
                        <div class="service-six__item text-center">
                            <div class="service-six__item__wrapper">
                                <div class="service-six__item__image">
                                    <img :src="service.image" :alt="service.title">
                                </div>
                                <div class="service-six__item__icon" :style="{ backgroundImage: `url(${service.iconBg || '/assets/images/shapes/service-6-icon-bg.png'})` }">
                                    <img :src="service.icon" :alt="service.title">
                                </div><!-- /.service-icon -->
                                <h3 class="service-six__item__title">
                                    <NuxtLink :to="`/services/${service.slug}`">{{ service.title }}</NuxtLink>
                                </h3><!-- /.service-title -->
                                <p class="service-six__item__text">
                                    {{ service.shortDescription }}
                                </p><!-- /.service-text -->
                                <NuxtLink class="service-six__item__rm" :to="`/services/${service.slug}`">
                                    <svg viewBox="0 0 58 66" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.46 1.07519C27.646 -0.206291 30.354 -0.206292 32.54 1.07519L54.54 13.9717C56.6833 15.2281 58 17.5263 58 20.0106V45.9894C58 48.4737 56.6833 50.7719 54.54 52.0283L32.54 64.9248C30.354 66.2063 27.646 66.2063 25.46 64.9248L3.45996 52.0283C1.31675 50.7719 0 48.4737 0 45.9894V20.0106C0 17.5263 1.31675 15.2281 3.45996 13.9717L25.46 1.07519Z" />
                                    </svg>
                                    <i class="flaticon-up-right-arrow"></i>
                                </NuxtLink>
                            </div>
                        </div><!-- /.service-card-one -->
                    </div><!-- /.item -->

                </div>

            </div>

        </section>

        <!-- Service End -->





        <section class="mail-section mail-section--inner">

            <div class="container">

                <div class="mail-section__inner  wow fadeInUp">

                    <div class="mail-section__shape-one" style="background-image: url(assets/images/shapes/mail-shape-1.png);"></div>

                    <div class="mail-section__shape-two" style="background-image: url(assets/images/shapes/mail-shape-2.png);"></div>

                    <div class="mail-section__shape-three" style="background-image: url(assets/images/shapes/mail-shape-3.png);"></div>

                    <div class="mail-section__shape-four" style="background-image: url(assets/images/shapes/mail-shape-4.png);"></div>

                    <div class="row">

                        <div class="col-lg-5 col-xl-6">

                            <div class="mail-section__image">

                                <img src="/assets/images/resources/mailman.png" alt="Growim">

                            </div>

                        </div>

                        <div class="col-lg-7 col-xl-6">

                            <div class="mail-section__form">

                                <h3 class="mail-section__form__title">Subscribe To Our Newsletter!</h3>

                                <form action="services.html#" data-url="MAILCHIMP_FORM_URL" class="mc-form">

                                    <input type="text" name="EMAIL" placeholder="Enter Email Address">

                                    <button type="submit" class="flaticon-paper-plan">

                                        <span class="sr-only">submit</span><!-- /.sr-only -->

                                    </button>

                                </form><!-- /. mc-form -->

                                <div class="mc-form__response"></div><!-- /.mc-form__response -->

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
  </div>
</template>

<script setup lang="ts">
const { getServices } = useServices()
const { data: servicesData } = await getServices()
const services = computed(() => servicesData.value?.data || [])
</script>

<style scoped>
</style>
