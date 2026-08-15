<template>
  <ClientOnly>
    <div
      class="custom-cursor__cursor"
      :class="{ click: isClicking, 'custom-cursor__hover': isHovering }"
      :style="cursorStyle"
    ></div>
    <div
      class="custom-cursor__cursor-two"
      :class="{
        'custom-cursor__innerhover': isClicking,
        'custom-cursor__hover': isHovering
      }"
      :style="cursorInnerStyle"
    ></div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const x = ref(-100)
const y = ref(-100)
const isClicking = ref(false)
const isHovering = ref(false)

const cursorStyle = computed(() => ({
  transform: `translate3d(calc(${x.value}px - 50%), calc(${y.value}px - 50%), 0)`
}))

const cursorInnerStyle = computed(() => ({
  left: `${x.value}px`,
  top: `${y.value}px`
}))

const onMouseMove = (e: MouseEvent) => {
  x.value = e.clientX
  y.value = e.clientY
}

const onMouseDown = () => {
  isClicking.value = true
}

const onMouseUp = () => {
  isClicking.value = false
}

const handleHover = (e: MouseEvent) => {
  const target = e.target as HTMLElement | null
  if (target && (target.closest('a') || target.closest('button') || target.closest('.growim-btn'))) {
    isHovering.value = true
  } else {
    isHovering.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseover', handleHover)
  window.addEventListener('mousedown', onMouseDown)
  window.addEventListener('mouseup', onMouseUp)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', handleHover)
  window.removeEventListener('mousedown', onMouseDown)
  window.removeEventListener('mouseup', onMouseUp)
})
</script>
