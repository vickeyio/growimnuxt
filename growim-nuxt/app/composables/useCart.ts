import { ref, computed } from 'vue'

export interface CartItem {
  id: number | string
  title: string
  price: number
  image: string
  quantity: number
}

const cart = ref<CartItem[]>([
  {
    id: 1,
    title: 'Comfy Chair',
    price: 18.00,
    image: '/assets/images/products/product-1-1.jpg',
    quantity: 1
  },
  {
    id: 2,
    title: 'Classic Lamp',
    price: 33.00,
    image: '/assets/images/products/product-1-2.jpg',
    quantity: 2
  }
])

export const useCart = () => {
  const cartItems = computed(() => cart.value)

  const cartCount = computed(() =>
    cart.value.reduce((total, item) => total + item.quantity, 0)
  )

  const cartSubtotal = computed(() =>
    cart.value.reduce((total, item) => total + item.price * item.quantity, 0)
  )

  const addToCart = (product: { id: number | string; title: string; price: number; image: string }, quantity = 1) => {
    const existing = cart.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      cart.value.push({
        ...product,
        quantity
      })
    }
  }

  const removeFromCart = (id: number | string) => {
    cart.value = cart.value.filter(item => item.id !== id)
  }

  const updateQuantity = (id: number | string, qty: number) => {
    const item = cart.value.find(i => i.id === id)
    if (item) {
      if (qty <= 0) {
        removeFromCart(id)
      } else {
        item.quantity = qty
      }
    }
  }

  const clearCart = () => {
    cart.value = []
  }

  return {
    cartItems,
    cartCount,
    cartSubtotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
}
