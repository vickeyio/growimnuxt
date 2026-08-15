<template>
  <section class="blog-one blog-one--home-five py-5">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">LATEST ARTICLES</h6>
        <h3 class="sec-title__title">News From The Tech & Growth Frontline</h3>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <div class="card border-0 rounded overflow-hidden shadow-sm h-100">
            <img :src="post.image" :alt="post.title" class="card-img-top" />
            <div class="card-body p-4">
              <span class="badge bg-primary text-white mb-2">{{ post.category }}</span>
              <h5 class="card-title font-weight-bold mb-3">
                <NuxtLink :to="`/blog/${post.slug}`" class="text-dark">{{ post.title }}</NuxtLink>
              </h5>
              <NuxtLink :to="`/blog/${post.slug}`" class="text-primary font-weight-bold">
                Read More &rarr;
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
  { title: 'Business Strategy For Modern Marketing Systems', slug: 'business-strategy', category: 'Strategy', image: '/assets/images/blog/blog-1-1.png' },
  { title: 'Why Is Omnichannel Visibility Crucial For E-Commerce?', slug: 'omnichannel-visibility', category: 'E-Commerce', image: '/assets/images/blog/blog-1-2.png' },
  { title: 'Discover A Better Way Of Redefining Company Growth Goals', slug: 'creative-strategy', category: 'Growth', image: '/assets/images/blog/blog-1-3.png' }
]
</script>
