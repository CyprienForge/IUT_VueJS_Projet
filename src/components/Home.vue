<script setup>
import { onMounted, ref } from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";
import PokemonDisplay from "@/components/collections/PokemonDisplay.vue";
import SearchBar from "@/components/collections/SearchBar.vue";
import SwapButton from "@/components/collections/SwapButton.vue";

const cardsGetByBooster = ref([]);
const filteredCards = ref([]);
const localStorageService = new LocalStorageService();
const currentSwapCards = ref([])

onMounted(async () => {
  cardsGetByBooster.value = localStorageService.getCardsByBooster();
  cardsGetByBooster.value = cardsGetByBooster.value.filter(card => card.image);
  filteredCards.value = [...cardsGetByBooster.value];
});

function recupFilteredCards(allCards) {
  filteredCards.value = allCards;
  filteredCards.value = filteredCards.value.filter(card => card.image);
}

function recupSwap(allCards) {
  cardsGetByBooster.value = allCards;
  currentSwapCards.value = []
}

function addSwap(card){
  if(currentSwapCards.value.length === 4){
    return
  }

  const cardCount = currentSwapCards.value.filter(c => c.id === card.id).length;
  if(localStorageService.getDoublon(card.id) <= cardCount){
    return
  }
  currentSwapCards.value.push(card);
}

function deleteCardOnSwap(card){
  currentSwapCards.value.splice(currentSwapCards.value.indexOf(card), 1);
}

</script>

<template>
  <h1>Home</h1>
  <h3>Collection :</h3>

  <SearchBar @filtered-cards="recupFilteredCards" :pokemons="cardsGetByBooster" />
  <SwapButton :cards="currentSwapCards" @swap="recupSwap" @delete-card-on-swap="deleteCardOnSwap"/>

  <div id="main">
    <div id="displayCard" v-if="filteredCards.length > 0">
      <div v-for="card in filteredCards" :key="card.id" class="box">
        <button @click="addSwap(card)">
          Ajouter au swap
        </button>
        <PokemonDisplay :nbOccurences="localStorageService.getDoublon(card.id)" :id="card.id" />
      </div>
    </div>
    <div id="errorBlock" v-else>
      <p>
        Vous n'avez obtenu aucune carte pour le moment ! Allez ouvrir des
        <RouterLink to="/open">
          boosters !
        </RouterLink>
      </p>
    </div>
  </div>
</template>


<style scoped>

#errorBlock {
  width: 100%;
  text-align: center;
}

#displayCard {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 76%;
}

h3{
  text-align: center;
  font-size: 2rem;
}

.box {
  width: calc(20% - 20px);
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

@media (max-width: 1200px) {
  .box {
    width: calc(25% - 20px);
  }
}

@media (max-width: 900px) {
  .box {
    width: calc(33.33% - 20px);
  }
}

@media (max-width: 600px) {
  .box {
    width: calc(50% - 20px);
  }
}

@media (max-width: 400px) {
  .box {
    width: 100%;
  }
}
</style>