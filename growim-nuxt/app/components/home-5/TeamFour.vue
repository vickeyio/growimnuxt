<template>
  <section class="team-four py-5 bg-light">
    <div class="container">
      <div class="d-flex justify-content-between align-items-end mb-4">
        <div class="sec-title text-left mb-0">
          <h6 class="sec-title__tagline">OUR EXPERT TEAM</h6>
          <h3 class="sec-title__title">Meet Our Professional<br /> Team Members</h3>
        </div>
        <NuxtLink class="growim-btn" to="/team">
          <span class="growim-btn__text">View All Members</span>
        </NuxtLink>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(member, idx) in team"
          :key="idx"
          class="col-md-6 col-lg-3"
        >
          <div class="card border-0 rounded overflow-hidden shadow-sm h-100">
            <img :src="member.image" :alt="member.name" class="card-img-top" />
            <div class="card-body text-center p-3">
              <h5 class="card-title font-weight-bold mb-1">
                <NuxtLink :to="`/team/${member.slug}`" class="text-dark">{{ member.name }}</NuxtLink>
              </h5>
              <p class="text-primary small mb-0">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const team = [
  { name: 'Leslie Alexander', role: 'VP Marketing', slug: 'leslie-alexander', image: '/assets/images/team/team-4-1.jpg' },
  { name: 'Kristin Watson', role: 'Lead Architect', slug: 'kristin-watson', image: '/assets/images/team/team-4-2.jpg' },
  { name: 'Guy Hawkins', role: 'Brand Director', slug: 'guy-hawkins', image: '/assets/images/team/team-4-1.jpg' },
  { name: 'Esther Howard', role: 'SEO Lead', slug: 'esther-howard', image: '/assets/images/team/team-4-2.jpg' }
]
</script>
