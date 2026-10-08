<template>
  <section class="mail-section">
    <div class="container">
      <div class="mail-section__inner">
        <div
          class="mail-section__shape-one"
          style="background-image: url(/assets/images/shapes/mail-shape-1.png);"
        ></div>
        <div
          class="mail-section__shape-two"
          style="background-image: url(/assets/images/shapes/mail-shape-2.png);"
        ></div>
        <div
          class="mail-section__shape-three"
          style="background-image: url(/assets/images/shapes/mail-shape-3.png);"
        ></div>
        <div
          class="mail-section__shape-four"
          style="background-image: url(/assets/images/shapes/mail-shape-4.png);"
        ></div>
        <div class="row align-items-center">
          <div class="col-lg-5 col-xl-6">
            <div class="mail-section__image">
              <img src="/assets/images/resources/mailman.png" alt="Growim" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-7 col-xl-6">
            <div class="mail-section__form">
              <h3 class="mail-section__form__title">Subscribe To Our Newsletter!</h3>
              <form class="mc-form" @submit.prevent="handleSubscribe">
                <input
                  v-model="email"
                  type="email"
                  name="EMAIL"
                  placeholder="Enter Email Address"
                  required
                />
                <button type="submit" class="flaticon-paper-plan">
                  <span class="sr-only">submit</span>
                </button>
              </form>
              <p v-if="submitted" class="text-white mt-2 font-weight-bold">
                Thank you! We've added you to our newsletter list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

const handleSubscribe = () => {
  if (email.value) {
    submitted.value = true
    email.value = ''
    setTimeout(() => {
      submitted.value = false
    }, 5000)
  }
}
</script>
