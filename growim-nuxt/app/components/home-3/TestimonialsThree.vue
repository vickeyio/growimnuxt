<template>
  <section class="testimonials-three py-5">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">CLIENT FEEDBACK</h6>
        <h3 class="sec-title__title">What Our Partners Are Saying</h3>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(testi, idx) in list"
          :key="idx"
          class="col-md-6 col-lg-4"
        >
          <div class="p-4 bg-light rounded shadow-sm h-100">
            <div class="text-warning mb-2">
              <i v-for="s in 5" :key="s" class="flaticon-star"></i>
            </div>
            <p class="text-muted mb-4">"{{ testi.text }}"</p>
            <h6 class="mb-0 font-weight-bold">{{ testi.author }}</h6>
            <small class="text-primary">{{ testi.role }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const list = [
  { text: 'Growim helped our software company scale organic acquisition from zero to over 80k monthly active visitors.', author: 'Darrell Steward', role: 'Head of Growth, SaaSify' },
  { text: 'Unmatched design quality, super responsive communication, and exceptional engineering execution.', author: 'Leslie Alexander', role: 'Founder, NextWave' },
  { text: 'The whole process was seamless. Our new Nuxt frontend reduced bounce rate by 34% immediately.', author: 'Guy Hawkins', role: 'Director, Omnichannel Retail' }
]
</script>
