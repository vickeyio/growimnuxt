<template>
  <div>
    <Breadcrumb
      :title="post.title"
      :breadcrumbs="[
        { label: 'Blog', link: '/blog' },
        { label: post.title }
      ]"
    />

    <section class="blog-details py-5">
      <div class="container">
        <div class="row gutter-y-60">
          <div class="col-lg-8">
            <div class="blog-details__content">
              <div class="blog-details__image mb-4">
                <img :src="post.image" :alt="post.title" class="img-fluid rounded w-100" />
              </div>
              <div class="blog-card__meta mb-3">
                <span class="badge bg-primary text-white me-2 px-3 py-2">{{ post.category }}</span>
                <span class="text-muted">{{ post.date }} &bull; By {{ post.author }}</span>
              </div>
              <h2 class="mb-4">{{ post.title }}</h2>
              <p class="lead text-muted">{{ post.intro }}</p>
              <p class="text-muted">{{ post.body1 }}</p>

              <blockquote class="p-4 bg-light border-start border-primary border-4 my-4 font-italic">
                "High-performance growth isn't about chasing every new platform—it's about mastering high-intent channels, delivering unmatched user experience, and testing with velocity."
              </blockquote>

              <p class="text-muted">{{ post.body2 }}</p>

              <!-- Tags and Share -->
              <div class="d-flex justify-content-between align-items-center border-top border-bottom py-3 my-4">
                <div>
                  <strong>Tags: </strong>
                  <span class="badge bg-light text-dark me-1">Strategy</span>
                  <span class="badge bg-light text-dark me-1">Growth</span>
                  <span class="badge bg-light text-dark">SEO</span>
                </div>
                <div class="d-flex gap-2">
                  <a href="#" class="btn btn-sm btn-outline-dark rounded-circle"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="btn btn-sm btn-outline-dark rounded-circle"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="btn btn-sm btn-outline-dark rounded-circle"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>

              <!-- Author Box -->
              <div class="d-flex align-items-center gap-3 p-4 bg-light rounded mb-5">
                <img src="/assets/images/blog/blog-author-1-1.jpg" alt="Author" class="rounded-circle" width="70" />
                <div>
                  <h5 class="mb-1">{{ post.author }}</h5>
                  <p class="small text-muted mb-0">Senior Marketing Strategist and Contributor at Growim.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <div class="sidebar p-4 bg-light rounded">
              <h4 class="mb-3">Recent Posts</h4>
              <ul class="list-unstyled mb-4">
                <li class="mb-3 pb-3 border-bottom">
                  <NuxtLink to="/blog/business-strategy" class="text-dark font-weight-bold d-block">
                    Business Strategy For Modern Marketing Systems
                  </NuxtLink>
                  <small class="text-muted">March 24, 2026</small>
                </li>
                <li class="mb-3 pb-3 border-bottom">
                  <NuxtLink to="/blog/omnichannel-visibility" class="text-dark font-weight-bold d-block">
                    Why Is Omnichannel Visibility Crucial For E-Commerce?
                  </NuxtLink>
                  <small class="text-muted">April 16, 2026</small>
                </li>
                <li>
                  <NuxtLink to="/blog/creative-strategy" class="text-dark font-weight-bold d-block">
                    Discover A Better Way Of Redefining Company Growth Goals
                  </NuxtLink>
                  <small class="text-muted">May 02, 2026</small>
                </li>
              </ul>

              <h4 class="mb-3">Categories</h4>
              <ul class="list-unstyled">
                <li class="d-flex justify-content-between py-2 border-bottom">
                  <NuxtLink to="/blog" class="text-muted">Digital Strategy</NuxtLink>
                  <span>(12)</span>
                </li>
                <li class="d-flex justify-content-between py-2 border-bottom">
                  <NuxtLink to="/blog" class="text-muted">SEO Audits</NuxtLink>
                  <span>(8)</span>
                </li>
                <li class="d-flex justify-content-between py-2 border-bottom">
                  <NuxtLink to="/blog" class="text-muted">Paid Performance</NuxtLink>
                  <span>(15)</span>
                </li>
              </ul>
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
const slug = computed(() => (route.params.slug as string) || 'creative-strategy')

const post = computed(() => {
  const title = slug.value
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
  return {
    title,
    category: 'Marketing Strategy',
    date: 'April 16, 2026',
    author: 'Cody Fisher',
    image: '/assets/images/blog/blog-details-1.jpg',
    intro: 'In the fast-evolving digital ecosystem, aligning brand messaging with measurable data insights is paramount to sustained customer acquisition.',
    body1: 'Modern organizations face unprecedented saturation across acquisition channels. To cut through noise, creative execution must be tightly coupled with technical search optimization and personalized lifecycle retargeting.',
    body2: 'By leveraging modern frameworks, real-time analytics, and iterative testing methodologies, forward-thinking brands can consistently generate outsized ROI while protecting customer trust.'
  }
})

useHead({
  title: computed(() => `${post.value.title} || Growim Blog`)
})
</script>
