<template>
  <section id="team" class="team-two">
    <div class="team-two__shape-one" style="background-image: url(/assets/images/shapes/team-2-shape-1.png);"></div>
    <div class="container">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline">our expert team</h6>
        <h3 class="sec-title__title">Our Expert <span>Team</span></h3>
      </div>
      <ClientOnly>
        <Swiper
          :modules="[SwiperNavigation]"
          :slides-per-view="1"
          :space-between="30"
          :navigation="true"
          :breakpoints="{
            500: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
          }"
          class="team-two__swiper growim-owl__carousel--basic-nav"
        >
          <SwiperSlide v-for="member in team" :key="member.id || member.name">
            <div class="team-card-two">
              <div class="team-card-two__image">
                <img :src="member.image" :alt="member.name" />
              </div>
              <div class="team-card-two__content">
                <div class="team-card-two__social">
                  <a :href="member.socialLinks?.facebook || 'https://facebook.com'" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
                  <a :href="member.socialLinks?.twitter || 'https://twitter.com'" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a>
                  <a :href="member.socialLinks?.linkedin || 'https://www.linkedin.com/'" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <h3 class="team-card-two__title">
                  <a href="#team">{{ member.name }}</a>
                </h3>
                <p class="team-card-two__designation">{{ member.role }}</p>
              </div>
              <div class="team-card-two__border"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation } from 'swiper/modules'

const { getTeamMembers } = useTeam()
const { data: teamResponse } = await getTeamMembers()
const team = computed(() => teamResponse.value?.data || [])
</script>
