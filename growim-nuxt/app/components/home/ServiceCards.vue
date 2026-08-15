<template>
  <section class="service-one">
    <div
      class="service-one__shape-one"
      style="background-image: url(/assets/images/shapes/service-1-shape-1.png);"
    ></div>
    <div
      class="service-one__shape-two"
      style="background-image: url(/assets/images/shapes/service-1-shape-2.png);"
    ></div>
    <div
      class="service-one__shape-three"
      style="background-image: url(/assets/images/shapes/service-1-shape-3.png);"
    ></div>
    <div
      class="service-one__shape-four"
      style="background-image: url(/assets/images/shapes/service-1-shape-4.png);"
    ></div>
    <div
      class="service-one__shape-five"
      style="background-image: url(/assets/images/shapes/service-1-shape-5.png);"
    ></div>
    <div class="container tabs-box">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline">our services</h6>
        <h3 class="sec-title__title">Our Services Solve Any<br /> Business Problem</h3>
      </div>
      <!-- /.sec-title -->

      <!-- Interactive Tab Buttons -->
      <ul class="list-unstyled tab-buttons service-one__tabs d-flex flex-wrap justify-content-center">
        <li
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-btn"
          :class="{ 'active-btn': activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.name }}
        </li>
      </ul>

      <!-- Tab Content Area -->
      <div class="tabs-content">
        <div class="tab animated fadeIn" :key="activeTab">
          <div class="row gutter-y-30">
            <div
              v-for="service in currentServices"
              :key="service.title"
              class="col-xl-3 col-md-6"
            >
              <div class="service-one__item text-center">
                <div class="service-one__item__wrapper">
                  <div
                    class="service-one__item__hover"
                    :style="{ backgroundImage: `url(${service.hoverBg})` }"
                  ></div>
                  <div
                    class="service-one__item__icon"
                    style="background-image: url(/assets/images/shapes/service-icon-bg.png);"
                  >
                    <img :src="service.icon" alt="service icon" />
                  </div>
                  <!-- /.service-icon -->
                  <h3 class="service-one__item__title">
                    <NuxtLink :to="service.link">{{ service.title }}</NuxtLink>
                  </h3>
                  <!-- /.service-title -->
                  <p class="service-one__item__text">{{ service.description }}</p>
                  <!-- /.service-text -->
                  <NuxtLink class="service-one__item__rm" :to="service.link" aria-label="Read more">
                    <svg viewBox="0 0 58 66" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M25.46 1.07519C27.646 -0.206291 30.354 -0.206292 32.54 1.07519L54.54 13.9717C56.6833 15.2281 58 17.5263 58 20.0106V45.9894C58 48.4737 56.6833 50.7719 54.54 52.0283L32.54 64.9248C30.354 66.2063 27.646 66.2063 25.46 64.9248L3.45996 52.0283C1.31675 50.7719 0 48.4737 0 45.9894V20.0106C0 17.5263 1.31675 15.2281 3.45996 13.9717L25.46 1.07519Z"
                      />
                    </svg>
                    <i class="flaticon-up-right-arrow"></i>
                  </NuxtLink>
                </div>
              </div>
              <!-- /.service-card-one -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref('seo')

const tabs = [
  { id: 'seo', name: 'SEO' },
  { id: 'building', name: 'Link Building' },
  { id: 'media', name: 'Paid Media' },
  { id: 'branding', name: 'Branding & Content' },
  { id: 'creative', name: 'Web Dev & Creative' },
  { id: 'ecommerce', name: 'E-commerce' }
]

const servicesData: Record<
  string,
  Array<{ title: string; description: string; icon: string; hoverBg: string; link: string }>
