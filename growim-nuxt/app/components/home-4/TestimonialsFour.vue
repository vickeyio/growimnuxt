<template>
  <section class="testimonials-four py-5 bg-light">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">TESTIMONIALS</h6>
        <h3 class="sec-title__title">What Our Enterprise Clients Say</h3>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(testi, idx) in list"
          :key="idx"
          class="col-md-6 col-lg-4"
        >
          <div class="p-4 bg-white rounded shadow-sm h-100">
            <div class="text-warning mb-2"><i v-for="s in 5" :key="s" class="flaticon-star"></i></div>
            <p class="text-muted font-italic mb-3">"{{ testi.text }}"</p>
            <h6 class="font-weight-bold mb-0">{{ testi.name }}</h6>
            <small class="text-primary">{{ testi.company }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const list = [
  { text: 'Growim completely overhauled our digital performance. CAC dropped 40% in our first 90 days.', name: 'Eleanor Pena', company: 'VP Marketing, Apex Growth' },
  { text: 'Their technical execution on Nuxt is outstanding. Lightning fast site speeds and effortless deployments.', name: 'Ronald Richards', company: 'Founder & CEO, Nexa' },
  { text: 'A true strategic partner who understands full-funnel revenue attribution and conversion optimization.', name: 'Theresa Webb', company: 'Chief Product Officer, Horizon' }
]
</script>
