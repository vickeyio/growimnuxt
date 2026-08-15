<template>
  <div>
    <Breadcrumb
      :title="member.name"
      :breadcrumbs="[
        { label: 'Team', link: '/team' },
        { label: member.name }
      ]"
    />

    <section class="team-details py-5">
      <div class="container">
        <div class="row align-items-center gutter-y-40 mb-5">
          <div class="col-lg-5">
            <div class="team-details__image rounded overflow-hidden shadow-sm">
              <img :src="member.image" :alt="member.name" class="img-fluid w-100" />
            </div>
          </div>
          <div class="col-lg-7">
            <h2 class="mb-1">{{ member.name }}</h2>
            <h5 class="text-primary mb-3">{{ member.role }}</h5>
            <p class="lead text-muted">{{ member.bio }}</p>
            <p class="text-muted">{{ member.experience }}</p>

            <div class="d-flex gap-3 mt-4">
              <a href="#" class="btn btn-outline-dark rounded-circle" style="width: 40px; height: 40px;"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="btn btn-outline-dark rounded-circle" style="width: 40px; height: 40px;"><i class="fab fa-twitter"></i></a>
              <a href="#" class="btn btn-outline-dark rounded-circle" style="width: 40px; height: 40px;"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <!-- Skills Progress -->
        <div class="row mt-4">
          <div class="col-lg-6 mb-3">
            <h6>Digital Marketing Strategy</h6>
            <div class="progress mb-3" style="height: 8px;">
              <div class="progress-bar bg-primary" style="width: 95%;"></div>
            </div>
          </div>
          <div class="col-lg-6 mb-3">
            <h6>Conversion Rate Optimization</h6>
            <div class="progress mb-3" style="height: 8px;">
              <div class="progress-bar bg-primary" style="width: 88%;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import CtaBanner from '~/components/home/CtaBanner.vue'

const route = useRoute()
const slug = computed(() => (route.params.slug as string) || 'sarah-albert')

const member = computed(() => {
  const name = slug.value
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
  return {
    name,
    role: 'Growth Strategist & Marketing Lead',
    image: '/assets/images/team/team-1-1.jpg',
    bio: 'Oversees high-impact performance marketing, client scaling initiatives, and holistic brand positioning for international accounts.',
    experience: 'With over 10 years of experience driving multichannel growth for fast-growing companies, specializing in paid acquisition, viral referral loops, and user retention.'
  }
})

useHead({
  title: computed(() => `${member.value.name} || Growim Team Member`)
})
</script>
