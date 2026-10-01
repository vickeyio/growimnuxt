<template>
  <section id="pricing" class="package-two">
    <div class="container">
      <div class="row gutter-y-30">
        <div class="col-xl-4">
          <div class="package-two__content">
            <div class="sec-title text-left">
              <h6 class="sec-title__tagline">OUR PRICING PLAN</h6>
              <h3 class="sec-title__title">Choose The <span>Best Plans</span><br> For You</h3>
            </div>
            <ul class="package-two__tabs" role="tablist">
              <li :class="{ month: true, active: !isYearly }">
                <a href="#" @click.prevent="isYearly = false">Monthly</a>
              </li>
              <li>
                <label class="switch" :class="isYearly ? 'off' : 'on'" @click.prevent="isYearly = !isYearly">
                  <span class="slider round"></span>
                </label>
              </li>
              <li :class="{ year: true, active: isYearly }">
                <a href="#" @click.prevent="isYearly = true">Yearly</a>
              </li>
            </ul>
            <div class="package-two__shape" style="background-image: url(/assets/images/shapes/pricing-arrow-shape.png);"></div>
          </div>
        </div>
        <div class="col-xl-8">
          <div v-show="!isYearly">
            <div class="row gutter-y-30">
              <div v-for="plan in monthlyPlans" :key="plan.title" class="col-md-6 col-lg-6">
                <Home2PricingCard :plan="plan" />
              </div>
            </div>
          </div>
          <div v-show="isYearly">
            <div class="row gutter-y-30">
              <div v-for="plan in yearlyPlans" :key="plan.title" class="col-md-6 col-lg-6">
                <Home2PricingCard :plan="plan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Home2PricingCard from '~/components/home-2/PricingCard.vue'

const isYearly = ref(false)

const features = [
  'Branding and design Identity',
  'Web site Marketing Solutions',
  'Setup & Onboarding',
  '24/7 system Monitoring',
  'Awesome Consulting'
]

const monthlyPlans = [
  { title: 'Company', price: '$99', period: 'Par month', features },
  { title: 'Agency', price: '$149', period: 'Par month', features }
]

const yearlyPlans = [
  { title: 'Company', price: '$199', period: 'Par year', features },
  { title: 'Agency', price: '$349', period: 'Par year', features }
]
</script>
