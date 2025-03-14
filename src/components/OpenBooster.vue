<script setup>

import BoosterService from "@/services/BoosterService.js";
import {onMounted, ref} from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";
import CardService from "@/services/CardService.js";

const boosterService = new BoosterService()
const cardService = new CardService()
const localStorageService = new LocalStorageService()
const boosters = ref()
const CardObtain = ref()

onMounted(async() => {
  boosters.value = await boosterService.getAllBoosters()
  console.log(boosters.value)
})

async function storage(idBooster) {
  const idCard = Math.floor(Math.random() * 5);
  const booster = boosters.value[idBooster-1]
  console.log(booster)

  const cardId = booster.cards[idCard]
  const card = await cardService.getOneCard(cardId)
  localStorageService.addCardGetByBooster(card)
  CardObtain.value = card
}

</script>

<template>

  <h1>Open a Booster</h1>

  <div id="booster-list">
    <img @click="storage(1)" class="booster-image" style="cursor: pointer" src="../../public/booster1.png" :alt="booster1" />
    <img @click="storage(2)" class="booster-image" style="cursor: pointer" src="../../public/booster2.png" :alt="booster2" />
    <img @click="storage(3)" class="booster-image" style="cursor: pointer" src="../../public/booster3.webp" :alt="booster3" />

  </div>


  <!-- Carte stylisÃ©e qui s'affiche aprÃ¨s l'ouverture d'un booster -->
  <div v-if="CardObtain" class="obtained-card">
    <h2>Vous avez obtenu une nouvelle carte !</h2>
    <div class="card-details">
      <img :src="`${CardObtain.image}/low.png`" alt="Card Image" class="card-image">
      <div class="card-info">
        <p class="card-name">{{ CardObtain.name }}</p>
      </div>
    </div>
  </div>
</template>






<style scoped>
#booster-list {
  display: flex;
  justify-content: space-evenly;
  align-items: center; /* Centrer les images verticalement */
  width: 100%;
  height: 50%; /* Hauteur de la section ajustÃ©e pour mieux centrer les images */
  margin: 0;
  padding: 0;
}

.booster-image {

  height: 400px; /* Hauteur des images */
  cursor: pointer;
  border-radius: 8px; /* Bordures arrondies pour les images */
  transition: transform 0.3s ease; /* Transition fluide pour l'effet hover */
}

.booster-image:hover {
  transform: scale(1.1); /* Agrandir l'image lÃ©gÃ¨rement au survol */
}


/* Style pour la carte obtenue */
.obtained-card {
  text-align: center;
  margin-top: 30px;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 30px auto;
}

.card-details {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image {
  width: 100px;
  height: 140px;
  border-radius: 8px;
  margin-right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-info {
  text-align: left;
  max-width: 150px;
}

.card-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  font-size: 1rem;
  color: #555;
}


.card-message span {
  font-weight: bolder;
}
</style>
