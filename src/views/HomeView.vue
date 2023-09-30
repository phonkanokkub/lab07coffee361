<script setup>
import nwecard from '../components/NewCard.vue'
import items from '../components/CoffeeShop.json'
</script>

<template>
  <main>
    
    <div class="grid-container">
      <nwecard v-for="item in items" v-bind="item" />
    </div>
  </main>
</template>

<style scoped>

hr {
  margin-top: 20px;
  margin-bottom: 15px;
  opacity: .50;
}
.grid-container {
  display: grid;
  /*grid-column-gap: 0px;
  grid-row-gap: 0px;*/
} 

@media (min-width: 576px) {
  .grid-container { grid-template-columns: repeat(1, 1fr);}
}

@media (min-width: 768px) {
  .grid-container { grid-template-columns: repeat(2, 1fr);}
}

@media (min-width: 992px) {
  .grid-container { grid-template-columns: repeat(2, 1fr);}
}

@media (min-width: 1200px) {
  .grid-container { grid-template-columns: repeat(3, 1fr);}
}

@media (min-width: 1400px) {
  .grid-container { grid-template-columns: repeat(3, 1fr);}
} 
</style>
