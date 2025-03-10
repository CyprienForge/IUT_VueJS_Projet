<script setup>
import Navbar from "@/components/Navbar.vue";

import {onMounted, ref} from "vue";
import CardService from "@/services/CardService.js";

const cardsCollection = ref()

const service = new CardService()
const cards = async () => {
  cardsCollection.value = await service.getAllCards()
  console.log(cardsCollection.value)
}

cards()

</script>

<template>

  <Navbar/>

  <RouterView :allCards="cardsCollection" />
</template>

<style scoped>
</style>
