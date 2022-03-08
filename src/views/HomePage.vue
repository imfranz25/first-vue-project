<template>
  <div class="splash-container">
    <div class="splash">
      <h1>Splendid Food</h1>
    </div>
  </div>

  <main class="wrapper">

    <h2>Recommended</h2>

    <div class="recommended">

      <div v-for="(food, i) in inventory.slice(0,3)" :key="i" class="card">
        <div class="card-title">
          {{ food.name }}
        </div>
        <div class="card-body">
          <i class="icofont-10x {{ food.icon }}"></i>
          <form>
            <div class="row">
              <div class="cell">
                <label>Type:</label>
              </div>
              <div class="cell">
                <em>Vegetable</em>
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Price:</label>
              </div>
              <div class="cell">
                food.price.USD
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Quantity:</label>
              </div>
              <div class="cell">
                <input type="number" />
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <button class="btn btn-light">
            Add to cart
          </button>
        </div>
      </div>

    </div>

  </main>
</template>

<script>
import food from '../food.json'

export default {
  name: 'HomePage',
  data () {
    return {
      inventory: food
    }
  }
}
</script>
