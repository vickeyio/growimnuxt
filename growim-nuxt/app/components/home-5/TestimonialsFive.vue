<template>
  <section class="testimonials-five py-5">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">TESTIMONIALS</h6>
        <h3 class="sec-title__title">Loved By Growing Teams Worldwide</h3>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(item, idx) in list"
          :key="idx"
          class="col-md-6 col-lg-4"
        >
          <div class="p-4 bg-light rounded shadow-sm h-100">
            <div class="text-warning mb-2"><i v-for="s in 5" :key="s" class="flaticon-star"></i></div>
            <p class="text-muted font-italic mb-4">"{{ item.text }}"</p>
            <div class="d-flex align-items-center gap-3 border-top pt-3">
              <img :src="item.avatar" :alt="item.name" class="rounded-circle" width="50" height="50" />
              <div>
                <h6 class="mb-0 font-weight-bold">{{ item.name }}</h6>
                <small class="text-primary">{{ item.role }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const list = [
  { text: 'Growim elevated our search visibility and brought predictable, qualified pipeline leads every week.', name: 'Ronald Richards', role: 'CEO, Apex Media', avatar: '/assets/images/resources/testi-1-1.jpg' },
  { text: 'Outstanding communication, rapid sprint turnarounds, and measurable conversion lifts.', name: 'Eleanor Pena', role: 'VP Growth, Nexa Corp', avatar: '/assets/images/resources/testi-1-1.jpg' },
  { text: 'The highest quality design and Nuxt engineering work we have ever commissioned.', name: 'Guy Hawkins', role: 'Product Director, CloudScale', avatar: '/assets/images/resources/testi-1-1.jpg' }
]
</script>
