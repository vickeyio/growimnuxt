<template>
  <section class="package-two py-5">
    <div class="container">
      <div class="row gutter-y-30">
        <div class="col-xl-4">
          <div class="package-two__content">
            <div class="sec-title text-left">
              <h6 class="sec-title__tagline">OUR PRICING PLAN</h6>
              <h3 class="sec-title__title">Choose The <span>Best Plans</span><br /> For You</h3>
            </div>

            <!-- Billing Cycle Switcher -->
            <div class="d-flex align-items-center gap-3 my-4">
              <button
                class="btn rounded-pill px-4 py-2 font-weight-bold"
                :class="isYearly ? 'btn-outline-dark' : 'btn-primary text-white'"
                @click="isYearly = false"
              >
                Monthly
              </button>
              <button
                class="btn rounded-pill px-4 py-2 font-weight-bold"
                :class="isYearly ? 'btn-primary text-white' : 'btn-outline-dark'"
                @click="isYearly = true"
              >
                Yearly <span class="badge bg-success text-white ms-1">Save 20%</span>
              </button>
            </div>
            <p class="text-muted">Flexible commitments designed for growing startups and established enterprises.</p>
          </div>
        </div>

        <div class="col-xl-8">
          <div class="row gutter-y-30">
            <!-- Plan 1 -->
            <div class="col-md-6">
              <div class="package-two__item p-4 bg-light rounded position-relative">
                <h4 class="package-two__item__title">Business Plan</h4>
                <div class="package-two__item__price my-3">
                  <h3 class="text-primary font-weight-bold display-5 mb-0">
                    ${{ isYearly ? '39' : '49' }}<span class="small text-muted font-weight-normal">/ mo</span>
                  </h3>
                </div>
                <ul class="list-unstyled mb-4">
                  <li class="py-2 border-bottom"><i class="flaticon-check text-primary me-2"></i>Full Technical SEO Audit</li>
                  <li class="py-2 border-bottom"><i class="flaticon-check text-primary me-2"></i>5 Target Keywords Campaign</li>
                  <li class="py-2 border-bottom"><i class="flaticon-check text-primary me-2"></i>Weekly Performance Reports</li>
                  <li class="py-2 border-bottom text-muted"><i class="flaticon-close me-2"></i>Dedicated Account Manager</li>
                </ul>
                <NuxtLink to="/contact" class="growim-btn w-100 text-center">
                  <span class="growim-btn__text">Choose Plan</span>
                </NuxtLink>
              </div>
            </div>

            <!-- Plan 2 -->
            <div class="col-md-6">
              <div class="package-two__item package-two__item--popular p-4 bg-dark text-white rounded position-relative shadow">
                <span class="badge bg-primary position-absolute top-0 end-0 m-3 px-3 py-2">Most Popular</span>
                <h4 class="package-two__item__title text-white">Enterprise Plan</h4>
                <div class="package-two__item__price my-3">
                  <h3 class="text-primary font-weight-bold display-5 mb-0">
                    ${{ isYearly ? '79' : '99' }}<span class="small text-white-50 font-weight-normal">/ mo</span>
                  </h3>
                </div>
                <ul class="list-unstyled mb-4 text-white-50">
                  <li class="py-2 border-bottom border-secondary text-white"><i class="flaticon-check text-primary me-2"></i>Complete SEO & Content Funnel</li>
                  <li class="py-2 border-bottom border-secondary text-white"><i class="flaticon-check text-primary me-2"></i>Unlimited High-Intent Keywords</li>
                  <li class="py-2 border-bottom border-secondary text-white"><i class="flaticon-check text-primary me-2"></i>24/7 Dedicated Strategy Support</li>
                  <li class="py-2 border-bottom border-secondary text-white"><i class="flaticon-check text-primary me-2"></i>Custom Conversion Engineering</li>
                </ul>
                <NuxtLink to="/contact" class="growim-btn w-100 text-center">
                  <span class="growim-btn__text">Choose Plan</span>
                </NuxtLink>
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

const isYearly = ref(false)
</script>
