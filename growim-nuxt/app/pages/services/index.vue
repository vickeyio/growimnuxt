<template>
  <div>
    <Breadcrumb title="Our Services" :breadcrumbs="[{ label: 'Services' }]" />

    <ServiceCards />

    <!-- Why Choose Us Feature -->
    <WhyChooseUs />

    <!-- Pricing Section -->
    <PricingTable />

    <!-- Newsletter CTA -->
    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import ServiceCards from '~/components/home/ServiceCards.vue'
import WhyChooseUs from '~/components/home/WhyChooseUs.vue'
import PricingTable from '~/components/home/PricingTable.vue'
import CtaBanner from '~/components/home/CtaBanner.vue'

useHead({
  title: 'Services || Growim Creative Digital Agency',
  meta: [
    {
      name: 'description',
      content: 'Explore our full spectrum of digital marketing, SEO, web development, and branding services.'
    }
  ]
})
</script>
