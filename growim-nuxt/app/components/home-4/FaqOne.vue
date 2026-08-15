<template>
  <section class="faq-one py-5">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">FAQ</h6>
        <h3 class="sec-title__title">Questions About Our Workflow</h3>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div
            v-for="(faq, fIndex) in faqs"
            :key="fIndex"
            class="accrodion mb-3 p-3 border rounded"
            :class="{ active: openFaq === fIndex }"
          >
            <div
              class="accrodion-title d-flex justify-content-between align-items-center"
              style="cursor: pointer;"
              @click="openFaq = openFaq === fIndex ? -1 : fIndex"
            >
              <h5 class="mb-0 font-weight-bold">{{ faq.q }}</h5>
              <i :class="openFaq === fIndex ? 'fa fa-minus text-primary' : 'fa fa-plus'"></i>
            </div>
            <div v-show="openFaq === fIndex" class="accrodion-content pt-3">
              <p class="text-muted mb-0">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openFaq = ref(0)
const faqs = [
  { q: 'How fast can we launch our marketing campaign or website build?', a: 'Discovery and sprint roadmap are completed in week 1, with first live deliverables launching in weeks 2-3.' },
  { q: 'Do you provide full source code and ownership?', a: 'Yes, all code, designs, and campaign configurations are 100% owned by your company.' },
  { q: 'How do we track progress in real-time?', a: 'You receive access to a live dashboard, shared Slack channel, and weekly strategic milestone reviews.' }
]
</script>
