<script setup>

import {onMounted, ref} from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";
import PokemonDetails from "@/components/collections/PokemonDetails.vue";

const cardsGetByBooster = ref()
const localStorageService = new LocalStorageService()

onMounted(async() => {
  cardsGetByBooster.value = localStorageService.getCardsGetByBooster()
})

</script>

<template>
  <h1>
    Home
  </h1>

  <h3>
    Collection :
  </h3>

  <div id="main">
    <div  v-for="card in cardsGetByBooster" :key="card.id" class="box" >
      <PokemonDetails :id="card.id"/>
    </div>
  </div>

</template>

<style scoped>
#main {
  display: flex;
  flex-wrap: wrap;  /* Permet de revenir Ã  la ligne */
  justify-content: space-between;  /* Espacement entre les cartes */
  gap: 20px;  /* Espacement entre les cartes */
  width: 100%;
  height: 76%;
}

h3{
  text-align: center;
  font-size: 2rem;
}

.box {
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