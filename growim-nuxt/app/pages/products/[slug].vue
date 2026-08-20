<template>
  <div>
    <Breadcrumb
      :title="product.title"
      :breadcrumbs="[
        { label: 'Shop', link: '/products' },
        { label: product.title }
      ]"
    />

    <section class="product-details py-5">
      <div class="container">
        <div class="row align-items-center gutter-y-40 mb-5">
          <div class="col-lg-6">
            <div class="p-4 bg-light rounded text-center">
              <img :src="product.image" :alt="product.title" class="img-fluid" style="max-height: 400px;" />
            </div>
          </div>
          <div class="col-lg-6">
            <h2 class="mb-2">{{ product.title }}</h2>
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="text-warning small">
                <i v-for="s in 5" :key="s" class="flaticon-star"></i>
              </div>
              <span class="text-muted small">(14 Customer Reviews)</span>
            </div>
            <h3 class="text-primary font-weight-bold mb-3">${{ product.price.toFixed(2) }}</h3>
            <p class="lead text-muted mb-4">{{ product.description }}</p>

            <!-- Quantity Selector & Add to Cart -->
            <div class="d-flex align-items-center gap-3 mb-4">
              <div class="input-group" style="width: 140px;">
                <button class="btn btn-outline-secondary" @click="qty = Math.max(1, qty - 1)">-</button>
                <input
                  v-model.number="qty"
                  type="number"
                  class="form-control text-center"
                  min="1"
                />
                <button class="btn btn-outline-secondary" @click="qty++">+</button>
              </div>
              <button class="growim-btn" @click="handleAdd">
                <span class="growim-btn__text">Add To Cart</span>
                <span class="growim-btn__icon"><i class="flaticon-cart"></i></span>
              </button>
            </div>

            <p v-if="addedToast" class="text-success font-weight-bold">
              Added {{ qty }} item(s) to cart!
            </p>

            <ul class="list-unstyled text-muted small border-top pt-3">
              <li class="mb-1"><strong>SKU: </strong> GRW-{{ product.id }}092</li>
              <li class="mb-1"><strong>Category: </strong> Agency Merch, Workspace</li>
              <li><strong>Tags: </strong> Design, Workspace, Efficiency</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import CtaBanner from '~/components/home/CtaBanner.vue'
import { useCart } from '~/composables/useCart'

const route = useRoute()
const { addToCart } = useCart()
const qty = ref(1)
const addedToast = ref(false)

const id = computed(() => route.params.slug as string)

const product = computed(() => {
  return {
    id: id.value,
    title: 'Comfy Chair & Studio Armrest',
    price: 18.00,
    image: '/assets/images/products/product-1-1.jpg',
    description:
      'High-grade ergonomic materials designed for creative professionals and long productive hours in modern agency workspaces.'
  }
})

const handleAdd = () => {
  addToCart(product.value, qty.value)
  addedToast.value = true
  setTimeout(() => {
    addedToast.value = false
  }, 3000)
}

useHead({
  title: computed(() => `${product.value.title} || Growim Shop`)
})
</script>
