<script setup>

import {ref} from "vue";
import DeckService from "@/services/DeckService.js";

const nameDeck = ref()
const nameError = ref(false)
const services = new DeckService()

function submitForm(event){

  validNameDeck()

  console.log(nameError.value)
  console.log(nameDeck.value)

  const newDeck = {
    name: nameDeck.value,
    idUser: Math.floor(Math.random()*(11-0)+0)
  }

  services.createOneDeck(newDeck)
}

function validNameDeck(){
  nameError.value = !nameDeck.value
}

</script>

<template>

  <form @submit.prevent="submitForm">
    <input type="text" v-model="nameDeck" @blur="validNameDeck" placeholder="name" :class="{error: nameError}" >
    <input type="submit" :disabled="nameError" value="Add" />
  </form>

</template>

<style scoped>

.error {
  border: 2px solid red;
}

</style>