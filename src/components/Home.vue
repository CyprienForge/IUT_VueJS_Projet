<script setup>

import {onMounted, ref} from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";
import PokemonDetails from "@/components/PokemonDetails.vue";

const cardsGetByBooster = ref()
const localStorageService = new LocalStorageService()

onMounted(async() => {
  cardsGetByBooster.value = localStorageService.getCardsGetByBooster()
  console.log("Card obtenu par booster " + cardsGetByBooster.value)
})

</script>

<template>
  <h1>
    Home
  </h1>

  <h3>
    All cards get by boosters :
  </h3>

  <div style="margin-top: 8%" v-if="cardsGetByBooster">
    <ul v-for="card in cardsGetByBooster" :key="card.id">
      <PokemonDetails :id="card.id"/>
    </ul>
  </div>

</template>

<style scoped>

</style>