<script setup>

import BoosterService from "@/services/BoosterService.js";
import {onMounted, ref} from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";

const boosterService = new BoosterService()
const localStorageService = new LocalStorageService()
const boosters = ref()

onMounted(async() => {
  boosters.value = await boosterService.getAllBoosters()
  console.log(boosters.value)
})

function storage() {
  const id = Math.floor(Math.random() * 5); // Génère un index entre 0 et 4

  console.log(boosters.value[id]); // Accède à l'élément correctement
}

</script>

<template>
  <h1>
    Open a Booster
  </h1>

  <div v-if="boosters">
    <ul v-for="booster in boosters" :key="booster.id">
      <li @click="storage" style="cursor: pointer">
        {{ booster.name }}
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>