<template>
  <div>
    <Breadcrumb title="Frequently Asked Questions" :breadcrumbs="[{ label: 'FAQ' }]" />

    <section class="faq-page py-5">
      <div class="container">
        <div class="row align-items-center gutter-y-40">
          <div class="col-lg-6">
            <div class="faq-page__image">
              <img src="/assets/images/resources/faq-page-1.jpg" alt="Growim FAQ" class="img-fluid rounded" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="faq-page__content">
              <div class="sec-title text-left mb-4">
                <h6 class="sec-title__tagline">FAQ</h6>
                <h3 class="sec-title__title">Frequently Asked Questions</h3>
              </div>

              <!-- Accordion List -->
              <div class="growim-accrodion">
                <div
                  v-for="(faq, index) in faqs"
                  :key="index"
                  class="accrodion mb-3 p-3 border rounded"
                  :class="{ active: openIndex === index }"
                >
                  <div
                    class="accrodion-title d-flex justify-content-between align-items-center"
                    style="cursor: pointer;"
                    @click="openIndex = openIndex === index ? -1 : index"
                  >
                    <h5 class="mb-0 font-weight-bold">{{ faq.question }}</h5>
                    <i :class="openIndex === index ? 'fa fa-minus text-primary' : 'fa fa-plus'"></i>
                  </div>
                  <div v-show="openIndex === index" class="accrodion-content pt-3">
                    <p class="text-muted mb-0">{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import CtaBanner from '~/components/home/CtaBanner.vue'

useHead({
  title: 'FAQ || Growim Help & Questions',
  meta: [
    { name: 'description', content: 'Find answers to common questions about our agency, processes, pricing, and support.' }
  ]
})

const openIndex = ref(0)

const faqs = [
  {
    question: 'How do you measure marketing campaign success?',
    answer: 'We focus on concrete business KPIs: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), organic qualified leads, search rank dominance, and customer lifetime value (LTV).'
  },
  {
    question: 'Can you work with our existing in-house team?',
    answer: 'Absolutely. We seamlessly collaborate as an extension of your internal marketing, design, or engineering departments through shared Slack channels and weekly sprint planning.'
  },
  {
    question: 'What is the standard contract and billing structure?',
    answer: 'We provide both flexible monthly retained agreements and scoped project sprints depending on your current phase of growth.'
  },
  {
    question: 'Do you offer technical SEO and website maintenance?',
    answer: 'Yes, we provide ongoing Core Web Vitals optimization, schema maintenance, technical health audits, and Nuxt application support.'
  }
]
</script>
