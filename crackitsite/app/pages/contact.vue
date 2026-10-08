<template>
  <div>
    <section class="page-header">
      <div class="page-header__bg"></div>
      <div class="container">
        <h2 class="page-header__title">Contact Us</h2>
        <ul class="growim-breadcrumb list-unstyled">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><span>Contact Us</span></li>
        </ul>
      </div>
    </section>

    <section class="contact-two">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-two__image">
              <img src="/assets/images/shapes/contact-page-1.png" alt="growim" />
              <div class="contact-two__image__video">
                <img src="/assets/images/resources/contact-page-video.jpg" alt="growim" />
                <a href="#" class="video-popup" @click.prevent="openVideo">
                  <span class="ripple"></span>
                  <i class="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="contact-two__content">
              <h3 class="contact-two__title">We'll respond to you in an hour.</h3>
              <p class="contact-two__text">Neque porro est qui dolorem ipsum quia quaed inventor veritatis et</p>

              <!-- Feedback alerts -->
              <div v-if="successMessage" class="alert alert-success mt-3 mb-3">
                {{ successMessage }}
              </div>
              <div v-if="errorMessage" class="alert alert-danger mt-3 mb-3">
                {{ errorMessage }}
              </div>

              <form class="contact-two__form form-one wow fadeInUp" data-wow-duration="1500ms" @submit.prevent="handleSubmit">
                <h4 class="contact-two__form__title">Get In touch</h4>

                <div class="form-one__group">
                  <div class="form-one__control">
                    <input v-model="form.name" type="text" name="name" placeholder="Name" :disabled="isSubmitting" />
                    <span v-if="fieldErrors.name" class="text-danger small">{{ fieldErrors.name[0] }}</span>
                  </div>

                  <div class="form-one__control">
                    <input v-model="form.email" type="email" name="email" placeholder="Email Address" :disabled="isSubmitting" />
                    <span v-if="fieldErrors.email" class="text-danger small">{{ fieldErrors.email[0] }}</span>
                  </div>

                  <div class="form-one__control form-one__control--full">
                    <textarea v-model="form.message" name="message" placeholder="Write Message . . ." :disabled="isSubmitting"></textarea>
                    <span v-if="fieldErrors.message" class="text-danger small">{{ fieldErrors.message[0] }}</span>
                  </div>

                  <div class="form-one__control form-one__control--full">
                    <button class="growim-btn" type="submit" :disabled="isSubmitting">
                      <span class="growim-btn__text">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                      <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="google-map">
      <div class="google-map__contact">
        <iframe
          title="template google map"
          src="https://www.google.com/maps?q=CrackIT+Technologies&output=embed"
          class="map__contact"
          allowfullscreen
        ></iframe>
      </div>

      <div class="google-map__wrapper">
        <div class="container">
          <div v-if="info" class="google-map__info">
            <h3 class="google-map__info__title">Contact Info</h3>
            <ul class="list-unstyled google-map__info__list">
              <li><i class="flaticon-pin"></i>{{ info.address }}</li>
              <li><i class="flaticon-phone"></i><a :href="`tel:${info.phoneClean || info.phone}`">{{ info.phone }}</a></li>
              <li><i class="flaticon-email"></i><a :href="`mailto:${info.email}`">{{ info.email }}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="mail-section mail-section--inner">
      <div class="container">
        <div class="mail-section__inner wow fadeInUp">
          <div class="mail-section__shape-one" style="background-image: url(/assets/images/shapes/mail-shape-1.png);"></div>
          <div class="mail-section__shape-two" style="background-image: url(/assets/images/shapes/mail-shape-2.png);"></div>
          <div class="mail-section__shape-three" style="background-image: url(/assets/images/shapes/mail-shape-3.png);"></div>
          <div class="mail-section__shape-four" style="background-image: url(/assets/images/shapes/mail-shape-4.png);"></div>
          <div class="row">
            <div class="col-lg-5 col-xl-6">
              <div class="mail-section__image">
                <img src="/assets/images/resources/mailman.png" alt="Growim" />
              </div>
            </div>
            <div class="col-lg-7 col-xl-6">
              <div class="mail-section__form">
                <h3 class="mail-section__form__title">Schedule A Consultation</h3>
                <form action="#" class="mc-form" @submit.prevent>
                  <input type="text" name="EMAIL" placeholder="Enter Email Address" />
                  <button type="submit" class="flaticon-paper-plan">
                    <span class="sr-only">submit</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <UiModalVideo :is-open="isVideoOpen" :video-url="videoUrl" @close="isVideoOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import UiModalVideo from '~/components/ui/ModalVideo.vue'

const { getContactInfo, sendMessage } = useContact()
const { data: infoResponse } = await getContactInfo()
const info = computed(() => infoResponse.value?.data)

const isVideoOpen = ref(false)
const videoUrl = 'https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1'
const openVideo = () => {
  isVideoOpen.value = true
}

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const fieldErrors = ref<Record<string, string[]>>({})

const handleSubmit = async () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''
  fieldErrors.value = {}

  try {
    const res = await sendMessage({
      name: form.name,
      email: form.email,
      message: form.message
    })
    successMessage.value = res.data.message
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err: any) {
    if (err?.data?.data?.error?.details) {
      fieldErrors.value = err.data.data.error.details
    } else {
      errorMessage.value = err?.data?.data?.error?.message || 'An error occurred while sending your message. Please try again.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
</style>
