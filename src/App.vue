<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <a @click="toggleSideBar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </a>
  </header>

  <router-view
    :inventory="food"
    :addToCart="addToCart"
    :orders="orders"
    :getPrice="getPrice"
    :getIcon="getIcon"
  />

  <SideBar
    v-if="showSideBar"
    :toggle="toggleSideBar"
    :cart="cart"
    :remove="removeItem"
    :getPrice="getPrice"
    :getIcon="getIcon"
    :checkOut="checkOut"
  />

</template>

<script>
import food from './food.json'
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    SideBar
  },
  data () {
    return {
      showSideBar: false,
      cart: {},
      orders: {},
      food: food
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((total, value) => {
        return total + value
      }, 0)
    }
  },
  methods: {
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    },
    addToCart (name, index) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += this.food[index].quantity
      this.food[index].quantity = 0 // reset
    },
    removeItem (name) {
      delete this.cart[name]
    },
    getPrice (name) {
      const product = this.food.find((p) => {
        return p.name === name
      })
      return product.price.USD
    },
    getIcon (name) {
      const product = this.food.find((p) => {
        return p.name === name
      })
      return product.icon
    },
    checkOut () {
      this.orders = { ...this.orders, ...this.cart }
      this.cart = {}
    }
  }
}
</script>
