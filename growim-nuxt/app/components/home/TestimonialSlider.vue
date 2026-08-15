<template>
  <section class="testimonials-one">
    <div
      class="testimonials-one__shape-one"
      style="background-image: url(/assets/images/shapes/testimonials-1-shape-1.png);"
    ></div>
    <div
      class="testimonials-one__shape-two"
      style="background-image: url(/assets/images/shapes/testimonials-1-shape-2.png);"
    ></div>
    <div
      class="testimonials-one__shape-three"
      style="background-image: url(/assets/images/shapes/testimonials-1-shape-3.png);"
    ></div>
    <div
      class="testimonials-one__shape-four"
      style="background-image: url(/assets/images/shapes/testimonials-1-shape-4.png);"
    ></div>
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-lg-6">
          <div class="testimonials-one__image">
            <div
              class="testimonials-one__image__bg"
              style="background-image: url(/assets/images/shapes/testimonial-1-image-bg.png);"
            ></div>
            <img
              src="/assets/images/resources/testimonial-1-image.png"
              alt="growim"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonials-one__area">
            <div class="sec-title text-left">
              <h6 class="sec-title__tagline">Testimonials</h6>
              <h3 class="sec-title__title">Our Clients Speak For Us</h3>
            </div>
            <!-- /.sec-title -->

            <ClientOnly>
              <Swiper
                :modules="[SwiperAutoplay, SwiperPagination]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{ delay: 6000, disableOnInteraction: false }"
                :pagination="{ clickable: true }"
              >
                <SwiperSlide v-for="(testi, index) in allTestimonials" :key="index">
                  <div class="testimonials-one__item">
                    <div class="testimonials-one__item__rating">
                      <i v-for="star in 5" :key="star" class="flaticon-star"></i>
                    </div>
                    <!-- /.testimonials-one__item__rating -->
                    <div class="testimonials-one__item__content">
                      "{{ testi.text }}"
                    </div>
                    <!-- /.testimonials-one__item__content -->
                    <div class="testimonials-one__item__author">
                      <img :src="testi.authorImage" :alt="testi.authorName" />
                      <h3 class="testimonials-one__item__name">{{ testi.authorName }}</h3>
                      <p class="testimonials-one__item__designation">{{ testi.authorRole }}</p>
                    </div>
                    <!-- /.testimonials-one__item__author -->
                    <div class="testimonials-one__item__quote">
                      <i class="flaticon-quote"></i>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay, Pagination as SwiperPagination } from 'swiper/modules'

const testimonials = [
  {
    text: 'Growim completely revamped our digital presence. Within 3 months, our organic inbound leads increased by 240%, and our search positions dominated page 1 across our top key terms.',
    authorName: 'Ronald Richards',
    authorRole: 'Founder & CEO, Apex Media',
    authorImage: '/assets/images/resources/testi-1-1.jpg'
  },
  {
    text: 'The strategic clarity, speed of development, and conversion-focused design delivered by this team are second to none. They act as a genuine extension of our core growth department.',
    authorName: 'Eleanor Pena',
    authorRole: 'VP Marketing, Nexa Corp',
    authorImage: '/assets/images/resources/testi-1-1.jpg'
  },
  {
    text: 'Their omnichannel marketing framework helped us scale past $10M ARR in under a year with exceptional ad spend efficiency.',
    authorName: 'Theresa Webb',
    authorRole: 'Chief Product Officer, CloudScale',
    authorImage: '/assets/images/resources/testi-1-1.jpg'
  },
  {
    text: 'Working with Growim was the single highest ROI decision we made this fiscal year. Highest standard of execution and communication.',
    authorName: 'Darrell Steward',
    authorRole: 'Managing Director, Horizon Media',
    authorImage: '/assets/images/resources/testi-1-1.jpg'
  }
]

const allTestimonials = computed(() => [...testimonials, ...testimonials])
</script>
