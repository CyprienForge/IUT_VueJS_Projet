<script setup>

import LocalStorageService from "@/services/LocalStorageService.js";

const localStorageService = new LocalStorageService()
const allCards = localStorageService.getCardsInStorage()

</script>

<template>
  <h1>
    All Cards
  </h1>

  <ul>
    <li v-for="card in allCards" :key="card.id">
      <RouterLink :to="`/all/${card.id}`">
        <p>
          {{ card.name }}
        </p>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>

ul{
  list-style-type: none;
}

</style>