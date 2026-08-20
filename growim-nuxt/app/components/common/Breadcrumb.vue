<template>
  <section class="page-header">
    <div
      class="page-header__bg"
      style="background-image: url(/assets/images/backgrounds/page-header-bg.jpg);"
    ></div>
    <!-- /.page-header__bg -->
    <div class="container">
      <h2 class="page-header__title">{{ title }}</h2>
      <ul class="growim-breadcrumb list-unstyled">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li v-for="(crumb, index) in breadcrumbs" :key="index">
          <NuxtLink v-if="crumb.link" :to="crumb.link">{{ crumb.label }}</NuxtLink>
          <span v-else>{{ crumb.label }}</span>
        </li>
      </ul>
      <!-- /.growim-breadcrumb -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  link?: string
}

defineProps<{
  title: string
  breadcrumbs?: BreadcrumbItem[]
}>()
</script>
