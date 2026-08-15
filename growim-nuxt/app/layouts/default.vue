<template>
  <div class="custom-cursor">
    <CustomCursor />
    <div class="page-wrapper">
      <AppHeader />
      <main>
        <slot />
      </main>
      <AppFooter />
    </div>

    <!-- Modals & Drawers -->
    <MobileNav />
    <SearchPopup />
    <SidebarDrawer />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import CustomCursor from '~/components/common/CustomCursor.vue'
import AppHeader from '~/components/common/AppHeader.vue'
import AppFooter from '~/components/common/AppFooter.vue'
import MobileNav from '~/components/common/MobileNav.vue'
import SearchPopup from '~/components/common/SearchPopup.vue'
import SidebarDrawer from '~/components/common/SidebarDrawer.vue'
import ScrollToTop from '~/components/common/ScrollToTop.vue'
</script>
