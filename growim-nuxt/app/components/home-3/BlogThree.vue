<template>
  <section class="blog-one blog-one--home-three py-5 bg-light">
    <div class="container">
      <div class="sec-title text-center mb-5">
        <h6 class="sec-title__tagline">INSIGHTS & NEWS</h6>
        <h3 class="sec-title__title">Read Our Latest Articles</h3>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <div class="blog-card bg-white rounded overflow-hidden shadow-sm h-100">
            <div class="blog-card__image">
              <img :src="post.image" :alt="post.title" class="img-fluid" />
              <img :src="post.image" :alt="post.title" class="img-fluid" />
            </div>
            <div class="blog-card__content p-4">
              <span class="badge bg-light text-primary px-3 py-1 mb-2">{{ post.category }}</span>
              <h4 class="blog-card__title font-weight-bold mb-3">
                <NuxtLink :to="`/blog/${post.slug}`" class="text-dark">{{ post.title }}</NuxtLink>
              </h4>
              <NuxtLink :to="`/blog/${post.slug}`" class="text-primary font-weight-bold text-decoration-none">
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
