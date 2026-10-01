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
              <div v-for="plan in monthlyPlans" :key="plan.id || plan.title" class="col-md-6 col-lg-6">
                <Home2PricingCard :plan="plan" />
              </div>
            </div>
          </div>
          <div v-show="isYearly">
            <div class="row gutter-y-30">
              <div v-for="plan in yearlyPlans" :key="plan.id || plan.title" class="col-md-6 col-lg-6">
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
import { ref, computed } from 'vue'
import Home2PricingCard from '~/components/home-2/PricingCard.vue'

const isYearly = ref(false)

const { getPricing } = usePricing()
const { data: pricingResponse } = await getPricing()

const monthlyPlans = computed(() => pricingResponse.value?.data?.monthly || [])
const yearlyPlans = computed(() => pricingResponse.value?.data?.yearly || [])
</script>
