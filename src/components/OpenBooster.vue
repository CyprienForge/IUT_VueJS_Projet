<script setup>

import BoosterService from "@/services/BoosterService.js";
import {onMounted, ref} from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";
import CardService from "@/services/CardService.js";

const boosterService = new BoosterService()
const cardService = new CardService()
const localStorageService = new LocalStorageService()
const boosters = ref()
const nameCardObtain = ref()

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
  nameCardObtain.value = card.name
}

</script>

<template>
  <h1>
    Open a Booster
  </h1>

  <h3 v-if="nameCardObtain">
    Féliciations vous avez obtenu : <span>{{ nameCardObtain }}</span> !
  </h3>

  <div v-if="boosters">
    <ul v-for="booster in boosters" :key="booster.id">
      <li @click="storage(booster.id)" style="cursor: pointer">
        {{ booster.name }}
      </li>
    </ul>
  </div>

</template>

<style scoped>

span{
  font-weight: bolder;
}

</style>