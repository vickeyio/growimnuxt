<template>
  <div>
    <Breadcrumb
      :title="service.title"
      :breadcrumbs="[
        { label: 'Services', link: '/services' },
        { label: service.title }
      ]"
    />

    <section class="service-details py-5">
      <div class="container">
        <div class="row gutter-y-60">
          <!-- Sidebar -->
          <div class="col-md-12 col-lg-4">
            <div class="service-sidebar">
              <div class="service-sidebar__single">
                <h3 class="service-sidebar__title">All Services</h3>
                <ul class="list-unstyled service-sidebar__nav">
                  <li
                    v-for="item in allServices"
                    :key="item.slug"
                    :class="{ current: item.slug === service.slug }"
                  >
                    <NuxtLink :to="`/services/${item.slug}`">{{ item.title }}</NuxtLink>
                  </li>
                </ul>
              </div>

              <!-- Opening Hours -->
              <div class="service-sidebar__single">
                <h3 class="service-sidebar__title">Opening Hours</h3>
                <ul class="list-unstyled service-sidebar__info">
                  <li><i class="flaticon-time"></i>Mon - Sat: 10.00 AM - 4.00 PM</li>
                  <li><i class="flaticon-time"></i>Sun: 09.00 AM - 4.00 PM</li>
                  <li><i class="flaticon-time"></i>Friday: Closed</li>
                </ul>
                <NuxtLink class="service-sidebar__btn" to="/contact">
                  Appointment Now <i class="flaticon-long-arrow-right"></i>
                </NuxtLink>
              </div>

              <!-- Need Help Contact Box -->
              <div
                class="service-sidebar__single service-sidebar__contact text-center p-4 text-white rounded"
                style="background: #1c1c24;"
              >
                <div class="service-sidebar__contact__icon mb-2">
                  <i class="flaticon-phone" style="font-size: 32px; color: var(--growim-base, #ff5e14);"></i>
                </div>
                <p class="service-sidebar__contact__number mb-0">
                  <span class="d-block text-white-50">Need Help? Call Here</span>
                  <a href="tel:+2085550112" class="text-white font-weight-bold h5">+208-555-0112</a>
                </p>
              </div>
            </div>
          </div>

          <!-- Service Content -->
          <div class="col-md-12 col-lg-8">
            <div class="service-details__content">
              <div class="service-details__thumbnail mb-4">
                <img
                  :src="service.image"
                  :alt="service.title"
                  class="img-fluid rounded"
                />
              </div>
              <h3 class="service-details__title mb-3">{{ service.title }}</h3>
              <p class="service-details__text text-muted mb-4">{{ service.longDescription }}</p>

              <h4 class="mb-3">Key Benefits & Methodology</h4>
              <div class="row mb-4">
                <div
                  v-for="(benefit, index) in service.benefits"
                  :key="index"
                  class="col-md-6 mb-3"
                >
                  <div class="d-flex align-items-start gap-3">
                    <i class="flaticon-check text-primary mt-1"></i>
                    <div>
                      <h6 class="mb-1 font-weight-bold">{{ benefit.title }}</h6>
                      <p class="small text-muted mb-0">{{ benefit.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Collapsible FAQ Accordion for this service -->
              <h4 class="mb-3">Frequently Asked Questions</h4>
              <div class="growim-accrodion mb-5">
                <div
                  v-for="(faq, fIndex) in service.faqs"
                  :key="fIndex"
                  class="accrodion mb-3 p-3 border rounded"
                  :class="{ active: openFaq === fIndex }"
                >
                  <div
                    class="accrodion-title d-flex justify-content-between align-items-center"
                    style="cursor: pointer;"
                    @click="openFaq = openFaq === fIndex ? -1 : fIndex"
                  >
                    <h5 class="mb-0">{{ faq.q }}</h5>
                    <i :class="openFaq === fIndex ? 'fa fa-minus' : 'fa fa-plus'"></i>
                  </div>
                  <div v-show="openFaq === fIndex" class="accrodion-content pt-3">
                    <p class="text-muted mb-0">{{ faq.a }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '~/components/common/Breadcrumb.vue'

const route = useRoute()
const openFaq = ref(0)

const allServices = [
  { slug: 'digital-marketing', title: 'Digital Marketing' },
  { slug: 'web-development', title: 'Web Development' },
  { slug: 'seo-optimized', title: 'SEO Optimization' },
  { slug: 'app-development', title: 'App Development' },
  { slug: 'email-marketing', title: 'Email Marketing' },
  { slug: 'keyword-research', title: 'Keyword Research' },
  { slug: 'link-building', title: 'Link Building' }
]

const servicesLookup: Record<string, any> = {
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing Strategy',
    image: '/assets/images/resources/service-details-1.jpg',
    longDescription:
      'We craft full-funnel digital marketing campaigns that blend high-converting copywriting, advanced audience targeting, and precision analytics to generate sustainable revenue.',
    benefits: [
      { title: 'Audience Targeting', desc: 'Precision cohorts built from first-party intent data.' },
      { title: 'Multi-Channel ROI', desc: 'Holistic cross-channel attribution reporting.' },
      { title: 'Rapid Iteration', desc: 'Continuous testing of creatives and messaging angles.' },
      { title: 'Transparent Dashboards', desc: 'Real-time performance metrics updated 24/7.' }
    ],
    faqs: [
      {
        q: 'How soon can we expect results from our marketing campaigns?',
        a: 'Paid media campaigns often yield actionable performance data within the first 7 to 14 days, while organic strategies show substantial momentum over a 60 to 90 day window.'
      },
      {
        q: 'How do you structure custom reporting?',
        a: 'We provide bespoke live dashboards integrated with Google Analytics, Search Console, and ad platforms, accompanied by bi-weekly strategy reviews.'
      }
    ]
  },
  'web-development': {
    slug: 'web-development',
    title: 'Full-Stack Web Development',
    image: '/assets/images/resources/service-details-1.jpg',
    longDescription:
      'Engineered for speed, scalability, and seamless user experiences. We build modern Nuxt 4 and Vue 3 web applications with enterprise-grade architecture.',
    benefits: [
      { title: 'Sub-Second Load Times', desc: 'Optimized asset bundles, SSR, and edge caching.' },
      { title: 'Mobile-First Design', desc: 'Flawless responsive layouts across all viewports.' },
      { title: 'Headless Architecture', desc: 'Decoupled frontends connected to modern CMSs.' },
      { title: 'Full SEO Optimization', desc: 'Structured schema and semantic HTML built in.' }
    ],
    faqs: [
      {
        q: 'What technology stack do you use?',
        a: 'We specialize in modern JavaScript/TypeScript ecosystems including Nuxt 4, Vue 3, Node.js, and modern headless CMS platforms.'
      }
    ]
  }
}

const currentSlug = computed(() => (route.params.slug as string) || 'digital-marketing')

const service = computed(() => {
  return (
    servicesLookup[currentSlug.value] || {
      slug: currentSlug.value,
      title: currentSlug.value
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' '),
      image: '/assets/images/resources/service-details-1.jpg',
      longDescription:
        'Comprehensive digital solutions engineered to elevate brand perception, streamline sales conversions, and accelerate enterprise growth.',
      benefits: [
        { title: 'Data-Driven Insights', desc: 'Deep market analysis and competitive intelligence.' },
        { title: 'Scalable Execution', desc: 'Built to adapt as your customer base expands.' }
      ],
      faqs: [
        {
          q: 'How do we get started?',
          a: 'Reach out through our contact page to schedule an initial discovery call and strategy audit.'
        }
      ]
    }
  )
})

useHead({
  title: computed(() => `${service.value.title} || Growim Services`),
  meta: [
    {
      name: 'description',
      content: computed(() => service.value.longDescription)
    }
  ]
})
</script>
