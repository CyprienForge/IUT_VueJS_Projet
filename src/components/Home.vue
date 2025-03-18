<script setup>
import { onMounted, ref } from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";
import PokemonDisplay from "@/components/collections/PokemonDisplay.vue";
import SearchBar from "@/components/collections/SearchBar.vue";
import SwapButton from "@/components/collections/SwapButton.vue";

const cardsGetByBooster = ref([]);
const filteredCards = ref([]);
const localStorageService = new LocalStorageService();

onMounted(async () => {
  cardsGetByBooster.value = localStorageService.getCardsGetByBooster();
  cardsGetByBooster.value = cardsGetByBooster.value.filter(card => card.image);
  filteredCards.value = [...cardsGetByBooster.value];
});

function recupFilteredCards(allCards) {
  filteredCards.value = allCards;
}
</script>

<template>
  <h1>Home</h1>
  <h3>Collection :</h3>

  <SearchBar @filtered-cards="recupFilteredCards" :pokemons="cardsGetByBooster" />
  <SwapButton />

  <div id="main">
    <div id="displayCard" v-if="filteredCards.length > 0">
      <div v-for="card in filteredCards" :key="card.id" class="box">
        <PokemonDisplay :id="card.id" />
      </div>
    </div>
    <div id="errorBlock" v-else>
      <p>Vous n'avez obtenu aucune carte pour le moment ! Allez ouvrir des boosters !</p>
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