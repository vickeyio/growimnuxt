<template>
  <div>
    <Breadcrumb title="Our Products" :breadcrumbs="[{ label: 'Shop Catalog' }]" />

    <section class="products-page py-5">
      <div class="container">
        <div class="row gutter-y-30">
          <div
            v-for="product in products"
            :key="product.id"
            class="col-sm-6 col-lg-4 col-xl-3"
          >
            <div class="card h-100 border-0 shadow-sm rounded overflow-hidden product-card">
              <div class="position-relative overflow-hidden bg-light text-center p-3">
                <img
                  :src="product.image"
                  :alt="product.title"
                  class="img-fluid"
                  style="height: 220px; object-fit: contain;"
                />
                <button
                  class="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3 text-white px-3 py-2 rounded-pill shadow"
                  @click="handleAddToCart(product)"
                >
                  <i class="flaticon-cart me-1"></i> Add To Cart
                </button>
              </div>
              <div class="card-body text-center">
                <div class="text-warning small mb-1">
                  <i v-for="s in 5" :key="s" class="flaticon-star"></i>
                </div>
                <h5 class="card-title mb-1">
                  <NuxtLink :to="`/products/${product.id}`" class="text-dark font-weight-bold">
                    {{ product.title }}
                  </NuxtLink>
                </h5>
                <p class="card-text text-primary font-weight-bold h5 mb-0">${{ product.price.toFixed(2) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import CtaBanner from '~/components/home/CtaBanner.vue'
import { useCart } from '~/composables/useCart'

const { addToCart } = useCart()

useHead({
  title: 'Products || Growim Agency Shop',
  meta: [
    { name: 'description', content: 'Shop our curated digital marketing guides, UI design kits, and agency resources.' }
  ]
})

const products = [
  { id: 1, title: 'Comfy Chair', price: 18.00, image: '/assets/images/products/product-1-1.jpg' },
  { id: 2, title: 'Classic Lamp', price: 33.00, image: '/assets/images/products/product-1-2.jpg' },
  { id: 3, title: 'Creative Notebook', price: 12.00, image: '/assets/images/products/product-1-3.jpg' },
  { id: 4, title: 'Minimalist Desk Clock', price: 25.00, image: '/assets/images/products/product-1-4.jpg' },
  { id: 5, title: 'Ergonomic Mousepad', price: 15.00, image: '/assets/images/products/product-1-5.jpg' },
  { id: 6, title: 'Ceramic Mug Set', price: 22.00, image: '/assets/images/products/product-1-6.jpg' },
  { id: 7, title: 'Noise Canceling Headset', price: 89.00, image: '/assets/images/products/product-1-7.jpg' },
  { id: 8, title: 'Canvas Laptop Tote', price: 45.00, image: '/assets/images/products/product-1-8.jpg' }
]

const handleAddToCart = (prod: any) => {
  addToCart(prod, 1)
}
</script>

<style scoped>
.product-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>
