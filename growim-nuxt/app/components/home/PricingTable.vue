<template>
  <section class="package-one">
    <div
      class="package-one__shape-one"
      style="background-image: url(/assets/images/shapes/package-1-shape-1.png);"
    ></div>
    <div
      class="package-one__shape-two"
      style="background-image: url(/assets/images/shapes/package-1-shape-2.png);"
    ></div>
    <div
      class="package-one__shape-three"
      style="background-image: url(/assets/images/shapes/package-1-shape-3.png);"
    ></div>
    <div
      class="package-one__shape-four"
      style="background-image: url(/assets/images/shapes/package-1-shape-4.png);"
    ></div>
    <div class="container">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline">OUR PRICING PLAN</h6>
        <h3 class="sec-title__title">Choose Your Pricing Plan</h3>
      </div>
      <!-- /.sec-title -->
      <div class="row gutter-y-30">
        <div
          v-for="(plan, index) in pricingPlans"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <div class="package-one__item" :class="{ 'package-one__item--active': plan.featured }">
            <div class="package-one__item__inner">
              <div class="package-one__item__price">
                ${{ plan.price }} <span>Per month</span>
              </div>
              <h5 class="package-one__item__title">{{ plan.name }}</h5>
              <p class="package-one__item__text">{{ plan.description }}</p>
              <ul class="package-one__item__list list-unstyled">
                <li v-for="(feature, fIndex) in plan.features" :key="fIndex">
                  <i class="flaticon-check"></i>{{ feature }}
                </li>
              </ul>
              <NuxtLink class="growim-btn" to="/contact">
                <span class="growim-btn__text">Get The Plan Now</span>
              </NuxtLink>
            </div>
          </div>
          <!-- /.package-card -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pricingPlans = [
  {
    name: 'Business',
    price: 49,
    description: 'Perfect for emerging businesses seeking to establish strong brand presence.',
    features: [
      'Branding & Design Identity',
      'Website Marketing Solutions',
      'Setup & Onboarding',
      '24/7 System Monitoring',
      'Dedicated Consultant'
    ],
    featured: false
  },
  {
    name: 'Company',
    price: 99,
    description: 'Designed for scaling companies wanting full-funnel digital marketing execution.',
    features: [
      'Full Brand Guidelines & Assets',
      'Advanced SEO & Keyword Strategy',
      'Conversion Rate Optimization',
      'Priority 24/7 Support',
      'Weekly Strategy Meetings'
    ],
    featured: true
  },
  {
    name: 'Agency',
    price: 149,
    description: 'Enterprise grade omni-channel growth suite for high-volume leaders.',
    features: [
      'Enterprise Custom Marketing',
      'Full Full-Stack Development',
      'Custom Multi-Touch Attribution',
      'Dedicated Strategy Director',
      'Unlimited Campaign Audits'
    ],
    featured: false
  }
]
</script>
