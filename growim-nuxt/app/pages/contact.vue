<template>
  <div>
    <Breadcrumb title="Contact Us" :breadcrumbs="[{ label: 'Contact Us' }]" />

    <section class="contact-two py-5">
      <div class="container">
        <div class="row align-items-center gutter-y-40">
          <div class="col-lg-6">
            <div class="contact-two__image position-relative">
              <img src="/assets/images/shapes/contact-page-1.png" alt="Growim Contact" class="img-fluid" />
              <div class="contact-two__image__video position-relative mt-4">
                <img src="/assets/images/resources/contact-page-video.jpg" alt="Video" class="img-fluid rounded" />
                <a
                  href="#"
                  class="video-popup position-absolute top-50 start-50 translate-middle text-white bg-primary rounded-circle d-flex align-items-center justify-content-center"
                  style="width: 60px; height: 60px;"
                  @click.prevent="openVideo('https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1')"
                >
                  <i class="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-two__content">
              <h3 class="contact-two__title">We'll respond to you within an hour.</h3>
              <p class="contact-two__text text-muted">
                Have a new project in mind or need expert marketing guidance? Drop us a message below and our team will get back to you promptly.
              </p>

              <form class="contact-two__form form-one mt-4" @submit.prevent="handleSubmit">
                <h4 class="contact-two__form__title mb-3">Get In Touch</h4>
                <div class="row g-3">
                  <div class="col-md-6">
                    <input
                      v-model="form.name"
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      v-model="form.email"
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <input
                      v-model="form.subject"
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      v-model="form.message"
                      class="form-control"
                      rows="5"
                      placeholder="Write Your Message . . ."
                      required
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button class="growim-btn" type="submit">
                      <span class="growim-btn__text">Send Message</span>
                      <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
                    </button>
                  </div>
                </div>

                <div v-if="submitted" class="alert alert-success mt-4">
                  Thank you! Your message has been sent successfully. We'll be in touch shortly.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Map & Info Bar -->
    <section class="google-map py-4 bg-light">
      <div class="container">
        <div class="row align-items-center gutter-y-30">
          <div class="col-lg-7">
            <div class="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                style="border: 0;"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="p-4 bg-white rounded shadow-sm">
              <h4 class="mb-4">Contact Information</h4>
              <ul class="list-unstyled">
                <li class="d-flex align-items-start gap-3 mb-3">
                  <i class="flaticon-pin text-primary mt-1"></i>
                  <span>4059 Carling Avenue, Ugglebarnby, YO22 3NJ</span>
                </li>
                <li class="d-flex align-items-start gap-3 mb-3">
                  <i class="flaticon-phone text-primary mt-1"></i>
                  <a href="tel:+61086660112" class="text-dark font-weight-bold">+6108-666-0112</a>
                </li>
                <li class="d-flex align-items-start gap-3 mb-3">
                  <i class="flaticon-email text-primary mt-1"></i>
                  <a href="mailto:info@growim.com" class="text-dark">info@growim.com</a>
                </li>
                <li class="d-flex align-items-start gap-3">
                  <i class="flaticon-time text-primary mt-1"></i>
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ModalVideo
      :is-open="isVideoOpen"
      :video-url="videoUrl"
      @close="isVideoOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import ModalVideo from '~/components/ui/ModalVideo.vue'

useHead({
  title: 'Contact Us || Growim Digital Marketing Agency',
  meta: [
    { name: 'description', content: 'Get in touch with Growim for digital marketing, SEO, web engineering, or branding inquiries.' }
  ]
})

const isVideoOpen = ref(false)
const videoUrl = ref('')
const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const openVideo = (url: string) => {
  videoUrl.value = url
  isVideoOpen.value = true
}

const handleSubmit = () => {
  submitted.value = true
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  setTimeout(() => {
    submitted.value = false
  }, 6000)
}
</script>
