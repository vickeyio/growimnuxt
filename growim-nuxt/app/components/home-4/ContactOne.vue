<template>
  <section class="contact-one py-5">
    <div class="container">
      <div class="row align-items-center gutter-y-40">
        <div class="col-lg-6">
          <div class="sec-title text-left mb-4">
            <h6 class="sec-title__tagline">GET IN TOUCH</h6>
            <h3 class="sec-title__title">Ready To Kickstart Your Project?</h3>
          </div>
          <p class="text-muted mb-4">
            Send us a message with your project goals or request a free technical SEO audit. We’ll respond within one business hour.
          </p>
          <div class="d-flex align-items-center gap-3">
            <div class="btn btn-primary btn-sm rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
              <i class="flaticon-phone text-white fa-lg"></i>
            </div>
            <div>
              <span class="text-muted small d-block">Call us directly</span>
              <a href="tel:+2085550112" class="h5 font-weight-bold text-dark mb-0">+208-555-0112</a>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="p-4 bg-light rounded shadow-sm">
            <form @submit.prevent="sent = true">
              <div class="row g-3">
                <div class="col-sm-6">
                  <input v-model="name" type="text" class="form-control" placeholder="Your Name" required />
                </div>
                <div class="col-sm-6">
                  <input v-model="email" type="email" class="form-control" placeholder="Email Address" required />
                </div>
                <div class="col-12">
                  <textarea v-model="msg" class="form-control" rows="4" placeholder="Briefly describe your project..." required></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="growim-btn w-100 text-center">
                    <span class="growim-btn__text">Send Inquiry</span>
                  </button>
                </div>
              </div>
              <p v-if="sent" class="text-success text-center mt-3 font-weight-bold mb-0">
                Thank you! We'll be in touch shortly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const msg = ref('')
const sent = ref(false)
</script>
