<template>
  <main class="wrapper">
    <h1>Past Orders</h1>

    <table class="product-table">
      <thead>
        <tr>
          <td><span class="sr-only">Product Image</span></td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
          <td><span class="sr-only">Actions</span></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(quantity, key, i) in orders" :key="i">
          <td><i class="icofont-4x" :class="'icofont-' + getIcon(key)" /></td>
          <td>{{ key }}</td>
          <td>${{ getPrice(key) }}</td>
          <td>{{ quantity }}</td >
          <td>${{ (quantity *  3).toFixed(2) }}</td>
          <!-- <td><button class="btn btn-dark">Add</button></td> -->
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  props: ['orders', 'getPrice', 'getIcon']
}
</script>
