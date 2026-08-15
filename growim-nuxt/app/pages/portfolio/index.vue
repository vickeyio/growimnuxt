<template>
  <div>
    <Breadcrumb title="Our Portfolio" :breadcrumbs="[{ label: 'Our Portfolio' }]" />

    <section class="portfolio-six py-5">
      <div class="container">
        <!-- Interactive Category Filter -->
        <div class="d-flex justify-content-center flex-wrap gap-2 mb-5">
          <button
            v-for="cat in categories"
            :key="cat"
            class="btn px-4 py-2 rounded-pill font-weight-bold"
            :class="selectedCategory === cat ? 'btn-primary text-white' : 'btn-outline-dark'"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Portfolio Items Grid with Transition -->
        <div class="row gutter-y-30">
          <div
            v-for="(item, index) in filteredItems"
            :key="index"
            class="col-lg-6 animated fadeIn"
          >
            <div class="portfolio-six__item position-relative overflow-hidden rounded">
              <img :src="item.image" :alt="item.title" class="img-fluid w-100" />
              <div class="portfolio-six__item__content">
                <h3 class="portfolio-six__item__title">
                  <NuxtLink :to="`/portfolio/${item.slug}`">{{ item.title }}</NuxtLink>
                </h3>
                <h5 class="portfolio-six__item__cate">{{ item.category }}</h5>
                <div class="portfolio-six__item__btn">
                  <NuxtLink :to="`/portfolio/${item.slug}`" aria-label="View project">
                    <i class="flaticon-up-right-arrow"></i>
                  </NuxtLink>
                </div>
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
import { ref, computed } from 'vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import CtaBanner from '~/components/home/CtaBanner.vue'

useHead({
  title: 'Our Portfolio || Growim Case Studies',
  meta: [
    {
      name: 'description',
      content: 'Explore our latest creative design, marketing campaigns, and web development case studies.'
    }
  ]
})

const categories = ['All', 'Marketing', 'Branding', 'Development', 'SEO']
const selectedCategory = ref('All')

const items = [
  {
    title: 'Generation Of Wealth',
    category: 'Marketing',
    slug: 'generation-of-wealth',
    image: '/assets/images/portfolio/portfolio-6-1.jpg'
  },
  {
    title: 'Creative Brand System',
    category: 'Branding',
    slug: 'creative-brand-system',
    image: '/assets/images/portfolio/portfolio-6-2.jpg'
  },
  {
    title: 'Fintech Cloud Platform',
    category: 'Development',
    slug: 'fintech-cloud-platform',
    image: '/assets/images/portfolio/portfolio-6-3.jpg'
  },
  {
    title: 'Search Ranking Overhaul',
    category: 'SEO',
    slug: 'search-ranking-overhaul',
    image: '/assets/images/portfolio/portfolio-6-4.jpg'
  },
  {
    title: 'Luxury E-Commerce Replatform',
    category: 'Development',
    slug: 'luxury-ecommerce',
    image: '/assets/images/portfolio/portfolio-6-6.jpg'
  },
  {
    title: 'Omnichannel Social Scale',
    category: 'Marketing',
    slug: 'omnichannel-scale',
    image: '/assets/images/portfolio/portfolio-6-1.jpg'
  }
]

const filteredItems = computed(() => {
  if (selectedCategory.value === 'All') return items
  return items.filter(item => item.category.toLowerCase() === selectedCategory.value.toLowerCase())
})
</script>
