<script setup>

import {ref} from "vue";

const numberPokemons = ref()
const emit = defineEmits(['submitNumberPokemons'])

async function changeNumberPokemons(event){

  if(numberPokemons.value === undefined){
    return
  }

  emit('submitNumberPokemons', numberPokemons.value)
}

</script>

<template>

  <form @submit.prevent="changeNumberPokemons">
    <select name="deckName" v-model="numberPokemons">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
    </select>
    <input type="submit" value="Modifier" />
  </form>

</template>

<style scoped>

form{
  display: flex;
  justify-content: center;
}

form select{
  width: 5%;
}

</style>