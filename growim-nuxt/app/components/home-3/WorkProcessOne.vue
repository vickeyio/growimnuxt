<template>
  <section class="work-process-one py-5 bg-light">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">WORK PROCESS</h6>
        <h3 class="sec-title__title">Our 4-Step Agile Methodology</h3>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(step, sIndex) in steps"
          :key="sIndex"
          class="col-md-6 col-lg-3"
        >
          <div class="p-4 bg-white rounded text-center shadow-sm h-100 position-relative">
            <span class="badge bg-primary text-white rounded-circle p-3 mb-3 font-weight-bold" style="font-size: 1.2rem;">
              {{ step.step }}
            </span>
            <h4 class="font-weight-bold mb-2">{{ step.title }}</h4>
            <p class="text-muted small mb-0">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { step: '01', title: 'Discovery & Audit', desc: 'Comprehensive research into user cohorts, competitors, and technical architecture.' },
  { step: '02', title: 'Strategic Roadmap', desc: 'Detailed sprint milestones, KPI targets, and high-impact conversion roadmaps.' },
  { step: '03', title: 'Agile Execution', desc: 'Rapid prototyping, engineering, and data-driven marketing deployment.' },
  { step: '04', title: 'Optimization & Scale', desc: 'Continuous testing, multivariate iteration, and multi-channel scale.' }
]
</script>
