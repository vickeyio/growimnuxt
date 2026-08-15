<template>
  <div>
    <Breadcrumb title="Our Team" :breadcrumbs="[{ label: 'Our Team' }]" />

    <section class="team-page py-5">
      <div class="container">
        <div class="row gutter-y-30">
          <div
            v-for="(member, index) in allTeam"
            :key="index"
            class="col-md-6 col-lg-3"
          >
            <div class="team-card">
              <div class="team-card__image">
                <img :src="member.image" :alt="member.name" />
              </div>
              <div class="team-card__content">
                <div class="team-card__hover">
                  <div class="team-card__social">
                    <i class="flaticon-share"></i>
                    <div class="team-card__social__list">
                      <a href="https://facebook.com" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
                      <a href="https://twitter.com" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
                <h3 class="team-card__title">
                  <NuxtLink :to="`/team/${member.slug}`">{{ member.name }}</NuxtLink>
                </h3>
                <p class="team-card__designation">{{ member.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import CtaBanner from '~/components/home/CtaBanner.vue'

useHead({
  title: 'Our Team || Growim Digital Experts',
  meta: [
    { name: 'description', content: 'Meet the brilliant digital strategists, designers, and engineers at Growim.' }
  ]
})

const allTeam = [
  { name: 'Wade Warren', role: 'Head of Marketing', slug: 'wade-warren', image: '/assets/images/team/team-1-1.jpg' },
  { name: 'Robert Fox', role: 'Lead Developer', slug: 'robert-fox', image: '/assets/images/team/team-1-2.jpg' },
  { name: 'Jenny Wilson', role: 'Brand Director', slug: 'jenny-wilson', image: '/assets/images/team/team-1-3.jpg' },
  { name: 'Jacob Jones', role: 'Senior SEO Architect', slug: 'jacob-jones', image: '/assets/images/team/team-1-4.jpg' },
  { name: 'Sarah Albert', role: 'VP Growth & Strategy', slug: 'sarah-albert', image: '/assets/images/team/team-1-1.jpg' },
  { name: 'Devon Lane', role: 'UI/UX Lead', slug: 'devon-lane', image: '/assets/images/team/team-1-2.jpg' },
  { name: 'Courtney Henry', role: 'Content Strategist', slug: 'courtney-henry', image: '/assets/images/team/team-1-3.jpg' },
  { name: 'Arlene McCoy', role: 'Performance Media Lead', slug: 'arlene-mccoy', image: '/assets/images/team/team-1-4.jpg' }
]
</script>
