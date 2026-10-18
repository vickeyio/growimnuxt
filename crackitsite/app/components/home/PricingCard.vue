<template>
  <div class="package-one__item">
    <div class="package-one__item__inner">
      <div class="package-one__item__price">{{ plan.price }} <span>{{ plan.period }}</span></div>
      <h5 class="package-one__item__title">{{ plan.title }}</h5>
      <p class="package-one__item__text">
        Integer sapien nec sapien sollicitudin ultrices Cras tempor id lorem et
      </p>
      <ul class="package-one__item__list">
        <li v-for="feature in plan.features" :key="feature">
          <i class="flaticon-check"></i>{{ feature }}
        </li>
      </ul>
      <a class="growim-btn" href="#contact">
        <span class="growim-btn__text">Get The Plan Nows</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  plan: {
    title: string
    price: string
    period: string
    features: string[]
  }
}>()
</script>
