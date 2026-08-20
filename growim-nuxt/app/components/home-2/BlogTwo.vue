<template>
  <section class="blog-two py-5 bg-light">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">LATEST INSIGHTS</h6>
        <h3 class="sec-title__title">News & Articles From Industry Experts</h3>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <div class="card border-0 rounded overflow-hidden shadow-sm h-100">
            <div class="position-relative">
              <img :src="post.image" :alt="post.title" class="card-img-top" />
              <span class="badge bg-primary position-absolute top-0 end-0 m-3 px-3 py-2 text-white">
                {{ post.category }}
              </span>
            </div>
            <div class="card-body p-4">
              <small class="text-muted d-block mb-2">{{ post.date }}</small>
              <h5 class="card-title font-weight-bold mb-3">
                <NuxtLink :to="`/blog/${post.slug}`" class="text-dark">{{ post.title }}</NuxtLink>
              </h5>
              <NuxtLink :to="`/blog/${post.slug}`" class="btn btn-link text-primary p-0 font-weight-bold">
                Read Article &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    title: 'Business Strategy For Modern Marketing Systems',
    slug: 'business-strategy',
    category: 'Strategy',
    date: 'March 24, 2026',
    image: '/assets/images/blog/blog-1-1.png'
  },
  {
    title: 'Why Is Omnichannel Visibility Crucial For E-Commerce?',
    slug: 'omnichannel-visibility',
    category: 'E-Commerce',
    date: 'April 16, 2026',
    image: '/assets/images/blog/blog-1-2.png'
  },
  {
    title: 'Discover A Better Way Of Redefining Company Growth Goals',
    slug: 'creative-strategy',
    category: 'Growth',
    date: 'May 02, 2026',
    image: '/assets/images/blog/blog-1-3.png'
  }
]
</script>
