import { ref } from 'vue'

const isMobileNavOpen = ref(false)
const isSearchOpen = ref(false)
const isSidebarOpen = ref(false)

export const useNavigation = () => {
  const toggleMobileNav = () => {
    isMobileNavOpen.value = !isMobileNavOpen.value
  }
  const openMobileNav = () => {
    isMobileNavOpen.value = true
  }
  const closeMobileNav = () => {
    isMobileNavOpen.value = false
  }

  const toggleSearch = () => {
    isSearchOpen.value = !isSearchOpen.value
  }
  const openSearch = () => {
    isSearchOpen.value = true
  }
  const closeSearch = () => {
    isSearchOpen.value = false
  }

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }
  const openSidebar = () => {
    isSidebarOpen.value = true
  }
  const closeSidebar = () => {
    isSidebarOpen.value = false
  }

  return {
    isMobileNavOpen,
    isSearchOpen,
    isSidebarOpen,
    toggleMobileNav,
    openMobileNav,
    closeMobileNav,
    toggleSearch,
    openSearch,
    closeSearch,
    toggleSidebar,
    openSidebar,
    closeSidebar
  }
}