> = {
  seo: [
    {
      title: 'Keyword Research & SEO',
      description: 'In-depth market intelligence and algorithm-tested keyword strategy.',
      icon: '/assets/images/shapes/service-1-1.png',
      hoverBg: '/assets/images/resources/service-1-1-hover.png',
      link: '/services/keyword-research'
    },
    {
      title: 'Video Search Optimization',
      description: 'Maximize video discovery and YouTube organic rank across search engines.',
      icon: '/assets/images/shapes/service-1-2.png',
      hoverBg: '/assets/images/resources/service-1-2-hover.png',
      link: '/services/video-seo'
    },
    {
      title: 'E-commerce SEO Audit',
      description: 'Technical audits, structured data, schema markup and speed optimizations.',
      icon: '/assets/images/shapes/service-1-3.png',
      hoverBg: '/assets/images/resources/service-1-3-hover.png',
      link: '/services/ecommerce-seo'
    },
    {
      title: 'High-Authority Backlinks',
      description: 'Strategic PR and link acquisitions that drive real domain authority.',
      icon: '/assets/images/shapes/service-1-4.png',
      hoverBg: '/assets/images/resources/service-1-4-hover.png',
      link: '/services/link-building'
    }
  ],
  building: [
    {
      title: 'Editorial Link Building',
      description: 'Quality placements on tier-one publications and relevant niche blogs.',
      icon: '/assets/images/shapes/service-1-4.png',
      hoverBg: '/assets/images/resources/service-1-4-hover.png',
      link: '/services/link-building'
    },
    {
      title: 'Digital PR Outreaches',
      description: 'Data-driven press campaigns designed to earn high-authority citations.',
      icon: '/assets/images/shapes/service-1-1.png',
      hoverBg: '/assets/images/resources/service-1-1-hover.png',
      link: '/services/digital-pr'
    },
    {
      title: 'Broken Link Reclamation',
      description: 'Turn competitor broken links into powerful ranking assets for your brand.',
      icon: '/assets/images/shapes/service-1-2.png',
      hoverBg: '/assets/images/resources/service-1-2-hover.png',
      link: '/services/link-building'
    },
    {
      title: 'Competitor Link Analysis',
      description: 'Reverse-engineer competitor backlink profiles to replicate high-value wins.',
      icon: '/assets/images/shapes/service-1-3.png',
      hoverBg: '/assets/images/resources/service-1-3-hover.png',
      link: '/services/keyword-research'
    }
  ],
  media: [
    {
      title: 'Google & Bing Ads (PPC)',
      description: 'High-intent search campaigns targeting users ready to purchase.',
      icon: '/assets/images/shapes/service-1-1.png',
      hoverBg: '/assets/images/resources/service-1-1-hover.png',
      link: '/services/ppc-ads'
    },
    {
      title: 'Meta & TikTok Paid Social',
      description: 'Creative ad campaigns targeting lookalike and hyper-engaged audiences.',
      icon: '/assets/images/shapes/service-1-2.png',
      hoverBg: '/assets/images/resources/service-1-2-hover.png',
      link: '/services/paid-social'
    },
    {
      title: 'Programmatic Advertising',
      description: 'Automated display & native retargeting across premium ad networks.',
      icon: '/assets/images/shapes/service-1-3.png',
      hoverBg: '/assets/images/resources/service-1-3-hover.png',
      link: '/services/programmatic'
    },
    {
      title: 'Conversion Rate Opt (CRO)',
      description: 'Multivariate A/B testing and landing page conversion acceleration.',
      icon: '/assets/images/shapes/service-1-4.png',
      hoverBg: '/assets/images/resources/service-1-4-hover.png',
      link: '/services/cro'
    }
  ],
  branding: [
    {
      title: 'Brand Identity & Visuals',
      description: 'Unique brand positioning, logos, color palettes, and typography guides.',
      icon: '/assets/images/shapes/service-1-1.png',
      hoverBg: '/assets/images/resources/service-1-1-hover.png',
      link: '/services/branding'
    },
    {
      title: 'Content Strategy & Copy',
      description: 'Compelling brand storytelling, blog articles, and lead magnets.',
      icon: '/assets/images/shapes/service-1-2.png',
      hoverBg: '/assets/images/resources/service-1-2-hover.png',
      link: '/services/content-strategy'
    },
    {
      title: 'Motion Graphics & 3D',
      description: 'Engaging visual animations and 3D product rendering for social ads.',
      icon: '/assets/images/shapes/service-1-3.png',
      hoverBg: '/assets/images/resources/service-1-3-hover.png',
      link: '/services/motion-graphics'
    },
    {
      title: 'Brand Guideline Books',
      description: 'Comprehensive guidelines ensuring cohesive cross-channel messaging.',
      icon: '/assets/images/shapes/service-1-4.png',
      hoverBg: '/assets/images/resources/service-1-4-hover.png',
      link: '/services/branding'
    }
  ],
  creative: [
    {
      title: 'Custom Web Application Dev',
      description: 'Full-stack development using Nuxt, Vue, and modern cloud platforms.',
      icon: '/assets/images/shapes/service-1-1.png',
      hoverBg: '/assets/images/resources/service-1-1-hover.png',
      link: '/services/web-development'
    },
    {
      title: 'UI/UX & Design Systems',
      description: 'Figma prototypes, mobile-first design, and seamless user experiences.',
      icon: '/assets/images/shapes/service-1-2.png',
      hoverBg: '/assets/images/resources/service-1-2-hover.png',
      link: '/services/ui-ux'
    },
    {
      title: 'Performance & Speed Opt',
      description: 'Sub-second load times, 100/100 Google Lighthouse Core Web Vitals.',
      icon: '/assets/images/shapes/service-1-3.png',
      hoverBg: '/assets/images/resources/service-1-3-hover.png',
      link: '/services/speed-optimization'
    },
    {
      title: 'API & Headless CMS Setup',
      description: 'Seamless integrations with Shopify, Strapi, WordPress, and custom APIs.',
      icon: '/assets/images/shapes/service-1-4.png',
      hoverBg: '/assets/images/resources/service-1-4-hover.png',
      link: '/services/headless-cms'
    }
  ],
  ecommerce: [
    {
      title: 'Shopify Plus & WooCommerce',
      description: 'Custom e-commerce store architecture built for high throughput sales.',
      icon: '/assets/images/shapes/service-1-1.png',
      hoverBg: '/assets/images/resources/service-1-1-hover.png',
      link: '/services/ecommerce'
    },
    {
      title: 'Cart & Checkout Funnels',
      description: 'Frictionless checkout funnels designed to minimize cart abandonment.',
      icon: '/assets/images/shapes/service-1-2.png',
      hoverBg: '/assets/images/resources/service-1-2-hover.png',
      link: '/services/checkout-funnels'
    },
    {
      title: 'Klaviyo Email Automations',
      description: 'Lifecycle flows, abandoned cart triggers, and segmented VIP newsletters.',
      icon: '/assets/images/shapes/service-1-3.png',
      hoverBg: '/assets/images/resources/service-1-3-hover.png',
      link: '/services/email-marketing'
    },
    {
      title: 'Marketplace Scaling (Amazon)',
      description: 'Product listing optimization, A+ content, and Amazon DSP advertising.',
      icon: '/assets/images/shapes/service-1-4.png',
      hoverBg: '/assets/images/resources/service-1-4-hover.png',
      link: '/services/marketplace-scaling'
    }
  ]
}

const currentServices = computed(() => servicesData[activeTab.value] || servicesData.seo)
</script>
