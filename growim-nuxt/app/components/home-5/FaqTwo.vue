<template>
  <section class="faq-two py-5 bg-light">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">FAQ</h6>
        <h3 class="sec-title__title">Frequently Asked Questions</h3>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div
            v-for="(faq, fIndex) in faqs"
            :key="fIndex"
            class="accrodion mb-3 p-3 bg-white border rounded shadow-sm"
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
  { q: 'What is included in the initial discovery phase?', a: 'We conduct deep keyword analysis, technical performance audits, user cohort research, and competitive intelligence.' },
  { q: 'Can we upgrade our package as our marketing budget scales?', a: 'Yes, our retainers and sprint agreements are fully flexible and adapt to your quarterly goals.' },
  { q: 'Do you offer ongoing SLA and hosting management?', a: 'Yes, we manage edge deployments, automated backups, and 24/7 uptime monitoring.' }
]
</script>
