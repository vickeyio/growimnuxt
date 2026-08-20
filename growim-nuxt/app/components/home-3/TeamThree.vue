<template>
  <section class="team-three py-5 position-relative">
    <div class="container">
      <div class="d-flex justify-content-between align-items-end mb-4">
        <div class="sec-title text-left mb-0">
          <h6 class="sec-title__tagline">OUR EXPERTS</h6>
          <h3 class="sec-title__title">Meet Our Professional<br /> Team Members</h3>
        </div>
        <NuxtLink class="growim-btn" to="/team">
          <span class="growim-btn__text">View All Members</span>
          <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
        </NuxtLink>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(member, index) in teamList"
          :key="index"
          class="col-lg-4 col-md-6"
        >
          <div class="team-card-three text-center p-4 bg-light rounded shadow-sm">
            <div class="team-card-three__image mb-3">
              <img :src="member.image" :alt="member.name" class="img-fluid rounded" />
            </div>
            <h4 class="team-card-three__title mb-1 font-weight-bold">
              <NuxtLink :to="`/team/${member.slug}`" class="text-dark">{{ member.name }}</NuxtLink>
            </h4>
            <p class="team-card-three__designation text-primary mb-0">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamList = [
  { name: 'Wade Warren', role: 'Head of Marketing', slug: 'wade-warren', image: '/assets/images/team/team-3-1.png' },
  { name: 'Jacob Jones', role: 'Chief Content Strategist', slug: 'jacob-jones', image: '/assets/images/team/team-3-2.png' },
  { name: 'Jenny Wilson', role: 'Brand Director', slug: 'jenny-wilson', image: '/assets/images/team/team-3-3.png' }
]
</script>
