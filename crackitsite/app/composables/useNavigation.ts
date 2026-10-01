import { ref } from 'vue'

const isMobileNavOpen = ref(false)
const isSearchOpen = ref(false)
const isSidebarOpen = ref(false)
const isDemoMenuOpen = ref(false)

export const useNavigation = () => {
  const closeMobileNav = () => {
    isMobileNavOpen.value = false
  }
  const openMobileNav = () => {
    isMobileNavOpen.value = true
  }
  const toggleMobileNav = () => {
    isMobileNavOpen.value = !isMobileNavOpen.value
  }

  const closeSearch = () => {
    isSearchOpen.value = false
  }
  const openSearch = () => {
    isSearchOpen.value = true
  }

  const closeSidebar = () => {
    isSidebarOpen.value = false
  }
  const openSidebar = () => {
    isSidebarOpen.value = true
  }

  const closeDemoMenu = () => {
    isDemoMenuOpen.value = false
  }
  const toggleDemoMenu = () => {
    isDemoMenuOpen.value = !isDemoMenuOpen.value
  }

  return {
    isMobileNavOpen,
    isSearchOpen,
    isSidebarOpen,
    isDemoMenuOpen,
    closeMobileNav,
    openMobileNav,
    toggleMobileNav,
    closeSearch,
    openSearch,
    closeSidebar,
    openSidebar,
    closeDemoMenu,
    toggleDemoMenu
  }
}
