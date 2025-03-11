<script setup>

import LocalStorageService from "@/services/LocalStorageService.js";
import CardService from "@/services/CardService.js";
import {onMounted, ref} from "vue";
import PokemonDetails from "@/components/PokemonDetails.vue";

const localStorageService = new LocalStorageService()
const cardService = new CardService()
const allCards = ref()

onMounted(async() => {
  allCards.value = await cardService.getAllCards()
  allCards.value = allCards.value.filter(card => card.image)
  console.log(allCards.value)
})

</script>

<template>
  <h1>
    All Cards
  </h1>

  <div id="cards">
    <div  v-for="card in allCards" :key="card.id" class="card" >
      <PokemonDetails :id="card.id"/>
    </div>
  </div>

</template>

<style scoped>

#cards {
  padding-top: 6%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 76%;
}

.card {
  width: calc(20% - 20px); /* 5 cartes par ligne, moins l'espacement */
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;  /* Assure que le padding ne modifie pas la largeur */
}

/* Responsive : ajuster pour les petits Ã©crans */
@media (max-width: 1200px) {
  .box {
    width: calc(25% - 20px); /* 4 cartes par ligne pour les Ã©crans plus petits */
  }
}

@media (max-width: 900px) {
  .box {
    width: calc(33.33% - 20px); /* 3 cartes par ligne pour les Ã©crans encore plus petits */
  }
}

@media (max-width: 600px) {
  .box {
    width: calc(50% - 20px); /* 2 cartes par ligne pour les petits Ã©crans */
  }
}

@media (max-width: 400px) {
  .box {
    width: 100%; /* 1 carte par ligne pour les trÃ¨s petits Ã©crans */
  }
}

</style>