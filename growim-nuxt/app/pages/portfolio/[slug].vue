<template>
  <div>
    <Breadcrumb
      :title="project.title"
      :breadcrumbs="[
        { label: 'Portfolio', link: '/portfolio' },
        { label: project.title }
      ]"
    />

    <section class="portfolio-details py-5">
      <div class="container">
        <!-- Main Hero Image -->
        <div class="portfolio-details__image mb-5">
          <img :src="project.image" :alt="project.title" class="img-fluid rounded w-100" />
        </div>

        <div class="row gutter-y-40">
          <div class="col-lg-8">
            <h3 class="mb-3">{{ project.title }}</h3>
            <p class="lead text-muted">{{ project.overview }}</p>
            <p class="text-muted">{{ project.fullDetails }}</p>

            <h4 class="mt-4 mb-3">Project Challenge & Strategy</h4>
            <p class="text-muted">
              Our core objective was to redefine customer acquisition pathways while modernizing digital perception. Through iterative prototyping, technical SEO restructuring, and high-performance frontend engineering, we unlocked immediate efficiency gains across all customer touchpoints.
            </p>

            <div class="row my-4">
              <div v-for="(metric, mIndex) in project.results" :key="mIndex" class="col-sm-4 mb-3">
                <div class="p-3 bg-light rounded text-center">
                  <h3 class="text-primary font-weight-bold mb-1">{{ metric.value }}</h3>
                  <p class="small text-muted mb-0">{{ metric.label }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-details__info p-4 bg-light rounded">
              <h4 class="mb-4">Project Information</h4>
              <ul class="list-unstyled mb-4">
                <li class="d-flex justify-content-between py-2 border-bottom">
                  <span class="text-muted">Client:</span>
                  <strong>{{ project.client }}</strong>
                </li>
                <li class="d-flex justify-content-between py-2 border-bottom">
                  <span class="text-muted">Category:</span>
                  <strong>{{ project.category }}</strong>
                </li>
                <li class="d-flex justify-content-between py-2 border-bottom">
                  <span class="text-muted">Date:</span>
                  <strong>{{ project.date }}</strong>
                </li>
                <li class="d-flex justify-content-between py-2 border-bottom">
                  <span class="text-muted">Website:</span>
                  <a href="#" class="text-primary">www.clientbrand.com</a>
                </li>
              </ul>
              <NuxtLink to="/contact" class="growim-btn w-100 text-center">
                <span class="growim-btn__text">Start Similar Project</span>
              </NuxtLink>
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
const slug = computed(() => (route.params.slug as string) || 'web-development')

const project = computed(() => {
  return {
    title: slug.value
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' '),
    category: 'Digital Strategy & Development',
    client: 'Apex Global Ventures',
    date: 'February 2026',
    image: '/assets/images/portfolio/portfolio-details-1.jpg',
    overview: 'Scalable architecture and end-to-end digital transformation delivering exceptional growth and measurable conversion impact.',
    fullDetails: 'We designed a cohesive digital product system from ground up, reducing interaction friction and maximizing organic discoverability.',
    results: [
      { value: '+340%', label: 'Organic Traffic' },
      { value: '2.8x', label: 'Conversion Lift' },
      { value: '99.9%', label: 'Uptime Reliability' }
    ]
  }
})

useHead({
  title: computed(() => `${project.value.title} || Growim Portfolio Details`)
})
</script>
