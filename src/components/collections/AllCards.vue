<script setup>

import LocalStorageService from "@/services/LocalStorageService.js";
import CardService from "@/services/CardService.js";
import {onMounted, ref} from "vue";
import PokemonDisplay from "@/components/collections/PokemonDisplay.vue";
import FormChangePagination from "@/components/FormChangePagination.vue";
import PaginatorNavigation from "@/components/collections/PaginatorNavigation.vue";

const localStorageService = new LocalStorageService()
const cardService = new CardService()
const allCards = ref()
const numPage = ref()
const numberPokemons = ref()

onMounted(async() => {
  // allCards.value = await cardService.getAllCards()
  numPage.value = 1
  numberPokemons.value = localStorageService.getNumberPagination()
  allCards.value = await cardService.getAllCardsByNumber(numPage.value, numberPokemons.value)
  allCards.value = allCards.value.filter(card => card.image)
  console.log(allCards.value)
})

async function incrementPagination(event){
  numPage.value += 1
  allCards.value = await cardService.getAllCardsByNumber(numPage.value, numberPokemons.value)
  allCards.value = allCards.value.filter(card => card.image)
}

async function decrementPagination(event){
  if(numPage.value === 1) return
  numPage.value -= 1
  allCards.value = await cardService.getAllCardsByNumber(numPage.value, numberPokemons.value)
  allCards.value = allCards.value.filter(card => card.image)
}

async function recupNewNumber(number){
  numberPokemons.value = number

  allCards.value = await cardService.getAllCardsByNumber(numPage.value, numberPokemons.value)
  allCards.value = allCards.value.filter(card => card.image)

  localStorageService.memorizeNumberPagination(numberPokemons.value)
}

</script>

<template>
  <h1>
    All Cards
  </h1>



  <FormChangePagination @submitNumberPokemons="recupNewNumber"/>

  <PaginatorNavigation @increment="incrementPagination" @decrement="decrementPagination" :number-page="numPage"/>

  <div id="cards">
    <div v-for="card in allCards" :key="card.id" class="card" >
      <PokemonDisplay :nbOccurences="localStorageService.getDoublon(card.id)" :id="card.id"/>
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
  box-sizing: border-box;
}




</style>