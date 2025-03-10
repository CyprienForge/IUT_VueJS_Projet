<script setup>

import {ref} from "vue";

const nameDeck = ref()
const nameError = ref(false)

function submitForm(event){

  validNameDeck()

  console.log(nameError.value)
  console.log(nameDeck.value)
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