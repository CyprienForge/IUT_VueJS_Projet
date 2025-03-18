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

  <div class="change-number-container">
    <form @submit.prevent="changeNumberPokemons" class="change-number-form">
      <label for="numberPokemons" class="form-label">Nombre de cartes par page:</label>
      <select id="numberPokemons" v-model="numberPokemons" class="select-input">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <button type="submit" class="submit-button">Modifier</button>
    </form>
  </div>

</template>

<style scoped>

.change-number-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.change-number-form {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-label {
  font-size: 1rem;
  color: #333;
}

.select-input {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline: none;
  transition: border-color 0.3s ease;
}

.select-input:focus {
  border-color: #007BFF;
}

.submit-button {
  padding: 0.5rem 1rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.submit-button:focus {
  outline: none;
}

</style>