<template>
  <section class="work-process-two py-5 bg-light position-relative">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">WORK PROCESS</h6>
        <h3 class="sec-title__title">Our Working Process</h3>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(step, idx) in steps"
          :key="idx"
          class="col-lg-3 col-md-6"
        >
          <div class="p-4 bg-white rounded text-center shadow-sm h-100 position-relative">
            <div class="badge bg-primary text-white rounded-pill px-3 py-2 mb-3">
              Step 0{{ idx + 1 }}
            </div>
            <h4 class="font-weight-bold mb-2">{{ step.title }}</h4>
            <p class="text-muted small mb-0">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { title: 'Choose A Service', text: 'Select from our modular digital offerings tailored for your growth stage.' },
  { title: 'Define Requirements', text: 'We map out custom deliverables, technical constraints, and sprint milestones.' },
  { title: 'Request A Strategy Call', text: 'Collaborative alignment on goals, KPIs, and campaign implementation timelines.' },
  { title: 'Deploy & Scale', text: 'Continuous testing, rapid iteration, and measurable business growth.' }
]
</script>
