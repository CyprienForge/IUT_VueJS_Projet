<script setup>

import CardService from "@/services/CardService.js";
import {ref} from "vue";

const cardService = new CardService()
const cards = ref([])

function swap(){

  cards.value = cardService.getAll()

}

</script>

<template>

  <button @click="swap">
    <p>
      Swap
    </p>
  </button>

</template>

<style scoped>

</style>