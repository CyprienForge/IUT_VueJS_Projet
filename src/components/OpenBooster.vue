<script setup>

import BoosterService from "@/services/BoosterService.js";
import {onMounted, ref} from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";
import CardService from "@/services/CardService.js";

const boosterService = new BoosterService()
const cardService = new CardService()
const localStorageService = new LocalStorageService()
const boosters = ref()

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
  console.log("Booster ouvert ====> " + card)
}

</script>

<template>
  <h1>
    Open a Booster
  </h1>

  <div v-if="boosters">
    <ul v-for="booster in boosters" :key="booster.id">
      <li @click="storage(booster.id)" style="cursor: pointer">
        {{ booster.name }}
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>