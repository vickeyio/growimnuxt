<template>
  <section class="testimonials-two py-5">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">TESTIMONIALS</h6>
        <h3 class="sec-title__title">Trusted By Visionary Leaders</h3>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(item, index) in testimonials"
          :key="index"
          class="col-lg-4"
        >
          <div class="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column justify-content-between">
            <div>
              <div class="text-warning mb-3">
                <i v-for="s in 5" :key="s" class="flaticon-star"></i>
              </div>
              <p class="text-muted font-italic mb-4">"{{ item.quote }}"</p>
            </div>
            <div class="d-flex align-items-center gap-3 border-top pt-3">
              <img :src="item.avatar" :alt="item.name" class="rounded-circle" width="55" height="55" />
              <div>
                <h5 class="mb-0 font-weight-bold">{{ item.name }}</h5>
                <small class="text-muted">{{ item.role }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: 'Growim elevated our brand authority and brought consistent, high-ticket leads every single week.',
    name: 'Ronald Richards',
    role: 'Founder & CEO, Apex Media',
    avatar: '/assets/images/resources/testi-1-1.jpg'
  },
  {
    quote: 'The return on investment was apparent within our very first sprint. Outstanding velocity and strategic rigor.',
    name: 'Eleanor Pena',
    role: 'VP Growth, Horizon Global',
    avatar: '/assets/images/resources/testi-1-1.jpg'
  },
  {
    quote: 'Their modern Nuxt 4 web app architecture completely transformed our site speed and customer retention.',
    name: 'Theresa Webb',
    role: 'Product Lead, CloudVanguard',
    avatar: '/assets/images/resources/testi-1-1.jpg'
  }
]
</script>
