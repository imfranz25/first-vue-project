<template>
  <main class="wrapper">
    <h1>Products</h1>
    <div class="card-container">
      <ProductCard :inventory="inventory" :addToCart="addToCart" />
    </div>
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard
  }
}
</script>
