<template>
  <div class="search-popup" :class="{ active: isSearchOpen }">
    <div class="search-popup__overlay search-toggler" @click="closeSearch"></div>
    <div class="search-popup__content">
      <form role="search" class="search-popup__form" @submit.prevent="closeSearch">
        <input v-model="searchQuery" type="text" id="search" placeholder="Search Here..." ref="searchInput" />
        <button type="submit" aria-label="search submit" class="growim-btn">
          <span class="growim-btn__text"><i class="flaticon-search"></i></span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useNavigation } from '~/composables/useNavigation'

const { isSearchOpen, closeSearch } = useNavigation()
const searchQuery = ref('')
const searchInput = ref<HTMLInputElement | null>(null)

watch(isSearchOpen, (val) => {
  if (val) nextTick(() => searchInput.value?.focus())
})
</script>
