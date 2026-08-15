<template>
  <section class="team-two py-5 bg-dark text-white">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline text-primary">MEET OUR TEAM</h6>
        <h3 class="sec-title__title text-white">Experienced Minds Behind<br /> Every Successful Campaign</h3>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(member, idx) in teamList"
          :key="idx"
          class="col-md-6 col-lg-3"
        >
          <div class="team-card bg-secondary bg-opacity-25 rounded overflow-hidden">
            <div class="team-card__image position-relative">
              <img :src="member.image" :alt="member.name" class="img-fluid w-100" />
            </div>
            <div class="team-card__content p-3 text-center">
              <h4 class="team-card__title mb-1">
                <NuxtLink :to="`/team/${member.slug}`" class="text-white">{{ member.name }}</NuxtLink>
              </h4>
              <p class="team-card__designation text-primary mb-0">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamList = [
  { name: 'Wade Warren', role: 'Head of Marketing', slug: 'wade-warren', image: '/assets/images/team/team-1-1.jpg' },
  { name: 'Robert Fox', role: 'Lead Developer', slug: 'robert-fox', image: '/assets/images/team/team-1-2.jpg' },
  { name: 'Jenny Wilson', role: 'Brand Director', slug: 'jenny-wilson', image: '/assets/images/team/team-1-3.jpg' },
  { name: 'Jacob Jones', role: 'Senior SEO Architect', slug: 'jacob-jones', image: '/assets/images/team/team-1-4.jpg' }
]
</script>
