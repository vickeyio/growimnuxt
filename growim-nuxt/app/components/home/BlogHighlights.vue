<template>
  <section class="blog-one">
    <div
      class="blog-one__shape-one"
      style="background-image: url(/assets/images/shapes/blog-1-shape-1.png);"
    ></div>
    <div
      class="blog-one__shape-two"
      style="background-image: url(/assets/images/shapes/blog-1-shape-2.png);"
    ></div>
    <div
      class="blog-one__shape-three"
      style="background-image: url(/assets/images/shapes/blog-1-shape-3.png);"
    ></div>
    <div
      class="blog-one__shape-four"
      style="background-image: url(/assets/images/shapes/blog-1-shape-4.png);"
    ></div>
    <div class="container">
      <div class="blog-one__top d-flex justify-content-between align-items-center mb-5">
        <div class="sec-title text-left">
          <h6 class="sec-title__tagline">our NEWS</h6>
          <h3 class="sec-title__title">Recent Blog Posts</h3>
        </div>
        <!-- /.sec-title -->
        <NuxtLink class="growim-btn growim-btn--white" to="/blog">
          <span class="growim-btn__text">View All News</span>
          <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
        </NuxtLink>
      </div>

      <div class="row gutter-y-30">
        <div
          v-for="(post, index) in blogPosts"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <div class="blog-card">
            <div class="blog-card__image">
              <img :src="post.image" :alt="post.title" />
              <img :src="post.image" :alt="post.title" />
              <NuxtLink :to="post.link" class="blog-card__image__link">
                <span class="sr-only">{{ post.title }}</span>
              </NuxtLink>
            </div>
            <!-- /.blog-card__image -->
            <div class="blog-card__content">
              <div class="blog-card__meta">
                <NuxtLink class="blog-card__meta__cat" :to="post.link">
                  {{ post.category }}
                </NuxtLink>
                <div class="blog-card__meta__date">{{ post.date }}</div>
              </div>
              <h3 class="blog-card__title">
                <NuxtLink :to="post.link">{{ post.title }}</NuxtLink>
              </h3>
              <div class="blog-card__bottom">
                <div class="blog-card__author">
                  <img src="/assets/images/blog/blog-author-1-1.jpg" alt="growim" />
                  <div class="blog-card__author__content">
                    <span>Admin</span>{{ post.author }}
                  </div>
                </div>
                <NuxtLink :to="post.link" class="blog-card__link" aria-label="Read blog post">
                  <i class="fas fa-arrow-right"></i>
                </NuxtLink>
              </div>
            </div>
            <!-- /.blog-card__content -->
          </div>
          <!-- /.blog-card -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const blogPosts = [
  {
    title: 'Business Strategy For Modern Marketing Systems',
    category: 'Business',
    date: 'March 24, 2026',
    author: 'Cody Fisher',
    image: '/assets/images/blog/blog-1-1.png',
    link: '/blog/creative-strategy'
  },
  {
    title: 'Why Is Omnichannel Visibility Crucial For E-Commerce?',
    category: 'Corporate',
    date: 'April 16, 2026',
    author: 'Cody Fisher',
    image: '/assets/images/blog/blog-1-2.png',
    link: '/blog/creative-strategy'
  },
  {
    title: 'Discover A Better Way Of Redefining Company Growth Goals',
    category: 'Marketing',
    date: 'May 02, 2026',
    author: 'Cody Fisher',
    image: '/assets/images/blog/blog-1-3.png',
    link: '/blog/creative-strategy'
  }
]
</script>
