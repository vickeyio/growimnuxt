<template>
  <section class="team-one">
    <div
      class="team-one__shape-one"
      style="background-image: url(/assets/images/shapes/team-1-shape-1.png);"
    ></div>
    <div
      class="team-one__shape-two"
      style="background-image: url(/assets/images/shapes/blog-1-shape-1.png);"
    ></div>
    <div
      class="team-one__shape-three"
      style="background-image: url(/assets/images/shapes/team-1-shape-3.png);"
    ></div>
    <div
      class="team-one__shape-four"
      style="background-image: url(/assets/images/shapes/team-1-shape-4.png);"
    ></div>
    <div
      class="team-one__shape-five"
      style="background-image: url(/assets/images/shapes/team-1-shape-5.png);"
    ></div>
    <div
      class="team-one__shape-six"
      style="background-image: url(/assets/images/shapes/team-1-shape-6.png);"
    ></div>
    <div class="container">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline">Our Team</h6>
        <h3 class="sec-title__title">Make Brand Identities From<br /> Scratch And Help</h3>
      </div>
      <!-- /.sec-title -->

      <ClientOnly>
        <Swiper
          :modules="[SwiperNavigation, SwiperAutoplay]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :navigation="{
            prevEl: '.team-one__nav-prev',
            nextEl: '.team-one__nav-next'
          }"
          :breakpoints="{
            500: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30 }
          }"
        >
          <SwiperSlide v-for="(member, index) in allSlides" :key="index">
            <div class="team-card">
              <div class="team-card__image">
                <img :src="member.image" :alt="member.name" />
              </div>
              <div class="team-card__content">
                <div class="team-card__hover">
                  <div class="team-card__social">
                    <i class="flaticon-share"></i>
                    <div class="team-card__social__list">
                      <a href="https://facebook.com" target="_blank" rel="noopener">
                        <i class="fab fa-facebook-f"></i>
                        <span class="sr-only">Facebook</span>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener">
                        <i class="fab fa-twitter"></i>
                        <span class="sr-only">Twitter</span>
                      </a>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener">
                        <i class="fab fa-linkedin-in"></i>
                        <span class="sr-only">Linkedin</span>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 class="team-card__title">
                  <NuxtLink :to="member.link">{{ member.name }}</NuxtLink>
                </h3>
                <p class="team-card__designation">{{ member.role }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>

      <!-- Navigation Arrows -->
      <div class="d-flex justify-content-center gap-3 mt-4">
        <button
          class="team-one__nav-prev btn btn-outline-dark rounded-circle"
          style="width: 45px; height: 45px;"
          aria-label="Previous Team Member"
        >
          <i class="flaticon-long-arrow-left"></i>
        </button>
        <button
          class="team-one__nav-next btn btn-outline-dark rounded-circle"
          style="width: 45px; height: 45px;"
          aria-label="Next Team Member"
        >
          <i class="flaticon-long-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Autoplay as SwiperAutoplay } from 'swiper/modules'

const teamMembers = [
  {
    name: 'Wade Warren',
    role: 'Marketing Lead',
    image: '/assets/images/team/team-1-1.jpg',
    link: '/team/sarah-albert'
  },
  {
    name: 'Robert Fox',
    role: 'Web Developer',
    image: '/assets/images/team/team-1-2.jpg',
    link: '/team/sarah-albert'
  },
  {
    name: 'Jenny Wilson',
    role: 'Brand Designer',
    image: '/assets/images/team/team-1-3.jpg',
    link: '/team/sarah-albert'
  },
  {
    name: 'Jacob Jones',
    role: 'SEO Strategist',
    image: '/assets/images/team/team-1-4.jpg',
    link: '/team/sarah-albert'
  },
  {
    name: 'Sarah Albert',
    role: 'Growth Lead',
    image: '/assets/images/team/team-1-1.jpg',
    link: '/team/sarah-albert'
  },
  {
    name: 'Devon Lane',
    role: 'UI Designer',
    image: '/assets/images/team/team-1-2.jpg',
    link: '/team/sarah-albert'
  },
  {
    name: 'Courtney Henry',
    role: 'Content Strategist',
    image: '/assets/images/team/team-1-3.jpg',
    link: '/team/sarah-albert'
  },
  {
    name: 'Arlene McCoy',
    role: 'Media Buyer',
    image: '/assets/images/team/team-1-4.jpg',
    link: '/team/sarah-albert'
  }
]

const allSlides = computed(() => [...teamMembers, ...teamMembers])
</script>
