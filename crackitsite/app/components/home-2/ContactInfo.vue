<template>
  <section id="contact" class="contact-info">
    <div class="contact-info__shape" style="background-image: url(/assets/images/shapes/contact-info-shape.png);"></div>
    <div class="container">
      <ul v-if="info" class="contact-info__list">
        <li>
          <div class="contact-info__icon"><i class="flaticon-pin"></i></div>
          <p class="contact-info__text">{{ info.address }}</p>
        </li>
        <li>
          <div class="contact-info__icon"><i class="flaticon-phone"></i></div>
          <p class="contact-info__text">
            <a :href="`tel:${info.phoneClean || info.phone}`">{{ info.phone }}</a>
          </p>
        </li>
        <li>
          <div class="contact-info__icon"><i class="flaticon-email"></i></div>
          <p class="contact-info__text">
            <a :href="`mailto:${info.email}`">{{ info.email }}</a>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getContactInfo } = useContact()
const { data: contactResponse } = await getContactInfo()
const info = computed(() => contactResponse.value?.data)
</script>
