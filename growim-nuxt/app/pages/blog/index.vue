<template>
  <div>
    <Breadcrumb title="Our Blog" :breadcrumbs="[{ label: 'Blog & News' }]" />

    <section class="blog-page py-5">
      <div class="container">
        <div class="row gutter-y-30">
          <div
            v-for="(post, index) in allPosts"
            :key="index"
            class="col-md-6 col-lg-4"
          >
            <div class="blog-card">
              <div class="blog-card__image">
                <img :src="post.image" :alt="post.title" />
                <img :src="post.image" :alt="post.title" />
                <NuxtLink :to="`/blog/${post.slug}`" class="blog-card__image__link">
                  <span class="sr-only">{{ post.title }}</span>
                </NuxtLink>
              </div>
              <div class="blog-card__content">
                <div class="blog-card__meta">
                  <NuxtLink class="blog-card__meta__cat" :to="`/blog/${post.slug}`">{{ post.category }}</NuxtLink>
                  <div class="blog-card__meta__date">{{ post.date }}</div>
                </div>
                <h3 class="blog-card__title">
                  <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
                </h3>
                <div class="blog-card__bottom">
                  <div class="blog-card__author">
                    <img src="/assets/images/blog/blog-author-1-1.jpg" alt="Author" />
                    <div class="blog-card__author__content">
                      <span>Admin</span>{{ post.author }}
                    </div>
                  </div>
                  <NuxtLink :to="`/blog/${post.slug}`" class="blog-card__link" aria-label="Read post">
                    <i class="fas fa-arrow-right"></i>
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
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import CtaBanner from '~/components/home/CtaBanner.vue'

useHead({
  title: 'Blog & Insights || Growim Digital Marketing',
  meta: [
    { name: 'description', content: 'Explore strategic marketing, SEO, and web development insights from industry veterans.' }
  ]
})

const allPosts = [
  {
    title: 'Business Strategy For Modern Marketing Systems',
    slug: 'business-strategy',
    category: 'Business',
    date: 'March 24, 2026',
    author: 'Cody Fisher',
    image: '/assets/images/blog/blog-1-1.png'
  },
  {
    title: 'Why Is Omnichannel Visibility Crucial For E-Commerce?',
    slug: 'omnichannel-visibility',
    category: 'Corporate',
    date: 'April 16, 2026',
    author: 'Cody Fisher',
    image: '/assets/images/blog/blog-1-2.png'
  },
  {
    title: 'Discover A Better Way Of Redefining Company Growth Goals',
    slug: 'creative-strategy',
    category: 'Marketing',
    date: 'May 02, 2026',
    author: 'Cody Fisher',
    image: '/assets/images/blog/blog-1-3.png'
  },
  {
    title: '10 Proven Tactics To Skyrocket Organic Search In 2026',
    slug: 'organic-search-tactics',
    category: 'SEO',
    date: 'May 14, 2026',
    author: 'Cody Fisher',
    image: '/assets/images/blog/blog-1-1.png'
  },
  {
    title: 'How Next-Gen Web Frameworks Impact Conversion Rates',
    slug: 'frameworks-conversion-rates',
    category: 'Development',
    date: 'June 01, 2026',
    author: 'Cody Fisher',
    image: '/assets/images/blog/blog-1-2.png'
  },
  {
    title: 'Mastering Full-Funnel Brand Storytelling & Acquisition',
    slug: 'brand-storytelling',
    category: 'Branding',
    date: 'June 18, 2026',
    author: 'Cody Fisher',
    image: '/assets/images/blog/blog-1-3.png'
  }
]
</script>
