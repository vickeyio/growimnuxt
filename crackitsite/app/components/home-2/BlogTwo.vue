<template>
  <section id="blog" class="blog-two">
    <div class="container">
      <div class="blog-two__top">
        <div class="sec-title text-left">
          <h6 class="sec-title__tagline">our NEWS</h6>
          <h3 class="sec-title__title">Latest News <span>&</span> Blog</h3>
        </div>
        <a class="growim-btn growim-btn--white" href="#blog">
          <span class="growim-btn__text">View All News</span>
          <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
        </a>
      </div>
      <div class="row gutter-y-30">
        <!-- Featured Main Blog Post -->
        <div v-if="featuredBlog" class="col-lg-6">
          <div class="blog-card-two">
            <div class="blog-card-two__image">
              <img :src="featuredBlog.image" :alt="featuredBlog.title" />
              <img :src="featuredBlog.image" :alt="featuredBlog.title" />
              <div class="blog-card-two__date">
                <span>{{ featuredBlog.date.day }}</span>{{ featuredBlog.date.month }}
              </div>
            </div>
            <div class="blog-card-two__content">
              <ul class="list-unstyled blog-card-two__meta">
                <li><i class="flaticon-tag"></i><a href="#blog">{{ featuredBlog.tag }}</a></li>
                <li><i class="flaticon-comment"></i>{{ featuredBlog.commentsCount }} Comments</li>
              </ul>
              <h3 class="blog-card-two__title">
                <a href="#blog">{{ featuredBlog.title }}</a>
              </h3>
            </div>
          </div>
        </div>

        <!-- Secondary Blog Posts List -->
        <div class="col-lg-6">
          <div
            v-for="(post, index) in secondaryBlogs"
            :key="post.id"
            class="blog-card-three"
            :class="{ 'blog-card-three--mb30': index === 0 }"
          >
            <div class="blog-card-three__image">
              <img :src="post.image" :alt="post.title" />
              <img :src="post.image" :alt="post.title" />
              <div class="blog-card-three__date">
                <span>{{ post.date.day }}</span>{{ post.date.month }}
              </div>
            </div>
            <div class="blog-card-three__content">
              <ul class="list-unstyled blog-card-three__meta">
                <li><i class="flaticon-tag"></i><a href="#blog">{{ post.tag }}</a></li>
                <li><i class="flaticon-comment"></i>{{ post.commentsCount }} Comments</li>
              </ul>
              <h3 class="blog-card-three__title">
                <a href="#blog">{{ post.title }}</a>
              </h3>
              <div v-if="post.author" class="blog-card-three__author">
                <img :src="post.author.avatar" alt="crackit" />
                <div class="blog-card-three__author__content">
                  <span>By Admin</span><a href="#blog">{{ post.author.name }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getBlogs } = useBlogs()
const { data: blogsResponse } = await getBlogs()
const blogs = computed(() => blogsResponse.value?.data || [])

const featuredBlog = computed(() => blogs.value.find(b => b.isFeatured) || blogs.value[0])
const secondaryBlogs = computed(() => blogs.value.filter(b => !b.isFeatured))
</script>
