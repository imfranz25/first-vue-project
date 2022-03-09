<template>

  <div v-for="(food, i) in inventory" :key="food.id" class="card">
    <div class="card-title">
      {{ food.name }}
    </div>
    <form @submit.prevent="addToCart(food.name, i)">
      <div class="card-body">
        <i class="icofont-10x" :class="'icofont-' + food.icon"></i>
        <div class="row">
          <div class="cell">
            <label>Type:</label>
          </div>
          <div class="cell">
            <em>{{ food.type }}</em>
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Price:</label>
          </div>
          <div class="cell">
            ${{ food.price.USD }}
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Quantity:</label>
          </div>
          <div class="cell">
            <input
              type="number"
              min=0
              v-model="food.quantity"
              :run="!food.quantity ? food.quantity = 0 : true"
            />
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-light">
          Add to cart
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['inventory', 'addToCart']
}
</script>
