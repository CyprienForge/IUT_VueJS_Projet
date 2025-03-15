<script setup>
import { ref } from "vue";
import DeckService from "@/services/DeckService.js";

const nameDeck = ref('');
const nameError = ref(false);
const services = new DeckService();

async function submitForm(event) {
  const isValid = validNameDeck();
  if (!isValid) return;

  const newDeck = {
    name: nameDeck.value,
    idUser: Math.floor(Math.random() * (11 - 0) + 0),
  };

  await services.createOneDeck(newDeck);
  // Redirection après ajout d'un deck
  location.reload();
}

function validNameDeck() {
  nameError.value = !nameDeck.value;

  if (nameDeck.value === undefined || nameDeck.value === '') {
    return false;
  }
  return true;
}
</script>

<template>
  <div class="add-deck-container">

    <form @submit.prevent="submitForm" class="add-deck-form">
      <div class="input-group">
        <input
            type="text"
            id="deck-name"
            v-model="nameDeck"
            @blur="validNameDeck"
            placeholder="Enter deck name"
            :class="{ 'input-error': nameError }"
            class="input-field"
        />
        <p v-if="nameError" class="error-message">Deck name is required!</p>
      </div>

      <button type="submit" class="submit-button">Add Deck</button>
    </form>
  </div>
</template>

<style scoped>
/* Container principal */
.add-deck-container {
  background-color: #ffffff;
  padding: 3rem 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  margin-top: 2rem;
}


/* Formulaire */
.add-deck-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Groupes de champs */
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Étiquettes des champs */
.input-label {
  font-size: 1.1em;
  color: #555;
}

/* Champs de saisie (input et textarea) */
.input-field {
  padding: 0.75rem;
  font-size: 1.1em;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.3s;
}

.input-field:focus {
  outline: none;
  border-color: #f06;
}

/* Message d'erreur */
.input-error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 1em;
  margin-top: -0.5rem;
  text-align: left;
  font-weight: bold;
}

/* Bouton de soumission */
.submit-button {
  padding: 0.8rem;
  font-size: 1.2em;
  color: white;
  background-color: #f06;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #e05b5b;
}

.submit-button:active {
  background-color: #d04a4a;
}
</style>
