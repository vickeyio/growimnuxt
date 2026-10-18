<template>
  <div class="client-carousel">
    <div class="container">
      <h5 class="client-carousel__title">Trusted Partners</h5>
      <ClientOnly>
        <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="3"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :breakpoints="{
            500: { slidesPerView: 4, spaceBetween: 30 },
            768: { slidesPerView: 5, spaceBetween: 40 },
            992: { slidesPerView: 6, spaceBetween: 40 },
            1200: { slidesPerView: 8, spaceBetween: 45 }
          }"
        >
          <SwiperSlide v-for="client in clients" :key="client.name">
            <div class="client-carousel__one__item">
              <img :src="client.logo" :alt="client.name" />
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay } from 'swiper/modules'

const { getClients } = useClients()
const { data: clientsResponse } = await getClients()
const clients = computed(() => clientsResponse.value?.data ?? [])
</script>
