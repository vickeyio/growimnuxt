<template>
  <section class="slide-text slide-text--home-two">
    <div class="slide-text__wrap">
      <ul class="slide-text__list list-unstyled">
        <template v-if="marqueeItems.length">
          <li v-for="item in [...marqueeItems, ...marqueeItems]" :key="item">{{ item }}</li>
        </template>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getContactInfo } = useContact()
const { data: contactResponse } = await getContactInfo()
const marqueeItems = computed(() => contactResponse.value?.data?.marqueeItems ?? [])
</script>
