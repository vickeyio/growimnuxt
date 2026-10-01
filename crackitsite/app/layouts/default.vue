<template>
  <div class="custom-cursor">
    <CommonCustomCursor />
    <div class="page-wrapper">
      <CommonAppHeader />
      <main>
        <slot />
      </main>
      <CommonAppFooter />
    </div>

    <CommonMobileNav />
    <CommonSearchPopup />
    <CommonSidebarDrawer />
    <CommonScrollToTop />
  </div>
</template>
