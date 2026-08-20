<template>
  <section class="package-three py-5 bg-light">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">PRICING PACKAGES</h6>
        <h3 class="sec-title__title">Transparent Plans For Every Business</h3>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(plan, idx) in plans"
          :key="idx"
          class="col-md-6 col-lg-4"
        >
          <div class="p-4 bg-white rounded shadow-sm h-100 position-relative text-center">
            <span v-if="plan.featured" class="badge bg-primary text-white position-absolute top-0 end-0 m-3 px-3 py-1">Popular</span>
            <h4 class="font-weight-bold mb-2">{{ plan.title }}</h4>
            <h2 class="display-6 font-weight-bold text-primary my-3">${{ plan.price }}<span class="h6 text-muted font-weight-normal">/ mo</span></h2>
            <ul class="list-unstyled text-muted small my-4 text-start">
              <li v-for="(feat, fIdx) in plan.features" :key="fIdx" class="py-2 border-bottom">
                <i class="flaticon-check text-primary me-2"></i>{{ feat }}
              </li>
            </ul>
            <NuxtLink to="/contact" class="growim-btn w-100 text-center">
              <span class="growim-btn__text">Get Started</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  { title: 'Starter Suite', price: '49', features: ['Core Technical SEO', '5 Target Keywords', 'Monthly Performance Report', 'Email Support'] },
  { title: 'Growth Engine', price: '99', featured: true, features: ['Full Inbound Funnel', 'Unlimited Keywords', 'Weekly Strategy Sprint', 'Priority 24/7 Slack'] },
  { title: 'Enterprise Scale', price: '199', features: ['Custom Fullstack Dev', 'Omnichannel Paid Media', 'Dedicated Director of Growth', 'Custom SLA Guarantee'] }
]
</script>
