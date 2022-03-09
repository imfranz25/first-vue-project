<template>
  <div class="splash-container">
    <div class="splash">
      <h1>Splendid Food</h1>
    </div>
  </div>
  <main class="wrapper">
    <h2>Recommended</h2>
    <div class="recommended">
      <ProductCard :inventory="inventory.slice(0,3)" :addToCart="addToCart" />
    </div>
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: 'HomePage',
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard
  }
}
</script>
