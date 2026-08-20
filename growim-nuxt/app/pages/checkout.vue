<template>
  <div>
    <Breadcrumb title="Checkout" :breadcrumbs="[{ label: 'Checkout' }]" />

    <section class="checkout-page py-5">
      <div class="container">
        <form @submit.prevent="handlePlaceOrder">
          <div class="row gutter-y-40">
            <!-- Billing Form -->
            <div class="col-lg-7">
              <h4 class="mb-4">Billing Details</h4>
              <div class="row g-3">
                <div class="col-sm-6">
                  <label class="form-label">First Name *</label>
                  <input v-model="form.firstName" type="text" class="form-control" required />
                </div>
                <div class="col-sm-6">
                  <label class="form-label">Last Name *</label>
                  <input v-model="form.lastName" type="text" class="form-control" required />
                </div>
                <div class="col-12">
                  <label class="form-label">Company Name (Optional)</label>
                  <input v-model="form.company" type="text" class="form-control" />
                </div>
                <div class="col-12">
                  <label class="form-label">Street Address *</label>
                  <input v-model="form.address" type="text" class="form-control" placeholder="House number and street name" required />
                </div>
                <div class="col-sm-6">
                  <label class="form-label">Town / City *</label>
                  <input v-model="form.city" type="text" class="form-control" required />
                </div>
                <div class="col-sm-6">
                  <label class="form-label">Postcode / ZIP *</label>
                  <input v-model="form.zip" type="text" class="form-control" required />
                </div>
                <div class="col-sm-6">
                  <label class="form-label">Email Address *</label>
                  <input v-model="form.email" type="email" class="form-control" required />
                </div>
                <div class="col-sm-6">
                  <label class="form-label">Phone Number *</label>
                  <input v-model="form.phone" type="tel" class="form-control" required />
                </div>
              </div>
            </div>

            <!-- Order Summary & Payment -->
            <div class="col-lg-5">
              <div class="p-4 bg-light rounded shadow-sm">
                <h4 class="mb-3">Your Order</h4>
                <ul class="list-unstyled mb-4">
                  <li
                    v-for="item in cartItems"
                    :key="item.id"
                    class="d-flex justify-content-between py-2 border-bottom small"
                  >
                    <span>{{ item.title }} x {{ item.quantity }}</span>
                    <strong>${{ (item.price * item.quantity).toFixed(2) }}</strong>
                  </li>
                  <li class="d-flex justify-content-between py-2 border-bottom">
                    <span>Subtotal</span>
                    <strong>${{ cartSubtotal.toFixed(2) }}</strong>
                  </li>
                  <li class="d-flex justify-content-between py-2 border-bottom">
                    <span>Shipping</span>
                    <strong class="text-success">Free</strong>
                  </li>
                  <li class="d-flex justify-content-between py-3">
                    <strong class="h5 mb-0">Total</strong>
                    <strong class="h5 mb-0 text-primary">${{ cartSubtotal.toFixed(2) }}</strong>
                  </li>
                </ul>

                <!-- Payment Options Accordion -->
                <div class="mb-4">
                  <div class="form-check mb-2">
                    <input
                      v-model="paymentMethod"
                      class="form-check-input"
                      type="radio"
                      name="payment"
                      id="card"
                      value="card"
                    />
                    <label class="form-check-label font-weight-bold" for="card">
                      Credit / Debit Card
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      v-model="paymentMethod"
                      class="form-check-input"
                      type="radio"
                      name="payment"
                      id="paypal"
                      value="paypal"
                    />
                    <label class="form-check-label font-weight-bold" for="paypal">
                      PayPal
                    </label>
                  </div>
                </div>

                <button type="submit" class="growim-btn w-100 text-center">
                  <span class="growim-btn__text">Place Order Now</span>
                </button>

                <p v-if="orderPlaced" class="text-success mt-3 text-center font-weight-bold">
                  Order placed successfully! Thank you for your purchase.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import CtaBanner from '~/components/home/CtaBanner.vue'
import { useCart } from '~/composables/useCart'

const { cartItems, cartSubtotal, clearCart } = useCart()
const paymentMethod = ref('card')
const orderPlaced = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  company: '',
  address: '',
  city: '',
  zip: '',
  email: '',
  phone: ''
})

const handlePlaceOrder = () => {
  orderPlaced.value = true
  clearCart()
}

useHead({
  title: 'Checkout || Growim Agency'
})
</script>
