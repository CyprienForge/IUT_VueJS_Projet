<script setup>

import {ref} from "vue";

const nameDeck = ref()

function submitForm(event){
  console.log(nameDeck.value)
}

</script>

<template>

  <form @submit.prevent="submitForm">
    <input type="text" v-model="nameDeck">
    <input type="submit" value="Add" />
  </form>

</template>

<style scoped>

</style>