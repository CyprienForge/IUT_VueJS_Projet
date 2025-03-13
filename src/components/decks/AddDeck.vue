<script setup>

import {ref} from "vue";
import DeckService from "@/services/DeckService.js";

const nameDeck = ref()
const nameError = ref(false)
const services = new DeckService()

async function submitForm(event){

  const isValid = validNameDeck()
  if(!isValid) return

  const newDeck = {
    name: nameDeck.value,
    idUser: Math.floor(Math.random()*(11-0)+0)
  }

  await services.createOneDeck(newDeck)
  location.reload('/deck');
}

function validNameDeck(){
  nameError.value = !nameDeck.value

  if(nameDeck.value === undefined || nameDeck.value === ''){
    return false;
  }
  return true;
}

</script>

<template>

  <form @submit.prevent="submitForm">
    <input type="text" v-model="nameDeck" @blur="validNameDeck" placeholder="name" :class="{error: nameError}" >
    <input type="submit" value="Add" />
  </form>

</template>

<style scoped>

form{
  margin-top: 2%;
  display: flex;
  justify-content: center;
}

form select{
  width: 5%;
}

.error {
  border: 2px solid red;
}

</style>