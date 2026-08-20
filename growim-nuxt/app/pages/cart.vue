<template>
  <div>
    <Breadcrumb title="Shopping Cart" :breadcrumbs="[{ label: 'Cart' }]" />

    <section class="cart-page py-5">
      <div class="container">
        <div v-if="cartItems.length > 0">
          <div class="table-responsive mb-5">
            <table class="table table-bordered align-middle text-center">
              <thead class="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                  <td class="d-flex align-items-center gap-3 text-start p-3">
                    <img :src="item.image" :alt="item.title" width="70" class="rounded bg-light" />
                    <strong>{{ item.title }}</strong>
                  </td>
                  <td>${{ item.price.toFixed(2) }}</td>
                  <td>
                    <div class="d-inline-flex align-items-center gap-2">
                      <button
                        class="btn btn-sm btn-outline-secondary"
                        @click="updateQuantity(item.id, item.quantity - 1)"
                      >
                        -
                      </button>
                      <span class="px-2 font-weight-bold">{{ item.quantity }}</span>
                      <button
                        class="btn btn-sm btn-outline-secondary"
                        @click="updateQuantity(item.id, item.quantity + 1)"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td class="font-weight-bold text-primary">
                    ${{ (item.price * item.quantity).toFixed(2) }}
                  </td>
                  <td>
                    <button
                      class="btn btn-sm btn-outline-danger"
                      @click="removeFromCart(item.id)"
                      aria-label="Remove item"
                    >
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Cart Totals -->
          <div class="row justify-content-end">
            <div class="col-md-6 col-lg-4">
              <div class="p-4 bg-light rounded shadow-sm">
                <h4 class="mb-3">Cart Totals</h4>
                <div class="d-flex justify-content-between py-2 border-bottom">
                  <span>Subtotal:</span>
                  <strong>${{ cartSubtotal.toFixed(2) }}</strong>
                </div>
                <div class="d-flex justify-content-between py-2 border-bottom">
                  <span>Shipping:</span>
                  <span class="text-success font-weight-bold">Free</span>
                </div>
                <div class="d-flex justify-content-between py-3 mb-3">
                  <strong class="h5 mb-0">Total:</strong>
                  <strong class="h5 mb-0 text-primary">${{ cartSubtotal.toFixed(2) }}</strong>
                </div>
                <NuxtLink to="/checkout" class="growim-btn w-100 text-center">
                  <span class="growim-btn__text">Proceed To Checkout</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-5">
          <i class="flaticon-cart display-1 text-muted mb-3 d-block"></i>
          <h3>Your cart is currently empty</h3>
          <p class="text-muted mb-4">Discover our products and start adding items.</p>
          <NuxtLink to="/products" class="growim-btn">
            <span class="growim-btn__text">Continue Shopping</span>
          </NuxtLink>
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

const { cartItems, cartSubtotal, updateQuantity, removeFromCart } = useCart()

useHead({
  title: 'Shopping Cart || Growim Agency Shop'
})
</script>
