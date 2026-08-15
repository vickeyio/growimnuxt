<template>
  <ClientOnly>
    <a
      href="#"
      class="scroll-to-target scroll-to-top"
      :class="{ show: isVisible }"
      :style="{ display: isVisible ? 'inline-block' : 'none' }"
      @click.prevent="scrollToTop"
    >
      <span class="scroll-to-top__text">back top</span>
      <span class="scroll-to-top__wrapper"><span class="scroll-to-top__inner"></span></span>
    </a>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const checkScroll = () => {
  if (typeof window !== 'undefined') {
    isVisible.value = window.scrollY > 100
  }
}

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>
